import { useContext, useMemo } from 'react';
import { AuthContext } from '../../../routing-module/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Alert = () => {
  const { profileData } = useContext(AuthContext);
  const navigate = useNavigate();
  const { isProfileLoaded } = useContext(AuthContext);
  
  const { completionPercentage, missingItems } = useMemo(() => {
    if (!profileData) {
      return { completionPercentage: 0, missingItems: ['education', 'experience', 'skills'] };
    }

    const hasEducation = profileData.education.length >= 1;
    const hasExperience = profileData.experience.length >= 1;
    const hasEnoughSkills = profileData.skills.length >= 10;

    let percentage = 0;
    if (hasEducation) percentage += 33.33;
    if (hasExperience) percentage += 33.33;
    if (hasEnoughSkills) percentage += 33.34;

    const missing = [];
    if (!hasEducation) missing.push('at least 1 education entry');
    if (!hasExperience) missing.push('at least 1 work experience');
    if (!hasEnoughSkills) missing.push(`${10 - profileData.skills.length} more skills`);

    return {
      completionPercentage: Math.round(percentage),
      missingItems: missing
    };
  }, [profileData]);

  // Return null if profile is not loaded or is 100% complete
  if (!isProfileLoaded || completionPercentage === 100) {
    return null;
  }

  const formatMissingItems = (items: string[]): string => {
    if (items.length === 0) return '';
    if (items.length === 1) return items[0];
    if (items.length === 2) return `${items[0]} and ${items[1]}`;
    return `${items.slice(0, -1).join(', ')}, and ${items[items.length - 1]}`;
  };

  const handleViewMore = () => {
    navigate('/profile');
  };

  return (
    <div role="alert" style={{
      boxSizing: 'border-box',
      marginBottom: '16px',
      borderRadius: '8px',
      backgroundColor: '#fffbeb',
      padding: '16px',
      color: '#92400e',
      lineHeight: '24px',
      border: '0.8px solid #fcd34d',
    }}>
      <div style={{
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
      }}>
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="currentColor" viewBox="0 0 24 24" style={{
          boxSizing: 'border-box',
          display: 'block',
          verticalAlign: 'middle',
          marginInlineEnd: '8px',
          height: '20px',
          width: '20px',
          flexShrink: '0',
        }}>
          <path fillRule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm13.707-1.293a1 1 0 0 0-1.414-1.414L11 12.586l-1.793-1.793a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4-4Z" clipRule="evenodd" style={{
            boxSizing: 'border-box',
          }} />
        </svg>
        <span style={{
          boxSizing: 'border-box',
          clip: 'rect(0px, 0px, 0px, 0px)',
          height: '1px',
          margin: '-1px',
          overflow: 'hidden',
          position: 'absolute',
          whiteSpace: 'nowrap',
          width: '1px',
        }}>Warning</span>
        <h2 style={{
          boxSizing: 'border-box',
          fontSize: '18px',
          fontWeight: '500',
          margin: '0px',
          lineHeight: '28px',
        }}>Profile {completionPercentage}% Complete</h2>
      </div>
      <div style={{
        boxSizing: 'border-box',
        marginTop: '8px',
        fontSize: '14px',
        lineHeight: '20px',
      }}>
        Complete your profile to increase your chances of getting hired. You need {formatMissingItems(missingItems)} to achieve 100% completion.
      </div>
      <div style={{
        boxSizing: 'border-box',
        display: 'flex',
        gap: '8px',
        marginTop: '16px',
      }}>
        <button 
          onClick={handleViewMore}
          style={{
            boxSizing: 'border-box',
            backgroundColor: '#92400e',
            border: 'none',
            borderRadius: '4px',
            padding: '8px 16px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            color: 'white',
          }}>Complete Profile</button>
      </div>
    </div>
  );
};

export default Alert;