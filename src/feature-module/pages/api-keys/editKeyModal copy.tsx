import React, { useState } from "react";
import { Link } from "react-router-dom";

const EditKeyModal = () => {
  return (
    <>
      {/* Edit Key */}
      <div className="modal fade" id="edit_key">
        <div className="modal-dialog modal-dialog-centered modal-mg w-100">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Key</h4>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="ti ti-x" />
              </button>
            </div>
            <form action="api-keys.html">
              <div className="modal-body pb-0">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">API Key Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="paytm1234567890abcdef"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link to="#"
                  type="button"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link to="#" type="submit" className="btn btn-primary">
                  Save Key
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Key */}
    </>







  );
};

export default EditKeyModal;
