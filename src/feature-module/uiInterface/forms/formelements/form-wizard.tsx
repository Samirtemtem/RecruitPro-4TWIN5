import { Link } from "react-router-dom";

const FormWizard = () => {
  return (
    <div className="page-wrapper">
    <div className="content container-fluid">
      {/* Page Header */}
      <div className="page-header">
        <div className="content-page-header">
          <h3>Form Wizard</h3>
        </div>
      </div>
      {/* /Page Header */}
      <div className="row">
        {/* Lightbox */}
        <div className="col-lg-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title mb-0">Basic Wizard</h4>
            </div>
            <div className="card-body">
              <div className="wizard">
                <ul
                  className="nav nav-tabs justify-content-center"
                  id="myTab"
                  role="tablist"
                >
                  <li
                    className="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Seller Details"
                  >
                    <Link
                      className="nav-link active rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      to="#step1"
                      id="step1-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="step1"
                      aria-selected="true"
                    >
                      <i className="far fa-user" />
                    </Link>
                  </li>
                  <li
                    className="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Company Document"
                  >
                    <Link
                      className="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      to="#step2"
                      id="step2-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="step2"
                      aria-selected="false"
                    >
                      <i className="fas fa-map-pin" />
                    </Link>
                  </li>
                  <li
                    className="nav-item flex-fill"
                    role="presentation"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Bank Details"
                  >
                    <Link
                      className="nav-link rounded-circle mx-auto d-flex align-items-center justify-content-center"
                      to="#step3"
                      id="step3-tab"
                      data-bs-toggle="tab"
                      role="tab"
                      aria-controls="step3"
                      aria-selected="false"
                    >
                      <i className="fas fa-credit-card" />
                    </Link>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    role="tabpanel"
                    id="step1"
                    aria-labelledby="step1-tab"
                  >
                    <div className="mb-4">
                      <h4>Enter Your Personal Details</h4>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-firstname-input"
                              className="form-label"
                            >
                              First name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-firstname-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-lastname-input"
                              className="form-label"
                            >
                              Last name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-lastname-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-phoneno-input"
                              className="form-label"
                            >
                              Phone
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-phoneno-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-email-input"
                              className="form-label"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="basicpill-email-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>

                    <div className="d-flex mt-3">
                      <Link to="#" className="btn btn btn-primary next">Next</Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    role="tabpanel"
                    id="step2"
                    aria-labelledby="step2-tab"
                  >
                    <div className="mb-4">
                      <h4>Enter Your Address</h4>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-pancard-input"
                              className="form-label"
                            >
                              Address 1
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-pancard-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-vatno-input"
                              className="form-label"
                            >
                              Address 2
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-vatno-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-cstno-input"
                              className="form-label"
                            >
                              Landmark
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-cstno-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-servicetax-input"
                              className="form-label"
                            >
                              Town
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-servicetax-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex mt-3">
                      <Link to="#" className="btn btn btn-primary previous me-2">
                        {" "}
                        Back
                      </Link>
                      <Link to="#" className="btn btn btn-primary next">
                        Continue
                      </Link>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    role="tabpanel"
                    id="step3"
                    aria-labelledby="step3-tab"
                  >
                    <div className="mb-4">
                      <h4>Payment Details</h4>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-namecard-input"
                              className="form-label"
                            >
                              Name on Card
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-namecard-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label>Credit Card Type</label>
                            <select className="form-select">
                              <option >Select Card Type</option>
                              <option value="AE">American Express</option>
                              <option value="VI">Visa</option>
                              <option value="MC">MasterCard</option>
                              <option value="DI">Discover</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-cardno-input"
                              className="form-label"
                            >
                              Credit Card Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-cardno-input"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-card-verification-input"
                              className="form-label"
                            >
                              Card Verification Number
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-card-verification-input"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="form-group">
                            <label
                              htmlFor="basicpill-expiration-input"
                              className="form-label"
                            >
                              Expiration Date
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basicpill-expiration-input"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex mt-3">
                      <Link to="#" className="btn btn-primary previous me-2">
                        Previous
                      </Link>
                      <Link to="#"
                        className="btn btn-primary next"
                        data-bs-toggle="modal"
                        data-bs-target="#save_modal"
                      >
                        Save Changes
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default FormWizard;
