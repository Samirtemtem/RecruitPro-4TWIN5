import React from 'react'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { AlertOctagon, Check, Info, Plus, X } from 'react-feather'

const Badges = () => {
  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <div className="page-title">
              <h4>Badges</h4>
            </div>
          </div>
          <div className="row">
            {/* Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Badges</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <span className="badge bg-primary">Primary</span>
                  <span className="badge bg-secondary">Secondary</span>
                  <span className="badge bg-success">Success</span>
                  <span className="badge bg-danger">Danger</span>
                  <span className="badge bg-warning">Warning</span>
                  <span className="badge bg-info">Info</span>
                  <span className="badge bg-light text-dark">Light</span>
                  <span className="badge bg-dark text-white">Dark</span>
                </div>
              </div>
            </div>
            {/* /Badges */}
            {/* Rounded Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Rounded Badges</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill bg-primary">Primary</span>
                  <span className="badge rounded-pill bg-secondary">Secondary</span>
                  <span className="badge rounded-pill bg-success">Success</span>
                  <span className="badge rounded-pill bg-danger">Danger</span>
                  <span className="badge rounded-pill bg-warning">Warning</span>
                  <span className="badge rounded-pill bg-info">Info</span>
                  <span className="badge rounded-pill bg-light text-dark">
                    Light
                  </span>
                  <span className="badge rounded-pill bg-dark text-white">
                    Dark
                  </span>
                </div>
              </div>
            </div>
            {/* /Rounded Badges */}
            {/* Outline Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Outline Badges</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <span className="badge bg-outline-primary">Primary</span>
                  <span className="badge bg-outline-secondary">Secondary</span>
                  <span className="badge bg-outline-success">Success</span>
                  <span className="badge bg-outline-danger">Danger</span>
                  <span className="badge bg-outline-warning">Warning</span>
                  <span className="badge bg-outline-info">Info</span>
                  <span className="badge bg-outline-light text-dark">Light</span>
                  <span className="badge bg-outline-dark text-dark">Dark</span>
                </div>
              </div>
            </div>
            {/* /Outline Badges */}
            {/* Outline Rounded Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Outline Rounded Badges</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill bg-outline-primary">
                    Primary
                  </span>
                  <span className="badge rounded-pill bg-outline-secondary">
                    Secondary
                  </span>
                  <span className="badge rounded-pill bg-outline-success">
                    Success
                  </span>
                  <span className="badge rounded-pill bg-outline-danger">
                    Danger
                  </span>
                  <span className="badge rounded-pill bg-outline-warning">
                    Warning
                  </span>
                  <span className="badge rounded-pill bg-outline-info">Info</span>
                  <span className="badge rounded-pill bg-outline-light text-dark">
                    Light
                  </span>
                  <span className="badge rounded-pill bg-outline-dark text-dark">
                    Dark
                  </span>
                </div>
              </div>
            </div>
            {/* /Outline Rounded Badges */}
            {/* Soft Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Soft Badges</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <span className="badge bg-soft-primary">Primary</span>
                  <span className="badge bg-soft-secondary">Secondary</span>
                  <span className="badge bg-soft-success">Success</span>
                  <span className="badge bg-soft-danger">Danger</span>
                  <span className="badge bg-soft-warning">Warning</span>
                  <span className="badge bg-soft-info">Info</span>
                  <span className="badge bg-soft-light text-dark">Light</span>
                  <span className="badge bg-soft-dark">Dark</span>
                </div>
              </div>
            </div>
            {/* /Soft Badges */}
            {/* Soft Rounded Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Soft Rounded Badges</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <span className="badge rounded-pill bg-soft-primary">
                    Primary
                  </span>
                  <span className="badge rounded-pill bg-soft-secondary">
                    Secondary
                  </span>
                  <span className="badge rounded-pill bg-soft-success">
                    Success
                  </span>
                  <span className="badge rounded-pill bg-soft-danger">Danger</span>
                  <span className="badge rounded-pill bg-soft-warning">
                    Warning
                  </span>
                  <span className="badge rounded-pill bg-soft-info">Info</span>
                  <span className="badge rounded-pill bg-soft-light text-dark">
                    Light
                  </span>
                  <span className="badge rounded-pill bg-soft-dark">Dark</span>
                </div>
              </div>
            </div>
            {/* /Soft Rounded Badges */}
            {/* Badge Sizes */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Badge Sizes</h5>
                </div>
                <div className="card-body">
                  <span className="badge bg-primary me-1">Default</span>
                  <span className="badge badge-xs bg-primary me-1">XS</span>
                  <span className="badge badge-sm bg-secondary me-1">SM</span>
                  <span className="badge badge-md bg-success me-1">MD</span>
                  <span className="badge badge-lg bg-danger me-1">LG</span>
                  <span className="badge badge-xl bg-warning me-1">XL</span>
                </div>
              </div>
            </div>
            {/* /Badge Sizes */}
            {/* Badge Usage */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Badge Usage</h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-4">
                  <button
                    type="button"
                    className="btn btn-primary position-relative"
                  >
                    Inbox
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                      99+
                      <span className="visually-hidden">unread messages</span>
                    </span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary position-relative"
                  >
                    Profile
                    <span className="position-absolute top-0 start-100 translate-middle p-2 bg-success border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </button>
                  <span className="avatar">
                    <ImageWithBasePath src="assets/img/profiles/avatar-01.jpg" alt="img" />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </span>
                  <span className="avatar avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-27.jpg" alt="img" />
                    <span className="position-absolute top-0 start-100 translate-middle p-1 bg-success border border-light              rounded-circle">
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </span>
                  <span className="avatar avatar-rounded">
                    <ImageWithBasePath src="assets/img/profiles/avatar-27.jpg" alt="img" />
                    <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary rounded-pill shadow-lg">
                      1000+
                      <span className="visually-hidden">New alerts</span>
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* /Badge Usage */}
            {/* Buttons With Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Buttons With Badges </h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <button type="button" className="btn btn-primary my-1 me-2">
                    Notifications <span className="badge ms-2 bg-secondary">3</span>
                  </button>
                  <button type="button" className="btn btn-success my-1 me-2">
                    Notifications <span className="badge ms-2 bg-danger">15</span>
                  </button>
                  <button type="button" className="btn btn-danger my-1 me-2">
                    Notifications{" "}
                    <span className="badge ms-2 bg-white text-dark">24</span>
                  </button>
                </div>
              </div>
            </div>
            {/* /Buttons With Badges */}
            {/* Outline Buttons With Badges */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Outline Buttons With Badges </h5>
                </div>
                <div className="card-body d-flex flex-wrap gap-2">
                  <button
                    type="button"
                    className="btn btn-outline-primary my-1 me-2"
                  >
                    Notifications <span className="badge bg-primary ms-2">3</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-success my-1 me-2"
                  >
                    Notifications <span className="badge bg-success ms-2">15</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-danger my-1 me-2"
                  >
                    Notifications <span className="badge bg-danger ms-2">24</span>
                  </button>
                </div>
              </div>
            </div>
            {/* /Outline Buttons With Badges */}
            {/* Headings */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Headings</h5>
                </div>
                <div className="card-body">
                  <h1>
                    Example heading <span className="badge bg-primary">New</span>
                  </h1>
                  <h2>
                    Example heading <span className="badge bg-primary">New</span>
                  </h2>
                  <h3>
                    Example heading <span className="badge bg-primary">New</span>
                  </h3>
                  <h4>
                    Example heading <span className="badge bg-primary">New</span>
                  </h4>
                  <h5>
                    Example heading <span className="badge bg-primary">New</span>
                  </h5>
                  <h6>
                    Example heading <span className="badge bg-primary">New</span>
                  </h6>
                </div>
              </div>
            </div>
            {/* /Headings */}
            {/* Badge with icons */}
            <div className="col-xl-6">
              <div className="row">
                <div className="col-xl-12">
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Badge with icons</h5>
                    </div>
                    <div className="card-body">
                      <span className="badge bg-secondary me-1">
                        <span className="badge-label">Secondary</span>
                        <span>
                        <Plus className="ms-1"  style={{ height: 12, width: 12 }}/>
                        </span>
                      </span>
                      <span className="badge bg-success me-1">
                        <span className="badge-label">Success</span>
                        <Check className="ms-1"  style={{ height: 12, width: 12 }}/>

                      </span>
                      <span className="badge bg-info me-1">
                        <span className="badge-label">Info</span>
                        <Info className="ms-1"  style={{ height: 12, width: 12 }}/>

                      </span>
                      <span className="badge bg-warning me-1">
                        <span className="badge-label">Warning</span>
                        <AlertOctagon className="ms-1"  style={{ height: 12, width: 12 }}/>

                      </span>
                      <span className="badge bg-danger me-1">
                        <span className="badge-label">Danger</span>
                        <X className="ms-1"  style={{ height: 12, width: 12 }}/>

                      </span>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <h5 className="card-title">Outline Badge with icons</h5>
                    </div>
                    <div className="card-body">
                      <span className="badge bg-outline-secondary me-1">
                        <span className="badge-label">Secondary</span>
                        <span>
                        <Plus className="ms-1"  style={{ height: 12, width: 12 }}/>
                        </span>
                      </span>
                      <span className="badge bg-outline-success me-1">
                        <span className="badge-label">Success</span>
                        <span>
                        <Check className="ms-1"  style={{ height: 12, width: 12 }}/>
                        </span>
                      </span>
                      <span className="badge bg-outline-info me-1">
                        <span className="badge-label">Info</span>
                        <span>
                        <Info className="ms-1"  style={{ height: 12, width: 12 }}/>
                        </span>
                      </span>
                      <span className="badge bg-outline-warning me-1">
                        <span className="badge-label">Warning</span>
                       <span>
                        <AlertOctagon className="ms-1"  style={{ height: 12, width: 12 }}/>
                        </span>
                      </span>
                      <span className="badge bg-outline-danger me-1">
                        <span className="badge-label">Danger</span>
                          <span><X className="x"  style={{ height: 12, width: 12 }}/></span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Badge with icons */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </div>

  )
}

export default Badges
