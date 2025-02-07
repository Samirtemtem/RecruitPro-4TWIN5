import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'

const Avatar = () => {
    return (
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Avatars</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatars</h5>
                            </div>
                            <div className="card-body d-flex flex-wrap gap-2">
                                <span className="avatar avatar-xl me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2 avatar-radius-0">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl bg-primary avatar-rounded">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar avatar-xl bg-success avatar-radius-0">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar avatar-xl bg-danger">
                                    <span className="avatar-title">SR</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar Sizes</h5>
                            </div>
                            <div className="card-body">
                                <span className="avatar avatar-xs me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-sm me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-md me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-lg me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xxl me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xxxl me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar With Badge</h5>
                            </div>
                            <div className="card-body">
                                <span className="avatar avatar-xs me-2 online avatar-rounded me-2">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-sm online me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-md me-2 online avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-lg me-2 online avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xl me-2 online avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                </span>
                                <span className="avatar avatar-xxl me-2 online avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-03.jpg" alt="img" />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar With Badge</h5>
                            </div>
                            <div className="card-body">
                                <span className="avatar avatar-xs me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                    <span className="badge rounded-pill bg-primary avatar-badge">
                                        2
                                    </span>
                                </span>
                                <span className="avatar avatar-sm me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                    <span className="badge rounded-pill bg-secondary avatar-badge">
                                        5
                                    </span>
                                </span>
                                <span className="avatar avatar-md me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                    <span className="badge rounded-pill bg-warning avatar-badge">
                                        1
                                    </span>
                                </span>
                                <span className="avatar avatar-lg me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                    <span className="badge rounded-pill bg-info avatar-badge">7</span>
                                </span>
                                <span className="avatar avatar-xl me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                    <span className="badge rounded-pill bg-success avatar-badge">
                                        3
                                    </span>
                                </span>
                                <span className="avatar avatar-xxl me-2 avatar-rounded">
                                    <ImageWithBasePath src="assets/img/profiles/avatar-02.jpg" alt="img" />
                                    <span className="badge rounded-pill bg-danger avatar-badge">
                                        9
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar With Badge</h5>
                            </div>
                            <div className="card-body">
                                <span className="avatar bg-primary avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-danger avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-success avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-warning avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-info avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar With Badge</h5>
                            </div>
                            <div className="card-body">
                                <span className="avatar bg-soft-secondary avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-soft-danger avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-soft-success avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-soft-danger avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                                <span className="avatar bg-soft-info avatar-rounded me-1">
                                    <span className="avatar-title">SR</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar With Badge</h5>
                            </div>
                            <div className="card-body">
                                <div className="avatar-list-stacked avatar-group-lg mb-4">
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <Link
                                        className="avatar bg-primary text-fixed-white"
                                        to="#"
                                    >
                                        +8
                                    </Link>
                                </div>
                                <div className="avatar-list-stacked mb-4">
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <Link
                                        className="avatar bg-primary text-fixed-white"
                                        to="#"
                                    >
                                        +8
                                    </Link>
                                </div>
                                <div className="avatar-list-stacked avatar-group-sm">
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <span className="avatar">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-04.jpg" alt="img" />
                                    </span>
                                    <Link
                                        className="avatar bg-primary text-fixed-white"
                                        to="#"
                                    >
                                        +8
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Avatar With Badge</h5>
                            </div>
                            <div className="card-body">
                                <div className="avatar-list-stacked avatar-group-lg mb-4">
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-05.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-05.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                    </span>
                                    <Link
                                        className="avatar bg-primary avatar-rounded text-fixed-white"
                                        to="#"
                                    >
                                        +8
                                    </Link>
                                </div>
                                <div className="avatar-list-stacked mb-4">
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-05.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-05.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                    </span>
                                    <Link
                                        className="avatar bg-primary avatar-rounded text-fixed-white"
                                        to="#"
                                    >
                                        +8
                                    </Link>
                                </div>
                                <div className="avatar-list-stacked avatar-group-sm">
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-05.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath
                                            className="border border-white"
                                            src="assets/img/profiles/avatar-05.jpg"
                                            alt="img"
                                        />
                                    </span>
                                    <span className="avatar avatar-rounded">
                                        <ImageWithBasePath src="assets/img/profiles/avatar-05.jpg" alt="img" />
                                    </span>
                                    <Link
                                        className="avatar bg-primary avatar-rounded text-fixed-white"
                                        to="#"
                                    >
                                        +8
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Avatar
