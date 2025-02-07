import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../../../router/all_routes";

const FormVertical = () => {
  const routes = all_routes;
  const bloodgroup = [
    { value: "Select", label: "Select" },
    { value: "A+", label: "A+" },
    { value: "O+", label: "O+" },
    { value: "B+", label: "B+" },
    { value: "AB+", label: "AB+" },
  ];
  const statelist = [
    { value: "Select State", label: "Select State" },
    { value: "California", label: "California" },
    { value: "Texas", label: "Texas" },
    { value: "Florida", label: "Florida" },
  ];
  const countrylist = [
    { value: "Select Country", label: "Select Country" },
    { value: "USA", label: "USA" },
    { value: "France", label: "France" },
    { value: "India", label: "India" },
    { value: "Spain", label: "Spain" },
  ];
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Vertical Form</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Vertical Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Email Address</label>
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Repeat Password</label>
                      <input type="password" className="form-control" />
                    </div>
                    <div className="text-end">
                      <Link to="#" className="btn btn-primary">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Address Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="mb-3">
                      <label className="form-label">Address Line 1</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Address Line 2</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">City</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">State</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Country</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Postal Code</label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="text-end">
                      <Link to="#" className="btn btn-primary">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Two Column Vertical Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <h5 className="card-title">Personal Information</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">First Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Last Name</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Blood Group</label>
                          <Select classNamePrefix="react-select"
                            className="select"
                            options={bloodgroup}
                            placeholder="Select"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="d-block">Gender:</label>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_male"
                              defaultValue="option1"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_male"
                            >
                              Male
                            </label>
                          </div>
                          <div className="form-check form-check-inline">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="gender"
                              id="gender_female"
                              defaultValue="option2"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="gender_female"
                            >
                              Female
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Username</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Repeat Password</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <h5 className="card-title">Postal Address</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Address Line 1</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Address Line 2</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">State</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">City</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Country</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Postal Code</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <Link to="#" className="btn btn-primary">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Two Column Vertical Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-md-6">
                        <h5 className="card-title">Personal details</h5>
                        <div className="mb-3">
                          <label className="form-label">Name:</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Password:</label>
                          <input type="password" className="form-control" />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">State:</label>
                          <Select classNamePrefix="react-select"
                            className="select"
                            options={statelist}
                            placeholder="Select"
                          />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Your Message:</label>
                          <textarea
                            rows={5}
                            cols={5}
                            className="form-control"
                            placeholder="Enter message"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <h5 className="card-title">Personal details</h5>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">First Name:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Last Name:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Email:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Phone:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="mb-3">
                              <label className="form-label">
                                Address line:
                              </label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">Country:</label>
                              <Select classNamePrefix="react-select"
                                className="select"
                                options={countrylist}
                                placeholder="Select"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label>State/Province:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">ZIP code:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="mb-3">
                              <label className="form-label">City:</label>
                              <input type="text" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <Link to="#" className="btn btn-primary">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Vertical Forms with icon</div>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label htmlFor="form-text1" className="form-label fs-14">
                      Enter name
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="feather-user" />
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="form-text1"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="form-password1"
                      className="form-label fs-14"
                    >
                      Enter Password
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="feather-lock" />
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="form-password1"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="form-password1"
                      className="form-label fs-14"
                    >
                      Enter Repeat Password
                    </label>
                    <div className="input-group">
                      <div className="input-group-text">
                        <i className="feather-lock" />
                      </div>
                      <input
                        type="password"
                        className="form-control"
                        id="form-password1"
                        placeholder=""
                      />
                    </div>
                  </div>
                  <Link className="btn btn-primary" to="#">
                    Submit
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Horizontal form label sizing</div>
                </div>
                <div className="card-body">
                  <div className="mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      id="colFormLabelSm"
                      placeholder="col-form-label-sm"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="colFormLabel" className="col-form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="colFormLabel"
                      placeholder="col-form-label"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="colFormLabelLg"
                      className="col-form-label col-form-label-lg"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="colFormLabelLg"
                      placeholder="col-form-label-lg"
                    />
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

export default FormVertical;
