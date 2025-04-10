import React from 'react'

const DealReportModal = () => {
  return (

<>

<div className="modal custom-modal fade" id="download_report" role="dialog">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Download Report</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      </div>
      <div className="modal-body">
        <form >
          <div className="mb-3">
            <label className="form-label">File Type <span className="text-danger">*</span></label>
            <select className="select">
              <option>Download as PDF</option>
              <option>Download as Excel</option>
            </select>
          </div>
          <div className="mb-3">
            <h5>Filters</h5>
          </div>
          <div className="mb-3">
            <label className="form-label">File Type <span className="text-danger">*</span></label>
            <select className="select">
              <option>All Fields</option>
              <option>Name</option>
              <option>Position</option>
              <option>Owner</option>
              <option>Location</option>
              <option>Phone</option>
              <option>Date Created</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Position<span className="text-danger">*</span></label>
            <select className="select">
              <option>All Position</option>
              <option>Installer</option>
              <option>Senior  Manager</option>
              <option>Test Engineer</option>
              <option>UI /UX Designer</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Source<span className="text-danger">*</span></label>
            <select className="select">
              <option>All Source</option>
              <option>Google</option>
              <option>Campaigns </option>
              <option>Referrals</option>
              <option>Paid Social</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="form-label">Select Year<span className="text-danger">*</span></label>
            <select className="select">
              <option>2023</option>
              <option>2022</option>
              <option>2021</option>
            </select>
          </div>
          <div className="col-lg-12 text-end modal-btn">
            <button type="submit" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
            <button type="submit" className="btn btn-primary">Download Now</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

</>


  )
}

export default DealReportModal