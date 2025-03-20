import { DatePicker } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import CommonTagsInput from '../common/Taginput';

const AddDeals = () => {

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const dealsName = [
    { value: "Select", label: "Select" },
    { value: "Collins", label: "Collins" },
    { value: "Konopelski", label: "Konopelski" },
    { value: "Adams", label: "Adams" },
  ];
  const pipelineChoose = [
    { value: "Select", label: "Select" },
    { value: "Sales", label: "Sales" },
    { value: "Marketing", label: "Marketing" },
    { value: "Calls", label: "Calls" },
  ];
  const currency = [
    { value: "Select", label: "Select" },
    { value: "Dollar", label: "Dollar" },
    { value: "Euro", label: "Euro" },
  ];
  const period = [
    { value: "Select", label: "Select" },
    { value: "Days", label: "Days" },
    { value: "Months", label: "Months" },
  ];
  const source = [
    { value: "Select", label: "Select" },
    { value: "Phone Calls", label: "Phone Calls" },
    { value: "Social Media", label: "Social Media" },
    { value: "Refferal Sites", label: "Refferal Sites" },
    { value: "Web Analytics", label: "Web Analytics" },
    { value: "Previous Purchase", label: "Previous Purchase" },
  ];
  const statusChoose = [
    { value: "Select", label: "Select" },
    { value: "Open", label: "Open" },
    { value: "Won", label: "Won" },
    { value: "Lost", label: "Lost" },
  ]

  const assigneeChoose = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ]
  const priorityChoose = [
    { value: "Select", label: "Select" },
    { value: "High", label: "High" },
    { value: "Low", label: "Low" },
    { value: "Medium", label: "Medium" },
  ]
  const [tags, setTags] = useState<string[]>(["Vaughan Lewis"]);
  const [tags2, setTags2] = useState<string[]>(["Office Management App", "Clinic Management", "Educational Platform"]);
  const [tags3, setTags3] = useState<string[]>(["Vaughan Lewis"]);
  const [tags4, setTags4] = useState<string[]>(["Collab"]);
  return (
    <>
      {/* Add Deals */}
      <div className="modal fade" id="add_deals">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Deals</h4>
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
                      <label className="form-label">
                        Deal Name <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={dealsName}
                        defaultValue={dealsName[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="input-block mb-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="form-label">
                          Pipeline <span className="text-danger"> *</span>
                        </label>
                        <Link
                          to="#"
                          className="add-new text-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#add_pipeline"
                        >
                          <i className="ti ti-plus text-primary me-1" />
                          Add New
                        </Link>
                      </div>
                      <CommonSelect
                        className='select'
                        options={pipelineChoose}
                        defaultValue={pipelineChoose[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Status <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={statusChoose}
                        defaultValue={statusChoose[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Deal Value <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Currency<span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={currency}
                        defaultValue={currency[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Period <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={period}
                        defaultValue={period[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Period Value <span className="text-danger"> *</span>
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Contact <span className="text-danger"> *</span>
                      </label>
                      <CommonTagsInput
                        value={tags}
                        onChange={setTags}
                        placeholder="Add new"
                        className="custom-input-class" // Optional custom class
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Project<span className="text-danger"> *</span>
                      </label>
                      <CommonTagsInput
                        value={tags2}
                        onChange={setTags2}
                        placeholder="Add new"
                        className="custom-input-class" // Optional custom class
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Due Date <span className="text-danger"> *</span>{" "}
                      </label>
                      <div className="input-icon-end position-relative">
                        <CommonSelect
                          className='select'
                          options={assigneeChoose}
                          defaultValue={assigneeChoose[0]}
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Expected Closing Date{" "}
                        <span className="text-danger"> *</span>{" "}
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Assignee <span className="text-danger"> *</span>
                      </label>
                      <CommonTagsInput
                        value={tags3}
                        onChange={setTags3}
                        placeholder="Add New"
                        className="custom-input-class" // Optional custom class
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Tags <span className="text-danger"> *</span>
                      </label>
                      <CommonTagsInput
                        value={tags4}
                        onChange={setTags4}
                        placeholder="Add New"
                        className="custom-input-class" // Optional custom class
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Followup Date <span className="text-danger"> *</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <DatePicker
                          className="form-control datetimepicker"
                          format={{
                            format: "DD-MM-YYYY",
                            type: "mask",
                          }}
                          getPopupContainer={getModalContainer}
                          placeholder="DD-MM-YYYY"
                        />
                        <span className="input-icon-addon">
                          <i className="ti ti-calendar text-gray-7" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Source <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={source}
                        defaultValue={source[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Priority <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={priorityChoose}
                        defaultValue={priorityChoose[0]}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Description <span className="text-danger"> *</span>
                      </label>
                      <textarea className="form-control" defaultValue={""} />
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
                  Add Deal
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Deals */}
    </>



  )
}

export default AddDeals
