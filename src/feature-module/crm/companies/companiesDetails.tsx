import React from 'react'
import CommonTabs from '../common-components'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes'
import CollapseHeader from '../../../core/common/collapse-header/collapse-header'
import CrmsModal from '../../../core/modals/crms_modal'

const CompaniesDetails = () => {
  const routes = all_routes
  return (
    <>
    <div className="page-wrapper">
  <div className="content">
    <div className="row align-items-center mb-4">
      <div className="col-sm-6">
        <h6 className="fw-medium d-inline-flex align-items-center mb-3 mb-sm-0">
          <Link to={routes.companiesGrid}>
            <i className="ti ti-arrow-left me-2" />
            Companies
          </Link>
          <span className="text-gray d-inline-flex ms-2">
            / BrightWave Innovations
          </span>
        </h6>
      </div>
      <div className="col-sm-6">
        <div className="d-flex align-items-center justify-content-sm-end">
          <Link
            to="#"
            className="btn btn-primary d-inline-flex align-items-center me-2"
            data-bs-toggle="modal"
            data-bs-target="#add_deals"
          >
            <i className="ti ti-circle-plus me-2" />
            Add Deal
          </Link>
          <Link
            to="#"
            className="btn btn-dark d-inline-flex align-items-center"
          >
            <i className="ti ti-mail me-2" />
            Send Email
          </Link>
          <div className="head-icons ms-2 mb-0">
          <CollapseHeader/>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-4 theiaStickySidebar">
        <div className="card card-bg-1 sticky-class">
          <div className="card-body p-0">
            <span className="avatar avatar-xl border bg-white rounded-circle m-auto d-flex mb-2">
              <ImageWithBasePath
                src="assets/img/company/company-11.svg"
                className="w-auto h-auto"
                alt="Img"
              />
            </span>
            <div className="text-center px-3 pb-3 border-bottom">
              <h5 className="d-flex align-items-center justify-content-center mb-1">
                BrightWave Innovations{" "}
                <i className="ti ti-discount-check-filled text-success ms-1" />
              </h5>
              <p className="text-dark">
                1861 Bayonne Ave, Manchester, NJ, 08759
              </p>
            </div>
            <div className="p-3 border-bottom">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h6>Basic information</h6>
                <Link
                  to="#"
                  className="btn btn-icon btn-sm"
                  data-bs-toggle="modal"
                  data-bs-target="#edit_company"
                >
                  <i className="ti ti-edit" />
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-phone me-2" />
                  Phone
                </span>
                <p className="text-dark">(163) 2459 315</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-mail-check me-2" />
                  Email
                </span>
                <Link
                  to="#"
                  className="text-info d-inline-flex align-items-center"
                >
                  darlee@example.com <i className="ti ti-copy text-dark ms-2" />
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-gender-male me-2" />
                  Created On
                </span>
                <p className="text-dark">24 July 2024, 11:45 pm</p>
              </div>
            </div>
            <div className="p-3 border-bottom">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h6>Other Information</h6>
                <Link to="#" className="btn btn-icon btn-sm">
                  <i className="ti ti-edit" />
                </Link>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-e-passport me-2" />
                  Language
                </span>
                <p className="text-dark">English</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-mail-check me-2" />
                  Currency
                </span>
                <p className="text-dark">United States dollar</p>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-2">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-globe me-2" />
                  Last Modified
                </span>
                <p className="text-dark">27 Sep 24, 11:45 pm </p>
              </div>
              <div className="d-flex align-items-center justify-content-between">
                <span className="d-inline-flex align-items-center">
                  <i className="ti ti-bookmark-plus me-2" />
                  Source
                </span>
                <p className="text-dark">Paid Campaign</p>
              </div>
            </div>
            <div className="p-3 border-bottom">
              <h5 className="mb-3">Tags</h5>
              <div className="d-flex align-items-center">
                <span className="badge badge-soft-success me-3">Collab</span>
                <span className="badge badge-soft-warning">Rated</span>
              </div>
            </div>
            <div className="p-3 border-bottom">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5>Company</h5>
                <Link
                  to="#"
                  className="text-primary d-inline-flex align-items-center"
                  data-bs-toggle="modal"
                  data-bs-target="#add_company"
                >
                  <i className="ti ti-circle-plus me-1" />
                  Add New
                </Link>
              </div>
              <div className="d-flex align-items-center file-name-icon mb-3">
                <Link
                  to="#"
                  className="avatar avatar-md border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-01.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </Link>
                <div className="ms-2">
                  <h6 className="fw-medium">BrightWave Innovations</h6>
                  <span className="d-block">bwi.example.com</span>
                </div>
              </div>
              <div className="d-flex align-items-center file-name-icon">
                <Link
                  to="#"
                  className="avatar avatar-md border rounded-circle"
                >
                  <ImageWithBasePath
                    src="assets/img/company/company-02.svg"
                    className="img-fluid"
                    alt="img"
                  />
                </Link>
                <div className="ms-2">
                  <h6 className="fw-medium">Stellar Dynamics</h6>
                  <span className="d-block">sd.example.com</span>
                </div>
              </div>
            </div>
            <div className="p-3">
              <div className="d-flex align-items-center justify-content-between mb-2">
                <h6>Social Links</h6>
                <Link to="#" className="btn btn-icon btn-sm">
                  <i className="ti ti-edit" />
                </Link>
              </div>
              <div className="d-flex align-items-center mb-3">
                <Link to="#" className="me-2">
                  <ImageWithBasePath src="assets/img/social/social-01.svg" alt="Img" />
                </Link>
                <Link to="#" className="me-2">
                  <ImageWithBasePath src="assets/img/social/social-06.svg" alt="Img" />
                </Link>
                <Link to="#" className="me-2">
                  <ImageWithBasePath src="assets/img/social/social-02.svg" alt="Img" />
                </Link>
                <Link to="#" className="me-2">
                  <ImageWithBasePath src="assets/img/social/social-03.svg" alt="Img" />
                </Link>
                <Link to="#" className="me-2">
                  <ImageWithBasePath src="assets/img/social/social-04.svg" alt="Img" />
                </Link>
                <Link to="#" className="me-2">
                  <ImageWithBasePath src="assets/img/social/social-05.svg" alt="Img" />
                </Link>
              </div>
              <div className="row gx-2">
                <div className="col-6">
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center btn btn-dark"
                  >
                    <i className="ti ti-share-2 me-2" />
                    Share
                  </Link>
                </div>
                <div className="col-6">
                  <Link
                    to="#"
                    className="d-flex align-items-center justify-content-center btn btn-primary"
                  >
                    <i className="ti ti-trash me-2" />
                    Delete
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CommonTabs/>
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
<CrmsModal/>
    </>
  )
}

export default CompaniesDetails