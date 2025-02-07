import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import CommonSelect from "../common/commonSelect";
import { DatePicker, TimePicker } from "antd";

import CommonTextEditor from "../common/textEditor";
import CommonTagsInput from "../common/Taginput";

const ProjectModals = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const clientChoose = [
    { value: "Select", label: "Select" },
    { value: "Anthony Lewis", label: "Anthony Lewis" },
    { value: "Brian Villalobos", label: "Brian Villalobos" },
  ];
  const priorityChoose = [
    { value: "Select", label: "Select" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const statusChoose = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
    { value: "Low", label: "Low" },
  ];
  const tagsChoose = [
    { value: "Select", label: "Select" },
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const getModalContainer2 = () => {
    const modalElement = document.getElementById('modal_datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const [tags, setTags] = useState<string[]>(["Jerald", "Andrew","Philip","Davis"]);
  const [tags2, setTags2] = useState<string[]>(["Hendry", "James"]);
  const [tags3, setTags3] = useState<string[]>(["Dwight"]);


  return (
    <>
      {/* Add Project */}
      <div className="modal fade" id="add_project" role="dialog">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header header-border align-items-center justify-content-between">
              <div className="d-flex align-items-center">
                <h5 className="modal-title me-2">Add Project </h5>
                <p className="text-dark">Project ID : PRO-0004</p>
              </div>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <div className="add-info-fieldset">
              <div className="add-details-wizard p-3 pb-0">
                <ul className="progress-bar-wizard d-flex align-items-center border-bottom">
                  <li className={`p-2 pt-0 ${currentStep === 1 ? 'active' : ''}`}>
                    <h6 className="fw-medium">Basic Information</h6>
                  </li>
                  <li className={`p-2 pt-0 ${currentStep === 2 ? 'active' : ''}`}>
                    <h6 className="fw-medium">Members</h6>
                  </li>
                </ul>
              </div>
              {
                currentStep === 1 && (
                  <fieldset id="first-field-file">
                    <form>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                              <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                                <i className="ti ti-photo text-gray-2 fs-16" />
                              </div>
                              <div className="profile-upload">
                                <div className="mb-2">
                                  <h6 className="mb-1">Upload Project Logo</h6>
                                  <p className="fs-12">Image should be below 4 mb</p>
                                </div>
                                <div className="profile-uploader d-flex align-items-center">
                                  <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                    Upload
                                    <input
                                      type="file"
                                      className="form-control image-sign"
                                      multiple
                                    />
                                  </div>
                                  <Link
                                    to="#"
                                    className="btn btn-light btn-sm"
                                  >
                                    Cancel
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Project Name</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Client</label>
                              <CommonSelect
                                className="select"
                                options={clientChoose}
                                defaultValue={clientChoose[0]}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Start Date</label>
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
                                <div className="mb-3">
                                  <label className="form-label">End Date</label>
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
                                <div className="mb-3">
                                  <label className="form-label">Priority</label>
                                  <CommonSelect
                                    className="select"
                                    options={priorityChoose}
                                    defaultValue={priorityChoose[0]}
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Project Value</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    defaultValue="$"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">
                                    Total Working Hours
                                  </label>
                                  <div className="input-icon-end position-relative">
                                    <TimePicker getPopupContainer={getModalContainer2} use12Hours placeholder="Choose" format="h:mm A" className="form-control timepicker" />
                                    <span className="input-icon-addon">
                                      <i className="ti ti-clock-hour-3 text-gray-7" />
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <label className="form-label">Extra Time</label>
                                  <input type="text" className="form-control" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-0">
                              <label className="form-label">Description</label>
                              <CommonTextEditor />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <div className="d-flex align-items-center justify-content-end">
                          <Link
                            type="button" to="#"
                            className="btn btn-outline-light border me-2"
                          >
                            Cancel
                          </Link>
                          <Link
                            className="btn btn-primary wizard-next-btn" to="#" onClick={handleNext}                   >
                            Add Team Member
                          </Link>
                        </div>
                      </div>
                    </form>
                  </fieldset>
                )
              }

              {
                currentStep === 2 && (
                  <fieldset className="d-block">
                    <form>
                      <div className="modal-body">
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label me-2">Team Members</label>
                              <CommonTagsInput
                                value={tags}
                                onChange={setTags}
                                placeholder="Add a Team Members"
                                className="custom-input-class" // Optional custom class
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label me-2">Team Leader</label>
                              <CommonTagsInput
                                value={tags2}
                                onChange={setTags2}
                                placeholder="Add a Team Leader"
                                className="custom-input-class" // Optional custom class
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label me-2">Project Manager</label>
                              <CommonTagsInput
                                value={tags3}
                                onChange={setTags3}
                                placeholder="Add a Project Manager"
                                className="custom-input-class" // Optional custom class
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">Status</label>
                              <CommonSelect
                                className="select"
                                options={statusChoose}
                                defaultValue={statusChoose[0]}
                              />
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div>
                              <label className="form-label">Tags</label>
                              <CommonSelect
                                className="select"
                                options={tagsChoose}
                                defaultValue={tagsChoose[0]}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <div className="d-flex align-items-center justify-content-end">
                          <Link
                            type="button"
                            className="btn btn-outline-light border me-2"
                            data-bs-dismiss="modal" to="#"                         >
                            Cancel
                          </Link>
                          <Link
                            className="btn btn-primary"
                            to="#"
                            data-bs-dismiss="modal"
                          >
                            Save
                          </Link>
                        </div>
                      </div>
                    </form>
                  </fieldset>
                )
              }


            </div>
          </div>
        </div>
      </div>
      {/* /Add Project */}
    </>

  );
};

export default ProjectModals;
function dayjs(formattedDate: any) {
  throw new Error("Function not implemented.");
}

function setCurrentStep(arg0: any) {
  throw new Error("Function not implemented.");
}

