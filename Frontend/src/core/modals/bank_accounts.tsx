import React from 'react'
import { Link } from 'react-router-dom'

const BankAccountsModal = () => {
  return (


    <div>
  {/* Add Bank Account */}
  <div className="modal custom-modal fade" id="add_bank" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Bank Account</h5>
          <div className="d-flex align-items-center mod-toggle">
            <div className="status-toggle">
              <input type="checkbox" id="toggle" className="check" defaultChecked />
              <label htmlFor="toggle" className="checktoggle" />
            </div>
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
              <i className="ti ti-x" />
            </button>
          </div>
        </div>
        <div className="modal-body">
          <form >
            <div className="form-wrap">
              <label className="col-form-label">Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Bank <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Branch <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Account Number <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">IFSC Code <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-btn">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <Link  to="#" data-bs-dismiss="modal" type="submit" className="btn btn-primary">Save</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add Bank Account */}
  {/* Edit Bank Account */}
  <div className="modal custom-modal fade" id="edit_bank" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Bank Account</h5>
          <div className="d-flex align-items-center mod-toggle">
            <div className="status-toggle">
              <input type="checkbox" id="toggle1" className="check" defaultChecked />
              <label htmlFor="toggle1" className="checktoggle" />
            </div>
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
              <i className="ti ti-x" />
            </button>
          </div>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-wrap">
              <label className="col-form-label">Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="Darlee Robertson" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Bank <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="HDFC" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Branch <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="Bringham" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Account Number <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="**** **** 4872" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">IFSC Code <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue={198367} />
            </div>
            <div className="modal-btn">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Bank Account */}
  {/* Delete Account */}
  <div className="modal custom-modal fade" id="delete_bank" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0 m-0 justify-content-end">
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="success-message text-center">
              <div className="success-popup-icon">
                <i className="ti ti-trash-x" />
              </div>
              <h3>Remove Account?</h3>
              <p>Are you sure you want to remove it.</p>
              <div className="col-lg-12 text-center modal-btn">
                <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
                <Link to="#" type="submit"  data-bs-dismiss="modal" className="btn btn-danger">Yes, Delete it</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete Account */}
</div>



  )
}

export default BankAccountsModal