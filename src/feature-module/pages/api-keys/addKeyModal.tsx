import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddKeyModal = () => {
  return (
    <>
      {/* Add Key */}
      <div className="modal fade" id="add_key">
        <div className="modal-dialog modal-dialog-centered modal-mg w-100">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Key</h4>
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
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">API Key Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link to =""
                  type="button"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" type="submit" className="btn btn-primary">
                  Generate Key
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Key */}
    </>






  );
};

export default AddKeyModal;
