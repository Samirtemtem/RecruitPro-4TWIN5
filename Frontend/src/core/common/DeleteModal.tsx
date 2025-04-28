import React from "react";
import { Link } from "react-router-dom";

interface DeleteModalProps {
  onDelete: () => void;
  message?: string;
}

const DeleteModal: React.FC<DeleteModalProps> = ({ 
  onDelete, 
  message = "You want to delete all the marked items, this cant be undone once you delete." 
}) => {
  return (
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
                {message}
              </p>
              <div className="d-flex justify-content-center">
                <Link
                  to="#"
                  className="btn btn-light me-3"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <Link 
                  to="#" 
                  onClick={onDelete} 
                  data-bs-dismiss="modal" 
                  className="btn btn-danger"
                >
                  Yes, Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Delete Modal */}
    </>
  );
};

export default DeleteModal; 