import React from 'react'
import { Link } from 'react-router-dom'

const BanIpaddressModal = () => {
  return (


 <div>
  {/* Add Ban IP Address */}
  <div className="modal custom-modal fade" id="add_ip" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add Ban IP Address</h5>
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
              <label className="col-form-label">IP Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Reason For Ban</label>
              <textarea className="form-control" rows={4} defaultValue={""} />
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
  {/* /Add Ban IP Address */}
  {/* Edit Ban IP Address */}
  <div className="modal custom-modal fade" id="edit_ip" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Ban IP Address</h5>
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
          <form >
            <div className="form-wrap">
              <label className="col-form-label">IP Address <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Reason For Ban</label>
              <textarea className="form-control" rows={4} defaultValue={""} />
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
  {/* /Edit Ban IP Address */}
  {/* Delete IP Address */}
  <div className="modal custom-modal fade" id="delete_ip" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0 m-0 justify-content-end">
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <form >
            <div className="success-message text-center">
              <div className="success-popup-icon">
                <i className="ti ti-trash-x" />
              </div>
              <h3>Remove IP Address?</h3>
              <p>Are you sure you want to remove it.</p>
              <div className="col-lg-12 text-center modal-btn">
                <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
                <button type="submit" className="btn btn-danger">Yes, Delete it</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete IP Address */}
</div>



  )
}

export default BanIpaddressModal