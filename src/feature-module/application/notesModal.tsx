import React from "react";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import CommonTagsInput from "../../core/common/Taginput";
import CommonSelect from "../../core/common/commonSelect";
import CommonTextEditor from "../../core/common/textEditor";

const NotesModal = () => {
  const [tags, setTags] = React.useState<string[]>(["Pending", "Done"]);
  const optionsChoose = [
    { value: "Gifford", label: "Gifford" },
    { value: "Kathleen", label: "Kathleen" },
  ];

  const optionsSelect = [
    { value: "1", label: "Active" },
    { value: "2", label: "Inactive" },
  ];
  const optionsPriority = [
    { value: "High", label: "High" },
    { value: "Medium", label: "Medium" },
    { value: "Low", label: "Low" },
  ];
  return (
    <>
      <>
  {/* Add Note */}
  <div className="modal fade" id="add_note">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Add Notes</h4>
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
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Note Title</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Assignee</label>
               
                  <CommonSelect
                      className="select"
                      options={optionsChoose}
                    />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <CommonTagsInput
                      value={tags}
                      onChange={setTags}
                      placeholder="Add New"
                      className="custom-input-class" // Optional custom class
                    />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <CommonSelect
                      className="select"
                      options={optionsPriority}
                    />
                </div>
              </div>
              <div className="col-6">
                <div className="input-blocks todo-calendar">
                  <label className="form-label">Due Date</label>
                  <div className="input-groupicon calender-input">
                  <DatePicker
                      className="form-control datetimepicker"
                      placeholder="Select Date"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                      className="select"
                      options={optionsSelect}
                    />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-0 summer-description-box notes-summernote">
                  <label className="form-label">Descriptions</label>
                  <CommonTextEditor/>
                  <small>Maximum 60 Characters</small>
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Add Note */}
  {/* Edit Note */}
  <div className="modal fade" id="edit-note-units">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Edit Notes</h4>
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
            <div className="row">
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Note Title</label>
                  <input
                    type="text"
                    className="form-control"
                    defaultValue="Team meet at Starbucks"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <label className="form-label">Assignee</label>
                  <CommonSelect
                      className="select"
                      options={optionsChoose}
                      defaultValue={optionsChoose[0]}
                    />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Tag</label>
                  <input
                    className="input-tags form-control"
                    placeholder="Add new"
                    type="text"
                    data-role="tagsinput"
                    name="Label"
                    defaultValue="Pending,Done"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Priority</label>
                  <CommonSelect
                      className="select"
                      options={optionsPriority}
                      defaultValue={optionsPriority[1]}
                    />
                </div>
              </div>
              <div className="col-6">
                <div className="input-blocks todo-calendar">
                  <label className="form-label">Due Date</label>
                  <div className="input-groupicon calender-input">
                  <DatePicker
                      className="form-control datetimepicker"
                      placeholder="Select Date"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="mb-3">
                  <label className="form-label">Status</label>
                  <CommonSelect
                      className="select"
                      options={optionsSelect}
                      defaultValue={optionsSelect[0]}
                    />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="mb-0 summer-description-box notes-summernote">
                  <label className="form-label">Descriptions</label>
                  
                  <CommonTextEditor/>
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
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Note */}
  {/* View Note */}
  <div className="modal fade" id="view-note-units">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="page-wrapper-new p-0">
          <div className="content">
            <div className="modal-header">
              <div className="d-flex align-items-center">
                <h4 className="modal-title me-3">Notes</h4>
                <p className="text-info">Personal</p>
              </div>
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
              <div className="row">
                <div className="col-12">
                  <div>
                    <h4 className="mb-2">
                      Meet Lisa to discuss project details
                    </h4>
                    <p>
                      Hiking is a long, vigorous walk, usually on trails or
                      footpaths in the countryside. Walking for pleasure
                      developed in Europe during the eighteenth century.
                      Religious pilgrimages have existed much longer but they
                      involve walking long distances for a spiritual purpose
                      associated with specific religions and also we achieve
                      inner peace while we hike at a local park.
                    </p>
                    <p className="badge bg-outline-danger d-inline-flex align-items-center mb-0">
                      <i className="fas fa-circle fs-6 me-1" /> High
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <Link to="#" className="btn btn-danger" data-bs-dismiss="modal">
                Close
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /View Note */}
</>

    </>
  );
};

export default NotesModal;
