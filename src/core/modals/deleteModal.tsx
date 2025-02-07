import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../feature-module/router/all_routes";

const DeleteModal = () => {
 
  return (
    <>
      <>
        {/* Delete Modal */}
        <div className="modal fade" id="delete_modal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-body text-center">
                <span className="avatar avatar-xl bg-transparent-danger text-danger mb-3">
                  <i className="ti ti-trash-x fs-36" />
                </span>
                <h4 className="mb-1">Confirm Delete</h4>
                <p className="mb-3">
                  You want to delete all the marked items, this cant be undone once
                  you delete.
                </p>
                <div className="d-flex justify-content-center">
                 <Link
                    to="#"
                    className="btn btn-light me-3"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </Link>
                 <Link to="#" data-bs-dismiss="modal" className="btn btn-danger">
                    Yes, Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Delete Modal */}
      </>

    </>

  );
};

export default DeleteModal;

