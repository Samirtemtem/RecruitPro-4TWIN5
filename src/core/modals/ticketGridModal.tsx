import React, { useState } from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../feature-module/router/all_routes";
import CommonSelect from "../common/commonSelect";
import CommonTagsInput from "../common/Taginput";

const TicketGridModal = () => {
  const routes = all_routes;
  const eventCategory = [
    { value: "Select", label: "Select" },
    { value: "Internet Issue", label: "Internet Issue" },
    { value: "Redistribute", label: "Redistribute" },
    { value: "Computer", label: "Computer" },
    { value: "Complaint", label: "Complaint" },
  ];
  const priority = [
    { value: "Select", label: "Select" },
    { value: "High", label: "High" },
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
  ];
  const status = [
    { value: "Select", label: "Select" },
    { value: "Closed", label: "Closed" },
    { value: "Reopened", label: "Reopened" },
    { value: "Inprogress", label: "Inprogress" },
  ];
  const [tags, setTags] = useState<string[]>(["Vaughan Lewis"]);
  return (
    <>
      {/* Add Ticket */}
      <div className="modal fade" id="add_ticket">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Ticket</h4>
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
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Event Category</label>
                      <CommonSelect
                        className="select"
                        options={eventCategory}
                        defaultValue={eventCategory[0]}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Assign To</label>
                      <CommonTagsInput
                        value={tags}
                        onChange={setTags}
                        placeholder="Add new"
                        className="custom-input-class" // Optional custom class
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ticket Description</label>
                      <textarea className="form-control" defaultValue={""} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Priority</label>
                      <CommonSelect
                        className="select"
                        options={priority}
                        defaultValue={priority[0]}
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className="select"
                        options={status}
                        defaultValue={status[0]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Ticket
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Ticket */}
      {/* Add Ticket */}
      <div className="modal fade" id="edit_ticket">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Ticket</h4>
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
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Laptop Issue"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Event Category</label>
                      <CommonSelect
                        className="select"
                        options={eventCategory}
                        defaultValue={eventCategory[1]}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Subject</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue=""
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Assign To</label>
                      <CommonTagsInput
                        value={tags}
                        onChange={setTags}
                        placeholder="Add new"
                        className="custom-input-class" // Optional custom class
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Ticket Description</label>
                      <textarea
                        className="form-control"
                        placeholder="Add Question"
                        defaultValue={""}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Priority</label>
                      <CommonSelect
                        className="select"
                        options={priority}
                        defaultValue={priority[1]}
                      />
                    </div>
                    <div className="mb-0">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className="select"
                        options={status}
                        defaultValue={status[2]}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <Link
                  to="#"
                  className="btn btn-light me-2"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </Link>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Ticket */}
    </>
  );
};

export default TicketGridModal;
