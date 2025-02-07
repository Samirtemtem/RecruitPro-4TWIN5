import React from "react";
import { datatable } from "../../core/data/json/datatable";
import Table from "../../core/common/dataTable/index";
import { TableData } from "../../core/data/interface";
const DataTable = () => {
  const data = datatable;
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: (a: TableData, b: TableData) =>
        a.name.length - b.name.length,
    },
    {
      title: "Position",
      dataIndex: "position",
      sorter: (a: TableData, b: TableData) =>
        a.position.length - b.position.length,
    },
    {
      title: "Office",
      dataIndex: "office",
      sorter: (a: TableData, b: TableData) =>
        a.office.length - b.office.length,
    },
    {
      title: "Age",
      dataIndex: "age",
      sorter: (a: TableData, b: TableData) =>
        a.age.length - b.age.length,
    },
    {
      title: "Start date",
      dataIndex: "startDate",
      sorter: (a: TableData, b: TableData) =>
        a.startDate.length - b.startDate.length,
    },
    {
      title: "Salary",
      dataIndex: "salary",
      sorter: (a: TableData, b: TableData) =>
        a.salary.length - b.salary.length,
    },
    
  ];
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col">
              <h3 className="page-title">Data Tables</h3>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Default Datatable</h4>
                <p className="card-text">
                  This is the most basic example of the datatables 
                </p>
              </div>
              <div className="card-body">
              <Table dataSource={data} columns={columns} Selection={true}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
