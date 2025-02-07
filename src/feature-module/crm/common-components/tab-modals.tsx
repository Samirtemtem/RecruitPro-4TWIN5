import React from 'react'
import { Link } from 'react-router-dom'
import AddDocument from '../../../core/modals/add_document'
import AddCallModal from '../../../core/modals/addCallModal'

const TabModals = () => {
  return (
    <>
          {/* Add Note */}
          <div className="modal fade" id="add_notes" role="dialog">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header header-border align-items-center justify-content-between">
                            <h5 className="modal-title">Add New Note</h5>
                            <button
                                type="button"
                                className="btn-close custom-btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            >
                                <i className="ti ti-x" />
                            </button>
                        </div>
                        <form>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label className="form-label">
                                        Title <span className="text-danger"> *</span>
                                    </label>
                                    <input className="form-control" type="text" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Note <span className="text-danger"> *</span>
                                    </label>
                                    <textarea className="form-control" rows={4} defaultValue={""} />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">
                                        Attachment <span className="text-danger"> *</span>
                                    </label>
                                    <div className="d-flex align-items-center justify-content-center border border-dashed rounded p-3 flex-column">
                                        <span className="avatar avatar-lg avatar-rounded bg-primary-transparent mb-2">
                                            <i className="ti ti-folder-open fs-24" />
                                        </span>
                                        <p className="fs-14 text-center mb-2">
                                            Drag and drop your files
                                        </p>
                                        <div className="file-upload position-relative btn btn-sm btn-primary px-3 mb-2">
                                            <i className="ti ti-upload me-1" />
                                            Upload
                                            <input type="file" accept="video/image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-0">
                                    <label className="form-label">Uploaded Files</label>
                                    <div className="border bg-light-500 rounded mb-3 p-3">
                                        <h6 className="fw-medium mb-1">Projectneonals teyys.xls</h6>
                                        <p className="mb-2">4.25 MB</p>
                                        <div className="progress progress-xs mb-2">
                                            <div
                                                className="progress-bar bg-success"
                                                role="progressbar"
                                                style={{ width: "45%" }}
                                                aria-valuenow={25}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p>45%</p>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between bg-light-500 rounded p-3">
                                        <div>
                                            <h6 className="fw-medium mb-1">tes.txt</h6>
                                            <p>1.2 MB</p>
                                        </div>
                                        <Link
                                            to="to"
                                            className="btn btn-sm btn-icon text-danger"
                                        >
                                            <i className="ti ti-trash fs-20" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <div className="d-flex align-items-center justify-content-end m-0">
                                    <button
                                        type="button"
                                        className="btn btn-outline-light border me-2"
                                    >
                                        Cancel
                                    </button>
                                    <button className="btn btn-primary" type="button" data-bs-dimiss="modal">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Note */}
            <AddDocument/>
            <AddCallModal/>
    </>
  )
}

export default TabModals