import React from 'react'
import ImageWithBasePath from '../../core/common/imageWithBasePath'
import { Link } from 'react-router-dom'

const BasicTable = () => {
  return (


  <div className="page-wrapper cardhead">
  <div className="content container-fluid">
    {/* Page Header */}
    <div className="page-header">
      <div className="row">
        <div className="col">
          <h3 className="page-title">Basic Tables</h3>
        </div>
      </div>
    </div>
    {/* /Page Header */}
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-title">Basic Table</h4>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Striped Rows</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-striped mb-0">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Bordered Table</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-bordered mb-0">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Borderless Table</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-borderless mb-0">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Hover Rows</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover mb-0">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr>
                    <td>Mary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr>
                    <td>July</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Contextual Classes</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Default</td>
                    <td>Defaultson</td>
                    <td>def@somemail.com</td>
                  </tr>
                  <tr className="table-primary">
                    <td>Primary</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                  </tr>
                  <tr className="table-secondary">
                    <td>Secondary</td>
                    <td>Moe</td>
                    <td>mary@example.com</td>
                  </tr>
                  <tr className="table-success">
                    <td>Success</td>
                    <td>Dooley</td>
                    <td>july@example.com</td>
                  </tr>
                  <tr className="table-danger">
                    <td>Danger</td>
                    <td>Refs</td>
                    <td>bo@example.com</td>
                  </tr>
                  <tr className="table-warning">
                    <td>Warning</td>
                    <td>Activeson</td>
                    <td>act@example.com</td>
                  </tr>
                  <tr className="table-info">
                    <td>Info</td>
                    <td>Activeson</td>
                    <td>act@example.com</td>
                  </tr>
                  <tr className="table-light">
                    <td>Light</td>
                    <td>Activeson</td>
                    <td>act@example.com</td>
                  </tr>
                  <tr className="table-dark">
                    <td>Dark</td>
                    <td>Activeson</td>
                    <td>act@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Responsive Tables</h5>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-nowrap mb-0">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                    <th>City</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Anna</td>
                    <td>Pitt</td>
                    <td>35</td>
                    <td>New York</td>
                    <td>USA</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Table Without Borders
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-borderless">
                <thead>
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Created</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Harshrath</th>
                    <td>#5182-3467</td>
                    <td>24 May 2022</td>
                    <td><span className="badge bg-primary">Fixed</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Zozo Hadid</th>
                    <td>#5182-3412</td>
                    <td>02 July 2022</td>
                    <td><span className="badge bg-warning">In Progress</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Martiana</th>
                    <td>#5182-3423</td>
                    <td>15 April 2022</td>
                    <td><span className="badge bg-success">Completed</span></td>
                  </tr>
                  <tr>
                    <th scope="row">Alex Carey</th>
                    <td>#5182-3456</td>
                    <td>17 March 2022</td>
                    <td><span className="badge bg-danger">Pending</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Striped rows
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2022R-01</th>
                    <td>27-010-2022</td>
                    <td>Moracco</td>
                    <td>
                      <button className="btn btn-sm btn-success btn-wave waves-effect waves-light">
                        <i className="feather-download align-middle me-2 d-inline-block" />Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2022R-02</th>
                    <td>28-10-2022</td>
                    <td>Thornton</td>
                    <td>
                      <button className="btn btn-sm btn-success btn-wave waves-effect waves-light">
                        <i className="feather-download align-middle me-2 d-inline-block" />Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2022R-03</th>
                    <td>22-10-2022</td>
                    <td>Larry Bird</td>
                    <td>
                      <button className="btn btn-sm btn-success btn-wave waves-effect waves-light">
                        <i className="feather-download align-middle me-2 d-inline-block" />Download
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2022R-04</th>
                    <td>29-09-2022</td>
                    <td>Erica Sean</td>
                    <td>
                      <button className="btn btn-sm btn-success btn-wave waves-effect waves-light">
                        <i className="feather-download align-middle me-2 d-inline-block" />Download
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Striped columns
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-striped-columns">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Date</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">2022R-01</th>
                    <td>27-010-2022</td>
                    <td>Moracco</td>
                    <td>
                      <button className="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                        <i className="feather-trash align-middle me-2 d-inline-block" />Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2022R-02</th>
                    <td>28-10-2022</td>
                    <td>Thornton</td>
                    <td>
                      <button className="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                        <i className="feather-trash align-middle me-2 d-inline-block" />Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2022R-03</th>
                    <td>22-10-2022</td>
                    <td>Larry Bird</td>
                    <td>
                      <button className="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                        <i className="feather-trash align-middle me-2 d-inline-block" />Delete
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2022R-04</th>
                    <td>29-09-2022</td>
                    <td>Erica Sean</td>
                    <td>
                      <button className="btn btn-sm btn-danger btn-wave waves-effect waves-light">
                        <i className="feather-trash align-middle me-2 d-inline-block" />Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Small Tables
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-sm">
                <thead>
                  <tr>
                    <th scope="col">Invoice</th>
                    <th scope="col">Created Date</th>
                    <th scope="col">Status</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="checkebox-sm" defaultChecked />
                        <label className="form-check-label" htmlFor="checkebox-sm">
                          Zelensky
                        </label>
                      </div>
                    </th>
                    <td>25-Apr-2021</td>
                    <td><span className="badge bg-soft-success">Paid</span></td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="checkebox-sm1" />
                        <label className="form-check-label" htmlFor="checkebox-sm1">
                          Kim Jong
                        </label>
                      </div>
                    </th>
                    <td>29-April-2022</td>
                    <td><span className="badge bg-soft-danger">Pending</span></td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="checkebox-sm2" />
                        <label className="form-check-label" htmlFor="checkebox-sm2">
                          Obana
                        </label>
                      </div>
                    </th>
                    <td>30-Nov-2022</td>
                    <td><span className="badge bg-soft-success">Paid</span></td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="checkebox-sm3" />
                        <label className="form-check-label" htmlFor="checkebox-sm3">
                          Sean Paul
                        </label>
                      </div>
                    </th>
                    <td>01-Jan-2022</td>
                    <td><span className="badge bg-soft-success">Paid</span></td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox"  id="checkebox-sm4" />
                        <label className="form-check-label" htmlFor="checkebox-sm4">
                          Karizma
                        </label>
                      </div>
                    </th>
                    <td>14-Feb-2022</td>
                    <td><span className="badge bg-soft-danger">Pending</span></td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-light"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div><div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Table Head Primary
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap">
                <thead className="table-primary">
                  <tr>
                    <th scope="col">User Name</th>
                    <th scope="col">Transaction Id</th>
                    <th scope="col">Created</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Harshrath</th>
                    <td>#5182-3467</td>
                    <td>24 May 2022</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-success rounded-pill"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-info rounded-pill"><i className="feather-edit" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i className="feather-trash" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Zozo Hadid</th>
                    <td>#5182-3412</td>
                    <td>02 July 2022</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-success rounded-pill"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-info rounded-pill"><i className="feather-edit" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i className="feather-trash" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Martiana</th>
                    <td>#5182-3423</td>
                    <td>15 April 2022</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-success rounded-pill"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-info rounded-pill"><i className="feather-edit" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i className="feather-trash" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">Alex Carey</th>
                    <td>#5182-3456</td>
                    <td>17 March 2022</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-success rounded-pill"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-info rounded-pill"><i className="feather-edit" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-soft-danger rounded-pill"><i className="feather-trash" /></Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">Hoverable Rows</div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-hover">
                <thead>
                  <tr>
                    <th scope="col">Product Manager</th>
                    <th scope="col">Category</th>
                    <th scope="col">Team</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Joanna Smith</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">joannasmith14@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-primary">Fashion</span></td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-08.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +5
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '52%'}} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Kara Kova</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">milesakara@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-warning">Clothing</span></td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +6
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '40%'}} aria-valuenow={40} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-16.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Donald Trimb</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">donaldo21@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-dark">Electronics</span></td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-11.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +2
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '17%'}} aria-valuenow={17} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-13.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Justin Gaethje</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">justingae@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-danger">Sports</span></td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +5
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '72%'}} aria-valuenow={72} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>								
        </div>
      </div>
      <div className="col-xl-6">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Hoverable rows With striped rows
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">Invoice</th>
                    <th scope="col">Customer</th>
                    <th scope="col">Status</th>
                    <th scope="col">Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">IN-2032</th>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Mark Cruise</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">markcruise24@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-success"><i className="ri-check-fill align-middle me-1" />Paid</span></td>
                    <td>Jul 26,2022</td>
                  </tr>
                  <tr>
                    <th scope="row">IN-2022</th>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-12.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Charanjeep</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">charanjeep@gmail.in</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-success"><i className="ri-check-fill align-middle me-1" />Paid</span></td>
                    <td>Mar 14,2022</td>
                  </tr>
                  <tr>
                    <th scope="row">IN-2014</th>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Samantha Julie</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">julie453@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-soft-danger"><i className="ri-close-fill align-middle me-1" />Cancelled</span>
                    </td>
                    <td>Feb 1,2022</td>
                  </tr>
                  <tr>
                    <th scope="row">IN-2036</th>
                    <td>
                      <div className="d-flex align-items-center">
                        <div className="avatar avatar-sm me-2 avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-11.jpg" alt="img" />
                        </div>
                        <div>
                          <div className="lh-1">
                            <span>Simon Cohen</span>
                          </div>
                          <div className="lh-1">
                            <span className="fs-11 text-muted">simon@example.com</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td><span className="badge bg-light text-dark"><i className="ri-reply-line align-middle me-1" />Refunded</span>
                    </td>
                    <td>Apr 24,2022</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>								
        </div>
      </div>
    </div>
    {/* Always responsive */}
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Always responsive
            </div>									
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Team Head</th>
                    <th scope="col">Category</th>
                    <th scope="col">Role</th>
                    <th scope="col">Gmail</th>
                    <th scope="col">Team</th>
                    <th scope="col">Work Progress</th>
                    <th scope="col">Revenue</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                        </span>Mayor Kelly
                      </div>
                    </td>
                    <td>Manufacturer</td>
                    <td><span className="badge bg-soft-primary">Team Lead</span></td>
                    <td>mayorkrlly@example.com</td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-08.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +4
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '52%'}} aria-valuenow={52} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                    <td>$10,984.29</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-12.jpg" alt="img" />
                        </span>Andrew Garfield
                      </div>
                    </td>
                    <td>Managing Director</td>
                    <td><span className="badge bg-soft-warning">Director</span></td>
                    <td>andrewgarfield@example.com</td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-11.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-15.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +4
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '91%'}} aria-valuenow={91} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                    <td>$1.4billion</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-14.jpg" alt="img" />
                        </span>Simon Cowel
                      </div>
                    </td>
                    <td>Service Manager</td>
                    <td><span className="badge bg-soft-success">Manager</span></td>
                    <td>simoncowel234@example.com</td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-06.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-16.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +10
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '45%'}} aria-valuenow={45} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                    <td>$7,123.21</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="avatar avatar-xs me-2 online avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
                        </span>Mirinda Hers
                      </div>
                    </td>
                    <td>Recruiter</td>
                    <td><span className="badge bg-soft-danger">Employee</span></td>
                    <td>mirindahers@example.com</td>
                    <td>
                      <div className="avatar-list-stacked">
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-10.jpg" alt="img" />
                        </span>
                        <span className="avatar avatar-sm avatar-rounded">
                          <ImageWithBasePath src="assets/img/profiles/avatar-14.jpg" alt="img" />
                        </span>
                        <Link className="avatar avatar-sm bg-primary text-fixed-white avatar-rounded" to="#">
                          +6
                        </Link>
                      </div>
                    </td>
                    <td>
                      <div className="progress progress-xs">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: '21%'}} aria-valuenow={21} aria-valuemin={0} aria-valuemax={100}>
                        </div>
                      </div>
                    </td>
                    <td>$2,325.45</td>
                    <td>
                      <div className="hstack gap-2 fs-15">
                        <Link to="#" className="btn btn-icon btn-sm btn-success"><i className="feather-download" /></Link>
                        <Link to="#" className="btn btn-icon btn-sm btn-info"><i className="feather-edit" /></Link>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>								
        </div>
      </div>
    </div>
    {/* /Always responsive */}
    {/* Primary Table */}
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Primary Table
            </div>
          </div>
          <div className="card-body">
            <div className="table-responsive">
              <table className="table text-nowrap table-primary">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>Thornton</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>						
    </div>
    {/* /Primary Table */}
    {/* Table Head */}
    <div className="row">
      <div className="col-xl-12">
        <div className="card">
          <div className="card-header justify-content-between">
            <div className="card-title">
              Table head options
            </div>									
          </div>
          <div className="card-body">									
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-primary">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-primary</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-secondary">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-secondary</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-success">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-success</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-warning">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-warning</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-info">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-info</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-danger">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-danger</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table mb-0">
                <thead className="thead-dark">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-dark</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div className="table-responsive">
              <table className="table mb-0">
                <thead className="thead-light">
                  <tr>
                    <th>#</th>
                    <th className="w-25">thead-light</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Role</th>
                  </tr>
                </thead>
              </table>
            </div>								
          </div>
        </div>
      </div>
    </div>
    {/* /Table Head */}					
  </div>			
</div>



  )
}

export default BasicTable