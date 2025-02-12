import React from "react";
import CommonSelect from "../common/commonSelect";
import { DatePicker } from "antd";

const PerformanceAppraisalModal = () => {
  const employee = [
    { value: "Select", label: "Select" },
    { value: "Anthony Lewis", label: "Anthony Lewis" },
    { value: "Brian Villalobos", label: "Brian Villalobos" },
    { value: "Harvey Smith", label: "Harvey Smith" },
  ];
  const setValue = [
    { value: "None", label: "None" },
    { value: "Beginner", label: "Beginner" },
    { value: "Intermediate", label: "Intermediate" },
    { value: "Advanced", label: "Advanced" },
    { value: "Expert / Leader", label: "Expert / Leader" },
  ];
  const status = [
    { value: "Select", label: "Select" },
    { value: "Beginner", label: "Beginner" },
    { value: "Inactive", label: "Inactive" },
  ];
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  return (
    <>
      {/* Add Appraisal */}
      <div className="modal fade" id="add_performance_appraisal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Appraisal</h4>
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
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Employee</label>
                      <CommonSelect
                        className="select"
                        options={employee}
                        defaultValue={employee[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Appraisal Date</label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul
                      className="nav appraisal-tab nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border   active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#technical"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Technical
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#organization"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Organizational
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="tab-content appraisal-tab-content"
                      id="pills-tabContent"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="technical"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex={0}
                      >
                        <div className="card">
                          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Technical Competencies</h5>
                          </div>
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table ">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Indicator</th>
                                    <th>Expected Value</th>
                                    <th>Set Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Customer Experience</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Marketing</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Management</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Administration</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Presentation Skill</td>
                                    <td>Expert / Leader</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Quality Of Work</td>
                                    <td>Expert / Leader</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Efficiency</td>
                                    <td>Expert / Leader</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="organization"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex={0}
                      >
                        <div className="card">
                          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Organizational Competencies</h5>
                          </div>
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table ">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Indicator</th>
                                    <th>Expected Value</th>
                                    <th>Set Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Integrity</td>
                                    <td>Beginner</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Professionalism</td>
                                    <td>Beginner</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Team Work</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Critical Thinking</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Conflict Management</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Attendance</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Ability To Meet Deadline</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className="select"
                        options={status}
                        defaultValue={setValue[0]}
                      />
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
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Appraisal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Appraisal */}
      {/* Edit  Appraisal */}
      <div className="modal fade" id="edit_performance_appraisal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Appraisal</h4>
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
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Employee</label>
                      <CommonSelect
                        className="select"
                        options={employee}
                        defaultValue={employee[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Appraisal Date</label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <ul
                      className="nav appraisal-tab nav-pills mb-3"
                      id="pills-tab2"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border   active"
                          id="pills-home-tab2"
                          data-bs-toggle="pill"
                          data-bs-target="#edit_technical"
                          type="button"
                          role="tab"
                          aria-selected="true"
                        >
                          Technical
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link border"
                          id="pills-profile-tab2"
                          data-bs-toggle="pill"
                          data-bs-target="#edit_organization"
                          type="button"
                          role="tab"
                          aria-selected="false"
                        >
                          Organizational
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-12">
                    <div
                      className="tab-content appraisal-tab-content"
                      id="pills-tabContent2"
                    >
                      <div
                        className="tab-pane fade show active"
                        id="edit_technical"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab2"
                        tabIndex={0}
                      >
                        <div className="card">
                          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Technical Competencies</h5>
                          </div>
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table ">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Indicator</th>
                                    <th>Expected Value</th>
                                    <th>Set Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Customer Experience</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Marketing</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Management</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Administration</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Presentation Skill</td>
                                    <td>Expert / Leader</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Quality Of Work</td>
                                    <td>Expert / Leader</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Efficiency</td>
                                    <td>Expert / Leader</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="edit_organization"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab2"
                        tabIndex={0}
                      >
                        <div className="card">
                          <div className="card-header d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                            <h5>Organizational Competencies</h5>
                          </div>
                          <div className="card-body p-0">
                            <div className="table-responsive">
                              <table className="table ">
                                <thead className="thead-light">
                                  <tr>
                                    <th>Indicator</th>
                                    <th>Expected Value</th>
                                    <th>Set Value</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Integrity</td>
                                    <td>Beginner</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Professionalism</td>
                                    <td>Beginner</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Team Work</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Critical Thinking</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Conflict Management</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Attendance</td>
                                    <td>Intermediate</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>Ability To Meet Deadline</td>
                                    <td>Advanced</td>
                                    <td>
                                      <CommonSelect
                                        className="select"
                                        options={setValue}
                                        defaultValue={setValue[0]}
                                      />
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className="select"
                        options={status}
                        defaultValue={setValue[1]}
                      />
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
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Appraisal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit  Appraisal */}
    </>
  );
};

export default PerformanceAppraisalModal;
