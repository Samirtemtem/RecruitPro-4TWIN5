import React from 'react'
import { Link } from 'react-router-dom'

const Breadcrumb = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Breadcrumb</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Default Breadcrumb</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Home
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Arrow Style</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-arrow">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Home
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-arrow">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-arrow mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Pipe Style</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-pipe">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Home
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-pipe">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-pipe mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Line Style</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-line">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Home
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-line">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-line mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Dot Style</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dot">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Home
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dot">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-dot mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Dividers</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-divide">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Home
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-divide">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-divide mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">Home</Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Breadcrumb with Icon</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <i className="fas fa-home" />
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Without Separator</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-separatorless">
                                            <li className="breadcrumb-item active" aria-current="page">
                                                <i className="fas fa-home" />
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-separatorless">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Library
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-separatorless mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Colored Breadcrumb</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-primary">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-secondary">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-success">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-info">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-warning">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-danger">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-dark mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Light Colored Breadcrumb</h5>
                                </div>
                                <div className="card-body">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-primary">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-secondary">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-success">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-info">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-warning">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-danger">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb breadcrumb-colored bg-soft-dark mb-0">
                                            <li className="breadcrumb-item">
                                                <Link to="#">
                                                    <i className="fas fa-home" />
                                                </Link>
                                            </li>
                                            <li className="breadcrumb-item">
                                                <Link to="#">Library</Link>
                                            </li>
                                            <li className="breadcrumb-item active" aria-current="page">
                                                Data
                                            </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Breadcrumb
