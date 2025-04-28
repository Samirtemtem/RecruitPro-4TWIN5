import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import { AccountType, deals, DocumentType, owner } from '../common/selectoption/selectoption';

const AddDocument = () => {
  const [newContents, setNewContents] = useState<number[]>([0]);
  const [newContents2, setNewContents2] = useState<number[]>([0]);
  const [currentStep, setCurrentStep] = useState(1);
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
});

const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prevState) => ({
        ...prevState,
        [field]: !prevState[field],
    }));
};
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const addNewContent = () => {
    setNewContents([...newContents, newContents.length]);
  };
  const removeContent = (index:any) => {
    setNewContents(newContents.filter((_, i) => i !== index));
  };
  const addNewContent2 = () => {
    setNewContents2([...newContents2, newContents2.length]);
  };
  const removeContent2 = (index:any) => {
    setNewContents2(newContents2.filter((_, i) => i !== index));
  };
  return (
    <>
    <>
  {/* Create File */}
  <div className="modal fade" id="create_file" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header header-border align-items-center justify-content-between">
          <h5 className="modal-title">Create New File</h5>
          <button
            type="button"
            className="btn-close custom-btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="add-info-fieldset">
          <div className="add-details-wizard p-3 pb-0">
            <ul className="progress-bar-wizard d-flex align-items-center border-bottom">
              <li className={`p-2 pt-0 ${currentStep === 1 ? 'active' : ''}`}>
                <h6 className="fw-medium">Basic Information</h6>
              </li>
              <li className={`p-2 pt-0 ${currentStep === 2 ? 'active' : ''}`}>
                <h6 className="fw-medium">Add Recipient</h6>
              </li>
            </ul>
          </div>
          {
                currentStep === 1 && (
          <fieldset id="first-field-file">
            <form >
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Title <span className="text-danger"> *</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Choose Deal <span className="text-danger"> *</span>
                      </label>
                      <CommonSelect
                        className='select'
                        options={deals}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Document Type <span className="text-danger"> *</span>
                      </label>
                      
                      <CommonSelect
                        className='select'
                        options={DocumentType}
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
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Username <span className="text-danger"> *</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Email <span className="text-danger"> *</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                      <input
                        type={
                            passwordVisibility.password
                                ? "text"
                                : "password"
                        }
                        className="pass-input form-control"
                    />
                    <span
                        className={`ti toggle-passwords ${passwordVisibility.password
                            ? "ti-eye"
                            : "ti-eye-off"
                            }`}
                        onClick={() =>
                            togglePasswordVisibility("password")
                        }
                    ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3 ">
                      <label className="form-label">
                        Confirm Password <span className="text-danger"> *</span>
                      </label>
                      <div className="pass-group">
                      <input
                            type={
                                passwordVisibility.confirmPassword
                                    ? "text"
                                    : "password"
                            }
                            className="pass-input form-control"
                        />
                        <span
                            className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                                ? "ti-eye"
                                : "ti-eye-off"
                                }`}
                            onClick={() =>
                                togglePasswordVisibility("confirmPassword")
                            }
                        ></span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Phone Number <span className="text-danger"> *</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Company</label>
                      <input className="form-control" type="text" />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="bg-light-500 rounded p-3 pb-0 mb-3">
                      <h4>Signature</h4>
                      <ul className="nav">
                        <li className="nav-item form-check form-check-md mb-2">
                          <span data-bs-toggle="tab" data-bs-target="#nosign">
                            <input
                              type="radio"
                              className="form-check-input mt-2"
                              id="sign1"
                              name="email"
                            />
                            <label htmlFor="sign1" className="form-check-label">
                              <span className="d-block fw-medium text-dark mb-1">
                                No Signature
                              </span>
                              This document does not require a signature before
                              acceptance.
                            </label>
                          </span>
                        </li>
                        <li className="nav-item form-check form-check-md mb-3">
                          <span
                            className="active mb-0"
                            data-bs-toggle="tab"
                            data-bs-target="#use-esign"
                          >
                            <input
                              type="radio"
                              className="form-check-input mt-2"
                              id="sign2"
                              name="email"
                              defaultChecked
                            />
                            <label htmlFor="sign2" className="form-check-label">
                              <span className="d-block fw-medium text-dark mb-1">
                                Use e-signature
                              </span>
                              This document require e-signature before
                              acceptance.
                            </label>
                          </span>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade" id="nosign" />
                        <div className="tab-pane show active" id="use-esign">
                          <div className="mb-0">
                            <label className="form-label">
                              Document Signers{" "}
                              <span className="text-danger"> *</span>
                            </label>
                          </div>
                          <div className="sign-content">
                          {newContents.map((_, index) => (
                            <div key={index}>
                                <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex align-items-center mb-3">
                                  <div className="flex-fill me-2">
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                  <div>
                                  {newContents.length > 1 ? 
                                    <Link
                                      to="#"
                                      onClick={() => removeContent(index)}
                                      className="btn btn-icon btn-sm text-primary trash-sign"
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>:<Link
                                      to="#"
                                      onClick={addNewContent}
                                      className="btn btn-icon btn-sm add-sign text-primary"
                                    >
                                      <i className="ti ti-circle-plus" />
                                    </Link>}
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                            ))}
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div>
                      <label className="form-label">
                        Content <span className="text-danger"> *</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        placeholder="Add Content"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-light border me-2"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary wizard-next-btn"
                    type="button"
                    onClick={handleNext}
                  >
                    Next
                  </button>
                </div>
              </div>
            </form>
          </fieldset>
          )
        }
{
                currentStep === 2 && (
          <fieldset className="d-block">
            <form >
              <div className="modal-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="bg-light-500 rounded p-3 pb-0 mb-3">
                      <h4>Signature</h4>
                      <ul className="nav">
                        <li className="nav-item form-check form-check-md mb-2">
                          <span data-bs-toggle="tab" data-bs-target="#nosign2">
                            <input
                              type="radio"
                              className="form-check-input mt-2"
                              id="sign3"
                              name="email"
                            />
                            <label htmlFor="sign3" className="form-check-label">
                              <span className="d-block fw-medium text-dark mb-1">
                                No Signature
                              </span>
                              This document does not require a signature before
                              acceptance.
                            </label>
                          </span>
                        </li>
                        <li className="nav-item form-check form-check-md mb-3">
                          <span
                            className="active mb-0"
                            data-bs-toggle="tab"
                            data-bs-target="#use-esign2"
                          >
                            <input
                              type="radio"
                              className="form-check-input mt-2"
                              id="sign4"
                              name="email"
                              defaultChecked
                            />
                            <label htmlFor="sign4" className="form-check-label">
                              <span className="d-block fw-medium text-dark mb-1">
                                Use e-signature
                              </span>
                              This document require e-signature before
                              acceptance.
                            </label>
                          </span>
                        </li>
                      </ul>
                      <div className="tab-content">
                        <div className="tab-pane fade" id="nosign2" />
                        <div className="tab-pane show active" id="use-esign2">
                          <div className="mb-0">
                            <label className="form-label">
                              Document Signers{" "}
                              <span className="text-danger"> *</span>
                            </label>
                          </div>
                          <div className="sign-content">
                          {newContents2.map((_, index) => (
                            <div key={index}>
                                <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input className="form-control" type="text" />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex align-items-center mb-3">
                                  <div className="flex-fill me-2">
                                    <input
                                      className="form-control"
                                      type="text"
                                    />
                                  </div>
                                  <div>
                                  {newContents2.length > 1 ? 
                                    <Link
                                      to="#"
                                      onClick={() => removeContent2(index)}
                                      className="btn btn-icon btn-sm text-primary trash-sign"
                                    >
                                      <i className="ti ti-trash" />
                                    </Link>:<Link
                                      to="#"
                                      onClick={addNewContent2}
                                      className="btn btn-icon btn-sm add-sign text-primary"
                                    >
                                      <i className="ti ti-circle-plus" />
                                    </Link>}
                                  </div>
                                </div>
                              </div>
                            </div>
                            </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Message Subject <span className="text-danger"> *</span>
                      </label>
                      <input className="form-control" type="text" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">
                        Message Text <span className="text-danger"> *</span>
                      </label>
                      <textarea
                        className="form-control"
                        rows={3}
                        defaultValue={""}
                      />
                    </div>
                    <button type="button" className="btn btn-dark mb-3">
                      Send Now
                    </button>
                    <div className="border border-success bg-success-transparent p-3 rounded">
                      <p className="d-flex align-items-center">
                        <i className="ti ti-circle-check fs-24 me-2" /> Document
                        Sent successfully to the Selected Recipients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <div className="d-flex align-items-center justify-content-end">
                  <button
                    type="button"
                    className="btn btn-outline-light border me-2"
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-primary"
                    type="button"
                    data-bs-dismiss="modal"
                  >
                    Save &amp; Next
                  </button>
                </div>
              </div>
            </form>
          </fieldset>
        )
              }

        </div>
      </div>
    </div>
  </div>
  {/* /Create File */}
</>
<>
  {/* Connect Account */}
  <div className="modal fade" id="connect_account" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header header-border align-items-center justify-content-between">
          <h5 className="modal-title">Connect Account</h5>
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
                  <label className="form-label">
                    Account Type <span className="text-danger"> *</span>
                  </label>
                 
                  <CommonSelect
                        className='select'
                        options={ AccountType}
                      />
                </div>
              </div>
              <div className="col-md-12">
                <div>
                  <p className="text-dark fw-medium mb-2">Sync emails from</p>
                  <div className="form-check form-check-md mb-2">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="email_1"
                      name="email"
                    />
                    <label
                      htmlFor="email_1"
                      className="form-check-label text-dark"
                    >
                      Now
                    </label>
                  </div>
                  <div className="form-check form-check-md mb-2">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="email_2"
                      name="email"
                    />
                    <label
                      htmlFor="email_2"
                      className="form-check-label text-dark"
                    >
                      1 month ago
                    </label>
                  </div>
                  <div className="form-check form-check-md mb-2">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="email_3"
                      name="email"
                    />
                    <label
                      htmlFor="email_3"
                      className="form-check-label text-dark"
                    >
                      3 months ago
                    </label>
                  </div>
                  <div className="form-check form-check-md">
                    <input
                      type="radio"
                      className="form-check-input"
                      id="email_4"
                      name="email"
                    />
                    <label
                      htmlFor="email_4"
                      className="form-check-label text-dark"
                    >
                      6 months ago
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <div className="d-flex align-items-center justify-content-end m-0">
              <button
                className="btn btn-outline-light border me-2"
                type="button"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-primary"
                type="button"
                 data-bs-dismiss="modal"
              >
                Connect Account
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* /Connect Account */}
  {/* Connect Account Success */}
  <div className="modal fade" id="success_modal" role="dialog">
    <div className="modal-dialog modal-dialog-centered modal-sm">
      <div className="modal-content">
        <div className="modal-body">
          <div className="text-center p-3">
            <span className="avatar avatar-lg avatar-rounded bg-success mb-3">
              <i className="ti ti-check fs-24" />
            </span>
            <h5 className="mb-2">Email Connected Successfully!!!</h5>
            <p className="mb-3">
              Email Account is configured with{" "}
              <span className="d-block text-dark">“example@example.com”. </span>
              Now you can access email.
            </p>
            <button type="button" data-bs-dismiss="modal" className="btn btn-primary w-100">
              Go to Email
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Connect Account Success */}
</>



    </>
  )
}

export default AddDocument