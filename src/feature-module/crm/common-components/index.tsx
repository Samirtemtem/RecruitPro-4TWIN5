import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import CommonTextEditor from '../../../core/common/textEditor'
import TabModals from './tab-modals'

const CommonTabs = () => {
  const Location = useLocation();
    const [showEditor,setShowEditor] = useState(false)
    const [showEditor2,setShowEditor2] = useState(false)
    const [showEditor3,setShowEditor3] = useState(false)
  return (
    <>
    <div className="col-xl-8">
        <div>
          {Location.pathname === '/deals-details' ? 
          <div className="bg-white rounded p-3 mb-3">
          <h4 className="fw-semibold mb-3">Deal Pipeline Status</h4>
          <div className="pipeline-list">
            <ul>
              <li>
                <Link to="#" className="bg-purple">
                  Quality To Buy
                </Link>
              </li>
              <li>
                <Link to="#" className="bg-info">
                  Contact Made
                </Link>
              </li>
              <li>
                <Link to="#" className="bg-warning">
                  Presentation
                </Link>
              </li>
              <li>
                <Link to="#" className="bg-pink">
                  Proposal Made
                </Link>
              </li>
              <li>
                <Link to="#">Appointment</Link>
              </li>
            </ul>
          </div>
          <ul
            className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap"
            role="tablist"
          >
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link active fw-medium d-flex align-items-center justify-content-center"
                to="#bottom-justified-tab1"
                data-bs-toggle="tab"
                aria-selected="false"
                role="tab"
              >
                <i className="ti ti-activity me-1" />
                Activities
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                to="#bottom-justified-tab2"
                data-bs-toggle="tab"
                aria-selected="false"
                role="tab"
              >
                <i className="ti ti-file-description me-1" />
                Notes
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                to="#bottom-justified-tab3"
                data-bs-toggle="tab"
                aria-selected="true"
                role="tab"
              >
                <i className="ti ti-phone-call me-1" />
                Calls
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                to="#bottom-justified-tab4"
                data-bs-toggle="tab"
                aria-selected="true"
                role="tab"
              >
                <i className="ti ti-files me-1" />
                Files
              </Link>
            </li>
            <li className="nav-item" role="presentation">
              <Link
                className="nav-link fw-medium d-flex align-items-center justify-content-center"
                to="#bottom-justified-tab5"
                data-bs-toggle="tab"
                aria-selected="true"
                role="tab"
              >
                <i className="ti ti-mail-check me-1" />
                Email
              </Link>
            </li>
          </ul>
        </div>: Location.pathname === '/leads-details' ? 
        <>
          <div className="bg-white rounded p-3 mb-3">
            <h4 className="fw-semibold mb-3">Lead Pipeline Status</h4>
            <div className="pipeline-list pipeline-list-two">
              <ul>
                <li>
                  <Link to="#" className="bg-purple">
                    Not Contacted
                  </Link>
                </li>
                <li>
                  <Link to="#" className="bg-info">
                    Contacted
                  </Link>
                </li>
                <li>
                  <Link to="#" className="bg-warning">
                    Closed
                  </Link>
                </li>
                <li>
                  <Link to="#" className="bg-danger">
                    Lost
                  </Link>
                </li>
              </ul>
            </div>
            <ul
              className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link active fw-medium d-flex align-items-center justify-content-center"
                  to="#bottom-justified-tab1"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  role="tab"
                >
                  <i className="ti ti-activity me-1" />
                  Activities
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link fw-medium d-flex align-items-center justify-content-center"
                  to="#bottom-justified-tab2"
                  data-bs-toggle="tab"
                  aria-selected="false"
                  role="tab"
                >
                  <i className="ti ti-file-description me-1" />
                  Notes
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link fw-medium d-flex align-items-center justify-content-center"
                  to="#bottom-justified-tab3"
                  data-bs-toggle="tab"
                  aria-selected="true"
                  role="tab"
                >
                  <i className="ti ti-phone-call me-1" />
                  Calls
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link fw-medium d-flex align-items-center justify-content-center"
                  to="#bottom-justified-tab4"
                  data-bs-toggle="tab"
                  aria-selected="true"
                  role="tab"
                >
                  <i className="ti ti-files me-1" />
                  Files
                </Link>
              </li>
              <li className="nav-item" role="presentation">
                <Link
                  className="nav-link fw-medium d-flex align-items-center justify-content-center"
                  to="#bottom-justified-tab5"
                  data-bs-toggle="tab"
                  aria-selected="true"
                  role="tab"
                >
                  <i className="ti ti-mail-check me-1" />
                  Email
                </Link>
              </li>
            </ul>
          </div>

        </>
        :
        <div className="bg-white rounded">
        <ul
          className="nav nav-tabs nav-tabs-bottom nav-justified flex-wrap mb-3"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link active fw-medium d-flex align-items-center justify-content-center"
              to="#bottom-justified-tab1"
              data-bs-toggle="tab"
              aria-selected="false"
              role="tab"
            >
              <i className="ti ti-activity me-1" />
              Activities
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link fw-medium d-flex align-items-center justify-content-center"
              to="#bottom-justified-tab2"
              data-bs-toggle="tab"
              aria-selected="false"
              role="tab"
            >
              <i className="ti ti-file-description me-1" />
              Notes
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link fw-medium d-flex align-items-center justify-content-center"
              to="#bottom-justified-tab3"
              data-bs-toggle="tab"
              aria-selected="true"
              role="tab"
            >
              <i className="ti ti-phone-call me-1" />
              Calls
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link fw-medium d-flex align-items-center justify-content-center"
              to="#bottom-justified-tab4"
              data-bs-toggle="tab"
              aria-selected="true"
              role="tab"
            >
              <i className="ti ti-files me-1" />
              Files
            </Link>
          </li>
          <li className="nav-item" role="presentation">
            <Link
              className="nav-link fw-medium d-flex align-items-center justify-content-center"
              to="#bottom-justified-tab5"
              data-bs-toggle="tab"
              aria-selected="true"
              role="tab"
            >
              <i className="ti ti-mail-check me-1" />
              Email
            </Link>
          </li>
        </ul>
      </div>
          }
        

          
          <div className="tab-content">
            <div
              className="tab-pane active show"
              id="bottom-justified-tab1"
              role="tabpanel"
            >
              <div className="card border-0">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between">
                    <h5>Activities</h5>
                    <div className="dropdown">
                      <Link
                        to="#"
                        className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                        data-bs-toggle="dropdown"
                      >
                        Sort By : Last 7 Days
                      </Link>
                      <ul className="dropdown-menu  dropdown-menu-end p-3">
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Recently Added
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Ascending
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Desending
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last Month
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="#"
                            className="dropdown-item rounded-1"
                          >
                            Last 7 Days
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <span className="badge badge-soft-purple d-inline-flex align-items-center mb-3">
                    <i className="ti ti-calendar me-1" />
                    15 Feb 2024
                  </span>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-start">
                      <span className="avatar avatar-md avatar-rounded flex-shrink-0 bg-skyblue me-2">
                        <i className="ti ti-message-circle-2 fs-20" />
                      </span>
                      <div>
                        <h6 className="fw-medium mb-1">
                          You sent 1 Message to the contact.
                        </h6>
                        <span>10:25 pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-start">
                      <span className="avatar avatar-md avatar-rounded bg-success flex-shrink-0 me-2">
                        <i className="ti ti-phone fs-20" />
                      </span>
                      <div>
                        <h6 className="fw-medium mb-1">
                          Denwar responded to your appointment schedule question
                          by call at 09:30pm.
                        </h6>
                        <span>09:25 pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-start">
                      <span className="avatar avatar-md avatar-rounded flex-shrink-0 bg-warning me-2">
                        <i className="ti ti-file-description fs-20" />
                      </span>
                      <div>
                        <h6 className="fw-medium mb-1">
                          Notes added by Antony
                        </h6>
                        <p className="mb-1">
                          Please accept my apologies for the inconvenience
                          caused. It would be much appreciated if it's possible
                          to reschedule to 6:00 PM, or any other day that week.
                        </p>
                        <span>10.00 pm</span>
                      </div>
                    </div>
                  </div>
                  <span className="badge badge-soft-purple d-inline-flex align-items-center mb-3">
                    <i className="ti ti-calendar me-1" />
                    15 Feb 2024
                  </span>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-start">
                      <span className="avatar avatar-md avatar-rounded flex-shrink-0 bg-purple me-2">
                        <i className="ti ti-user-circle fs-20" />
                      </span>
                      <div>
                        <h6 className="fw-medium d-flex align-items-center mb-1">
                          Meeting With
                          <span className="avatar avatar-sm avatar-rounded mx-1">
                            <ImageWithBasePath
                              src="assets/img/profiles/avatar-02.jpg"
                              alt="Img"
                            />
                          </span>
                          Abraham
                        </h6>
                        <span>Schedueled on 05:00 pm</span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-start">
                      <span className="avatar avatar-md avatar-rounded bg-success flex-shrink-0 me-2">
                        <i className="ti ti-phone fs-20" />
                      </span>
                      <div>
                        <h6 className="fw-medium mb-1">
                          Drain responded to your appointment schedule question.
                        </h6>
                        <span>09:25 pm</span>
                      </div>
                    </div>
                  </div>
                  <span className="badge badge-soft-purple d-inline-flex align-items-center mb-3">
                    <i className="ti ti-calendar me-1" />
                    Upcoming Activity
                  </span>
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-start mb-2">
                      <span className="avatar avatar-md avatar-rounded flex-shrink-0 bg-purple me-2">
                        <i className="ti ti-user-circle fs-20" />
                      </span>
                      <div>
                        <h6 className="fw-medium mb-1">Product Meeting</h6>
                        <p className="mb-1">
                          A product team meeting is a gathering of the
                          cross-functional product team — ideally including team
                          members from product, engineering, marketing, and
                          customer support.
                        </p>
                        <span>Schedueled on 05:00 pm</span>
                      </div>
                    </div>
                    <div className="bg-light-500 rounded p-3">
                      <div className="row">
                        <div className="col-md-4 col-sm-6">
                          <div>
                            <h6 className="fs-12 fw-medium mb-2">Reminder</h6>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                              >
                                <i className="clock-hour-3 me-1" />
                                Reminder
                              </Link>
                              <ul className="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                  >
                                    Reminder
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                  >
                                    1 Hr
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                  >
                                    10 Hr
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div>
                            <h6 className="fs-12 fw-medium mb-2">
                              Task Priority
                            </h6>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="dropdown-toggle btn-sm btn btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                              >
                                <span className="border border-purple rounded-circle bg-soft-danger d-flex justify-content-center align-items-center me-1">
                                  <i className="ti ti-point-filled text-danger" />
                                </span>
                                High
                              </Link>
                              <ul className="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                  >
                                    High
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                  >
                                    Medium
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1"
                                  >
                                    Low
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                          <div>
                            <h6 className="fs-12 fw-medium mb-2">
                              Assigned to
                            </h6>
                            <div className="dropdown">
                              <Link
                                to="#"
                                className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                                data-bs-toggle="dropdown"
                              >
                                <span className="avatar avatar-xs avatar-rounded me-1">
                                  <ImageWithBasePath
                                    src="assets/img/profiles/avatar-02.jpg"
                                    alt="Img"
                                  />
                                </span>
                                John
                              </Link>
                              <ul className="dropdown-menu  dropdown-menu-end p-3">
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                  >
                                    <span className="avatar avatar-xs avatar-rounded me-1">
                                      <ImageWithBasePath
                                        src="assets/img/profiles/avatar-02.jpg"
                                        alt="Img"
                                      />
                                    </span>
                                    John
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                  >
                                    <span className="avatar avatar-xs avatar-rounded me-1">
                                      <ImageWithBasePath
                                        src="assets/img/profiles/avatar-01.jpg"
                                        alt="Img"
                                      />
                                    </span>
                                    Sophie
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to="#"
                                    className="dropdown-item rounded-1 d-flex align-items-center"
                                  >
                                    <span className="avatar avatar-xs avatar-rounded me-1">
                                      <ImageWithBasePath
                                        src="assets/img/profiles/avatar-03.jpg"
                                        alt="Img"
                                      />
                                    </span>
                                    Estelle
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="bottom-justified-tab2"
              role="tabpanel"
            >
              <div className="card border-0">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>Notes</h5>
                    <div className="d-flex align-items-center">
                      <div className="dropdown me-2">
                        <Link
                          to="#"
                          className="dropdown-toggle btn btn-sm btn-white d-inline-flex align-items-center"
                          data-bs-toggle="dropdown"
                        >
                          Sort By : Last 7 Days
                        </Link>
                        <ul className="dropdown-menu  dropdown-menu-end p-3">
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Recently Added
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Ascending
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Desending
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Last Month
                            </Link>
                          </li>
                          <li>
                            <Link
                              to="#"
                              className="dropdown-item rounded-1"
                            >
                              Last 7 Days
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <Link
                        to="#"
                        className="d-inline-flex align-items-center text-primary fw-medium"
                        data-bs-toggle="modal"
                        data-bs-target="#add_notes"
                      >
                        <i className="ti ti-circle-plus me-1" />
                        Add Note
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-19.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fw-medium mb-1">Darlee Robertson</h6>
                          <span>15 Sep 2023, 12:10 pm</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-medium mb-2">Notes added by Antony</h6>
                      <p className="mb-3">
                        A project review evaluates the success of an initiative
                        and identifies areas for improvement. It can also
                        evaluate a current project to determine whether it's on
                        the right track. Or, it can determine the success of a
                        completed project.
                      </p>
                      <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                        <div className="border rounded d-flex align-items-center justify-content-between hover-border p-3">
                          <div className="d-flex align-items-center me-4">
                            <span className="avatar avatar-lg bg-success avatar-rounded flex-shrink-0 me-2">
                              <i className="ti ti-file-type-xls fs-24" />
                            </span>
                            <div>
                              <h6 className="fw-medium">Project Specs.xls</h6>
                              <span>365 KB</span>
                            </div>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm fs-16"
                          >
                            <i className="ti ti-download" />
                          </Link>
                        </div>
                        <div className="border rounded d-flex align-items-center justify-content-between hover-border p-3">
                          <div className="d-flex align-items-center me-4">
                            <span className="avatar avatar-lg avatar-rounded flex-shrink-0 me-2">
                              <ImageWithBasePath
                                src="assets/img/media/media-07.jpg"
                                alt="Img"
                              />
                            </span>
                            <div>
                              <h6 className="fw-medium">090224.jpg</h6>
                              <span>365 KB</span>
                            </div>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm fs-16"
                          >
                            <i className="ti ti-download" />
                          </Link>
                        </div>
                      </div>
                      <div className="notes-editor">
                        <div className={`note-edit-wrap ${showEditor && 'd-block'}`} >
                          <div className="mb-3">
                            <CommonTextEditor defaultValue="This is the default content."/>
                          </div>
                          <div className="d-flex align-items-center justify-content-end mb-3">
                            <Link
                              to="#"
                              onClick={()=>setShowEditor(false)}
                              className="btn btn-outline-light border add-cancel me-3"
                            >
                              Cancel
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-primary"
                            >
                              Save
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            onClick={()=>setShowEditor(true)}
                            className="d-flex align-items-center justify-content-end text-primary fw-medium add-comment"
                          >
                            <i className="ti ti-circle-plus me-1" />
                            Add Comment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fw-medium mb-1">Sharon Roy</h6>
                          <span>18 Sep 2023, 09:52 am</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-medium mb-2">Notes added by Antony</h6>
                      <p className="mb-3">
                        A project plan typically contains a list of the
                        essential elements of a project, such as stakeholders,
                        scope, timelines, estimated cost and communication
                        methods. The project manager typically lists the
                        information based on the assignment.
                      </p>
                      <div className="d-flex align-items-center flex-wrap gap-3 mb-3">
                        <div className="border rounded d-flex align-items-center justify-content-between hover-border p-3">
                          <div className="d-flex align-items-center me-4">
                            <span className="avatar avatar-lg bg-purple avatar-rounded flex-shrink-0 me-2">
                              <i className="ti ti-file-description fs-24" />
                            </span>
                            <div>
                              <h6 className="fw-medium">Andrewpass.txt</h6>
                              <span>365 KB</span>
                            </div>
                          </div>
                          <Link
                            to="#"
                            className="btn btn-icon btn-sm fs-16"
                          >
                            <i className="ti ti-download" />
                          </Link>
                        </div>
                      </div>
                      <div className="bg-light-500 rounded p-3 mb-3">
                        <p className="mb-2">
                          The best way to get a project done faster is to start
                          sooner. A goal without a timeline is just a dream.The
                          goal you set must be challenging. At the same time, it
                          should be realistic and attainable, not impossible to
                          reach.
                        </p>
                        <p className="text-dark mb-2">
                          Commented by{" "}
                          <span className="text-primary"> Aeron</span> on 15 Sep
                          2023, 11:15 pm
                        </p>
                        <Link
                          to="#"
                          className="btn btn-dark d-inline-flex align-items-center"
                        >
                          <i className="ti ti-arrow-back-up me-1" />
                          Reply
                        </Link>
                      </div>
                      <div className="notes-editor">
                        <div className={`note-edit-wrap ${showEditor2 && 'd-block'}`}>
                          <div className="mb-3">
                          <CommonTextEditor defaultValue="This is the default content."/>
                          </div>
                          <div className="d-flex align-items-center justify-content-end mb-3">
                            <Link
                              to="#"
                              onClick={()=>setShowEditor2(false)}
                              className="btn btn-outline-light border add-cancel me-3"
                            >
                              Cancel
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-primary"
                            >
                              Save
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            onClick={()=>setShowEditor2(true)}
                            className="d-flex align-items-center justify-content-end text-primary fw-medium add-comment"
                          >
                            <i className="ti ti-circle-plus me-1" />
                            Add Comment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <h6 className="fw-medium mb-1">Vaughan Lewis</h6>
                          <span>20 Sep 2023, 10:26 pm</span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <h6 className="fw-medium mb-2">Notes added by Antony</h6>
                      <p className="mb-3">
                        Projects play a crucial role in the success of
                        organizations, and their importance cannot be
                        overstated. Whether it's launching a new product,
                        improving an existing
                      </p>
                      <div className="notes-editor">
                        <div className={`note-edit-wrap ${showEditor3 && 'd-block'}`}>
                          <div className="mb-3">
                          <CommonTextEditor defaultValue="This is the default content."/>
                          </div>
                          <div className="d-flex align-items-center justify-content-end mb-3">
                            <Link
                              to="#"
                              onClick={()=>setShowEditor3(false)}
                              className="btn btn-outline-light border add-cancel me-3"
                            >
                              Cancel
                            </Link>
                            <Link
                              to="#"
                              className="btn btn-primary"
                            >
                              Save
                            </Link>
                          </div>
                        </div>
                        <div>
                          <Link
                            to="#"
                            onClick={()=>setShowEditor3(true)}
                            className="d-flex align-items-center justify-content-end text-primary fw-medium add-comment"
                          >
                            <i className="ti ti-circle-plus me-1" />
                            Add Comment
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="bottom-justified-tab3"
              role="tabpanel"
            >
              <div className="card border-0">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>Calls</h5>
                    <Link
                      to="#"
                      className="d-inline-flex align-items-center text-primary fw-medium"
                      data-bs-toggle="modal"
                      data-bs-target="#add_call"
                    >
                      <i className="ti ti-circle-plus me-1" />
                      Add New
                    </Link>
                  </div>
                </div>
                <div className="card-body">
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <p className="fw-medium">
                            <span className="text-dark">Darlee Robertson </span>{" "}
                            logged a call on 23 Jul 2023, 10:00 pm
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="dropdown me-2">
                          <Link
                            to="#"
                            className="dropdown-toggle btn btn-sm bg-danger-transparent border-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            Busy
                            <i className="las la-angle-down ms-1" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end p-3">
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Busy
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              No Answer
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Unavailable
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Wrong Number
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Left Voice Message
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Moving Forward
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p>
                        A project review evaluates the success of an initiative
                        and identifies areas for improvement. It can also
                        evaluate a current project to determine whether it's on
                        the right track. Or, it can determine the success of a
                        completed project
                      </p>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-03.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <p className="fw-medium">
                            <span className="text-dark">Sharon Roy </span>{" "}
                            &nbsp;logged a call on 28 Jul 2023, 09:00 pm
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="dropdown me-2">
                          <Link
                            to="#"
                            className="dropdown-toggle btn btn-sm bg-transparent-purple border-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            No Answer
                            <i className="las la-angle-down ms-1" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end p-3">
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Busy
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              No Answer
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Unavailable
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Wrong Number
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Left Voice Message
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Moving Forward
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p>
                        A project plan typically contains a list of the
                        essential elements of a project, such as stakeholders,
                        scope, timelines, estimated cost and communication
                        methods. The project manager typically lists the
                        information based on the assignment.
                      </p>
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <p className="fw-medium">
                            <span className="text-dark">Vaughan Lewis </span>{" "}
                            logged a call on 30 Jul 2023, 08:00 pm
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <div className="dropdown me-2">
                          <Link
                            to="#"
                            className="dropdown-toggle btn btn-sm bg-transparent-purple border-0"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            No Answer
                            <i className="las la-angle-down ms-1" />
                          </Link>
                          <div className="dropdown-menu dropdown-menu-end p-3">
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Busy
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              No Answer
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Unavailable
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Wrong Number
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Left Voice Message
                            </Link>
                            <Link
                              className="dropdown-item rounded-1"
                              to="#"
                            >
                              Moving Forward
                            </Link>
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div>
                      <p>
                        Projects play a crucial role in the success of
                        organizations, and their importance cannot be
                        overstated. Whether it's launching a new product,
                        improving an existing
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="bottom-justified-tab4"
              role="tabpanel"
            >
              <div className="card border-0">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>Files</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fw-medium mb-1">Manage Documents</h6>
                        <p>
                          Send customizable quotes, proposals and contracts to
                          close deals faster.
                        </p>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#create_file"
                        >
                          Create Document
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-2">
                      <div>
                        <h6 className="fw-medium mb-1">
                          Collier-Turner Proposal
                        </h6>
                        <p>
                          Send customizable quotes, proposals and contracts to
                          close deals faster.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-download" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <span className="d-inline-flex mb-1">Owner</span>
                          <h6 className="fw-medium">Darlee Robertson</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge bg-pink-transparent me-2">
                          Proposal
                        </span>
                        <span className="badge badge-dark-transparent">
                          <i className="ti ti-point-filled" />
                          Proposal
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3 mb-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-2">
                      <div>
                        <h6 className="fw-medium mb-1">
                          Collier-Turner Proposal
                        </h6>
                        <p>
                          Send customizable quotes, proposals and contracts to
                          close deals faster.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-download" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <span className="d-inline-flex mb-1">Owner</span>
                          <h6 className="fw-medium">Sharon Roy</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge badge-soft-info me-2">
                          Quote
                        </span>
                        <span className="badge badge-soft-success">
                          <i className="ti ti-point-filled" />
                          Sent
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3 mb-2">
                      <div>
                        <h6 className="fw-medium mb-1">
                          Collier-Turner Proposal
                        </h6>
                        <p>
                          Send customizable quotes, proposals and contracts to
                          close deals faster.
                        </p>
                      </div>
                      <div className="d-flex align-items-center">
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-download" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-edit" />
                        </Link>
                        <Link
                          to="#"
                          className="btn btn-icon btn-sm fs-20"
                        >
                          <i className="ti ti-trash" />
                        </Link>
                      </div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-md avatar-rounded flex-shrink-0 me-2">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-04.jpg"
                            alt="Img"
                          />
                        </span>
                        <div>
                          <span className="d-inline-flex mb-1">Owner</span>
                          <h6 className="fw-medium">Vaughan Lewis</h6>
                        </div>
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="badge bg-pink-transparent me-2">
                          Proposal
                        </span>
                        <span className="badge badge-dark-transparent">
                          <i className="ti ti-point-filled" />
                          Proposal
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="tab-pane"
              id="bottom-justified-tab5"
              role="tabpanel"
            >
              <div className="card border-0">
                <div className="card-header">
                  <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                    <h5>Email</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="border rounded p-3">
                    <div className="d-flex align-items-center justify-content-between flex-wrap row-gap-3">
                      <div>
                        <h6 className="fw-medium mb-1">Manage Emails</h6>
                        <p>
                          You can send and reply to emails directly via this
                          section.
                        </p>
                      </div>
                      <div>
                        <Link
                          to="#"
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#connect_account"
                        >
                          Connect Account
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
      <TabModals/>
    </>
  )
}

export default CommonTabs