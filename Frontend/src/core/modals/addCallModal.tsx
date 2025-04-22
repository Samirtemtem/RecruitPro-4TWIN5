import React from 'react'
import CommonSelect from '../common/commonSelect'
import { DatePicker } from 'antd'

const AddCallModal = () => {
    const calls = [
        { value: "1", label: "Busy" },
        { value: "2", label: "Unavailable" },
        { value: "3", label: "No Answer" },
        { value: "4", label: "Wrong Number" },
      ]
      const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
      };
  return (
    <div className="modal fade" id="add_call" role="dialog">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content">
      <div className="modal-header header-border align-items-center justify-content-between">
        <h5 className="modal-title">Create Call Log</h5>
        <button
          type="button"
          className="btn-close custom-btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        >
          <i className="ti ti-x" />
        </button>
      </div>
      <form >
        <div className="modal-body">
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Status <span className="text-danger"> *</span>
                </label>
                <CommonSelect
                    className='select'
                    options={calls}
                    />
              </div>
            </div>
            <div className="col-md-6">
              <div className="mb-3">
                <label className="form-label">
                  Followup Date <span className="text-danger"> *</span>
                </label>
                <div className="input-icon-end position-relative">
                <DatePicker
                              className="form-control datetimepicker"
                              format={{
                                format: "DD-MM-YYYY",
                                type: "mask",
                              }}
                              getPopupContainer={getModalContainer}
                              placeholder="DD-MM-YYYY"
                            />
                  <span className="input-icon-addon">
                    <i className="ti ti-calendar text-gray-7" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="mb-3">
                <label className="form-label">
                  Note <span className="text-danger"> *</span>
                </label>
                <textarea className="form-control" rows={3} defaultValue={""} />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  id="check"
                />
                <label className="form-check-label" htmlFor="check">
                  Create a follow up task
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <div className="d-flex align-items-center justify-content-end m-0">
            <button type="button" className="btn btn-outline-light border me-2">
              Cancel
            </button>
            <button className="btn btn-primary" type="button" data-bs-dismiss="modal">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>

  )
}

export default AddCallModal