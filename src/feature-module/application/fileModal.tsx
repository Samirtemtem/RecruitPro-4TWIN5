import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/common/imageWithBasePath";
import CommonTextEditor from "../../core/common/textEditor";

const FileModal = () => {
  return (
    <>
  {/* Preview */}
  <div className="sidebar-themesettings offcanvas offcanvas-end" id="preview">
    <div className="offcanvas-header d-flex align-items-center justify-content-between bg-dark">
      <div>
        <h4 className="mb-1 text-white">Preview</h4>
      </div>
      <div className="d-flex align-items-center">
        <Link
          to="#"
          className="d-flex align-items-center justify-content-center me-3"
        >
          <i className="ti ti-star-filled filled text-warning" />
        </Link>
        <Link
          to="#"
          className="d-flex align-items-center justify-content-center text-white me-3"
        >
          <i className="ti ti-trash" />
        </Link>
        <Link
          to="#"
          className="custom-btn-close d-flex align-items-center justify-content-center text-white"
          data-bs-dismiss="offcanvas"
        >
          <i className="ti ti-x" />
        </Link>
      </div>
    </div>
    <div className="offcanvas-body p-0">
      <div className="bg-light document-wrap text-center">
        <div className="mb-2">
          <ImageWithBasePath src="assets/img/icons/pdf-icon.svg" alt="icon" />
        </div>
        <h4 className="mb-1">
          Document Final Proof Read
          <span className="badge badge-secondary-transparent fw-normal fs-12 ms-2">
            2.4 GB
          </span>
        </h4>
        <p>Last Accessed on 15 Mar 2025, 08:15:23 PM</p>
      </div>
      <div className="preview-content">
        <h4 className="mb-3">File Info</h4>
        <div className="file-type p-2 pb-0 gx-2 mb-2">
          <div className="text-center mb-2 border-end me-2">
            <p className="fs-12 mb-0">File Type</p>
            <p className="text-title">PDF</p>
          </div>
          <div className="text-center mb-2 border-end me-2 pe-2">
            <p className="fs-12 mb-0">Created on</p>
            <p className="text-title text-nowrap">22 July 2025, 08:30 PM</p>
          </div>
          <div className="text-center mb-2 border-0">
            <p className="fs-12 mb-0">Location</p>
            <p className="text-title">Drive</p>
          </div>
        </div>
        <div className="mb-4">
          <h6 className="mb-2 fw-medium">Description</h6>
          <CommonTextEditor/>
        </div>
        <h4 className="mb-3">Recent Activity</h4>
        <div className="card shadow-none">
          <div className="card-body p-3 pb-0">
            <h6 className="mb-3">Today</h6>
            <ul className="recent-activity mb-3">
              <li className="d-flex">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-01.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2 flex-grow-1">
                  <p className="mb-0">
                    <span className="text-title">Mercy</span> Added New File in{" "}
                    <span className="text-title">Drive</span>
                  </p>
                  <p className="mb-0">05:22 PM</p>
                  <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex align-items-center">
                      <i className="ti ti-video text-title fs-16" />
                      <p className="ms-2">All_files.mp4</p>
                    </div>
                    <span className="fs-12">8.2 MB</span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-15.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2 flex-grow-1">
                  <p className="mb-0">
                    <span className="text-title">Druman</span> Added New File in{" "}
                    <span className="text-title">ROOT FOLDER</span>
                  </p>
                  <p className="mb-0">05:23 PM</p>
                  <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex align-items-center">
                      <i className="ti ti-photo text-title fs-16" />
                      <p className="ms-2">WebsiteBackupScreen.png</p>
                    </div>
                    <span className="fs-12">3.2 MB</span>
                  </div>
                  <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex align-items-center">
                      <i className="ti ti-file-zip text-title fs-16" />
                      <p className="ms-2">Finaldraft.zip</p>
                    </div>
                    <span className="fs-12">4 MB</span>
                  </div>
                  <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex align-items-center">
                      <i className="ti ti-photo text-title fs-16" />
                      <p className="ms-2">Photo.jpg</p>
                    </div>
                    <span className="fs-12">6.5 MB</span>
                  </div>
                </div>
              </li>
            </ul>
            <h6 className="mb-3">28 Jan 2025</h6>
            <ul className="recent-activity mb-3">
              <li className="d-flex">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-29.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2 flex-grow-1">
                  <p className="mb-0">
                    <span className="text-title">Mercy</span> Added New File in{" "}
                    <span className="text-title">Personal Assets</span>
                  </p>
                  <p className="mb-0">05:22 PM</p>
                  <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex align-items-center">
                      <i className="ti ti-photo text-title fs-16" />
                      <p className="ms-2">Photo_12.jpg</p>
                    </div>
                    <span className="fs-12">6.2 MB</span>
                  </div>
                </div>
              </li>
              <li className="d-flex">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-25.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2 flex-grow-1">
                  <p className="mb-0">
                    <span className="text-title">Jackson</span> Added New File
                    in <span className="text-title">Drive</span>
                  </p>
                  <p className="mb-0">05:23 PM</p>
                  <div className="bg-light rounded p-2 d-flex align-items-center justify-content-between mt-1">
                    <div className="d-flex align-items-center">
                      <i className="ti ti-photo text-title fs-16" />
                      <p className="ms-2">Photo.jpg</p>
                    </div>
                    <span className="fs-12">15.5 MB</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <h4 className="mb-3">Members</h4>
          <Link
            to="#"
            className="fs-12 mb-3"
            data-bs-toggle="modal" data-inert={true}
            data-bs-target="#add_member"
          >
            Add Members
          </Link>
        </div>
        <div className="card shadow-none mb-0">
          <div className="card-body p-3 pb-0">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center mb-2">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-29.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2">
                  <h6 className="fw-medium">Anthony Lewis</h6>
                  <p className="fs-12">Finance</p>
                </div>
              </div>
              <Link to="#" className="user-icon mb-2">
                <i className="ti ti-user-x fs-16" />
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center mb-2">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-06.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2">
                  <h6 className="fw-medium">Harvey Smith</h6>
                  <p className="fs-12">Developer</p>
                </div>
              </div>
              <Link to="#" className="user-icon mb-2">
                <i className="ti ti-user-x fs-16" />
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center mb-2">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2">
                  <h6 className="fw-medium">Stephan Peralt</h6>
                  <p className="fs-12">Executive Officer</p>
                </div>
              </div>
              <Link to="#" className="user-icon mb-2">
                <i className="ti ti-user-x fs-16" />
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center mb-2">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-26.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2">
                  <h6 className="fw-medium">Doglas Martini</h6>
                  <p className="fs-12">Manager</p>
                </div>
              </div>
              <Link to="#" className="user-icon mb-2">
                <i className="ti ti-user-x fs-16" />
              </Link>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center mb-2">
                <span className="avatar avatar-md">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-01.jpg"
                    className="rounded-circle"
                    alt="img"
                  />
                </span>
                <div className="ms-2">
                  <h6 className="fw-medium">Linda Ray</h6>
                  <p className="fs-12">Finance</p>
                </div>
              </div>
              <Link to="#" className="user-icon mb-2">
                <i className="ti ti-user-x fs-16" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Preview */}
  {/* Create Folder */}
  <div className="modal fade" id="add_folder">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Create Folder</h4>
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
          <div className="modal-body">
            <div className="mb-0">
              <label className="form-label">Folder Name</label>
              <input type="text" className="form-control" />
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
              Add New Folder
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Create Folder */}
  {/* Add Customer */}
  <div className="modal fade" id="add_member">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add Members</h4>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <div className="position-relative input-icon mb-3">
            <span className="input-icon-addon">
              <i className="ti ti-search" />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search Email"
            />
          </div>
          <div className="form-check ps-0">
            <label className="form-check-label member-check-list activate d-flex align-items-center justify-content-between p-2 rounded mb-1">
              <span className="d-flex align-items-center text-dark">
                <span className="avatar avatar-md avatar-rounded">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-01.jpg"
                    className="me-2"
                    alt="Img"
                  />
                </span>
                Sophie
              </span>
              <input
                type="checkbox"
                className="form-check-input"
                defaultChecked
              />
            </label>
            <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
              <span className="d-flex align-items-center text-dark">
                <span className="avatar avatar-md avatar-rounded">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-02.jpg"
                    className="me-2"
                    alt="Img"
                  />
                </span>
                Cameron
              </span>
              <input type="checkbox" className="form-check-input" />
            </label>
            <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
              <span className="d-flex align-items-center text-dark">
                <span className="avatar avatar-md avatar-rounded">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-03.jpg"
                    className="me-2"
                    alt="Img"
                  />
                </span>
                Doris
              </span>
              <input type="checkbox" className="form-check-input" />
            </label>
            <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
              <span className="d-flex align-items-center text-dark">
                <span className="avatar avatar-md avatar-rounded">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-04.jpg"
                    className="me-2"
                    alt="Img"
                  />
                </span>
                Rufana
              </span>
              <input type="checkbox" className="form-check-input" />
            </label>
            <label className="form-check-label member-check-list d-flex align-items-center justify-content-between p-2 rounded mb-1">
              <span className="d-flex align-items-center text-dark">
                <span className="avatar avatar-md avatar-rounded">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-04.jpg"
                    className="me-2"
                    alt="Img"
                  />
                </span>
                Michael
              </span>
              <input type="checkbox" className="form-check-input" />
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Customer */}
</>

  );
};

export default FileModal;
