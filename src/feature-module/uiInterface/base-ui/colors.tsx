import React from 'react'
import { Smile } from 'react-feather'

const Colors = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Colors</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Background Colors */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Background Colors</h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex flex-wrap colors_parent">
                                        <div>
                                            <div className="color-box bg-primary p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">Primary</p>
                                            <p className="flex-0 text-sm">#FF9F43</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-secondary p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">Secondary</p>
                                            <p className="flex-0 text-sm">#092C4C</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-warning p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">warning</p>
                                            <p className="flex-0 text-sm">#FF9900</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-info p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">info</p>
                                            <p className="flex-0 text-sm">#17a2b8</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-success p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">success</p>
                                            <p className="flex-0 text-sm">#28C76F</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-danger p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">danger</p>
                                            <p className="flex-0 text-sm">#FF0000</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-light border p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">light</p>
                                            <p className="flex-0 text-sm">#f8f9fa</p>
                                        </div>
                                        <div>
                                            <div className="color-box bg-dark p-4" />
                                            <p className="flex-1 text-sm my-1 pt-1">dark</p>
                                            <p className="flex-0 text-sm">#29344a</p>
                                        </div>
                                    </div>
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-primary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-secondary mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-secondary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-warning mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-warning</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-info mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-info</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-success mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-success</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-danger mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-danger</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-light mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-light</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-dark mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-dark</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Background Colors */}
                        {/* Transparent Colors */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Background transparent colors</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-primary mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-primary-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-secondary mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-secondary-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-warning mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-warning-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-info mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-info-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-success mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-success-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-danger mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-danger-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-light mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-light-transparent</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-soft-dark mx-auto color-container shadow-none" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-dark-transparent</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Transparent Colors */}
                        {/* Background gradients */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Background gradients</div>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-primary-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-secondary-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-secondary-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-warning-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-warning-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-info-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-info-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-success-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-success-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-danger-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-danger-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-light-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-light-gradient</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-dark-gradient mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-dark-gradient</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Background gradients */}
                        {/* Outline Colors */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card custom-card">
                                <div className="card-header">
                                    <div className="card-title">Background outline colors</div>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-primary mx-auto color-container">
                                             
                                                <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-primary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-secondary mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-secondary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-warning mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-warning</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-info mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-info</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-success mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-success</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-danger mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-danger</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-light mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-light</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-outline-dark mx-auto color-container">
                                            <Smile className="fs-18"/>
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-outline-dark</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Outline Colors */}
                        {/* Border Colors */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Border Colors</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 border border-primary mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-primary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-secondary mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-secondary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-warning mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-warning</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-info mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-info</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-success mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-success</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-danger mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-danger</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-light mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-light</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 border border-dark mx-auto color-container" />
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.border-dark</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Border Colors */}
                        {/* Text Colors */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Text Colors</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary fw-semibold fs-14 text-center">
                                                primary
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-primary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-secondary fw-semibold fs-14 text-center">
                                                secondary
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-secondary</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-warning fw-semibold fs-14 text-center">
                                                warning
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-warning</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-info fw-semibold fs-14 text-center">
                                                info
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-info</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-success fw-semibold fs-14 text-center">
                                                success
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-success</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-danger fw-semibold fs-14 text-center">
                                                danger
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-danger</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-light bg-dark fw-semibold fs-14 text-center">
                                                light
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-light</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-dark fw-semibold fs-14 text-center">
                                                dark
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-dark</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-muted fw-semibold fs-14 text-center">
                                                muted
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-muted</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Text Colors */}
                        {/* Text Opacity */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">Text Opacity</div>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary fw-semibold fs-14 text-center">
                                                Opacity-100
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>100% opacity</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-75 fw-semibold fs-14 text-center">
                                                Opacity-100
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-opacity-75</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-50 fw-semibold fs-14 text-center">
                                                Opacity-100
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-opacity-50</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 text-primary text-opacity-25 fw-semibold fs-14 text-center">
                                                Opacity-100
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.text-opacity-25</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Text Opacity */}
                        {/* Text Colors */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Other Colors</h5>
                                </div>
                                <div className="card-body d-xl-flex">
                                    <div className="flex-fill p-3 bg-gray-100">$gray-100</div>
                                    <div className="flex-fill p-3 bg-gray-200">$gray-200</div>
                                    <div className="flex-fill p-3 bg-gray-300">$gray-300</div>
                                    <div className="flex-fill p-3 bg-gray-400">$gray-400</div>
                                    <div className="flex-fill p-3 bg-gray-500">$gray-500</div>
                                    <div className="flex-fill p-3 bg-gray-600">$gray-600</div>
                                    <div className="flex-fill p-3 bg-gray-700">$gray-700</div>
                                    <div className="flex-fill p-3 bg-gray-800">$gray-800</div>
                                    <div className="flex-fill p-3 bg-gray-900">$gray-900</div>
                                    <div className="flex-fill p-3 bg-gray">$gray</div>
                                </div>
                            </div>
                        </div>
                        {/* /Text Colors */}
                        {/* Background Opacity */}
                        <div className="col-lg-12 col-sm-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Background Opacity</h5>
                                </div>
                                <div className="card-body">
                                    <div className="row row-cols-12 d-flex align-items-center">
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary bg-opacity-100 text-fixed-white mx-auto color-container">
                                                100%
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-opacity-100</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary text-fixed-white bg-opacity-75 mx-auto color-container">
                                                75%
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-opacity-75</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary text-fixed-black bg-opacity-50 mx-auto color-container">
                                                50%
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-opacity-50</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary text-fixed-black bg-opacity-25 mx-auto color-container">
                                                25%
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-opacity-25</code>
                                            </p>
                                        </div>
                                        <div className="p-3 col">
                                            <div className="m-2 bg-primary text-fixed-black bg-opacity-10 mx-auto color-container">
                                                10%
                                            </div>
                                            <p className="pb-0 mb-0 fw-semibold text-center">
                                                <code>.bg-opacity-10</code>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Background Opacity */}
                        {/* Callout */}
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="card-title">
                                        <h5 className="card-title">Callout</h5>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="callout">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                                    </div>
                                    <div className="callout callout-info">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                                    </div>
                                    <div className="callout callout-warning">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
                                    </div>
                                    <div className="callout callout-danger">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Callout */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Colors
