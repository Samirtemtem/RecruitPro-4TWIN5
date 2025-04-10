import { Link } from 'react-router-dom'
import ImageWithBasePath from '../common/imageWithBasePath';

const EditPipeline = () => {
  return (
    <>
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
            <form>
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
                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                  Add Pipeline
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Pipeline */}
    </>






  )
}

export default EditPipeline
