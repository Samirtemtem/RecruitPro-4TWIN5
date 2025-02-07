import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../../../router/all_routes";
import { Lock, Mail } from "react-feather";

const FormHorizontal = () => {
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
                <h3 className="page-title">Horizontal Form</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Horizontal Form</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title">Basic Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        First Name
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Last Name
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Email Address
                      </label>
                      <div className="col-lg-9">
                        <input type="email" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Username
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Password
                      </label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Repeat Password
                      </label>
                      <div className="col-lg-9">
                        <input type="password" className="form-control" />
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
            <div className="col-xl-6 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <h5 className="card-title">Address Form</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Address 1
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Address 2
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">City</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">State</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">Country</label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label className="col-lg-3 col-form-label">
                        Postal Code
                      </label>
                      <div className="col-lg-9">
                        <input type="text" className="form-control" />
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
                  <h5 className="card-title">Two Column Horizontal Form</h5>
                </div>
                <div className="card-body">
                  <h6 className="mb-3">Personal Information</h6>
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            First Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Last Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Gender
                          </label>
                          <div className="col-lg-9">
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
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Blood Group
                          </label>
                          <div className="col-lg-9">
                            <Select classNamePrefix="react-select"
                              className="select"
                              options={bloodgroup}
                              placeholder="Select"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Username
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Email
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Repeat Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <h6 className="mb-3">Address</h6>
                    <div className="row">
                      <div className="col-xl-6">
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Address Line 1
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Address Line 2
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            State
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            City
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Country
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Postal Code
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
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
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Two Column Horizontal Form 2</h5>
                </div>
                <div className="card-body">
                  <form action="#">
                    <div className="row">
                      <div className="col-xl-6">
                        <h6 className="mb-3">Personal Information</h6>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            First Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Last Name
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Password
                          </label>
                          <div className="col-lg-9">
                            <input type="password" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            State
                          </label>
                          <div className="col-lg-9">
                            <Select classNamePrefix="react-select"
                              className="select"
                              options={statelist}
                              placeholder="Select"
                            />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            About
                          </label>
                          <div className="col-lg-9">
                            <textarea
                              rows={4}
                              cols={5}
                              className="form-control"
                              placeholder="Enter message"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-xl-6">
                        <h6 className="mb-3">Personal Details</h6>
                        <div className="row">
                          <label className="col-lg-3 col-form-label">
                            Name
                          </label>
                          <div className="col-lg-9">
                            <div className="row">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Email
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Phone
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label className="col-lg-3 col-form-label">
                            Address
                          </label>
                          <div className="col-lg-9">
                            <input type="text" className="form-control" />
                            <div className="row mt-4">
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <Select classNamePrefix="react-select"
                                    className="select"
                                    options={countrylist}
                                    placeholder="Select"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="ZIP code"
                                    className="form-control"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="State/Province"
                                    className="form-control"
                                  />
                                </div>
                                <div className="mb-3">
                                  <input
                                    type="text"
                                    placeholder="City"
                                    className="form-control"
                                  />
                                </div>
                              </div>
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
                  <div className="card-title">Horizontal form With Icons</div>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputEmail1"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input
                            type="email"
                            className="form-control"
                            id="inputEmail1"
                          />
                          <div className="input-group-text">
                            <Mail />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label
                        htmlFor="inputPassword1"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <div className="input-group">
                          <input
                            type="password"
                            className="form-control"
                            id="inputPassword1"
                          />
                          <div className="input-group-text">
                            <Lock />
                          </div>
                        </div>
                      </div>
                    </div>
                    <Link to="#" className="btn btn-primary">
                      Sign in
                    </Link>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Horizontal form label sizing</div>
                </div>
                <div className="card-body">
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabelSm"
                      className="col-sm-2 col-form-label col-form-label-sm"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control form-control-sm"
                        id="colFormLabelSm"
                        placeholder="col-form-label-sm"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="colFormLabel"
                      className="col-sm-2 col-form-label"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        id="colFormLabel"
                        placeholder="col-form-label"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <label
                      htmlFor="colFormLabelLg"
                      className="col-sm-2 col-form-label col-form-label-lg"
                    >
                      Email
                    </label>
                    <div className="col-sm-10">
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
          <div className="row">
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Auto sizing</div>
                </div>
                <div className="card-body">
                  <form className="row gy-2 gx-3 align-items-center mb-4">
                    <div className="col-auto">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingInput"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="autoSizingInput"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="col-auto">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingInputGroup"
                      >
                        Username
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                          type="text"
                          className="form-control"
                          id="autoSizingInputGroup"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-auto">
                      <label
                        className="visually-hidden"
                        htmlFor="autoSizingSelect"
                      >
                        Preference
                      </label>
                      <select className="form-select" id="autoSizingSelect">
                        <option >Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="autoSizingCheck"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoSizingCheck"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <Link to="#" className="btn btn-primary">
                        Submit
                      </Link>
                    </div>
                  </form>
                  <span className="fw-semibold mb-1 text-muted">
                    You can then remix that once again with size-specific column
                    classes.
                  </span>
                  <form className="row gx-3 gy-2 align-items-center mt-0">
                    <div className="col-sm-3">
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeInputName"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="specificSizeInputName"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div className="col-sm-3">
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeInputGroupUsername"
                      >
                        Username
                      </label>
                      <div className="input-group">
                        <div className="input-group-text">@</div>
                        <input
                          type="text"
                          className="form-control"
                          id="specificSizeInputGroupUsername"
                          placeholder="Username"
                        />
                      </div>
                    </div>
                    <div className="col-sm-3">
                      <label
                        className="visually-hidden"
                        htmlFor="specificSizeSelect"
                      >
                        Preference
                      </label>
                      <select className="form-select" id="specificSizeSelect">
                        <option >Choose...</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                      </select>
                    </div>
                    <div className="col-auto">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="autoSizingCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoSizingCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <Link to="#" className="btn btn-primary">
                        Submit
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormHorizontal;
