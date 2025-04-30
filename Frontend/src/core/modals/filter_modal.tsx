import React from 'react'
import { Link } from 'react-router-dom'

const FilterModal = () => {
    return (
        <>
            {/* Add New View */}
            <div className="modal custom-modal fade" id="save_view" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New View</h5>
                            <button
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <div className="modal-body">
                            <form >
                                <div className="form-wrap">
                                    <label className="col-form-label">View Name</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="modal-btn text-end">
                                    <Link to="#" className="btn btn-light" data-bs-dismiss="modal">
                                        Cancel
                                    </Link>
                                    <Link to="submit" className="btn btn-danger" data-bs-dismiss="modal">
                                        Save
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Add New View */}
        </>
    )
}

export default FilterModal
