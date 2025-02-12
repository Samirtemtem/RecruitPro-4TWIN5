import { DatePicker } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import { beforeuse, city, company, contacts, deals, guests, owner, owners, state, status } from '../common/selectoption/selectoption';
import { label } from 'yet-another-react-lightbox/*';
import CommonTagsInput from '../common/Taginput';
import ImageWithBasePath from '../common/imageWithBasePath';

const AddContact = () => {

  const getModalContainer = () => {
    const modalElement = document.getElementById('modal-datepicker');
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const companyName = [
    { value: "Select", label: "Select" },
    { value: "BrightWave Innovations", label: "BrightWave Innovations" },
    { value: "Stellar Dynamics", label: "Stellar Dynamics" },
    { value: "Quantum Nexus", label: "Quantum Nexus" },
  ];
  const dealsChoose = [
    { value: "Select", label: "Select" },
    { value: "Collins", label: "Collins" },
    { value: "Konopelski", label: "Konopelski" },
    { value: "Adams", label: "Adams" },
  ]
  const owner = [
    { value: "Select", label: "Select" },
    { value: "Hendry Milner", label: "Hendry Milner" },
    { value: "Guilory Berggren", label: "Guilory Berggren" },
    { value: "Jami Carlile", label: "Jami Carlile" },
  ]
  const industryChoose = [
    { value: "Select", label: "Select" },
    { value: "Retail Industry", label: "Retail Industry" },
    { value: "Banking", label: "Banking" },
    { value: "Hotels", label: "Hotels" },
    { value: "Financial Services", label: "Financial Services" },
    { value: "Insurance", label: "Insurance" },
  ]
  const sourcesChoose = [
    { value: "Select", label: "Select" },
    { value: "Phone Calls", label: "Phone Calls" },
    { value: "Social Media", label: "Social Media" },
    { value: "Refferal Sites", label: "Refferal Sites" },
    { value: "Web Analytics", label: "Web Analytics" },
    { value: "Previous Purchase", label: "Previous Purchase" },
  ]
  const currencyChoose = [
    { value: "Select", label: "Select" },
    { value: "USD", label: "USD" },
    { value: "Euro", label: "Euro" },
  ]
  const languageChoose = [
    { value: "Select", label: "Select" },
    { value: "English", label: "English" },
    { value: "Arabic", label: "Arabic" },
  ]
  const contactChoose = [
    { value: "Select", label: "Select" },
    { value: "Darlee Robertson", label: "Darlee Robertson" },
    { value: "Sharon Roy", label: "Sharon Roy" },
    { value: "Vaughan", label: "Vaughan" },
    { value: "Jessica", label: "Jessica" },
    { value: "Carol Thomas", label: "Carol Thomas" },
  ]
  const countryChoose = [
    { value: "Select", label: "Select" },
    { value: "USA", label: "USA" },
    { value: "Canada", label: "Canada" },
    { value: "Germany", label: "Germany" },
    { value: "France", label: "France" },
  ]
  const stateChoose = [
    { value: "Select", label: "Select" },
    { value: "California", label: "California" },
    { value: "New York", label: "New York" },
    { value: "Texas", label: "Texas" },
    { value: "Florida", label: "Florida" },
  ]
  const cityChoose = [
    { value: "Select", label: "Select" },
    { value: "Los Angeles", label: "Los Angeles" },
    { value: "San Diego", label: "San Diego" },
    { value: "Fresno", label: "Fresno" },
    { value: "San Francisco", label: "San Francisco" },
  ]
  const status = [
    { value: "Select", label: "Select" },
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ]
  const reviewChoose = [
    { value: "Select", label: "Select" },
    { value: "Lowest", label: "Lowest" },
    { value: "Highest", label: "Highest" },
  ]
  const [tags, setTags] = useState<string[]>(["Collab", "Promotion", "Rated", "Davis"]);
  return (
    <>
      {/* Add Contact */}
      <div className="modal fade" id="add_contact">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add New Contact</h4>
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
              <div className="contact-grids-tab">
                <ul className="nav nav-underline" id="myTab1" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="info-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#basic-info1"
                      type="button"
                      role="tab"
                      aria-selected="true"
                    >
                      Basic Information
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="address-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#address1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Address
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="social-profile-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#social-profile1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Social Profiles
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="access-tab1"
                      data-bs-toggle="tab"
                      data-bs-target="#access1"
                      type="button"
                      role="tab"
                      aria-selected="false"
                    >
                      Access
                    </button>
                  </li>
                </ul>
              </div>
              <div className="tab-content" id="myTabContent1">
                <div
                  className="tab-pane fade show active"
                  id="basic-info1"
                  role="tabpanel"
                  aria-labelledby="info-tab1"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                          <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                            <i className="ti ti-photo text-gray-2 fs-16" />
                          </div>
                          <div className="profile-upload">
                            <div className="mb-2">
                              <h6 className="mb-1">Upload Profile Image</h6>
                              <p className="fs-12">Image should be below 4 mb</p>
                            </div>
                            <div className="profile-uploader d-flex align-items-center">
                              <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                                Upload
                                <input
                                  type="file"
                                  className="form-control image-sign"
                                  multiple
                                />
                              </div>
                              <Link
                                to="#"
                                className="btn btn-light btn-sm"
                              >
                                Cancel
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            First Name <span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Job Title <span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Company Name <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={companyName}
                            defaultValue={companyName[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number <span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Phone Number 2<span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">Fax</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="input-block mb-3">
                          <div className="d-flex justify-content-between align-items-center mb-2">
                            <label className="col-form-label p-0">
                              Deals <span className="text-danger"> *</span>
                            </label>
                            <Link
                              to="#"
                              className="add-new text-primary"
                              data-bs-target="#add_deals"
                              data-bs-toggle="modal"
                            >
                              <i className="ti ti-plus text-primary me-1" />
                              Add New
                            </Link>
                          </div>
                          <CommonSelect
                            className='select'
                            options={dealsChoose}
                            defaultValue={dealsChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3">
                          <label className="form-label">
                            Date of Birth <span className="text-danger"> *</span>{" "}
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
                      <div className="col-md-4">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Ratings <span className="text-danger"> *</span>
                          </label>
                          <div className="input-icon-end position-relative">
                            <input type="text" className="form-control" />
                            <span className="input-icon-addon">
                              <i className="ti ti-star text-gray-6" />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3 ">
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
                      <div className="col-md-4">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Industry <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={industryChoose}
                            defaultValue={industryChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Currency <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={currencyChoose}
                            defaultValue={currencyChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Language <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={languageChoose}
                            defaultValue={languageChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Tags <span className="text-danger"> *</span>{" "}
                          </label>
                          <CommonTagsInput
                            value={tags}
                            onChange={setTags}
                            placeholder="Add New"
                            className="custom-input-class" // Optional custom class
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3 ">
                          <label className="form-label">
                            Source <span className="text-danger"> *</span>{" "}
                          </label>
                          <CommonSelect
                            className='select'
                            options={sourcesChoose}
                            defaultValue={sourcesChoose[0]}
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
                      Save{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="address1"
                  role="tabpanel"
                  aria-labelledby="address-tab1"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="mb-3">
                          <label className="form-label">
                            Address <span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Country <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={countryChoose}
                            defaultValue={countryChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            State <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={stateChoose}
                            defaultValue={stateChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            City <span className="text-danger"> *</span>
                          </label>
                          <CommonSelect
                            className='select'
                            options={cityChoose}
                            defaultValue={cityChoose[0]}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">
                            Zipcode <span className="text-danger"> *</span>
                          </label>
                          <input type="text" className="form-control" />
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
                      Save{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="social-profile1"
                  role="tabpanel"
                  aria-labelledby="social-profile-tab1"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Facebook</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Twitter</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">LinkedIn</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Skype</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Whatsapp</label>
                          <input type="email" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Instagram</label>
                          <input type="email" className="form-control" />
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
                      Save{" "}
                    </button>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="access1"
                  role="tabpanel"
                  aria-labelledby="access-tab1"
                  tabIndex={0}
                >
                  <div className="modal-body pb-0 ">
                    <div className="mb-4">
                      <h6 className="fs-14 fw-medium mb-1">Visibility</h6>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label text-dark"
                            htmlFor="flexRadioDefault1"
                          >
                            Public
                          </label>
                        </div>
                        <div className="form-check me-3">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            defaultChecked
                          />
                          <label
                            className="form-check-label text-dark"
                            htmlFor="flexRadioDefault2"
                          >
                            Private
                          </label>
                        </div>
                        <div className="form-check ">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault3"
                            defaultChecked
                          />
                          <label
                            className="form-check-label text-dark"
                            htmlFor="flexRadioDefault3"
                          >
                            Select People
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 bg-gray br-5 mb-4">
                      <div className="d-flex align-items-center mb-3">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultValue=""
                          id="user-6"
                        />
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md border avatar-rounded"
                          >
                            <ImageWithBasePath
                              src="assets/img/reports/user-01.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-normal">
                              <Link to="#">Michael Walker</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultValue=""
                          id="user-7"
                        />
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md border avatar-rounded"
                          >
                            <ImageWithBasePath
                              src="assets/img/reports/user-02.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-normal">
                              <Link to="#">Sophie Headrick</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultValue=""
                          id="user-8"
                        />
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md border avatar-rounded"
                          >
                            <ImageWithBasePath
                              src="assets/img/reports/user-03.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-normal">
                              <Link to="#">Cameron Drake</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultValue=""
                          id="user-9"
                        />
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md border avatar-rounded"
                          >
                            <ImageWithBasePath
                              src="assets/img/reports/user-04.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-normal">
                              <Link to="#">Doris Crowley</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center mb-3">
                        <input
                          className="form-check-input me-1"
                          type="checkbox"
                          defaultValue=""
                          id="user-10"
                        />
                        <div className="d-flex align-items-center file-name-icon">
                          <Link
                            to="#"
                            className="avatar avatar-md border avatar-rounded"
                          >
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-12.jpg"
                              className="img-fluid"
                              alt="img"
                            />
                          </Link>
                          <div className="ms-2">
                            <h6 className="fw-normal">
                              <Link to="#">Thomas Bordelon</Link>
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <Link to="#" className="btn btn-primary">
                          Confirm
                        </Link>
                      </div>
                    </div>
                    <div className="mb-3 ">
                      <label className="form-label">Status</label>
                      <CommonSelect
                        className='select'
                        options={status}
                        defaultValue={status[0]}
                      />
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
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#success_compay"
                    >
                      Save{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Contact */}
      <>
  {/* Edit Contact */}
  <div className="modal fade" id="edit_contact">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">Edit Contact</h4>
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
          <div className="contact-grids-tab">
            <ul className="nav nav-underline" id="myTab3" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="info-tab3"
                  data-bs-toggle="tab"
                  data-bs-target="#basic-info3"
                  type="button"
                  role="tab"
                  aria-selected="true"
                >
                  Basic Information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="address-tab3"
                  data-bs-toggle="tab"
                  data-bs-target="#address3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Address
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="social-profile-tab3"
                  data-bs-toggle="tab"
                  data-bs-target="#social-profile3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Social Profiles
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="access-tab3"
                  data-bs-toggle="tab"
                  data-bs-target="#access3"
                  type="button"
                  role="tab"
                  aria-selected="false"
                >
                  Access
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent3">
            <div
              className="tab-pane fade show active"
              id="basic-info3"
              role="tabpanel"
              aria-labelledby="info-tab3"
              tabIndex={0}
            >
              <div className="modal-body pb-0 ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d-flex align-items-center flex-wrap row-gap-3 bg-light w-100 rounded p-3 mb-4">
                      <div className="d-flex align-items-center justify-content-center avatar avatar-xxl rounded-circle border border-dashed me-2 flex-shrink-0 text-dark frames">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-30.jpg"
                          alt="img"
                          className="rounded-circle"
                        />
                      </div>
                      <div className="profile-upload">
                        <div className="mb-2">
                          <h6 className="mb-1">Upload Profile Image</h6>
                          <p className="fs-12">Image should be below 4 mb</p>
                        </div>
                        <div className="profile-uploader d-flex align-items-center">
                          <div className="drag-upload-btn btn btn-sm btn-primary me-2">
                            Upload
                            <input
                              type="file"
                              className="form-control image-sign"
                              multiple
                            />
                          </div>
                          <Link
                            to="#"
                            className="btn btn-light btn-sm"
                          >
                            Cancel
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Name <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Darlee"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Robertson"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Job Title <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Facility Manager"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Company Name <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={companyName}
                        defaultValue={companyName[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Email</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="darlee@example.com"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="(163) 2459 315"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number 2<span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="(146) 1249 296"
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">Fax</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="input-block mb-3">
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <label className="col-form-label p-0">
                          Deals <span className="text-danger"> *</span>
                        </label>
                        <Link
                          to="#"
                          className="add-new text-primary"
                          data-bs-target="#add_deals"
                          data-bs-toggle="modal"
                        >
                          <i className="ti ti-plus text-primary me-1" />
                          Add New
                        </Link>
                      </div>
                      <CommonSelect
                        className='select'
                        options={deals}
                        defaultValue={deals[2]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3">
                      <label className="form-label">
                        Date of Birth <span className="text-danger"> *</span>{" "}
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
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Ratings <span className="text-danger"> *</span>
                      </label>
                      <div className="input-icon-end position-relative">
                        <input type="text" className="form-control" />
                        <span className="input-icon-addon">
                          <i className="ti ti-star text-gray-6" />
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Owner <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={owner}
                        defaultValue={owner[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Industry <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={industryChoose}
                        defaultValue={industryChoose[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Currency <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={currencyChoose}
                        defaultValue={currencyChoose[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Language <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={languageChoose}
                        defaultValue={languageChoose[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Tags <span className="text-danger"> *</span>{" "}
                      </label>
                      <input
                        className="input-tags form-control"
                        placeholder="Add new"
                        type="text"
                        data-role="tagsinput"
                        name="Label"
                        defaultValue="Collab"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Source <span className="text-danger"> *</span>{" "}
                      </label>
                      <CommonSelect
                        className='select'
                        options={sourcesChoose}
                        defaultValue={sourcesChoose[1]}
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
                  Save{" "}
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="address3"
              role="tabpanel"
              aria-labelledby="address-tab3"
              tabIndex={0}
            >
              <div className="modal-body pb-0 ">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Address <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Germany"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Country <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={countryChoose}
                        defaultValue={countryChoose[1]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        State <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={state}
                        defaultValue={state[2]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        City <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={city}
                        defaultValue={city[2]}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Zipcode <span className="text-danger"> *</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={65}
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
                  Save{" "}
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="social-profile3"
              role="tabpanel"
              aria-labelledby="social-profile-tab3"
              tabIndex={0}
            >
              <div className="modal-body pb-0 ">
                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Facebook</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Darlee Robertson"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Twitter</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="Darlee Robertson"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">LinkedIn</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="Darlee Robertson"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Skype</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="Darlee Robertson"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Whatsapp</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="Darlee Robertson"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Instagram</label>
                      <input
                        type="email"
                        className="form-control"
                        defaultValue="Darlee Robertson"
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
                  Save{" "}
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="access3"
              role="tabpanel"
              aria-labelledby="access-tab3"
              tabIndex={0}
            >
              <div className="modal-body pb-0 ">
                <div className="mb-4">
                  <h6 className="fs-14 fw-medium mb-1">Visibility</h6>
                  <div className="d-flex align-items-center">
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault4"
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="flexRadioDefault4"
                      >
                        Public
                      </label>
                    </div>
                    <div className="form-check me-3">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault5"
                        defaultChecked
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="flexRadioDefault5"
                      >
                        Private
                      </label>
                    </div>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault6"
                      />
                      <label
                        className="form-check-label text-dark"
                        htmlFor="flexRadioDefault6"
                      >
                        Select People
                      </label>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-gray br-5 mb-4">
                  <div className="d-flex align-items-center mb-3">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue=""
                      id="user-1"
                    />
                    <div className="d-flex align-items-center file-name-icon">
                      <Link
                        to="#"
                        className="avatar avatar-md border avatar-rounded"
                      >
                        <ImageWithBasePath
                          src="assets/img/reports/user-01.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fw-normal">
                          <Link to="#">Michael Walker</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue=""
                      id="user-2"
                    />
                    <div className="d-flex align-items-center file-name-icon">
                      <Link
                        to="#"
                        className="avatar avatar-md border avatar-rounded"
                      >
                        <ImageWithBasePath
                          src="assets/img/reports/user-02.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fw-normal">
                          <Link to="#">Sophie Headrick</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue=""
                      id="user-3"
                    />
                    <div className="d-flex align-items-center file-name-icon">
                      <Link
                        to="#"
                        className="avatar avatar-md border avatar-rounded"
                      >
                        <ImageWithBasePath
                          src="assets/img/reports/user-03.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fw-normal">
                          <Link to="#">Cameron Drake</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue=""
                      id="user-4"
                    />
                    <div className="d-flex align-items-center file-name-icon">
                      <Link
                        to="#"
                        className="avatar avatar-md border avatar-rounded"
                      >
                        <ImageWithBasePath
                          src="assets/img/reports/user-04.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fw-normal">
                          <Link to="#">Doris Crowley</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mb-3">
                    <input
                      className="form-check-input me-1"
                      type="checkbox"
                      defaultValue=""
                      id="user-5"
                    />
                    <div className="d-flex align-items-center file-name-icon">
                      <Link
                        to="#"
                        className="avatar avatar-md border avatar-rounded"
                      >
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-12.jpg"
                          className="img-fluid"
                          alt="img"
                        />
                      </Link>
                      <div className="ms-2">
                        <h6 className="fw-normal">
                          <Link to="#">Thomas Bordelon</Link>
                        </h6>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <Link to="#" className="btn btn-primary">
                      Confirm
                    </Link>
                  </div>
                </div>
                <div className="mb-3 ">
                  <label className="form-label">Status</label>
                  <CommonSelect
                        className='select'
                        options={status}
                        defaultValue={status[1]}
                      />
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
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                >
                  Save{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Edit Contact */}
</>

    </>





  )
}

export default AddContact
