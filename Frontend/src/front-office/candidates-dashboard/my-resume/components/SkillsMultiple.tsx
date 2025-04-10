import React, { useState, FormEvent, ChangeEvent, useEffect } from 'react';
import { useUserProfile } from '../../hooks/useUserProfile';
import SkillsMultipleModal from './SkillsMultipleModal';
import { toast } from 'react-hot-toast';
import './Modal.css';

interface ISkill {
  _id?: string;
  name: string;
  degree: string;
}

interface SkillIconCache {
  [key: string]: {
    url: string;
    timestamp: number;
  };
}

const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
const DEFAULT_ICON = '/images/icons/skill.png';
const SIMPLE_ICONS_CDN = 'https://cdn.simpleicons.org';
const DEVICON_CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons';
const ICONIFY_CDN = 'https://api.iconify.design';
const SVGREPO_CDN = 'https://www.svgrepo.com/download';
const MAX_RETRIES = 3;
const FAILED_ICONS_KEY = 'failedSkillIcons';

// Skill categories for generic icons
const SKILL_CATEGORIES = {
  programming: [
    'javascript', 'python', 'java', 'cpp', 'c++', 'typescript', 'php', 'ruby',
    'golang', 'rust', 'swift'
  ],
  framework: [
    'react', 'angular', 'vue', 'django', 'flask', 'spring', 'laravel',
    'express', 'next', 'nuxt'
  ],
  database: [
    'sql', 'mysql', 'postgresql', 'mongodb', 'redis', 'oracle', 'cassandra',
    'dynamodb'
  ],
  cloud: [
    'aws', 'azure', 'gcp', 'cloud', 'docker', 'kubernetes', 'terraform',
    'devops'
  ],
  design: [
    'ui', 'ux', 'figma', 'sketch', 'adobe', 'photoshop', 'illustrator',
    'design'
  ]
};

// Additional icon mappings for specific skills
const CUSTOM_ICON_MAPPINGS: { [key: string]: string[] } = {
  'sql': [
    'https://www.svgrepo.com/download/374093/sql.svg',
    'https://api.iconify.design/vscode-icons/file-type-sql.svg'
  ],
  'nosql': [
    'https://www.svgrepo.com/download/373845/mongo.svg',
    'https://api.iconify.design/logos/mongodb.svg'
  ],
  'api': [
    'https://www.svgrepo.com/download/375521/api.svg',
    'https://api.iconify.design/mdi/api.svg'
  ],
  'rest': [
    'https://www.svgrepo.com/download/375519/rest-api.svg',
    'https://api.iconify.design/eos-icons/api.svg'
  ],
  'restful': [
    'https://www.svgrepo.com/download/375519/rest-api.svg',
    'https://api.iconify.design/eos-icons/api.svg'
  ]
};

const getFailedIcons = (): Set<string> => {
  try {
    const failed = localStorage.getItem(FAILED_ICONS_KEY);
    return failed ? new Set(JSON.parse(failed)) : new Set();
  } catch {
    return new Set();
  }
};

const SkillsMultiple: React.FC = () => {
  const { userData, isLoading, error } = useUserProfile();
  const [skillItems, setSkillItems] = useState<ISkill[]>([]);
  const [skillIcons, setSkillIcons] = useState<SkillIconCache>({});
  const [showForm, setShowForm] = useState(false);
  const [currentSkill, setCurrentSkill] = useState<ISkill>({
    name: '',
    degree: 'Beginner'
  });
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);
  const [failedIcons, setFailedIcons] = useState<Set<string>>(getFailedIcons());

  // Load cached icons from localStorage on mount
  useEffect(() => {
    const cachedIcons = localStorage.getItem('skillIcons');
    if (cachedIcons) {
      const parsed = JSON.parse(cachedIcons);
      // Filter out expired cache entries
      const now = Date.now();
      const validCache = Object.entries(parsed).reduce((acc, [key, value]: [string, any]) => {
        if (now - value.timestamp < CACHE_DURATION) {
          acc[key] = value;
        }
        return acc;
      }, {} as SkillIconCache);
      setSkillIcons(validCache);
    }
  }, []);

  // Save icons to localStorage when cache updates
  useEffect(() => {
    if (Object.keys(skillIcons).length > 0) {
      localStorage.setItem('skillIcons', JSON.stringify(skillIcons));
    }
  }, [skillIcons]);

  // Load skills data and fetch icons when user data is available
  useEffect(() => {
    if (userData?.skills) {
      setSkillItems(userData.skills);
      // Fetch icons for all skills
      userData.skills.forEach(skill => {
        fetchSkillIcon(skill.name);
      });
    }
  }, [userData]);

  const getGenericIcon = (skillName: string): string => {
    const skillLower = skillName.toLowerCase();
    
    for (const [category, keywords] of Object.entries(SKILL_CATEGORIES)) {
      if (keywords.some(keyword => skillLower.includes(keyword))) {
        return `/assets/images/skills/${category}-icon.svg`;
      }
    }
    
    return DEFAULT_ICON;
  };

  const fetchSkillIcon = async (skillName: string) => {
    console.log(`\n🔍 Searching icon for skill: "${skillName}"`);
    
    // Check cache first
    if (skillIcons[skillName] && Date.now() - skillIcons[skillName].timestamp < CACHE_DURATION) {
      console.log('✅ Found in cache');
      return;
    }

    // Check if this skill icon has failed before
    if (failedIcons.has(skillName)) {
      console.log('❌ Previously failed, using generic icon');
      setSkillIcons(prev => ({
        ...prev,
        [skillName]: {
          url: getGenericIcon(skillName),
          timestamp: Date.now()
        }
      }));
      return;
    }

    try {
      // Split compound skills and try each part
      const skillParts = skillName.split(/\s*,\s*/);
      console.log('📑 Skill parts:', skillParts);
      
      // Get all possible search terms from each skill part
      const searchTerms: string[] = [];
      
      for (const part of skillParts) {
        console.log(`\n🔤 Processing part: "${part}"`);
        
        // Add full name of each part
        const cleanSkillName = part.toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        searchTerms.push(cleanSkillName);
        console.log('📝 Added clean name:', cleanSkillName);

        // Add individual words from each part
        const words = part.toLowerCase()
          .split(/[\s-.,]+/)
          .map(word => word.replace(/[^a-z0-9-]/g, ''))
          .filter(word => word.length > 1);
        console.log('📝 Individual words:', words);
        
        words.forEach(word => {
          if (!searchTerms.includes(word)) {
            searchTerms.push(word);
            console.log('📝 Added word:', word);
          }
        });

        // Add combinations of consecutive words from each part
        for (let i = 0; i < words.length - 1; i++) {
          const combinedTerm = words[i] + '-' + words[i + 1];
          if (!searchTerms.includes(combinedTerm)) {
            searchTerms.push(combinedTerm);
            console.log('📝 Added combined term:', combinedTerm);
          }
        }
      }

      console.log('\n🔍 All search terms:', searchTerms);

      // Try each search term
      for (const term of searchTerms) {
        console.log(`\n⚡ Trying term: "${term}"`);
        
        // First try custom mappings if available
        if (CUSTOM_ICON_MAPPINGS[term]) {
          console.log('📍 Found custom mapping for:', term);
          for (const customUrl of CUSTOM_ICON_MAPPINGS[term]) {
            try {
              console.log('🌐 Trying custom URL:', customUrl);
              const response = await fetch(customUrl, { method: 'HEAD' });
              if (response.ok) {
                console.log('✅ Found icon at custom URL:', customUrl);
                setSkillIcons(prev => ({
                  ...prev,
                  [skillName]: {
                    url: customUrl,
                    timestamp: Date.now()
                  }
                }));
                return;
              }
            } catch (error) {
              console.log('❌ Failed custom URL:', customUrl);
              continue;
            }
          }
        }

        // Try standard icon sources
        const iconSources = [
          `${SIMPLE_ICONS_CDN}/${term}.svg`,
          `${DEVICON_CDN}/${term}/${term}-original.svg`,
          `${DEVICON_CDN}/${term}/${term}-plain.svg`,
          `${ICONIFY_CDN}/logos/${term}.svg`,
          `${ICONIFY_CDN}/vscode-icons/file-type-${term}.svg`,
          `${ICONIFY_CDN}/mdi/${term}.svg`,
          `${SVGREPO_CDN}/373845/${term}.svg`
        ];

        for (const iconUrl of iconSources) {
          try {
            console.log('🌐 Trying URL:', iconUrl);
            const response = await fetch(iconUrl, { method: 'HEAD' });
            if (response.ok) {
              console.log('✅ Found icon at:', iconUrl);
              setSkillIcons(prev => ({
                ...prev,
                [skillName]: {
                  url: iconUrl,
                  timestamp: Date.now()
                }
              }));
              return;
            }
          } catch (error) {
            console.log('❌ Failed URL:', iconUrl);
            continue;
          }
        }
      }

      console.log('\n❌ No icon found for any term, using generic icon');
      
      // If no icon was found, mark as failed and use generic icon
      setFailedIcons(prev => {
        const newSet = new Set(prev);
        newSet.add(skillName);
        localStorage.setItem(FAILED_ICONS_KEY, JSON.stringify(Array.from(newSet)));
        return newSet;
      });

      setSkillIcons(prev => ({
        ...prev,
        [skillName]: {
          url: getGenericIcon(skillName),
          timestamp: Date.now()
        }
      }));

    } catch (error) {
      console.error(`Error fetching icon for ${skillName}:`, error);
      setSkillIcons(prev => ({
        ...prev,
        [skillName]: {
          url: DEFAULT_ICON,
          timestamp: Date.now()
        }
      }));
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentSkill({
      ...currentSkill,
      [name]: value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSaving(true);
    const loadingToast = toast.loading(editIndex !== null ? 'Updating skill...' : 'Adding skill...');
    
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const updatedSkills = editIndex !== null
        ? skillItems.map((item, index) => 
            index === editIndex ? { ...currentSkill, _id: item._id } : item
          )
        : [...skillItems, { ...currentSkill }];

      const response = await fetch('http://localhost:5000/api/profile/skills', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          userId: userData.id,
          skills: updatedSkills
        })
      });

      if (!response.ok) {
        throw new Error('Failed to save skill');
      }

      const responseData = await response.json();
      setSkillItems(responseData);
      toast.dismiss(loadingToast);
      toast.success(editIndex !== null ? 'Skill updated successfully!' : 'Skill added successfully!');
      resetForm();
    } catch (error) {
      console.error('Failed to save skill:', error);
      toast.dismiss(loadingToast);
      toast.error('Failed to save skill. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (index: number) => {
    setCurrentSkill(skillItems[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = async (index: number) => {
    try {
      if (!userData?.id) {
        throw new Error('User ID not found');
      }

      const loadingToast = toast.loading('Deleting skill...');
      const itemToDelete = skillItems[index];
      const updatedItems = skillItems.filter((_, i) => i !== index);

      const response = await fetch(`http://localhost:5000/api/profile/skills/${itemToDelete._id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId: userData.id })
      });

      if (!response.ok) {
        throw new Error('Failed to delete skill');
      }

      setSkillItems(updatedItems);
      toast.dismiss(loadingToast);
      toast.success('Skill deleted successfully!');
      
    } catch (error) {
      console.error('Failed to delete skill:', error);
      toast.error('Failed to delete skill. Please try again.');
    }
  };

  const resetForm = () => {
    setCurrentSkill({
      name: '',
      degree: 'Beginner'
    });
    setEditIndex(null);
    setShowForm(false);
  };

  const getSkillLevelColor = (degree: string): string => {
    switch (degree.toLowerCase()) {
      case 'novice': return '#FFA07A';
      case 'beginner': return '#87CEEB';
      case 'intermediate': return '#98FB98';
      case 'advanced': return '#DDA0DD';
      case 'expert': return '#FFD700';
      default: return '#87CEEB';
    }
  };

  const getSkillLevelWidth = (degree: string): string => {
    switch (degree.toLowerCase()) {
      case 'novice': return '20%';
      case 'beginner': return '40%';
      case 'intermediate': return '60%';
      case 'advanced': return '80%';
      case 'expert': return '100%';
      default: return '40%';
    }
  };

  if (isLoading) {
    return <div>Loading skills data...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="resume-outer theme-blue">
      <div className="upper-title">
        <h4>Skills</h4>
        <button 
          type="button" 
          className="add-info-btn"
          onClick={() => { resetForm(); setShowForm(true); }}
          disabled={saving}
        >
          <span className="icon flaticon-plus"></span> Add Skill
        </button>
      </div>
      
      {/* Skills Modal */}
      <SkillsMultipleModal
        show={showForm}
        onClose={resetForm}
        onSubmit={handleSubmit}
        currentSkill={currentSkill}
        handleChange={handleChange}
        saving={saving}
        editIndex={editIndex}
      />
      
      {/* Display Skill Items */}
      {skillItems.length === 0 ? (
        <p>No skills added yet. Add your first skill above.</p>
      ) : (
        <div className="skills-block">
          {skillItems.map((item, index) => (
            <div className="skill-item" key={item._id}>
              <div className="skill-header d-flex align-items-center">
                <div className="skill-icon me-3">
                  <img 
                    src={skillIcons[item.name]?.url || DEFAULT_ICON}
                    alt={item.name}
                    className="skill-icon"
                    style={{ 
                      width: '24px', 
                      height: '24px',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = DEFAULT_ICON;
                    }}
                  />
                </div>
                <h5 className="mb-0 flex-grow-1">{item.name}</h5>
                <div className="edit-btns">
                  <button 
                    type="button" 
                    onClick={() => handleEdit(index)}
                    disabled={saving}
                    className="btn btn-link p-0 me-2"
                  >
                    <span className="la la-pencil"></span>
                  </button>
                  <button 
                    type="button" 
                    onClick={() => handleDelete(index)}
                    disabled={saving}
                    className="btn btn-link p-0"
                  >
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
              <div className="skill-bar mt-2">
                <div 
                  className="bar-inner"
                  style={{ 
                    width: getSkillLevelWidth(item.degree),
                    backgroundColor: getSkillLevelColor(item.degree),
                    height: '8px',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }}
                >
                  <div className="skill-percentage">
                    <div 
                      className="count-box"
                      style={{
                        position: 'absolute',
                        right: '-40px',
                        top: '-25px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        color: '#666'
                      }}
                    >
                      {item.degree}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <style>
        {`
          .skills-block {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 20px;
            padding: 20px;
          }

          .skill-item {
            background: #fff;
            border-radius: 8px;
            padding: 15px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
            transition: transform 0.2s ease;
          }

          .skill-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          }

          .skill-header {
            margin-bottom: 10px;
          }

          .skill-bar {
            background: #f0f0f0;
            border-radius: 4px;
            height: 8px;
            position: relative;
            overflow: hidden;
          }

          .edit-btns {
            opacity: 0.5;
            transition: opacity 0.2s ease;
          }

          .skill-item:hover .edit-btns {
            opacity: 1;
          }

          .btn-link {
            color: #666;
            text-decoration: none;
          }

          .btn-link:hover {
            color: #333;
          }
        `}
      </style>
    </div>
  );
};

export default SkillsMultiple; 