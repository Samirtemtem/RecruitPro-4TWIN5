import React from 'react'
import { Link } from 'react-router-dom'

const ContactStageModal = () => {
  return (
  <div>
  {/* Add New Contact Stage */}
  <div className="modal custom-modal fade" id="add_contact_stage" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add New Contact Stage</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <form >
            <div className="form-wrap">
              <label className="col-form-label">Contact Stage <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Status</label>
              <div className="d-flex flex-wrap radio-wrap">
                <div className="radio-btn">
                  <input type="radio" className="status-radio" id="add-active" name="status" defaultChecked />
                  <label htmlFor="add-active">Active</label>
                </div>
                <div className="radio-btn">
                  <input type="radio" className="status-radio" id="add-inactive" name="status" />
                  <label htmlFor="add-inactive">Inactive</label>
                </div>
              </div>
            </div>
            <div className="modal-btn text-end">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add New Contact Stage */}
  {/* Edit Contact Stage */}
  <div className="modal custom-modal fade" id="edit_contact_stage" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit Contact Stage</h5>
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <form >
            <div className="form-wrap">
              <label className="col-form-label">Contact Stage <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="Contacted" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">Status</label>
              <div className="d-flex flex-wrap radio-wrap">
                <div className="radio-btn">
                  <input type="radio" className="status-radio" id="edit-active" name="status" defaultChecked />
                  <label htmlFor="edit-active">Active</label>
                </div>
                <div className="radio-btn">
                  <input type="radio" className="status-radio" id="edit-inactive" name="status" />
                  <label htmlFor="edit-inactive">Inactive</label>
                </div>
              </div>
            </div>
            <div className="modal-btn text-end">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit Contact Stage */}
  {/* Delete Contact Stage */}
  <div className="modal custom-modal fade" id="delete_contact_stage" role="dialog">
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
              <h3>Remove Contact Stage?</h3>
              <p className="del-info">Are you sure you want to remove it.</p>
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
  {/* /Delete Contact Stage */}
</div>

  )
}

export default ContactStageModal