import React from 'react'

const Spinner = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper cardhead">
                <div className="content container-fluid">
                    {/* Page Header */}
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-12">
                                <h3 className="page-title">Spinner</h3>
                            </div>
                        </div>
                    </div>
                    {/* /Page Header */}
                    <div className="row">
                        {/* Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Border Spinner</h5>
                                </div>
                                <div className="card-body">
                                    <div className="spinner-border" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Spinner */}
                        {/* Colored Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Colored Spinner</h5>
                                </div>
                                <div className="card-body">
                                    <div className="spinner-border text-primary me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-secondary me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-success me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-danger me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-warning me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-info me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-light me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border text-dark me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Colored Spinner */}
                        {/* Grow Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Grow Spinner</h5>
                                </div>
                                <div className="card-body">
                                    <div className="spinner-grow" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Grow Spinner */}
                        {/* Colored Grow Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Colored Grow Spinner</h5>
                                </div>
                                <div className="card-body">
                                    <div className="spinner-grow text-primary me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-secondary me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-success me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-danger me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-warning me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-info me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-light me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow text-dark me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Colored Grow Spinner */}
                        {/* Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Flex Alignment</h5>
                                </div>
                                <div className="card-body">
                                    <div className="d-flex justify-content-center mb-4">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-between">
                                        <strong>Loading...</strong>
                                        <div
                                            className="spinner-border"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Spinner */}
                        {/* Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Float Alignment</h5>
                                </div>
                                <div className="card-body">
                                    <div className="clearfix">
                                        <div className="spinner-border float-end mb-4" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                    <div className="clearfix">
                                        <div className="spinner-border float-start" role="status">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Spinner */}
                        {/* Spinner */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Alignment Text center</h5>
                                </div>
                                <div className="card-body">
                                    <div className="text-center">
                                        <div className="spinner-border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Spinner */}
                        {/* Alignment Margin */}
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Alignment Margin</h5>
                                </div>
                                <div className="card-body">
                                    <div className="spinner-border m-5" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Alignment Margin */}
                        {/* Different Sizes */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Different Sizes</h5>
                                </div>
                                <div className="card-body">
                                    <div className="spinner-border spinner-border-sm me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow spinner-grow-sm mr-3 me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow mr-3 me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-border spinner-border-lg me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                    <div className="spinner-grow spinner-grow-lg me-1" role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Different Sizes */}
                        {/* Buttons Spinner */}
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Buttons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <button
                                            className="btn btn-primary-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-border spinner-border-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button
                                            className="btn btn-primary-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-border spinner-border-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-primary-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Loading...</span>
                                        </button>
                                        <button
                                            className="btn btn-primary-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-secondary-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-success-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1" 
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-info-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-warning-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-danger-light"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button className="btn btn-light" type="button" disabled={false}>
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                        <button
                                            className="btn btn-dark text-fixed-white"
                                            type="button"
                                            disabled={false}
                                        >
                                            <span
                                                className="spinner-grow spinner-grow-sm align-middle me-1"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Buttons Spinner */}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Spinner
