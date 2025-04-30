import { DatePicker } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import { beforeuse, company, contacts, deals, guests, owner, owners, status } from '../common/selectoption/selectoption';
import { label } from 'yet-another-react-lightbox/*';
import CommonTagsInput from '../common/Taginput';
import ImageWithBasePath from '../common/imageWithBasePath';

const AddPipeline = () => {

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const owner = [
    { value: "Select", label: "Select" },
    { value: "Hendry Milner", label: "Hendry Milner" },
    { value: "Guilory Berggren", label: "Guilory Berggren" },
    { value: "Jami Carlile", label: "Jami Carlile" },
  ];
  const dealsChoose = [
    { value: "Select", label: "Select" },
    { value: "Collins", label: "Collins" },
    { value: "Konopelski", label: "Konopelski" },
    { value: "Adams", label: "Adams" },
  ]
  const industryChoose = [
    { value: "Select", label: "Select" },
    { value: "Retail Industry", label: "Retail Industry" },
    { value: "Banking", label: "Banking" },
    { value: "Hotels", label: "Hotels" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "Insurance", label: "Insurance" },
  ]
  const sourcesChoose = [
    { value: "Select", label: "Select" },
    { value: "Phone Calls", label: "Phone Calls" },
    { value: "Social Media", label: "Social Media" },
    { value: "Refferal Sites", label: "Refferal Sites" },
    { value: "Web Analytics", label: "Web Analytics" },
    { value: "Previous Purchase", label: "Previous Purchase" },
  ]
  const currencyChoose = [
    { value: "Select", label: "Select" },
    { value: "USD", label: "USD" },
    { value: "Euro", label: "Euro" },
  ]
  const languageChoose = [
    { value: "Select", label: "Select" },
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic " },
  ]
  const contactChoose = [
    { value: "Select", label: "Select" },
    { value: "Darlee Robertson", label: "Darlee Robertson" },
    { value: "Sharon Roy", label: "Sharon Roy" },
    { value: "Vaughan", label: "Vaughan" },
    { value: "Jessica", label: "Jessica" },
    { value: "Carol Thomas", label: "Carol Thomas" },
  ]
  const countryChoose = [
    { value: "Select", label: "Select" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
  ]
  const stateChoose = [
    { value: "Select", label: "Select" },
    { value: "California", label: "California" },
    { value: "New York", label: "New York" },
    { value: "Texas", label: "Texas" },
    { value: "Florida", label: "Florida" },
  ]
  const cityChoose = [
    { value: "Select", label: "Select" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "San Diego", label: "San Diego" },
    { value: "Fresno", label: "Fresno" },
    { value: "San Francisco", label: "San Francisco" },
  ]
  const status = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ]
  const [tags, setTags] = useState<string[]>(["Collab"]);
  return (
    <>
      {/* Add Pipeline */}
      <div className="modal fade" id="add_pipeline">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Pipeline</h4>
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
                      <label className="form-label">
                        Pipeline Name <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="input-block mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="form-label">
                          Pipeline Stages <span className="text-danger"> *</span>
                        </label>
                        <Link
                          to="#"
                          className="add-new text-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#add_stage"
                        >
                          <i className="ti ti-plus text-primary me-1" />
                          Add New
                        </Link>
                      </div>
                      <div className="p-3 border border-gray br-5 mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="me-2">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <h6 className="fs-14 fw-normal">Inpipline</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="text-default"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_stage"
                            >
                              <span className="me-2">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                            <Link
                              to="#"
                              className="text-default"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <span>
                                <i className="ti ti-trash" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-gray br-5 mb-2">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="me-2">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <h6 className="fs-14 fw-normal">Follow Up</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="text-default"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_stage"
                            >
                              <span className="me-2">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                            <Link
                              to="#"
                              className="text-default"
                              data-bs-toggle="modal"
                              data-bs-target="#delete_modal"
                            >
                              <span>
                                <i className="ti ti-trash" />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="p-3 border border-gray br-5">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="d-flex align-items-center">
                            <span className="me-2">
                              <i className="ti ti-grip-vertical" />
                            </span>
                            <h6 className="fs-14 fw-normal">Schedule Service</h6>
                          </div>
                          <div className="d-flex align-items-center">
                            <Link
                              to="#"
                              className="text-default"
                              data-bs-toggle="modal"
                              data-bs-target="#edit_stage"
                            >
                              <span className="me-2">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                            <Link to="#" className="text-default">
                              <span>
                                <i
                                  className="ti ti-trash"
                                  data-bs-toggle="modal"
                                  data-bs-target="#delete_modal"
                                />
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Access</label>
                      <div className="d-flex  access-item nav">
                        <div className="d-flex align-items-center">
                          <div
                            className="radio-btn d-flex align-items-center "
                            data-bs-toggle="tab"
                            data-bs-target="#all"
                          >
                            <input
                              type="radio"
                              className="status-radio me-2"
                              id="all"
                              name="status"
                              defaultChecked
                            />
                            <label htmlFor="all">All</label>
                          </div>
                          <div
                            className="radio-btn d-flex align-items-center "
                            data-bs-toggle="tab"
                            data-bs-target="#select-person"
                          >
                            <input
                              type="radio"
                              className="status-radio me-2"
                              id="select"
                              name="status"
                            />
                            <label htmlFor="select">Select Person</label>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane fade" id="select-person">
                          <div className="access-wrapper">
                            <div className="p-3 border border-gray br-5 mb-2">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center file-name-icon">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md border avatar-rounded"
                                  >
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-20.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                  <div className="ms-2">
                                    <h6 className="fw-medium">
                                      <Link to="#">Sharon Roy</Link>
                                    </h6>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="text-danger">
                                    Remove
                                  </Link>
                                </div>
                              </div>
                            </div>
                            <div className="p-3 border border-gray br-5 mb-2">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center file-name-icon">
                                  <Link
                                    to="#"
                                    className="avatar avatar-md border avatar-rounded"
                                  >
                                    <ImageWithBasePath
                                      src="assets/img/profiles/avatar-21.jpg"
                                      className="img-fluid"
                                      alt="img"
                                    />
                                  </Link>
                                  <div className="ms-2">
                                    <h6 className="fw-medium">
                                      <Link to="#">Sharon Roy</Link>
                                    </h6>
                                  </div>
                                </div>
                                <div className="d-flex align-items-center">
                                  <Link to="#" className="text-danger">
                                    Remove
                                  </Link>
                                </div>
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
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary">
                  Add Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Pipeline */}
    </>





  )
}

export default AddPipeline
