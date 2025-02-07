import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

const FileUpload = () => {
  const routes = all_routes
  const dynamicPath = "../../../../../public/assets/img/icons/download.svg"; // Replace with your dynamic path or variable

  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">File Upload</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}
>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">File Upload</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Drag Card */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Single File Upload</h5>
                </div>
                <div className="card-body">
                  <div
                    className="custom-file-container"
                    data-upload-id="myFirstImage"
                  >
                    <label>
                      Upload (Single File){" "}
                      <Link
                        to="#"
                        className="custom-file-container__image-clear me-1"
                        title="Clear Image"
                      >
                        x
                      </Link>
                    </label>
                    <label className="custom-file-container__custom-file">
                      <input
                        type="file"
                        className="custom-file-container__custom-file__custom-file-input"
                        accept="image/*"
                      />
                      <input
                        type="hidden"
                        name="MAX_FILE_SIZE"
                        defaultValue={10485760}
                      />

                      <span className="custom-file-container__custom-file__custom-file-control">
                        <span className="custom-file-container__custom-file__custom-file-control_button">
                          Choose file... Browser
                        </span>
                      </span>
                      <br />
                    </label>

                    <div
                      className="custom-file-container__image-preview"
                      style={{ backgroundImage: `url("${dynamicPath}")` }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Multiple File Upload</h5>
                </div>
                <div className="card-body">
                  <div
                    className="custom-file-container"
                    data-upload-id="mySecondImage"
                  >
                    <label>
                      Upload (Allow Multiple){" "}
                      <Link
                        to="#"
                        className="custom-file-container__image-clear me-1"
                        title="Clear Image"
                      >
                        x
                      </Link>
                    </label>
                    <label className="custom-file-container__custom-file">
                      <input
                        type="file"
                        className="custom-file-container__custom-file__custom-file-input"
                        multiple
                      />
                      <input
                        type="hidden"
                        name="MAX_FILE_SIZE"
                        defaultValue={10485760}
                      />

                      <span className="custom-file-container__custom-file__custom-file-control">
                        <span className="custom-file-container__custom-file__custom-file-control_button">
                          Choose file... Browser
                        </span>
                      </span>
                    </label>

                    <div
                      className="custom-file-container__image-preview"
                      style={{
                        backgroundImage:
                          "../../../../../public/assets/img/icons/download.svg(" +
                          "../../../../../public/assets/img/icons/download.svg" +
                          ")",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Drag Card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
