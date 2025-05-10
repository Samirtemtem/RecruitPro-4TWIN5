import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { all_routes } from '../../../routing-module/router/all_routes';
import { Table } from "antd";

// Define the interface for request data
interface RequestData {
  _id: string;
  department_Manager: {
    id?:string;
    firstName?: string;
    lastName?: string;
    email?: string; // Added email field
  } | null;
  position: string;
  department: string;
  importance: string;
  quantity: number;
  description: string;
  requirements: string[];
  experience: number;
  jobPostCreated: boolean;
  status: string;
  createdAt: string;
  updatedAt: string;
  typeContrat?: "PERMANENT" | "VACATAIRE"; // Added optional typeContrat
}

const RequestList: React.FC = () => {
  const [data, setData] = useState<RequestData[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [filteredDataSource, setFilteredDataSource] = useState<RequestData[]>([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/request/');
        const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
        setData(fetchedData);
        setFilteredDataSource(fetchedData); // Initialize filtered data
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
  
    // Sort to bring jobPostCreated = false to the top
    const sortedData = filteredData.sort((a, b) => Number(a.jobPostCreated) - Number(b.jobPostCreated));
    setFilteredDataSource(sortedData);
  }, [data, searchText]);

  // Define columns for the table
  const columns = [
    {
      title: "Department Manager",
      dataIndex: "department_Manager",
      render: (manager: { firstName?: string; lastName?: string; email?: string; id?: string } | null, record: RequestData) => {
        const firstName = manager?.firstName || "Unknown";
        const lastName = manager?.lastName || "Manager";
        return (
          <Link to={`/manager-detail/${record.department_Manager?.id}`}>
            {firstName} {lastName}
          </Link>
        );
      },
      sorter: (a: RequestData, b: RequestData) =>
        (a.department_Manager?.firstName || "").localeCompare(b.department_Manager?.firstName || ""),
    },
    {
      title: "Email",
      dataIndex: "department_Manager",
      render: (manager: { email?: string } | null) => manager?.email || "N/A",
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
      title: "Type Contrat",
      dataIndex: "typeContrat",
      render: (text: "PERMANENT" | "VACATAIRE" | undefined) => (
        <span className={`badge ${text === 'PERMANENT' ? 'badge-success' : text === 'VACATAIRE' ? 'badge-info' : 'badge-secondary'}`}>
          {text ? (text === 'PERMANENT' ? 'Permanent' : 'Vacataire') : 'No type mentioned'}
        </span>
      ),
      sorter: (a: RequestData, b: RequestData) => {
        const aValue = a.typeContrat || "No type mentioned";
        const bValue = b.typeContrat || "No type mentioned";
        return aValue.localeCompare(bValue);
      },
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
      title: "Created At",
      dataIndex: "createdAt",
      render: (text: string) => new Date(text).toISOString().slice(0, 10),
      sorter: (a: RequestData, b: RequestData) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      render: (_ : any, record: RequestData) => (
        <div className="d-inline-flex">
          <Link to={`/request-Detail/${record._id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      ),
    },
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="content">
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
                rowSelection={rowSelection ? rowSelection : undefined}
                columns={columns}
                dataSource={filteredDataSource}
                rowKey="_id" // Ensure unique key for each row
              />
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2025 © RecruitPro.</p>
          <p>
            Designed & Developed By{" "}
            <Link to="#" className="text-primary">
              Infinite Loopers
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RequestList;