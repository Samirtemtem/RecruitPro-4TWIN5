import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../../router/all_routes";

const CheckboxRadios = () => {
  const routes = all_routes;
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col">
                <h3 className="page-title">Checks &amp; Radios</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Checkbox</h5>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Checked checkbox
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Disabled</h5>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckDisabled"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDisabled"
                    >
                      Disabled checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="flexCheckCheckedDisabled"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckCheckedDisabled"
                    >
                      Disabled checked checkbox
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Radios</h5>
                </div>
                <div className="card-body">
                  <div className="form-check">
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
                      Default radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Default checked radio
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Radios</h5>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDisabled"
                      id="flexRadioDisabled"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDisabled"
                    >
                      Disabled radio
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDisabled"
                      id="flexRadioCheckedDisabled"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioCheckedDisabled"
                    >
                      Disabled checked radio
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Default (stacked)</h5>
                </div>
                <div className="card-body">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      Default checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="defaultCheck2"
                      
                    />
                    <label className="form-check-label" htmlFor="defaultCheck2">
                      Disabled checkbox
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios1"
                      defaultValue="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios1"
                    >
                      Default radio
                    </label>
                  </div>
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="exampleRadios"
                      id="exampleRadios3"
                      defaultValue="option3"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="exampleRadios3"
                    >
                      Disabled radio
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Switches</h5>
                </div>
                <div className="card-body">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Default switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckChecked"
                    >
                      Checked switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDisabled"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDisabled"
                    >
                      Disabled switch checkbox input
                    </label>
                  </div>
                  <div className="form-check form-switch mb-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckCheckedDisabled"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckCheckedDisabled"
                    >
                      Disabled checked switch checkbox input
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Checkbox Sizes</div>
                </div>
                <div className="card-body d-sm-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-sm"
                    />
                    <label className="form-check-label" htmlFor="checkebox-sm">
                      Default
                    </label>
                  </div>
                  <div className="form-check form-check-md d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-md"
                    />
                    <label className="form-check-label" htmlFor="checkebox-md">
                      Medium
                    </label>
                  </div>
                  <div className="form-check form-check-lg d-flex align-items-center">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue=""
                      id="checkebox-lg"
                    />
                    <label className="form-check-label" htmlFor="checkebox-lg">
                      Large
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Radio Sizes</div>
                </div>
                <div className="card-body d-sm-flex align-items-center justify-content-between">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-sm"
                    />
                    <label className="form-check-label" htmlFor="Radio-sm">
                      Default
                    </label>
                  </div>
                  <div className="form-check form-check-md">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-md"
                    />
                    <label className="form-check-label" htmlFor="Radio-md">
                      Medium
                    </label>
                  </div>
                  <div className="form-check form-check-lg">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="Radio"
                      id="Radio-lg"
                    />
                    <label className="form-check-label" htmlFor="Radio-lg">
                      Large
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Switch Sizes</div>
                </div>
                <div className="card-body d-sm-flex align-item-center justify-content-between">
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-sm"
                    />
                    <label className="form-check-label" htmlFor="switch-sm">
                      Default
                    </label>
                  </div>
                  <div className="form-check form-check-md form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-md"
                    />
                    <label className="form-check-label" htmlFor="switch-md">
                      Medium
                    </label>
                  </div>
                  <div className="form-check form-check-lg form-switch">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      role="switch"
                      id="switch-lg"
                    />
                    <label className="form-check-label" htmlFor="switch-lg">
                      Large
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Inline</h5>
                </div>
                <div className="card-body">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      defaultValue="option1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox1"
                    >
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox2"
                      defaultValue="option2"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox2"
                    >
                      2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox3"
                      defaultValue="option3"
                      
                    />
                    <label
                      className="form-check-label"
                      htmlFor="inlineCheckbox3"
                    >
                      3 (disabled)
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      defaultValue="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      1
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      defaultValue="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      2
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio3"
                      defaultValue="option3"
                      
                    />
                    <label className="form-check-label" htmlFor="inlineRadio3">
                      3 (disabled)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header justify-content-between">
                  <h5 className="card-title">Without labels</h5>
                </div>
                <div className="card-body">
                  <span className="me-3">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="checkboxNoLabel"
                      defaultValue=""
                      aria-label="..."
                    />
                  </span>
                  <span>
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioNoLabel"
                      id="radioNoLabel1"
                      defaultValue=""
                      aria-label="..."
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckboxRadios;
