import React from "react";
import CommonSelect from "../common/commonSelect";

const PerformanceIndicatorModal = () => {
    const designation = [
        { value: "Select", label: "Select" },
        { value: "Web Designer", label: "Web Designer" },
        { value: "Web Developer", label: "Web Developer" },
        { value: "IOS Developer", label: "IOS Developer" },
    ];
    const customerExperience = [
        { value: "Select", label: "Select" },
        { value: "Advanced", label: "Advanced" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Average", label: "Average" },
    ];    
    const marketing = [
        { value: "Select", label: "Select" },
        { value: "Expert/Leader", label: "Expert/Leader" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Average", label: "Average" },
    ]; 
    const management = [
        { value: "Select", label: "Select" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Medium", label: "Medium" },
        { value: "Average", label: "Average" },
    ]; 
    const administration = [
        { value: "Select", label: "Select" },
        { value: "Advanced", label: "Advanced" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Average", label: "Average" },
    ];
    const presentationSkills = [
        { value: "Select", label: "Select" },
        { value: "None", label: "None" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Average", label: "Average" },
    ];
    const qualityOfWork = [
        { value: "Select", label: "Select" },
        { value: "None", label: "None" },
        { value: "Intermediate", label: "Intermediate" },
        { value: "Average", label: "Average" },
    ];
    const status = [
        { value: "Select", label: "Select" },
        { value: "Active", label: "Active" },
        { value: "Inactive", label: "Inactive" },
    ];
  return (
    <>
      {/* Add Indicator */}
      <div className="modal fade" id="add_performance_indicator">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Indicator</h4>
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
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Designation</label>
                      <CommonSelect
                        className="select"
                        options={designation}
                        defaultValue={designation[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h5 className="fw-medium">Technical</h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Customer Experience</label>
                      <CommonSelect
                        className="select"
                        options={customerExperience}
                        defaultValue={customerExperience[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Marketing</label>
                      <CommonSelect
                        className="select"
                        options={marketing}
                        defaultValue={marketing[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Management</label>
                      <CommonSelect
                        className="select"
                        options={management}
                        defaultValue={management[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Administration</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Presentation Skills</label>
                      <CommonSelect
                        className="select"
                        options={presentationSkills}
                       defaultValue={presentationSkills[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Quality of Work</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Efficiency</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h5 className="fw-medium">Organizational</h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Integrity</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Professionalism</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Team Work</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Critical Thinking</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Conflict Management</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Attendance</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">
                        Ability To Meet Deadline
                      </label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className="select"
                        options={status}
                        defaultValue={status[0]}
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Add Indicator
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Indicator */}
      {/* Edit Indicator */}
      <div className="modal fade" id="edit_performance-indicator">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit New Indicator</h4>
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
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Designation</label>
                      <CommonSelect
                        className="select"
                        options={designation}
                        defaultValue={designation[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h5 className="fw-medium">Technical</h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Customer Experience</label>
                      <CommonSelect
                        className="select"
                        options={customerExperience}
                        defaultValue={customerExperience[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Marketing</label>
                      <CommonSelect
                        className="select"
                        options={marketing}
                        defaultValue={marketing[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Management</label>
                      <CommonSelect
                        className="select"
                        options={management}
                        defaultValue={management[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Administration</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Presentation Skills</label>
                      <CommonSelect
                        className="select"
                        options={presentationSkills}
                       defaultValue={presentationSkills[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Quality of Work</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Efficiency</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <h5 className="fw-medium">Organizational</h5>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Integrity</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Professionalism</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Team Work</label>
                      <CommonSelect
                        className="select"
                        options={qualityOfWork}
                        defaultValue={qualityOfWork[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Critical Thinking</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Conflict Management</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">Attendance</label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="mb-3">
                      <label className="form-label">
                        Ability To Meet Deadline
                      </label>
                      <CommonSelect
                        className="select"
                        options={administration}
                        defaultValue={administration[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className="select"
                        options={status}
                        defaultValue={status[1]}
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Indicator */}
    </>
  );
};

export default PerformanceIndicatorModal;
