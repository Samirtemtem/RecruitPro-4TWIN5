import { Link } from 'react-router-dom'
import ImageWithBasePath from '../common/imageWithBasePath';

const PipelineAccess = () => {
  return (
    <>
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

export default PipelineAccess
