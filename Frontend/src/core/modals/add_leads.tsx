import { DatePicker } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import CommonTagsInput from '../common/Taginput';
import { status } from '../common/selectoption/selectoption';

const AddLeads = () => {

  const currency = [
    { value: "Select", label: "Select" },
    { value: "Dollar", label: "Dollar" },
    { value: "Euro", label: "Euro" },
  ];

  const source = [
    { value: "Select", label: "Select" },
    { value: "Phone Calls", label: "Phone Calls" },
    { value: "Social Media", label: "Social Media" },
    { value: "Refferal Sites", label: "Refferal Sites" },
    { value: "Web Analytics", label: "Web Analytics" },
    { value: "Previous Purchase", label: "Previous Purchase" },
  ];

  const company = [
    { value: "Select", label: "Select" },
    { value: "BrightWave Innovations", label: "BrightWave Innovations" },
    { value: "Stellar Dynamics", label: "Stellar Dynamics" },
    { value: "Quantum Nexus", label: "Quantum Nexus" },
  ]
  const phoneNumber = [
    { value: "Select", label: "Select" },
    { value: "Work", label: "Work" },
    { value: "Home", label: "Home" },
  ]
  const email = [
    { value: "Select", label: "Select" },
    { value: "Work", label: "Work" },
    { value: "Home", label: "Home" },
  ]
  const industry = [
    { value: "Select", label: "Select" },
    { value: "Rentail Industry", label: "Rentail Industry" },
    { value: "Banking", label: "Banking" },
    { value: "Hotels", label: "Hotels" },
  ]
  const owner = [
    { value: "Select", label: "Select" },
    { value: "Darlee Robertson", label: "Darlee Robertson" },
    { value: "Sharon Roy", label: "Sharon Roy" },
    { value: "Vaughan Lewis", label: "Vaughan Lewis" },
  ]
  const [tags4, setTags4] = useState<string[]>(["Collab"]);
  return (
    <>
      <>
        {/* Add Leads */}
        <div className="modal fade" id="add_leads">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Add New Lead</h4>
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
                          Lead Name <span className="text-danger"> *</span>
                        </label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3">
                        <div className="d-flex align-items-center ">
                          <div className="form-check me-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Person
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              defaultChecked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault2"
                            >
                              Organization
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="input-block mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                          <label className="col-form-label">
                            Company <span className="text-danger"> *</span>
                          </label>
                          <Link
                            to="#"
                            className="add-new text-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#add_company"
                          >
                            <i className="ti ti-plus text-primary me-1" />
                            Add New
                          </Link>
                        </div>
                        <CommonSelect
                          className='select'
                          options={company}
                          defaultValue={company[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Value <span className="text-danger"> *</span>
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
                    <div className="col-md-12 ">
                      <div className="lead-phno-col">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="input-block mb-3">
                              <label className="form-label">
                                Phone Number <span className="text-danger"> *</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-lg-4 d-flex align-items-end">
                            <div className="input-block w-100 mb-3 d-flex align-items-center">
                              <div className="w-100">
                                <CommonSelect
                                  className='select'
                                  options={phoneNumber}
                                  defaultValue={phoneNumber[0]}
                                />
                              </div>
                              <Link
                                to="#"
                                className="add-modal-row text-primary add-lead-phno ms-2"
                              >
                                <i className="ti ti-circle-plus" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="lead-email-col">
                        <div className="row">
                          <div className="col-lg-8">
                            <div className="input-block mb-3">
                              <label className="form-label">
                                Email <span className="text-danger"> *</span>
                              </label>
                              <input className="form-control" type="text" />
                            </div>
                          </div>
                          <div className="col-lg-4 d-flex align-items-end">
                            <div className="input-block w-100 mb-3 d-flex align-items-center">
                              <div className="w-100">
                                <CommonSelect
                                  className='select'
                                  options={email}
                                  defaultValue={email[0]}
                                />
                              </div>
                              <Link
                                to="#"
                                className="add-email-row text-primary add-lead-phno ms-2"
                              >
                                <i className="ti ti-circle-plus" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
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
                      <div className="mb-3">
                        <label className="form-label">
                          Industry <span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className='select'
                          options={industry}
                          defaultValue={industry[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Owner <span className="text-danger"> *</span>
                        </label>
                        <CommonSelect
                          className='select'
                          options={owner}
                          defaultValue={owner[0]}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Tags <span className="text-danger"> *</span>
                        </label>
                        <CommonTagsInput
                          value={tags4}
                          onChange={setTags4}
                          placeholder="Add new"
                          className="custom-input-class" // Optional custom class
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="mb-3 ">
                        <label className="form-label">
                          Description <span className="text-danger"> *</span>
                        </label>
                        <div className="summernote" />
                      </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="mb-3">
                        <label className="form-label">Visibility</label>
                        <div className="d-flex align-items-center">
                          <div className="form-check me-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="public-id"
                            />
                            <label className="form-check-label" htmlFor="public-id">
                              Public
                            </label>
                          </div>
                          <div className="form-check me-3">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="private-id"
                              defaultChecked
                            />
                            <label className="form-check-label" htmlFor="private-id">
                              Private
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="people-id"
                              defaultChecked
                            />
                            <label className="form-check-label" htmlFor="people-id">
                              Select People
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-3 ">
                        <label className="form-label">Status</label>
                        <CommonSelect
                          className='select'
                          options={status}
                          defaultValue={status[0]}
                        />
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
                    Add Lead
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        :{/* /Add Leads */}
      </>

    </>

  )
}

export default AddLeads
