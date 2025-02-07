import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../router/all_routes';
import TooltipOption from '../../core/common/tooltipOption';

const MembershipAddon = () => {
  const routes = all_routes;
  return (
    <div>
      <>
  {/* Page Wrapper */}
  <div className="page-wrapper">
    <div className="content content-two">
      {/* Page Header */}
      <div className="d-md-flex d-block align-items-center justify-content-between mb-3">
        <div className="my-auto mb-2">
          <h3 className="page-title mb-1">Membership Addons</h3>
          <nav>
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link to={routes.adminDashboard}>Dashboard</Link>
              </li>
              <li className="breadcrumb-item">Membership</li>
              <li className="breadcrumb-item active" aria-current="page">
                Membership Addons
              </li>
            </ol>
          </nav>
        </div>
        <div className="d-flex my-xl-auto right-content align-items-center flex-wrap">
        <TooltipOption />
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        <div className="col-lg-4 col-md-6">
          <div className="mb-3">
            <label className="form-label">Addon Name</label>
            <input type="text" className="form-control" />
          </div>
        </div>
        <div className="col-md-12">
          <form >
            <div className="card mb-4">
              <div className="card-header">
                <h5>Addon Settings</h5>
              </div>
              <div className="card-body pb-1">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Students &amp; Teachers
                      </label>
                      <div className=" d-flex align-items-center mb-3">
                        <div className="w-100 me-3">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="checkebox-1"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkebox-1"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Classes &amp; Sections
                      </label>
                      <div className=" d-flex align-items-center mb-3">
                        <div className="w-100 me-3">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="checkebox-2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkebox-2"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Subjects &amp; Exams</label>
                      <div className=" d-flex align-items-center mb-3">
                        <div className="w-100 me-3">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="checkebox-3"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkebox-3"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Departments</label>
                      <div className=" d-flex align-items-center mb-3">
                        <div className="w-100 me-3">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="checkebox-4"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkebox-4"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Designations</label>
                      <div className=" d-flex align-items-center mb-3">
                        <div className="w-100 me-3">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="checkebox-5"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkebox-5"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Library &amp; Transport
                      </label>
                      <div className=" d-flex align-items-center mb-3">
                        <div className="w-100 me-3">
                          <input type="text" className="form-control" />
                        </div>
                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                          />
                        </div>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          defaultValue=""
                          id="checkebox-6"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="checkebox-6"
                        >
                          Unlimited
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to="#" className="btn btn-light me-2">
                Cancel
              </Link>
              <Link to="#" className="btn btn-primary" >
                Create
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Page Wrapper */}
</>

    </div>
  )
}

export default MembershipAddon