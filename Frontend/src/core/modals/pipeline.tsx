import { DatePicker } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import { beforeuse, company, contacts, deals, guests, owner } from '../common/selectoption/selectoption';
import { label } from 'yet-another-react-lightbox/*';
import CommonTagsInput from '../common/Taginput';
import ImageWithBasePath from '../common/imageWithBasePath';

const AddDeals = () => {

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const pipelineChoose = [
    { value: "Select", label: "Select" },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Calls", label: "Calls" },
  ];
  const statusChoose = [
    { value: "Select", label: "Select" },
    { value: "Open", label: "Open" },
    { value: "Won", label: "Won" },
    { value: "Lost", label: "Lost" },
  ]
  const dealsValue = [
    { value: "Select", label: "Select" },
    { value: "$4,50,000", label: "$4,50,000" },
    { value: "$3,15,000", label: "$3,15,000" },
    { value: "$8,40,000", label: "$8,40,000" },
  ]
  const currenyChoose = [
    { value: "Select", label: "Select" },
    { value: "$4,50,000", label: "$4,50,000" },
    { value: "$3,15,000", label: "$3,15,000" },
    { value: "$8,40,000", label: "$8,40,000" },
  ]
  const contactChoose = [
    { value: "Select", label: "Select" },
    { value: "Darlee Robertson", label: "Darlee Robertson" },
    { value: "Sharon Roy", label: "Sharon Roy" },
    { value: "Vaughan Lewis", label: "Vaughan Lewis" },
  ]
  const projectChoose = [
    { value: "Select", label: "Select" },
    { value: "Office Management App", label: "Office Management App" },
    { value: "Clinic Management", label: "Clinic Management" },
    { value: "Educational Platform", label: "Educational Platform" },
  ]
  const sourceChoose = [
    { value: "Select", label: "Select" },
    { value: "Barry Cuda", label: "Barry Cuda" },
    { value: "Tressa Wexler", label: "Tressa Wexler" },
  ]
  const assigneeChoose = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ]
  const priorityChoose = [
    { value: "Select", label: "Select" },
    { value: "High", label: "High" },
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
  ]
  const [tags, setTags] = useState<string[]>(["Collab", "Promotion", "Rated"]);
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#pipeline-access"
                >
                  Add Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Pipeline */}
      {/* Edit Pipeline */}
      <div className="modal fade" id="edit_pipeline">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Pipeline</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="pipeline.html">
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Pipeline Name <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Marketing"
                      />
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
                            <Link to="#" className="text-default">
                              <span className="me-2">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                            <Link to="#" className="text-default">
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
                            <Link to="#" className="text-default">
                              <span className="me-2">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                            <Link to="#" className="text-default">
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
                            <Link to="#" className="text-default">
                              <span className="me-2">
                                <i className="ti ti-edit" />
                              </span>
                            </Link>
                            <Link to="#" className="text-default">
                              <span>
                                <i className="ti ti-trash" />
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
                            data-bs-target="#all2"
                          >
                            <input
                              type="radio"
                              className="status-radio me-2"
                              id="all2"
                              name="status"
                              defaultChecked
                            />
                            <label htmlFor="all2">All</label>
                          </div>
                          <div
                            className="radio-btn d-flex align-items-center "
                            data-bs-toggle="tab"
                            data-bs-target="#select-person2"
                          >
                            <input
                              type="radio"
                              className="status-radio me-2"
                              id="select2"
                              name="status"
                            />
                            <label htmlFor="select2">Select Person</label>
                          </div>
                        </div>
                      </div>
                      <div className="tab-content">
                        <div className="tab-pane fade" id="select-person2">
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#pipeline-access"
                >
                  Add Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Pipeline */}
      {/* Pipeline Access */}
      <div className="modal fade" id="pipeline-access">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Pipeline Access</h4>
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
                      <div className="input-icon-end position-relative">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-search text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <div className="p-2 border br-5">
                        <div className="pipeline-access-items">
                          <div className="d-flex  align-items-center p-2">
                            <div className="form-check  form-check-md me-2">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/profiles/avatar-19.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-12">
                                  <Link to="#">Darlee Robertson</Link>
                                </h6>
                                <span className="fs-10 fw-normal">
                                  Darlee Robertson
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-2">
                            <div className="form-check form-check-md me-2">
                              <input className="form-check-input" type="checkbox" />
                            </div>
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
                                <h6 className="fw-medium fs-12">
                                  <Link to="#">Sharon Roy</Link>
                                </h6>
                                <span className="fs-10 fw-normal">Installer</span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-2">
                            <div className="form-check form-check-md me-2">
                              <input className="form-check-input" type="checkbox" />
                            </div>
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
                                <h6 className="fw-medium fs-12">
                                  <Link to="#">Vaughan Lewis</Link>
                                </h6>
                                <span className="fs-10 fw-normal">
                                  Senior Manager
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-2">
                            <div className="form-check form-check-md me-2">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/users/user-33.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-12">
                                  <Link to="#">Jessica Louise</Link>
                                </h6>
                                <span className="fs-10 fw-normal">
                                  Test Engineer
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="d-flex align-items-center p-2">
                            <div className="form-check form-check-md me-2">
                              <input className="form-check-input" type="checkbox" />
                            </div>
                            <div className="d-flex align-items-center file-name-icon">
                              <Link
                                to="#"
                                className="avatar avatar-md border avatar-rounded"
                              >
                                <ImageWithBasePath
                                  src="assets/img/users/user-34.jpg"
                                  className="img-fluid"
                                  alt="img"
                                />
                              </Link>
                              <div className="ms-2">
                                <h6 className="fw-medium fs-12">
                                  <Link to="#">Test Engineer</Link>
                                </h6>
                                <span className="fs-10 fw-normal">
                                  UI /UX Designer
                                </span>
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Pipeline Access */}
    </>



  )
}

export default AddDeals
