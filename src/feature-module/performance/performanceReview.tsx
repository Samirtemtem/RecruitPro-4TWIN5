import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../router/all_routes";
import CommonSelect from "../../core/common/commonSelect";
import CollapseHeader from "../../core/common/collapse-header/collapse-header";
const PerformanceReview = () => {
  const routes = all_routes;
  const yesNo = [
    { value: "Select", label: "Select" },
    { value: "Yes", label: "Yes" },
    { value: "No", label: "No" },
  ];
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          {/* Breadcrumb */}
          <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
            <div className="my-auto mb-2">
              <h2 className="mb-1">Performance Review</h2>
              <nav>
                <ol className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>
                      <i className="ti ti-smart-home" />
                    </Link>
                  </li>
                  <li className="breadcrumb-item">Performance</li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Performance Review
                  </li>
                </ol>
              </nav>
            </div>
            <div className="head-icons ms-2">
              <CollapseHeader />
            </div>
          </div>
          {/* /Breadcrumb */}
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Employee Basic Information</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="table-responsive">
                  <table className="table table-bordered table-nowrap mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <form>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="name">
                                Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="depart3">
                                Department
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="depart3"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="departa">
                                Designation
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="departa"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="qualif">
                                Qualification:{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="qualif"
                              />
                            </div>
                          </form>
                        </td>
                        <td>
                          <form>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="eid">
                                Emp ID
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="eid"
                                defaultValue="DGT-009"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="doj">
                                Date of Join
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="doj"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="doc">
                                Date of Confirmation
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="doc"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="qualif1">
                                Previous years of Exp
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="qualif1"
                              />
                            </div>
                          </form>
                        </td>
                        <td>
                          <form>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="name1">
                                {" "}
                                RO's Name
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="name1"
                              />
                            </div>
                            <div className="mb-3">
                              <label className="form-label" htmlFor="depart1">
                                {" "}
                                RO Designation:{" "}
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="depart1"
                              />
                            </div>
                          </form>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Professional Excellence</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Key Result Area</th>
                        <th>Key Performance Indicators</th>
                        <th>Weightage</th>
                        <th>
                          Percentage achieved <br />( self Score )
                        </th>
                        <th>
                          Points Scored <br />( self )
                        </th>
                        <th>
                          Percentage achieved <br />( RO's Score )
                        </th>
                        <th>
                          Points Scored <br />( RO )
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan={2}>1</td>
                        <td rowSpan={2}>Production</td>
                        <td>Quality</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={30}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>TAT (turn around time)</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={30}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Process Improvement</td>
                        <td>PMS,New Ideas</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={10}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Team Management</td>
                        <td>Team Productivity,dynaics,attendance,attrition</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={5}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Knowledge Sharing</td>
                        <td>Sharing the knowledge for team productivity </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={5}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Reporting and Communication</td>
                        <td>Emails/Calls/Reports and Other Communication</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={5}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="text-center">
                          Total{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={85}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Personal Excellence</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Personal Attributes</th>
                        <th>Key Indicators</th>
                        <th>Weightage</th>
                        <th>
                          Percentage achieved <br />( self Score )
                        </th>
                        <th>
                          Points Scored <br />( self )
                        </th>
                        <th>
                          Percentage achieved <br />( RO's Score )
                        </th>
                        <th>
                          Points Scored <br />( RO )
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan={2}>1</td>
                        <td rowSpan={2}>Attendance</td>
                        <td>Planned or Unplanned Leaves</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={2}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Time Consciousness</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={2}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td rowSpan={2}>2</td>
                        <td rowSpan={2}>Attitude &amp; Behavior</td>
                        <td>Team Collaboration</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={2}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Professionalism &amp; Responsiveness</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={2}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Policy &amp; Procedures </td>
                        <td>Adherence to policies and procedures</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={2}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Initiatives</td>
                        <td>Special Efforts, Suggestions,Ideas,etc.</td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={2}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Continuous Skill Improvement</td>
                        <td>
                          Preparedness to move to next level &amp; Training
                          utilization
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={3}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="text-center">
                          Total{" "}
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={15}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={3} className="text-center">
                          <b>Total Percentage(%)</b>
                        </td>
                        <td colSpan={5} className="text-center">
                          <input
                            type="text"
                            className="form-control"
                            readOnly
                            defaultValue={0}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td colSpan={8} className="text-center">
                          <div className="grade-span">
                            <h4>Grade</h4>
                            <span className="badge bg-inverse-danger">
                              Below 65 Poor
                            </span>
                            <span className="badge bg-inverse-warning">
                              65-74 Average
                            </span>
                            <span className="badge bg-inverse-info">
                              75-84 Satisfactory
                            </span>
                            <span className="badge bg-inverse-purple">
                              85-92 Good
                            </span>
                            <span className="badge bg-inverse-success">
                              Above 92 Excellent
                            </span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">
                Special Initiatives, Achievements, contributions if any
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered table-review mb-0"
                    id="table_achievements"
                  >
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th className="width-64">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-add-row"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_achievements_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Comments on the role</h3>
              <p className="text-muted">
                alterations if any requirred like addition/deletion of
                responsibilities
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered mb-0"
                    id="table_alterations"
                  >
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th className="width-64">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-add-row"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_alterations_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Comments on the role</h3>
              <p className="text-muted">
                alterations if any requirred like addition/deletion of
                responsibilities
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Strengths</th>
                        <th>Area's for Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">
                Appraisee's Strengths and Areas for Improvement perceived by the
                Reporting officer
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Strengths</th>
                        <th>Area's for Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">
                Appraisee's Strengths and Areas for Improvement perceived by the
                Head of the Department
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Strengths</th>
                        <th>Area's for Improvement</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Personal Goals</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Goal Achieved during last year</th>
                        <th>Goal set for current year</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Personal Updates</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Last Year</th>
                        <th>Yes/No</th>
                        <th>Details</th>
                        <th>Current Year</th>
                        <th>Yes/No</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Married/Engaged?</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Marriage Plans</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Higher Studies/Certifications?</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Plans For Higher Study</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Health Issues?</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Certification Plans</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Others</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>Others</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">
                Professional Goals Achieved for last year
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0" id="table_goals">
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th className="width-64">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-add-row"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_goals_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">
                Professional Goals for the forthcoming year
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered mb-0"
                    id="table_forthcoming"
                  >
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th className="width-64">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-add-row"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_forthcoming_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">Training Requirements</h3>
              <p className="text-muted">
                if any to achieve the Performance Standard Targets completely
              </p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered mb-0"
                    id="table_targets"
                  >
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>By Self</th>
                        <th>RO's Comment</th>
                        <th>HOD's Comment</th>
                        <th className="width-64">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-add-row"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="table_targets_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">
                Any other general comments, observations, suggestions etc.
              </h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table
                    className="table table-bordered mb-0"
                    id="general_comments"
                  >
                    <thead>
                      <tr>
                        <th className="width-pixel">#</th>
                        <th>Self</th>
                        <th>RO</th>
                        <th>HOD</th>
                        <th className="width-64">
                          <button
                            type="button"
                            className="btn btn-primary btn-sm btn-add-row"
                          >
                            <i className="fa-solid fa-plus" />
                          </button>
                        </th>
                      </tr>
                    </thead>
                    <tbody id="general_comments_tbody">
                      <tr>
                        <td>1</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td />
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">For RO's Use Only</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th />
                        <th>Yes/No</th>
                        <th>If Yes - Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>The Team member has Work related Issues</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>The Team member has Leave Issues</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>The team member has Stability Issues</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          The Team member exhibits non-supportive attitude
                        </td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Any other points in specific to note about the team
                          member
                        </td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Overall Comment /Performance of the team member</td>
                        <td>
                          <CommonSelect
                            className="select"
                            options={yesNo}
                            defaultValue={yesNo[0]}
                          />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <section className="card border-0">
            <div className="card-header border border-bottom-0 text-center">
              <h3 className="mb-2">For HRD's Use Only</h3>
              <p className="text-muted">Lorem ipsum dollar</p>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="table-responsive">
                  <table className="table table-bordered mb-0">
                    <thead>
                      <tr>
                        <th>Overall Parameters</th>
                        <th>Available Points</th>
                        <th>Points Scored</th>
                        <th>RO's Comment</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          KRAs Target Achievement Points (will be considered
                          from the overall score specified in this document by
                          the Reporting officer)
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Professional Skills Scores (RO's Points furnished in
                          the skill &amp; attitude assessment sheet will be
                          considered)
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Personal Skills Scores (RO's Points furnished in the
                          skill &amp; attitude assessment sheet will be
                          considered)
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Special Achievements Score (HOD to furnish)</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                      <tr>
                        <td>Overall Total Score</td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                        <td>
                          <input type="text" className="form-control" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
          <div className="row mb-4">
            <div className="col-md-12">
              <div className="table-responsive">
                <table className="table table-bordered mb-0">
                  <thead>
                    <tr>
                      <th />
                      <th>Name</th>
                      <th>Signature</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Employee</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>Reporting Officer</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>HOD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                    <tr>
                      <td>HRD</td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
          <p className="mb-0">2014 - 2025 © SmartHR.</p>
          <p>
            Designed &amp; Developed By{" "}
            <Link to="#" className="text-primary">
              Dreams
            </Link>
          </p>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  );
};

export default PerformanceReview;
