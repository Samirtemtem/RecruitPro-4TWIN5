import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../../router/all_routes';
import CommonSelect from '../../../../core/common/commonSelect';
import ImageWithBasePath from '../../../../core/common/imageWithBasePath';
import { PickList } from 'primereact/picklist';
import { SelectWithImage } from '../../../../core/common/selectWithImage';
import CollapseHeader from '../../../../core/common/collapse-header/collapse-header';

const LeaveSettings = () => {

  const leavetype = [
    { value: "Select", label: "Select" },
    { value: "Medical Leave", label: "Medical Leave" },
    { value: "Casual Leave", label: "Casual Leave" },
    { value: "Annual Leave", label: "Annual Leave" },
  ];
  const addemployee = [
    { value: "Select", label: "Select" },
    { value: "Sophie", label: "Sophie" },
    { value: "Cameron", label: "Cameron" },
    { value: "Doris", label: "Doris" },
  ];
  type add_emplyoee_details = {
    key: string;
    Name: String;
  }[];
  const [source, setSource] = useState<any>([{
    key: "1",
    Name: "Bernardo Galaviz",
  },
  {
    key: "2",
    Name: "Bernardo Galaviz",
  },
  {
    key: "3",
    Name: "John Doe",
  },
  {
    key: "4",
    Name: "John Smith",
  },
  {
    key: "5",
    Name: 'Mike Litorus',
  }]);
  const [target, setTarget] = useState<any>([]);

  const onChange = (event: any) => {
    setSource(event.source);
    setTarget(event.target);
  };
  const itemTemplate = (item: any) => {
    return (
      <span className="font-bold">{item.Name}</span>
    );
  };

  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Leave Settings</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={all_routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Employee</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Leave Settings
                  </li>
                </ol>
              </nav>
            </div>
            <div className="d-flex my-xl-auto right-content align-items-center flex-wrap ">
              <div className="mb-2">
                <Link
                  to="#"
                  data-bs-toggle="modal" data-inert={true}
                  data-bs-target="#new_custom_policy"
                  className="btn btn-primary d-flex align-items-center"
                >
                  <i className="ti ti-circle-plus me-2" />
                  Add Custom Policy
                </Link>
              </div>
              <div className="head-icons ms-2">
                <CollapseHeader />
              </div>
            </div>
          </div>
          {/* /Breadcrumb */}
          {/* Leaves Info */}
          <div className="row">
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch me-1">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <h6 className="d-flex align-items-center">Annual Leave</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="text-decoration-underline me-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_custom_policy"
                    >
                      Custom Policy
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#annual_leave_settings"
                    >
                      {" "}
                      <i className="ti ti-settings" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch me-1">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                        />
                      </label>
                    </div>
                    <h6 className="d-flex align-items-center">Sick Leave</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="text-decoration-underline me-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_custom_policy"
                    >
                      Custom Policy
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#sick_leave_settings"
                    >
                      {" "}
                      <i className="ti ti-settings" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch me-1">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <h6 className="d-flex align-items-center">Hospitalisation</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="text-decoration-underline me-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_custom_policy"
                    >
                      Custom Policy
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#hospitalisation_settings"
                    >
                      <i className="ti ti-settings" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch me-1">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                          defaultChecked
                        />
                      </label>
                    </div>
                    <h6 className="d-flex align-items-center">Maternity</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="text-decoration-underline me-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_custom_policy"
                    >
                      Custom Policy
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#maternity_settings"
                    >
                      {" "}
                      <i className="ti ti-settings" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch me-1">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                        />
                      </label>
                    </div>
                    <h6 className="d-flex align-items-center">Paternity</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="text-decoration-underline me-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_custom_policy"
                    >
                      Custom Policy
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#paternity_settings"
                    >
                      {" "}
                      <i className="ti ti-settings" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="card">
                <div className="card-body d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="form-check form-check-md form-switch me-1">
                      <label className="form-check-label">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          role="switch"
                        />
                      </label>
                    </div>
                    <h6 className="d-flex align-items-center">LOP</h6>
                  </div>
                  <div className="d-flex align-items-center">
                    <Link
                      to="#"
                      className="text-decoration-underline me-2"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#add_custom_policy"
                    >
                      Custom Policy
                    </Link>
                    <Link
                      to="#"
                      data-bs-toggle="modal" data-inert={true}
                      data-bs-target="#lop_settings"
                    >
                      {" "}
                      <i className="ti ti-settings" />{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Leaves Info */}
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
      {/* New Custom Policy */}
      <div className="modal fade" id="new_custom_policy">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">New Custom Policy</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="leaves.html">
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Leave Type</label>
                      <CommonSelect
                        className='select'
                        options={leavetype}
                        defaultValue={leavetype[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Policy Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">No of Days</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Add Employee</label>
                      <SelectWithImage />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Add Leaves
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /New Custom Policy */}
      {/* Annual Leave */}
      <div className="modal fade" id="annual_leave_settings">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Annual Leave Settings</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="leaves.html">
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="settings-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="viwe-custom-policy-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#policy"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      View Custom Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="settings-info"
                  role="tabpanel"
                  aria-labelledby="settings-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">No of Days</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Carry Forward</label>
                          <div className="d-flex align-items-center">
                            <div className="form-check me-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadio"
                                id="flexRadio"
                                defaultChecked
                              />
                              <label className="form-label" htmlFor="flexRadio">
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadio"
                                id="flexRadioOne"
                              />
                              <label className="form-label" htmlFor="flexRadioOne">
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Maximum No of Days</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Earned leave</label>
                          <div className="d-flex align-items-center">
                            <div className="form-check me-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioOne"
                                id="flexRadioTwo"
                                defaultChecked
                              />
                              <label className="form-label" htmlFor="flexRadioTwo">
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioOne"
                                id="flexRadioThree"
                              />
                              <label
                                className="form-label"
                                htmlFor="flexRadioThree"
                              >
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="policy"
                  role="tabpanel"
                  aria-labelledby="viwe-custom-policy-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                                  +1
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body pb-1">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link to="#" className="">
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Annual Leave */}
      {/* Sick Leave */}
      <div className="modal fade" id="sick_leave_settings">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Sick Leave Settings</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="leaves.html">
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab6" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="settings-one-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings-one-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="viwe-custom-policy-one-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#policy-one"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      View Custom Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent6">
                <div
                  className="tab-pane fade show active"
                  id="settings-one-info"
                  role="tabpanel"
                  aria-labelledby="settings-one-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Days</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="policy-one"
                  role="tabpanel"
                  aria-labelledby="viwe-custom-policy-one-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                                  +1
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link to="#" className="">
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Sick Leave */}
      {/* Hospitalisation Leave */}
      <div className="modal fade" id="hospitalisation_settings">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Hospitalisation Settings</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="leaves.html">
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab2" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="settings-two-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings-two-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="viwe-custom-policy-two-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#policy-two"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      View Custom Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent2">
                <div
                  className="tab-pane fade show active"
                  id="settings-two-info"
                  role="tabpanel"
                  aria-labelledby="settings-two-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Days</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="policy-two"
                  role="tabpanel"
                  aria-labelledby="viwe-custom-policy-two-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                                  +1
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link to="#" className="">
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Hospitalisation Leave */}
      {/* Maternity Leave */}
      <div className="modal fade" id="maternity_settings">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Maternity Settings</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form >
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab3" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="settings-three-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings-three-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="viwe-custom-policy-three-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#policy-three"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      View Custom Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent3">
                <div
                  className="tab-pane fade show active"
                  id="settings-three-info"
                  role="tabpanel"
                  aria-labelledby="settings-three-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Days{" "}
                            <span className="text-gray">
                              (Assigned to Female only)
                            </span>{" "}
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="policy-three"
                  role="tabpanel"
                  aria-labelledby="viwe-custom-policy-three-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                                  +1
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link to="#" className="">
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Maternity Leave */}
      {/* Paternity Leave */}
      <div className="modal fade" id="paternity_settings">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Paternity Settings</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="leaves.html">
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab4" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="settings-four-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings-four-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="viwe-custom-policy-four-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#policy-four"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      View Custom Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent4">
                <div
                  className="tab-pane fade show active"
                  id="settings-four-info"
                  role="tabpanel"
                  aria-labelledby="settings-four-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Days{" "}
                            <span className="text-gray">
                              (Assigned to Male only)
                            </span>{" "}
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="policy-four"
                  role="tabpanel"
                  aria-labelledby="viwe-custom-policy-four-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                                  +1
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link to="#" className="">
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Paternity Leave */}
      {/* LOP Leave */}
      <div className="modal fade" id="lop_settings">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">LOP Settings</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form>
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab5" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="settings-five-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#settings-five-info"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Settings
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="viwe-custom-policy-five-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#policy-five"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      View Custom Policy
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent5">
                <div
                  className="tab-pane fade show active"
                  id="settings-five-info"
                  role="tabpanel"
                  aria-labelledby="settings-five-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">No of Days</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Carry Forward</label>
                          <div className="d-flex align-items-center">
                            <div className="form-check me-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadio"
                                id="flexRadio4"
                                defaultChecked
                              />
                              <label className="form-label" htmlFor="flexRadio4">
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadio"
                                id="flexRadio5"
                              />
                              <label className="form-label" htmlFor="flexRadio5">
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Maximum No of Days</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">Earned leave</label>
                          <div className="d-flex align-items-center">
                            <div className="form-check me-2">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioOne"
                                id="flexRadio6"
                                defaultChecked
                              />
                              <label className="form-label" htmlFor="flexRadio6">
                                Yes
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioOne"
                                id="flexRadio7"
                              />
                              <label className="form-label" htmlFor="flexRadio7">
                                No
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="policy-five"
                  role="tabpanel"
                  aria-labelledby="viwe-custom-policy-five-tab"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar group-counts bg-primary rounded-circle border-0 fs-10">
                                  +1
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-32.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link to="#" className="">
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-11.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-58.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="card border mb-3">
                          <div className="card-body pb-1">
                            <div className="d-flex align-items-center justify-content-between mb-3">
                              <div className="text-start">
                                <p className="mb-1">Policy Name</p>
                                <span className="text-dark fw-normal mb-0">
                                  2 Days Leave
                                </span>
                              </div>
                              <div>
                                <p className="mb-1">No Of Days</p>
                                <span className="text-dark fw-normal mb-0">2</span>
                              </div>
                              <div className="avatar-list-stacked avatar-group-sm">
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-09.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                                <span className="avatar border-0">
                                  <ImageWithBasePath
                                    src="assets/img/users/user-13.jpg"
                                    className="rounded-circle"
                                    alt="img"
                                  />
                                </span>
                              </div>
                              <div className="action-icon d-inline-flex">
                                <Link to="#" className="me-2 edit-leave-btn">
                                  <i className="ti ti-edit" />
                                </Link>
                                <Link
                                  to="#"
                                  data-bs-toggle="modal" data-inert={true}
                                  data-bs-target="#delete_modal"
                                >
                                  <i className="ti ti-trash" />
                                </Link>
                              </div>
                            </div>
                            <div className="card border edit-leave-details">
                              <div className="card-body">
                                <h6 className="border-bottom mb-3 pb-3">
                                  Edit Policy
                                </h6>
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        Policy Name{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="mb-3">
                                      <label className="form-label">
                                        No of Days{" "}
                                        <span className="text-danger"> *</span>
                                      </label>
                                      <input type="text" className="form-control" />
                                    </div>
                                  </div>
                                  <div className="col-me-12">
                                    <label className="form-label">
                                      Add Employee
                                    </label>
                                    <CommonSelect
                                      className='select'
                                      options={addemployee}
                                      defaultValue={addemployee[0]}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-outline-light border me-2"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                      Save Changes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /LOP Leave */}
      {/* Add Custom Policy Modal */}
      <div id="add_custom_policy" className="modal custom-modal fade" role="dialog">
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add Custom Policy</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Days <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" />
                </div>
                <div className="input-block mb-3 leave-duallist">
                  <label className="col-form-label">Add employee</label>
                  <div className="card">
                    <PickList dataKey="id" source={source} target={target} onChange={onChange} itemTemplate={itemTemplate} breakpoint="1280px"
                      sourceHeader="Available" targetHeader="Selected" sourceStyle={{ height: '24rem' }} targetStyle={{ height: '24rem' }} />
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Add Custom Policy Modal */}
      {/* Edit Custom Policy Modal */}
      <div
        id="edit_custom_policy"
        className="modal custom-modal fade"
        role="dialog"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Edit Custom Policy</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Policy Name <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" defaultValue="LOP" />
                </div>
                <div className="input-block mb-3">
                  <label className="col-form-label">
                    Days <span className="text-danger">*</span>
                  </label>
                  <input type="text" className="form-control" defaultValue={4} />
                </div>
                <div className="input-block mb-3 leave-duallist">
                  <label className="col-form-label">Add employee</label>
                  <div className="row">
                    <div className="col-lg-5 col-sm-5">
                      <select
                        name="edit_customleave_from"
                        id="edit_customleave_select"
                        className="form-control form-select"
                        size={5}
                        multiple
                      >
                        <option value={1}>Bernardo Galaviz </option>
                        <option value={2}>Jeffrey Warden</option>
                        <option value={2}>John Doe</option>
                        <option value={2}>John Smith</option>
                        <option value={3}>Mike Litorus</option>
                      </select>
                    </div>
                    <div className="multiselect-controls col-lg-2 col-sm-2 d-grid gap-2">
                      <button
                        type="button"
                        id="edit_customleave_select_rightAll"
                        className="btn w-100 btn-white"
                      >
                        <i className="fa fa-forward" />
                      </button>
                      <button
                        type="button"
                        id="edit_customleave_select_rightSelected"
                        className="btn w-100 btn-white"
                      >
                        <i className="fa fa-chevron-right" />
                      </button>
                      <button
                        type="button"
                        id="edit_customleave_select_leftSelected"
                        className="btn w-100 btn-white"
                      >
                        <i className="fa fa-chevron-left" />
                      </button>
                      <button
                        type="button"
                        id="edit_customleave_select_leftAll"
                        className="btn w-100 btn-white"
                      >
                        <i className="fa fa-backward" />
                      </button>
                    </div>
                    <div className="col-lg-5 col-sm-5">
                      <select
                        name="customleave_to"
                        id="edit_customleave_select_to"
                        className="form-control form-select"
                        size={8}
                        multiple
                      />
                    </div>
                  </div>
                </div>
                <div className="submit-section">
                  <button className="btn btn-primary submit-btn">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* /Edit Custom Policy Modal */}
    </>




  )
}

export default LeaveSettings
