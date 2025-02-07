import React from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
import { all_routes } from "../../../../router/all_routes";

const FormSelect2 = () => {
  const routes = all_routes;
  const selection = [
    { value: "s-1", label: "Selection-1" },
    { value: "s-2", label: "Selection-2" },
    { value: "s-3", label: "Selection-3" },
    { value: "s-4", label: "Selection-4" },
    { value: "s-5", label: "Selection-5" },
  ];
  const multiselect = [
    { value: "m-1", label: "Multiple-1" },
    { value: "m-2", label: "Multiple-2" },
    { value: "m-3", label: "Multiple-3" },
    { value: "m-4", label: "Multiple-4" },
    { value: "m-5", label: "Multiple-5" },
  ];
  const selectwithplaceholder = [
    { value: "st-1", label: "Texas" },
    { value: "st-2", label: "Georgia" },
    { value: "st-3", label: "California" },
    { value: "st-4", label: "Washington D.C" },
    { value: "st-5", label: "Virginia" },
  ];
  const multiselectwithplaceholder = [
    { value: "fr-1", label: "Apple" },
    { value: "fr-2", label: "Mango" },
    { value: "fr-3", label: "Orange" },
    { value: "fr-4", label: "Guava" },
    { value: "fr-5", label: "Pineapple" },
  ];
  const multiselectwithplaceholders = [
    { value: "fr-1", label: "Apple" },
    { value: "fr-2", label: "Mango" },
    { value: "fr-3", label: "Orange" },
    { value: "fr-4", label: "Guava" },
    { value: "fr-5", label: "Pineapple" },
  ];
  const basicselect = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];

  const smallselect = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];
  const nestedselect = [
    {
      label: "Group1",
      options: [
        { value: "orange", label: "Orange" },
        { value: "white", label: "White" },
        { value: "purple", label: "Purple" },
      ],
    },
    {
      label: "Group2",
      options: [
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
        { value: "white", label: "White" },
      ],
    },
    {
      label: "Group3",
      options: [
        { value: "white", label: "White" },
        { value: "purple", label: "Purple" },
        { value: "orange", label: "Orange" },
      ],
    },
  ];
  const disabledselect = [
    { value: "one", label: "First" },
    { value: "two", label: "Second", isDisabled: true },
    { value: "three", label: "Third" },
  ];
  const multiselectdrag = [
    { value: "orange", label: "Orange" },
    { value: "white", label: "White" },
    { value: "purple", label: "Purple" },
  ];
  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content container-fluid">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Form Select2</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Form Select2</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Select2</h5>
                </div>
                <div className="card-body">
                  <Select
                    classNamePrefix="react-select"
                    options={selection}
                    className="select"
                    placeholder="Selection-1" // Optional placeholder text
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Multiple Select</h5>
                </div>
                <div className="card-body">
                  <Select
                    classNamePrefix="react-select"
                    options={multiselect}
                    className="select2"
                    isMulti={true}
                    defaultValue={[multiselect[0]]}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Single Select With Placeholder</h5>
                </div>
                <div className="card-body">
                  <Select
                    classNamePrefix="react-select"
                    options={selectwithplaceholder}
                    //className="select2 form-control"
                    defaultValue={selectwithplaceholder[0]} // Set the default selected option
                    placeholder="Select a state"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Multiple Select With Placeholder
                  </h5>
                </div>
                <div className="card-body">
                  <Select
                    classNamePrefix="react-select"
                    options={multiselectwithplaceholder}
                    className="js-example-placeholder-multiple select2 js-states"
                    isMulti={true}
                    placeholder="Select"
                  />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Multiple Select With Placeholder
                  </h5>
                </div>
                <div className="card-body">
                  <Select
                    classNamePrefix="react-select"
                    options={multiselectwithplaceholders}
                    className="select2"
                    isMulti={true}
                    placeholder="Select fruits"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              {/* Basic */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Use select2() function on select element to convert it
                        to Select 2.
                      </p>
                      <Select
                        classNamePrefix="react-select"
                        options={basicselect}
                        className="js-example-basic-single select2"
                        defaultValue={basicselect[0]} // Set the default selected option
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Basic */}
              {/* Nested */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Nested</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Add options inside the optgroups to for group options.
                      </p>
                      <Select
                        classNamePrefix="react-select"
                        options={nestedselect}
                        //className="form-control nested"
                        defaultValue={nestedselect[0].options[0]} // Set the default selected option
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* /Nested */}
              {/* Placeholder */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Placeholder</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Apply Placeholder by setting option placeholder option.
                      </p>
                      <select className="placeholder js-states form-control">
                        <option>Choose...</option>
                        <option value="one">First</option>
                        <option value="two">Second</option>
                        <option value="three">Third</option>
                        <option value="four">Fourth</option>
                        <option value="five">Fifth</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Placeholder */}
              {/* Tagging with multi-value */}
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Tagging with multi-value select boxes
                  </h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>Set tags: true to convert select 2 in Tag mode.</p>
                      <select className="form-control tagging">
                        <option>orange</option>
                        <option>white</option>
                        <option>purple</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Tagging with multi-value */}
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Small Select2</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Use data( select2) function to get container of select2.
                      </p>
                      <Select
                        classNamePrefix="react-select"
                        options={smallselect}
                        // className="form-control form-small select"
                        defaultValue={smallselect[0]} // Set the default selected option
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Disabling options</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>Disable Select using disabled attribute.</p>
                      <Select
                        classNamePrefix="react-select"
                        options={disabledselect}
                        //className="form-control disabled-results"
                        defaultValue={disabledselect[0]} // Set the default selected option
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Limiting the number of Tagging</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <p>
                        Set maximumSelectionLength: 2 with tags: true to limit
                        selectin in Tag mode.
                      </p>
                      <Select
                        classNamePrefix="react-select"
                        options={multiselectdrag}
                        isMulti
                        className="tagging"
                        placeholder="Select or add tags"
                      />
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

export default FormSelect2;
