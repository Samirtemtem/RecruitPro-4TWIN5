import React from 'react'
import { Link } from 'react-router-dom'

const Dropdowns = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Dropdowns</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Dropdowns */}
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Dropdowns</h5>
                                </div>
                                <div className="card-body d-flex flex-wrap gap-2">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-primary dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown Button
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="dropdown">
                                      <Link
                                            className="btn btn-secondary dropdown-toggle"
                                            to="#"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown Link
                                        </Link>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdowns */}
                        {/* Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Single dropdown buttons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list d-flex flex-wrap gap-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-secondary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-success dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-info dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-warning dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-danger dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Dropdowns */}
                        {/* Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Rounded Button Dropdowns</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list d-flex flex-wrap gap-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-primary dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-secondary dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-success dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-info dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-warning dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-danger dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Dropdowns */}
                        {/* Outline Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Outline Button Dropdowns</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list d-flex flex-wrap gap-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-success dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-info dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Outline Dropdowns */}
                        {/* Rounded Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Rounded Outline Dropdowns</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list d-flex flex-wrap gap-2">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-primary dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-secondary dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-success dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-info dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-warning dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-outline-danger dropdown-toggle rounded-pill"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Action
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Rounded Dropdowns */}
                        {/* Split buttons */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Split buttons</h5>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group my-1">
                                        <button type="button" className="btn btn-primary">
                                            Action
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-primary dropdown-toggle dropdown-toggle-split me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1">
                                        <button type="button" className="btn btn-secondary">
                                            Action
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary dropdown-toggle dropdown-toggle-split me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1">
                                        <button type="button" className="btn btn-info">
                                            Action
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info dropdown-toggle dropdown-toggle-split me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1">
                                        <button type="button" className="btn btn-success">
                                            Action
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success dropdown-toggle dropdown-toggle-split me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1">
                                        <button type="button" className="btn btn-warning">
                                            Action
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning dropdown-toggle dropdown-toggle-split me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1">
                                        <button type="button" className="btn btn-danger">
                                            Action
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger dropdown-toggle dropdown-toggle-split me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdown Sizing</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group my-1 me-2">
                                        <button
                                            className="btn btn-primary btn-lg dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Large button
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1 me-2">
                                        <button className="btn btn-success btn-lg" type="button">
                                            Large split button
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-lg btn-success dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* samll button groups (default and split) */}
                                    <div className="btn-group my-1 me-2">
                                        <button
                                            className="btn btn-primary btn-sm dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Small button
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group my-1">
                                        <button className="btn btn-danger btn-sm" type="button">
                                            Small split button
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-sm btn-danger dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Split buttons */}
                        {/* Dropup */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropup</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group dropup my-1">
                                        <button
                                            type="button"
                                            className="btn btn-primary dropdown-toggle me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropup
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group dropup my-1">
                                        <button type="button" className="btn btn-info">
                                            Split dropup
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropdown</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropup */}
                        {/* Dropup right */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropup right</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group dropend my-1">
                                        <button
                                            type="button"
                                            className="btn btn-primary dropdown-toggle me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropright
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group dropend my-1">
                                        <button type="button" className="btn btn-info">
                                            Split dropend
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            <span className="visually-hidden">Toggle Dropright</span>
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropup right */}
                        {/* Dropup left */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropup left</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group dropstart my-1">
                                        <button
                                            type="button"
                                            className="btn btn-primary dropdown-toggle me-2"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropstart
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="btn-group">
                                        <div className="btn-group dropstart my-1" role="group">
                                            <button
                                                type="button"
                                                className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                <span className="visually-hidden">Toggle Dropstart</span>
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <button type="button" className="btn btn-info my-1">
                                            Split dropstart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropup left */}
                        {/* Active */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Active</div>
                                </div>
                                <div className="card-body">
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle me-1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropstart
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                          <Link className="dropdown-item" to="#">
                                                Regular link
                                            </Link>
                                        </li>
                                        <li>
                                          <Link
                                                className="dropdown-item active"
                                                to="#"
                                                aria-current="true"
                                            >
                                                Active link
                                            </Link>
                                        </li>
                                        <li>
                                          <Link className="dropdown-item" to="#">
                                                Another link
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Active */}
                        {/* Disabled */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Disabled</div>
                                </div>
                                <div className="card-body">
                                    <button
                                        type="button"
                                        className="btn btn-primary dropdown-toggle me-1"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropstart
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                          <Link className="dropdown-item" to="#">
                                                Regular link
                                            </Link>
                                        </li>
                                        <li>
                                          <Link
                                                className="dropdown-item disabled"
                                                to="#"
                                                aria-current="true"
                                            >
                                                Active link
                                            </Link>
                                        </li>
                                        <li>
                                          <Link className="dropdown-item" to="#">
                                                Another link
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* /Disabled */}
                        {/* Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdowns with Forms</div>
                                </div>
                                <div className="card-body">
                                    <button
                                        className="btn btn-secondary dropdown-toggle"
                                        type="button"
                                        id="dropdownMenu2"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Dropdown
                                    </button>
                                    <div className="dropdown-menu">
                                        <form className="px-4 py-3">
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleDropdownFormEmail1"
                                                    className="form-label"
                                                >
                                                    Email address
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="exampleDropdownFormEmail1"
                                                    placeholder="email@example.com"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label
                                                    htmlFor="exampleDropdownFormPassword1"
                                                    className="form-label"
                                                >
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="exampleDropdownFormPassword1"
                                                    placeholder="Password"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="dropdownCheck"
                                                    />
                                                    <label className="form-check-label" htmlFor="dropdownCheck">
                                                        Remember me
                                                    </label>
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Sign in
                                            </button>
                                        </form>
                                        <div className="dropdown-divider" />
                                      <Link className="dropdown-item" to="#">
                                            New around here? Sign up
                                        </Link>
                                      <Link className="dropdown-item" to="#">
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdowns */}
                        {/* Auto close behavior */}
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Auto close behavior</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                id="defaultDropdown"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="true"
                                                aria-expanded="false"
                                            >
                                                Default dropdown
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="defaultDropdown">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuClickableOutside"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="inside"
                                                aria-expanded="false"
                                            >
                                                Clickable outside
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuClickableOutside"
                                            >
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-info dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuClickableInside"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="outside"
                                                aria-expanded="false"
                                            >
                                                Clickable inside
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuClickableInside"
                                            >
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-warning dropdown-toggle"
                                                type="button"
                                                id="dropdownMenuClickableInsise"
                                                data-bs-toggle="dropdown"
                                                data-bs-auto-close="false"
                                                aria-expanded="false"
                                            >
                                                Manual close
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuClickableInsise"
                                            >
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Auto close behavior */}
                        {/* Dropdown menu centered */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdown menu centered</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted mb-3">
                                        Use <code>.dropdown-center</code> on the parent element.
                                    </p>
                                    <div className="dropdown-center">
                                        <button
                                            className="btn btn-primary dropdown-toggle"
                                            type="button"
                                            id="dropdownCenterBtn"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Centered dropdown
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownCenterBtn">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action two
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action three
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdown menu centered */}
                        {/* Dropdown centered */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropup centered</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted mb-3">
                                        Use <code>.dropup-center</code>
                                        on the parent element.
                                    </p>
                                    <div className="dropup-center dropup">
                                        <button
                                            className="btn btn-secondary dropdown-toggle"
                                            type="button"
                                            id="dropupCenterBtn"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Centered dropup
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropupCenterBtn">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action two
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action three
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdown centered */}
                        {/* Menu items */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Menu items</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted mb-3">
                                        You can use <code>&lt;a&gt;</code> or <code>&lt;button&gt;</code>{" "}
                                        as dropdown items.
                                    </p>
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-info dropdown-toggle"
                                            type="button"
                                            id="dropdownMenu1"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown
                                        </button>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Another action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Something else here
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdowns options</div>
                                </div>
                                <div className="card-body">
                                    <p className="text-muted mb-3">
                                        Use <code>data-bs-offset</code> or <code>data-bs-reference</code>{" "}
                                        to change the location of the dropdown.
                                    </p>
                                    <div className="d-flex align-items-center">
                                        <div className="dropdown me-1">
                                            <button
                                                type="button"
                                                className="btn btn-primary dropdown-toggle"
                                                id="dropdownMenuOffset"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-bs-offset="10,20"
                                            >
                                                Offset
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuOffset"
                                            >
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button type="button" className="btn btn-info">
                                                Reference
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-info dropdown-toggle dropdown-toggle-split"
                                                id="dropdownMenuReference"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                                data-bs-reference="parent"
                                            >
                                                <span className="visually-hidden">Toggle Dropdown</span>
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuReference"
                                            >
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Menu items */}
                        {/* Alignment options */}
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Alignment options</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <div className="btn-group my-1">
                                            <button
                                                className="btn btn-primary dropdown-toggle mb-0"
                                                type="button"
                                                id="dropdownMenuButton"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropdown
                                            </button>
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuButton"
                                            >
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group my-1">
                                            <button
                                                type="button"
                                                className="btn btn-secondary dropdown-toggle mb-0"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Right-aligned menu
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group my-1">
                                            <button
                                                type="button"
                                                className="btn btn-info dropdown-toggle mb-0"
                                                data-bs-toggle="dropdown"
                                                data-bs-display="static"
                                                aria-expanded="false"
                                            >
                                                Left-aligned, right-aligned lg
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-lg-end">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group my-1">
                                            <button
                                                type="button"
                                                className="btn btn-warning dropdown-toggle mb-0"
                                                data-bs-toggle="dropdown"
                                                data-bs-display="static"
                                                aria-expanded="false"
                                            >
                                                Right-aligned, left-aligned lg
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group dropstart my-1">
                                            <button
                                                type="button"
                                                className="btn btn-success dropdown-toggle mb-0"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropstart
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group dropend my-1">
                                            <button
                                                type="button"
                                                className="btn btn-danger dropdown-toggle mb-0"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropend
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group dropup my-1">
                                            <button
                                                type="button"
                                                className="btn btn-teal dropdown-toggle mb-0"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Dropup
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Menu item
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Alignment options */}
                        {/* Dark Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dark Dropdowns</div>
                                </div>
                                <div className="card-body">
                                    <div className="dropdown">
                                        <button
                                            className="btn btn-dark dropdown-toggle"
                                            type="button"
                                            id="dropdownMenuButton3"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Dropdown button
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-dark">
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dark Dropdowns */}
                        {/* Menu alignment */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Menu alignment</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-primary dropdown-toggle"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                        >
                                            Right-aligned menu example
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-end">
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Another action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Something else here
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Menu alignment */}
                        {/* Responsive Dropdowns */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Responsive alignment end</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-secondary dropdown-toggle text-wrap"
                                            data-bs-toggle="dropdown"
                                            data-bs-display="static"
                                            aria-expanded="false"
                                        >
                                            Left-aligned but right aligned when large screen
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-lg-end">
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Another action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Something else here
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Responsive alignment left</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-info dropdown-toggle text-wrap"
                                            data-bs-toggle="dropdown"
                                            data-bs-display="static"
                                            aria-expanded="false"
                                        >
                                            Left-aligned but right aligned when large screen
                                        </button>
                                        <ul className="dropdown-menu dropdown-menu-lg-start">
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Another action
                                                </button>
                                            </li>
                                            <li>
                                                <button className="dropdown-item" type="button">
                                                    Something else here
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Responsive Dropdowns */}
                        {/* Custom Dropdown Menu's */}
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Custom Dropdown Menu&apos;s</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-primary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Primary
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-primary">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-secondary dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Secondary
                                            </button>
                                            <ul className="dropdown-menu dropdown-menu-secondary">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-warning dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Warning
                                            </button>
                                            <ul className="dropdown-menu dropmenu-item-warning">
                                                <li>
                                                  <Link
                                                        className="dropdown-item active"
                                                        to="#"
                                                    >
                                                        Active
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-info dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Info
                                            </button>
                                            <ul className="dropdown-menu dropmenu-item-info">
                                                <li>
                                                  <Link
                                                        className="dropdown-item active"
                                                        to="#"
                                                    >
                                                        Active
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-soft-success dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Success
                                            </button>
                                            <ul className="dropdown-menu dropmenu-light-success">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link
                                                        className="dropdown-item active"
                                                        to="#"
                                                    >
                                                        Active
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                className="btn btn-soft-danger dropdown-toggle"
                                                type="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Danger
                                            </button>
                                            <ul className="dropdown-menu dropmenu-light-danger">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link
                                                        className="dropdown-item active"
                                                        to="#"
                                                    >
                                                        Active
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Custom Dropdown Menu's */}
                        {/* Ghost Button Dropdowns */}
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Ghost Button Dropdowns</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-primary-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Primary
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-secondary-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Secondary
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-success-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Success
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-info-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Info
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-warning-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Warning
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="btn-group">
                                            <button
                                                type="button"
                                                className="btn btn-danger-ghost dropdown-toggle"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                Danger
                                            </button>
                                            <ul className="dropdown-menu">
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Another action
                                                    </Link>
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Something else here
                                                    </Link>
                                                </li>
                                                <li>
                                                    <hr className="dropdown-divider" />
                                                </li>
                                                <li>
                                                  <Link className="dropdown-item" to="#">
                                                        Separated link
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Ghost Button Dropdowns */}
                        {/* Dropdown */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">non-interactive dropdown items</div>
                                </div>
                                <div className="card-body">
                                    <p className="card-title mb-3">
                                        Use <code>.dropdown-item-text.</code> to create non-interactive
                                        dropdown items.
                                    </p>
                                    <div className="bd-example">
                                        <ul className="dropdown-menu">
                                            <li>
                                                <span className="dropdown-item-text">Dropdown item text</span>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdown */}
                        {/* Dropdown Headers */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdown Headers</div>
                                </div>
                                <div className="card-body">
                                    <p className="card-title mb-3">
                                        Add a <code>.dropdown-header</code> to label sections of actions
                                        in any dropdown menu.
                                    </p>
                                    <div className="bd-example">
                                        <ul className="dropdown-menu">
                                            <li>
                                                <h6 className="dropdown-header">Dropdown header</h6>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdown Headers */}
                        {/* Dropdown Dividers */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdown Dividers</div>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example">
                                        <ul className="dropdown-menu">
                                            <li>
                                              <Link className="dropdown-header" to="#">
                                                    Heading
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Another action
                                                </Link>
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Something else here
                                                </Link>
                                            </li>
                                            <li>
                                                <hr className="dropdown-divider" />
                                            </li>
                                            <li>
                                              <Link className="dropdown-item" to="#">
                                                    Separated link
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdown Dividers */}
                        {/* Dropdown Menu */}
                        <div className="col-xl-3">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dropdown Menu Text</div>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example">
                                        <div
                                            className="dropdown-menu p-4 text-muted"
                                            style={{ maxWidth: 200 }}
                                        >
                                            <p>
                                                Some example text that&aposs free-flowing within the dropdown
                                                menu.
                                            </p>
                                            <p className="mb-0">And this is more example text.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dropdown Menu */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dropdowns
