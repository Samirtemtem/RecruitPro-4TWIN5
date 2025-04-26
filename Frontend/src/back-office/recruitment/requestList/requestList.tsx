import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { all_routes } from '../../../routing-module/router/all_routes';
import { Table } from "antd"; // Importing Table from antd

// Define the interface for request data
interface RequestData {
  _id: string;
  department_Manager: {
    firstName?: string; // Allow firstName to be optional
    lastName?: string;  // Allow lastName to be optional
  } | null; // Allow department_Manager to be null
  position: string;
  department: string;
  importance: string;
  quantity: number;
  description: string;
  requirements: string[];
  experience: number;
  jobPostCreated: boolean; // Add jobPostCreated field
  status: string;
  createdAt: string;
  updatedAt: string;
}

const RequestList: React.FC = () => {
  const [data, setData] = useState<RequestData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredDataSource, setFilteredDataSource] = useState<RequestData[]>(data);
  const [Selections, setSelections] = useState<boolean>(true);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/request/');
        setData(Array.isArray(response.data) ? response.data : [response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Update filtered data whenever data or search text changes
  useEffect(() => {
    const filteredData = data.filter((record) =>
      Object.values(record).some((field) =>
        String(field).toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredDataSource(filteredData);
  }, [data, searchText]);

  // Define columns for the table
  const columns = [
    {
      title: "Department Manager",
      dataIndex: "department_Manager",
      render: (manager: { firstName?: string; lastName?: string } | null) => {
        const firstName = manager?.firstName || "Unknown";
        const lastName = manager?.lastName || "Manager";
        return <span>{firstName} {lastName}</span>;
      },
      sorter: (a: RequestData, b: RequestData) =>
        (a.department_Manager?.firstName || "").localeCompare(b.department_Manager?.firstName || ""),
    },
    {
      title: "Position",
      dataIndex: "position",
      render: (text: string) => <h6 className="fw-medium">{text}</h6>,
      sorter: (a: RequestData, b: RequestData) => a.position.localeCompare(b.position),
    },
    {
      title: "Department",
      dataIndex: "department",
      render: (text: string) => <span>{text}</span>,
      sorter: (a: RequestData, b: RequestData) => a.department.localeCompare(b.department),
    },
    {
      title: "Importance",
      dataIndex: "importance",
      render: (text: string) => (
        <span className={`badge ${text === 'HIGH' ? 'badge-danger' : text === 'MEDIUM' ? 'badge-warning' : 'badge-success'}`}>
          {text}
        </span>
      ),
      sorter: (a: RequestData, b: RequestData) => a.importance.localeCompare(b.importance),
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      render: (text: number) => <span>{text}</span>,
      sorter: (a: RequestData, b: RequestData) => a.quantity - b.quantity,
    },
    {
      title: "Job Post Created",
      dataIndex: "jobPostCreated",
      render: (text: boolean) => (
        <span className={text ? 'badge badge-success' : 'badge badge-danger'}>
          {text ? 'Yes' : 'No'}
        </span>
      ),
      sorter: (a: RequestData, b: RequestData) => Number(a.jobPostCreated) - Number(b.jobPostCreated),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_, record: RequestData) => (
        <div className="d-inline-flex">
          <Link to={`/request-Detail/${record._id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: any[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Requests</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Requests
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Request list */}
          <div className="card">
            <div className="card-header d-flex align-items-center justify-content-between flex-wrap">
              <h5>Request List</h5>
              <div className="dataTables_filter text-end mb-0">
                <label>
                  <input
                    type="search"
                    className="form-control form-control-sm"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </label>
              </div>
            </div>
            <div className="card-body p-0">
              <Table
                className="table datanew dataTable no-footer"
                rowSelection={Selections ? rowSelection : undefined}
                columns={columns}
                dataSource={filteredDataSource}
              />
            </div>
          </div>
          {/* / Request list */}
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default RequestList;