import React from 'react'
import type { DatePickerProps } from 'antd';
import { DatePicker, TimePicker } from 'antd';

import { ColorPicker } from 'antd';



const { RangePicker } = DatePicker;


const FormPikers = () => {
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
    };
 

    return (
        <div className="page-wrapper cardhead">
            <div className="content">
                {/* Page Header */}
                <div className="page-header">
                    <div className="row">
                        <div className="col-sm-12">
                            <h3 className="page-title">Sortable JS</h3>
                        </div>
                    </div>
                </div>
                {/* /Page Header */}
                <div className="row">
                    {/* Flat Picker */}
                    <div className="col-12 mb-6">
                        <div className="card">
                            <h5 className="card-header">Flatpickr</h5>
                            <div className="card-body">
                                <div className="row">
                                    {/* Date Picker*/}
                                    <div className="col-md-6 col-12 mb-6">
                                        <label htmlFor="flatpickr-date" className="form-label">
                                            Date Picker
                                        </label>
                                        <DatePicker onChange={onChange} />
                                    </div>
                                    {/* /Date Picker */}
                                    {/* Time Picker*/}
                                    <div className="col-md-6 col-12 mb-6">
                                        <label htmlFor="flatpickr-time" className="form-label">
                                            Time Picker
                                        </label>
                                        <TimePicker onChange={onChange} needConfirm />
                                    </div>
                                    {/* /Time Picker */}

                                    {/* Range Picker*/}
                                    <div className="col-md-6 col-12 mb-6">
                                        <label htmlFor="flatpickr-range" className="form-label">
                                            Range Picker
                                        </label>
                                        <RangePicker />
                                    </div>
                                    {/* /Range Picker*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Flatpickr */}
                    {/* Color Picker */}
                    <div className="col-12">
                        <div className="card">
                            <h5 className="card-header">Color Picker</h5>
                            <div className="card-body">
                                <div className="row">
                                    <div className="classic col col-sm-3 col-lg-2">
                                        <p>Classic</p>
                                        <ColorPicker defaultValue="#1677ff" />
                                    </div>
                                    <div className="monolith col col-sm-3 col-lg-2">
                                        <p>Monolith</p>
                                        <ColorPicker defaultValue="#28D094" />
                                    </div>
                                    <div className="nano col col-sm-3 col-lg-2">
                                        <p>Nano</p>
                                        <ColorPicker defaultValue="#FF4961" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Color Picker*/}
                </div>
            </div>
        </div>

    )
}

export default FormPikers
