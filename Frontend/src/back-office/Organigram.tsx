import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tree, TreeNode } from 'react-organizational-chart';

// Define the User interface with image
interface User {
  email: string;
  role: 'ADMIN' | 'HR-MANAGER' | 'DEPARTMENT-MANAGER' | 'TEAM-LEAD';
  image?: string; // Optional image field (URL or base64)
}

// Define the Node structure
interface OrgNode {
  name: string;
  role: string;
  image?: string;
  children: OrgNode[];
}

const OrgChart: React.FC = () => {
  const [orgData, setOrgData] = useState<OrgNode | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [expandedNodes, setExpandedNodes] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.BACKEND_URL}/api/user/usersList`, {
          params: { fields: 'email,role,image' }
        });
        const users: User[] = response.data;
        console.log('Fetched users:', users);

        // Create root node
        const root: OrgNode = { name: 'Organization', role: 'ROOT', children: [] };

        // Helper function to create a node
        const createNode = (user: User): OrgNode => ({
          name: user.email,
          role: user.role === 'ADMIN' ? 'Admin' :
                user.role === 'HR-MANAGER' ? 'HR Manager' :
                user.role === 'DEPARTMENT-MANAGER' ? 'Department Manager' :
                'Team Leader',
          image: user.image,
          children: [],
        });

        // Deep copy function to avoid shared references
        const deepCopy = (obj: OrgNode): OrgNode => ({
          ...obj,
          children: obj.children.map(child => deepCopy(child))
        });

        // Group users by role
        const hierarchy = {
          ADMIN: users.filter(u => u.role === 'ADMIN'),
          'HR-MANAGER': users.filter(u => u.role === 'HR-MANAGER'),
          'DEPARTMENT-MANAGER': users.filter(u => u.role === 'DEPARTMENT-MANAGER'),
          'TEAM-LEAD': users.filter(u => u.role === 'TEAM-LEAD'),
        };

        // Build tree hierarchically
        if (hierarchy.ADMIN.length > 0) {
          root.children = hierarchy.ADMIN.map(createNode);
        }

        let hrNodes: OrgNode[] = [];
        if (hierarchy['HR-MANAGER'].length > 0) {
          const hrManagers = hierarchy['HR-MANAGER'].map(createNode);
          if (root.children.length > 0) {
            root.children[0].children = hrManagers;
          } else {
            root.children = hrManagers;
          }
          hrNodes = hrManagers;
        } else {
          hrNodes = root.children;
        }

        if (hierarchy['DEPARTMENT-MANAGER'].length > 0) {
          const departmentManagersTemplate = hierarchy['DEPARTMENT-MANAGER'].map(createNode);
          if (hrNodes.length > 0) {
            hrNodes.forEach(hr => {
              // Create a deep copy of departmentManagers for each HR Manager
              hr.children = departmentManagersTemplate.map(dept => deepCopy(dept));
            });
          } else {
            root.children = departmentManagersTemplate;
          }
        }

        if (hierarchy['TEAM-LEAD'].length > 0) {
          const teamLeads = hierarchy['TEAM-LEAD'].map(createNode);
          // Collect all Department Managers across all HR Managers
          const allDeptNodes: OrgNode[] = [];
          hrNodes.forEach(hr => {
            if (hr.children.length > 0) {
              allDeptNodes.push(...hr.children);
            }
          });

          if (allDeptNodes.length > 0) {
            // Distribute Team Leads across all Department Managers uniquely
            teamLeads.forEach((teamLead, index) => {
              const deptIndex = index % allDeptNodes.length;
              allDeptNodes[deptIndex].children.push(teamLead);
            });
          } else {
            // Fallback if no Department Managers
            if (hrNodes.length > 0) {
              hrNodes.forEach(hr => {
                hr.children = teamLeads;
              });
            }
          }
        }

        console.log('Final tree:', root);
        setOrgData(root);
      } catch (err) {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users. Please check if the API is running.');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Toggle node expansion
  const toggleNode = (nodeName: string) => {
    setExpandedNodes(prev => ({
      ...prev,
      [nodeName]: !prev[nodeName],
    }));
  };

  if (loading) return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
  if (error) return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-danger fs-4">
      Error: {error}
    </div>
  );
  if (!orgData) return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light text-muted fs-4">
      No data available
    </div>
  );

  // Render tree node with image or "No Image Yet"
  const renderTreeNode = (node: OrgNode) => {
    const isExpanded = expandedNodes[node.name] !== false;
    return (
      <TreeNode
        label={
          <div
            className={`node ${node.role.toLowerCase().replace(' ', '-')}`}
            onClick={() => node.children.length > 0 && toggleNode(node.name)}
            title={`Email: ${node.name}`}
          >
            <div className="node-image">
              {node.image ? (
                <img
                  src={node.image}
                  alt={`${node.name}'s profile`}
                  onError={(e) => {
                    const img = e.currentTarget as HTMLElement;
                    const noImageDiv = e.currentTarget.nextElementSibling as HTMLElement;
                    img.style.display = 'none';
                    noImageDiv.style.display = 'flex';
                  }}
                />
              ) : null}
              <div className="no-image" style={{ display: node.image ? 'none' : 'flex' }}>
                No Image Yet
              </div>
            </div>
            <div className="node-title">{node.name}</div>
            <div className="node-role">{node.role}</div>
            {node.children.length > 0 && (
              <i className={`toggle-icon fas fa-${isExpanded ? 'minus' : 'plus'}-circle`}></i>
            )}
          </div>
        }
      >
        {isExpanded && node.children.map((child, index) => (
          <React.Fragment key={index}>{renderTreeNode(child)}</React.Fragment>
        ))}
      </TreeNode>
    );
  };

  return (
    <div className="min-vh-100 py-5 px-3 px-md-5 bg-light">
      <h1 className="text-center display-5 fw-bold text-dark mb-5">Organizational Chart</h1>
      <div className="chart-container">
        <Tree
          lineWidth="3px"
          lineColor="#6B7280"
          lineBorderRadius="12px"
          label={
            <div className="node root">
              <div className="node-title">{orgData.name}</div>
              <div className="node-role">{orgData.role}</div>
              {orgData.children.length > 0 && (
                <i
                  className={`toggle-icon fas fa-${expandedNodes[orgData.name] !== false ? 'minus' : 'plus'}-circle`}
                  onClick={() => toggleNode(orgData.name)}
                ></i>
              )}
            </div>
          }
        >
          {orgData.children.map((child, index) => (
            <React.Fragment key={index}>{renderTreeNode(child)}</React.Fragment>
          ))}
        </Tree>
      </div>
    </div>
  );
};

export default OrgChart;

// Inline CSS for premium design
const styles = `
  .chart-container {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    backdrop-filter: blur(10px);
    padding: 2rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    margin: 2rem auto;
    max-width: 95%;
  }
  .node {
    background: rgba(255, 255, 255, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 15px;
    padding: 1.5rem;
    transition: all 0.3s ease;
    cursor: pointer;
    min-width: 200px;
    text-align: center;
    position: relative;
  }
  .node:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.3);
  }
  .node.admin { background: linear-gradient(45deg, #4b6cb7, #182848); color: white; }
  .node.hr-manager { background: linear-gradient(45deg, #34c759, #1a9850); color: white; }
  .node.department-manager { background: linear-gradient(45deg, #ffb75e, #ed8f03); color: #1a1a1a; }
  .node.team-leader { background: linear-gradient(45deg, #ff6b6b, #c0392b); color: white; }
  .node.root { background: linear-gradient(45deg, #6b7280, #374151); color: white; }
  .node-image {
    margin-bottom: 0.75rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .node-image img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid rgba(255, 255, 255, 0.5);
  }
  .no-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    border: 2px solid rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.7rem;
    font-weight: 500;
    text-align: center;
    color: inherit;
    opacity: 0.8;
  }
  .node-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .node-role {
    font-size: 0.85rem;
    opacity: 0.9;
  }
  .toggle-icon {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 0.9rem;
    opacity: 0.7;
    transition: opacity 0.3s ease;
  }
  .toggle-icon:hover {
    opacity: 1;
  }
  .tree-line {
    stroke: #6B7280 !important;
    stroke-width: 3px !important;
    border-radius: 10px !important;
  }
  @media (max-width: 768px) {
    .node { min-width: 160px; padding: 1rem; }
    .node-image img, .no-image { width: 40px; height: 40px; }
    .no-image { font-size: 0.6rem; }
    .node-title { font-size: 1rem; }
    .node-role { font-size: 0.75rem; }
    .chart-container { padding: 1rem; }
  }
`;

// Inject styles
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);