import React from 'react'
import { Link } from 'react-router-dom'
import { all_routes } from '../../feature-module/router/all_routes';
const routes = all_routes;

const CitiesModal = () => {
  return (
  <div>
  {/* Add City */}
  <div className="modal custom-modal fade" id="add_city" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Add City</h5>
          <div className="d-flex align-items-center mod-toggle">
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
              <i className="ti ti-x" />
            </button>
          </div>
        </div>
        <div className="modal-body">
          <form >
            <div className="form-wrap">
              <label className="col-form-label">Country Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">State Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">City Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" />
            </div>
            <div className="modal-btn">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <button type="submit" className="btn btn-primary">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Add City  */}
  {/* Edit City  */}
  <div className="modal custom-modal fade" id="edit_city" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Edit City</h5>
          <div className="d-flex align-items-center mod-toggle">
            <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
              <i className="ti ti-x" />
            </button>
          </div>
        </div>
        <div className="modal-body">
          <form >
            <div className="form-wrap">
              <label className="col-form-label">Country Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="American Samoa(+684)" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">State Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="Swains Island" />
            </div>
            <div className="form-wrap">
              <label className="col-form-label">City Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control" defaultValue="Gandzasar" />
            </div>
            <div className="modal-btn">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <button type="submit" className="btn btn-primary">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* /Edit City  */}
  {/* Delete City */}
  <div className="modal custom-modal fade" id="delete_city" role="dialog">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
        <div className="modal-header border-0 m-0 justify-content-end">
          <button className="btn-close" data-bs-dismiss="modal" aria-label="Close">	
            <i className="ti ti-x" />
          </button>
        </div>
        <div className="modal-body">
          <div className="success-message text-center">
            <div className="success-popup-icon">
              <i className="ti ti-trash-x" />
            </div>
            <h3>Remove City?</h3>
            <p className="del-info">Are you sure you want to remove it.</p>
            <div className="col-lg-12 text-center modal-btn">
              <Link to="#" className="btn btn-light" data-bs-dismiss="modal">Cancel</Link>
              <Link to={routes.cities} className="btn btn-danger">Yes, Delete it</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* /Delete City */}
  </div>
  )


}

export default CitiesModal