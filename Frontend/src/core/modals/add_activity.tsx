import { DatePicker } from 'antd';
import React from 'react'
import { Link } from 'react-router-dom'
import CommonSelect from '../common/commonSelect';
import { beforeuse, company, contacts, deals, guests, owner } from '../common/selectoption/selectoption';
import { label } from 'yet-another-react-lightbox/*';

const AddActivity = () => {

    const addnew = [
        { value: "Select", label: "Select" },
        { value: "Epicurean Delights", label: "Epicurean Delights" },
        { value: "Nimbus Networks", label: "Nimbus Networks" },
        { value: "UrbanPulse Design", label: "UrbanPulse Design" },
    ];

    const getModalContainer = () => {
        const modalElement = document.getElementById('modal-datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };
    const getModalContainer2 = () => {
        const modalElement = document.getElementById('modal_datepicker');
        return modalElement ? modalElement : document.body; // Fallback to document.body if modalElement is null
    };
    return (
        <>
            {/* Add Activiy */}
            <div className="modal fade" id="add_activity">
                <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Add New Activity</h4>
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
                            <div className="modal-body pb-0">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Title <span className="text-danger"> *</span>
                                            </label>
                                            <input type="text" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <label className="form-label">
                                            Activity Type <span className="text-danger"> *</span>
                                        </label>
                                        <div className="activity-items d-flex align-items-center mb-3">
                                            <Link
                                                to="#"
                                                className=" br-5 d-flex align-items-center justify-content-center active me-2"
                                            >
                                                {" "}
                                                <i className="ti ti-phone me-1" />
                                                Calls
                                            </Link>
                                            <Link
                                                to="#"
                                                className=" br-5 d-flex align-items-center justify-content-center me-2"
                                            >
                                                {" "}
                                                <i className="ti ti-mail me-1" />
                                                Email
                                            </Link>
                                            <Link
                                                to="#"
                                                className=" br-5 d-flex align-items-center justify-content-center me-2"
                                            >
                                                {" "}
                                                <i className="ti ti-user-circle me-1" />
                                                Meeting
                                            </Link>
                                            <Link
                                                to="#"
                                                className=" br-5 d-flex align-items-center justify-content-center me-2"
                                            >
                                                {" "}
                                                <i className="ti ti-list-check me-1" />
                                                Task
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Due Date <span className="text-danger"> *</span>
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
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Time <span className="text-danger"> *</span>
                                            </label>
                                            <div className="input-icon-end position-relative">
                                                <input type="text" className="form-control timepicker" />
                                                <span className="input-icon-addon">
                                                    <i className="ti ti-clock-hour-10 text-gray-7" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 lead-phno-col del-phno-col">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="input-block mb-3">
                                                    <label className="form-label">
                                                        Remainder <span className="text-danger"> *</span>
                                                    </label>
                                                    <div className="input-icon-start position-relative">
                                                        <input type="text" className="form-control" />
                                                        <span className="input-icon-addon">
                                                            <i className="ti ti-bell text-gray-7" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 d-flex align-items-end">
                                                <div className="input-block w-100 mb-3 d-flex align-items-center">
                                                    <div className="w-100">
                                                        <CommonSelect
                                                            className='select'
                                                            options={beforeuse}
                                                            defaultValue={beforeuse[0]}
                                                        />
                                                    </div>
                                                    <h6 className="fs-14 fw-normal ms-3">Before Use</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Owner <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={owner}
                                                defaultValue={owner[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Guests <span className="text-danger"> *</span>
                                            </label>
                                            <CommonSelect
                                                className='select'
                                                options={guests}
                                                defaultValue={guests[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="mb-3">
                                            <label className="form-label">
                                                Description <span className="text-danger"> *</span>
                                            </label>
                                            <div className="summernote" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-block mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="col-form-label">
                                                    Deals <span className="text-danger"> *</span>
                                                </label>
                                                <Link
                                                    to="#"
                                                    className="add-new text-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#add_deals"
                                                >
                                                    <i className="ti ti-plus text-primary me-1" />
                                                    Add New
                                                </Link>
                                            </div>
                                            <CommonSelect
                                                className='select'
                                                options={addnew}
                                                defaultValue={addnew[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-block mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="col-form-label">
                                                    Contacts <span className="text-danger"> *</span>
                                                </label>
                                                <Link
                                                    to="#"
                                                    className="add-new text-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#add_contact"
                                                >
                                                    <i className="ti ti-plus text-primary me-1" />
                                                    Add New
                                                </Link>
                                            </div>
                                            <CommonSelect
                                                className='select'
                                                options={contacts}
                                                defaultValue={contacts[0]}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="input-block mb-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <label className="col-form-label">
                                                    Companies <span className="text-danger"> *</span>
                                                </label>
                                                <Link
                                                    to="#"
                                                    className="add-new text-primary"
                                                    data-bs-toggle="modal"
                                                    data-bs-target="#add_company"
                                                >
                                                    <i className="ti ti-plus text-primary me-1" />
                                                    Add New
                                                </Link>
                                            </div>
                                            <CommonSelect
                                                className='select'
                                                options={company}
                                                defaultValue={company[0]}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-light me-2"
                                    data-bs-dismiss="modal"
                                >
                                    Cancel
                                </button>
                                <button type="button" data-bs-dismiss="modal" className="btn btn-primary">
                                    Add Activity
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* /Add Activity */}
        </>


    )
}

export default AddActivity
