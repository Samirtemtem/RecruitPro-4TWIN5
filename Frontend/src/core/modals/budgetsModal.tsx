import { DatePicker } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const BudgetsModal = () => {
  const getModalContainer = () => {
    const modalElement = document.getElementById("modal-datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };
  const getModalContainer2 = () => {
    const modalElement = document.getElementById("modal_datepicker");
    return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
  };

  return (
    <>
      {/* Add Budgets */}
      <div className="modal fade" id="add_budgets">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Add Budget</h4>
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
                      <label className="form-label">Budget Title</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Choose Budget respect type
                      </label>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadio"
                            id="budget"
                          />
                          <label className="form-label" htmlFor="budget">
                            Project
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadio"
                            id="budget1"
                          />
                          <label className="form-label" htmlFor="budget1">
                            Category
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Date </label>
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
                    <div className="mb-3">
                      <label className="form-label">End Date </label>
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
                  <div className="mb-0">
                    <label className="form-label">Expected Revenues</label>
                  </div>
                  <div className="revenues-content">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Revenue Title</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                          <div>
                            <label className="form-label">
                              Revenue Amount
                            </label>
                            <div className="d-flex align-items-center">
                              <input type="text" className="form-control" />
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  className="btn btn-icon add-revenue btn-sm btn-primary rounded-circle"
                                >
                                  <i className="ti ti-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Overall Revenue (A)
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="mb-0">
                    <label className="form-label">Expected Expenses</label>
                  </div>
                  <div className="expenses-content">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Expenses Title</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                          <div>
                            <label className="form-label">
                              Expenses Amount
                            </label>
                            <div className="d-flex align-items-center">
                              <input type="text" className="form-control" />
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  className="btn btn-icon add-expenses btn-sm btn-primary rounded-circle"
                                >
                                  <i className="ti ti-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Overall Expense (B)
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Expected Profit (C=A-B){" "}
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Tax (D) </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Budget Amount (E=C-D)
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
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Add Budget
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Add Budgets */}

      {/* Edit Budgets */}
      <div className="modal fade" id="edit_budgets">
        <div className="modal-dialog modal-dialog-centered modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Edit Budget</h4>
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
                      <label className="form-label">Budget Title</label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue="Office Supplies"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Choose Budget respect type
                      </label>
                      <div className="d-flex align-items-center">
                        <div className="form-check me-2">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadio"
                            id="budget3"
                          />
                          <label className="form-label" htmlFor="budget3">
                            Project
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadio"
                            id="budget2"
                            defaultChecked
                          />
                          <label className="form-label" htmlFor="budget2">
                            Category
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Start Date </label>
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
                    <div className="mb-3">
                      <label className="form-label">End Date </label>
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
                  <div className="mb-0">
                    <label className="form-label">Expected Revenues</label>
                  </div>
                  <div className="revenues-content">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Revenue Title</label>
                          <input
                            type="text"
                            className="form-control"
                            defaultValue="Office Supplies"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                          <div>
                            <label className="form-label">
                              Revenue Amount
                            </label>
                            <div className="d-flex align-items-center">
                              <input
                                type="text"
                                className="form-control"
                                defaultValue={250000}
                              />
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  className="btn btn-icon add-revenue btn-sm btn-primary rounded-circle"
                                >
                                  <i className="ti ti-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Overall Revenue (A)
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={250000}
                      />
                    </div>
                  </div>
                  <div className="mb-0">
                    <label className="form-label">Expected Expenses</label>
                  </div>
                  <div className="expenses-content">
                    <div className="row align-items-end">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Expenses Title</label>
                          <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-flex align-items-center mb-3">
                          <div>
                            <label className="form-label">
                              Expenses Amount
                            </label>
                            <div className="d-flex align-items-center">
                              <input type="text" className="form-control" />
                              <div className="ms-2">
                                <Link
                                  to="#"
                                  className="btn btn-icon add-expenses btn-sm btn-primary rounded-circle"
                                >
                                  <i className="ti ti-plus" />
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Overall Expense (B)
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">
                        Expected Profit (C=A-B){" "}
                      </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="mb-3">
                      <label className="form-label">Tax (D) </label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="mb-3">
                      <label className="form-label">
                        Budget Amount (E=C-D)
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
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  className="btn btn-primary"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* /Edit Budgets */}
    </>
  );
};

export default BudgetsModal;
