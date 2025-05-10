import React, { useState, useEffect } from 'react';
import { all_routes } from '../../../routing-module/router/all_routes';
import { Link, useNavigate } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import './style.css'; // Import the CSS file for custom styles

const EmployeeList = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingEmployee, setEditingEmployee] = useState<any | null>(null);

  const departments = ['ELECTROMECANIQUE', 'GENIE-CIVIL', 'TIC'];
  const roles = ['DEPARTMENT-MANAGER', 'HR-MANAGER', 'EMPLOYEE'];
  const privileges = ['JOB-POSTING', 'REGULAR'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user/usersList');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        if (Array.isArray(result)) {
          // Ensure each row has a unique "id" field
          const formattedData = result.map(user => ({
            id: user.id, // Make sure you're using the correct property here
            ...user,
          }));
          setData(formattedData);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error:any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, []);


  const handleDeleteClick = (employeeId: string) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
      handleDeleteConfirm(employeeId);
    }
  };

  const handleDeleteConfirm = async (employeeId: string) => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/user/delete/${employeeId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setData(prevData => prevData.filter(employee => employee._id !== employeeId));
        navigate('/employees');
      } else {
        throw new Error('Failed to delete employee');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (employee: any) => {
    setEditingEmployee(employee);
  };

  const handleEditSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editingEmployee) return;

    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/user/update/${editingEmployee.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingEmployee),
      });

      if (response.ok) {
        
          // Refresh the page
            window.location.reload();
      } else {
        throw new Error('Failed to update employee');
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditingEmployee({ ...editingEmployee, image: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    }
  };

  const columns = [
    {
      field: 'image',
      headerName: 'Image',
      width: 150,
      renderCell: (params: any) => (
        <img
          src={params.value}
          alt="Employee"
          style={{ width: '40px', height: '40px', borderRadius: '50%' }}
        />
      ),
    },
    {
      field: 'firstName',
      headerName: 'First Name',
      width: 150,
      renderCell: (params: any) => (
        <Link to={all_routes.employeedetails}>{params.value}</Link>
      ),
    },
    { field: 'lastName', headerName: 'Last Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 230 },
    { field: 'phoneNumber', headerName: 'Phone', width: 160 },
    { field: 'role', headerName: 'Role', width: 200 },
    { field: 'department', headerName: 'Department', width: 200 },
   
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      renderCell: (params: any) => (
        <div className="action-icon d-inline-flex">
          <Link to="#" className="me-2" onClick={() => handleEditClick(params.row)}>
            <i className="ti ti-edit" />
          </Link>
          <Link to="#" onClick={() => handleDeleteClick(params.row.id)}>
            <i className="ti ti-trash" />
          </Link>
        </div>
      ),
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
          <div className="my-auto mb-2">
            <h2 className="mb-1">Employee</h2>
            <nav>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to={all_routes.adminDashboard}>
                    <i className="ti ti-smart-home" />
                  </Link>
                </li>
                <li className="breadcrumb-item">Employee</li>
                <li className="breadcrumb-item active" aria-current="page">
                  Employee List
                </li>
              </ol>
            </nav>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <div style={{ height: 800, width: '100%' }}>
            <DataGrid
  rows={data}
  columns={columns}
  loading={loading}
 
/>
            </div>
          </div>
        </div>

        {/* Edit Employee Form */}
        {editingEmployee && (
          <div className="edit-form">
            <h3>Edit Employee</h3>
            <form onSubmit={handleEditSubmit}>
              <div className="form-group">
                <label>Image:</label>
                <div className="image-preview">
                  {editingEmployee.image && (
                    <img src={editingEmployee.image} alt="Employee" className="preview-image" />
                  )}
                  <input type="file" accept="image/*" onChange={handleImageChange} className="form-control" />
                </div>
              </div>
              <div className="form-group">
                <label>First Name:</label>
                <input
                  type="text"
                  value={editingEmployee.firstName}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, firstName: e.target.value })}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Last Name:</label>
                <input
                  type="text"
                  value={editingEmployee.lastName}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, lastName: e.target.value })}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Email:</label>
                <input
                  type="email"
                  value={editingEmployee.email}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, email: e.target.value })}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={editingEmployee.phoneNumber}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, phoneNumber: e.target.value })}
                  required
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label>Role:</label>
                <select
                  value={editingEmployee.role}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, role: e.target.value })}
                  required
                  className="form-control"
                >
                  {roles.map(role => (
                    <option key={role} value={role}>{role}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Department:</label>
                <select
                  value={editingEmployee.department}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, department: e.target.value })}
                  required
                  className="form-control"
                >
                  {departments.map(department => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>
              <div className="form-group">
                <label>Privilege:</label>
                <select
                  value={editingEmployee.privilege}
                  onChange={(e) => setEditingEmployee({ ...editingEmployee, privilege: e.target.value })}
                  required
                  className="form-control"
                >
                  {privileges.map(privilege => (
                    <option key={privilege} value={privilege}>{privilege}</option>
                  ))}
                </select>
              </div>
              <div className="form-actions">
                <button type="submit" className="btn btn-primary">Update Employee</button>
                <button type="button" onClick={() => setEditingEmployee(null)} className="btn btn-secondary">Cancel</button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;