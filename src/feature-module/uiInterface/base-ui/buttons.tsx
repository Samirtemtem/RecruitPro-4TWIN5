import React from 'react'
import { Link } from 'react-router-dom'

const Buttons = () => {
    return (
        <div>
        <div className="page-wrapper">
            <div className="content">
                <div className="page-header">
                    <div className="page-title">
                        <h4>Buttons</h4>
                    </div>
                </div>
                <div className="row">
                    {/* Default Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Default Buttons</h5>
                                <p className="text-muted mb-0">
                                    Use the button classes on an <code>&lt;a&gt;</code>,{" "}
                                    <code>&lt;button&gt;</code>, or <code>&lt;input&gt;</code>{" "}
                                    element.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary me-2">
                                        Primary
                                    </button>
                                    <button type="button" className="btn btn-secondary me-2">
                                        Secondary
                                    </button>
                                    <button type="button" className="btn btn-success me-2">
                                        Success
                                    </button>
                                    <button type="button" className="btn btn-danger me-2">
                                        Danger
                                    </button>
                                    <button type="button" className="btn btn-warning me-2">
                                        Warning
                                    </button>
                                    <button type="button" className="btn btn-info me-2">
                                        Info
                                    </button>
                                    <button type="button" className="btn btn-light me-2">
                                        Light
                                    </button>
                                    <button type="button" className="btn btn-dark me-2">
                                        Dark
                                    </button>
                                    <button type="button" className="btn btn-link me-2">
                                        Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Default Buttons */}
                    {/* Rounded Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Rounded Buttons</h5>
                                <p className="text-muted mb-0">
                                    Add <code>.rounded-pill</code> to default button to get rounded
                                    corners.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary rounded-pill">
                                        Primary
                                    </button>
                                    <button type="button" className="btn btn-secondary rounded-pill">
                                        Secondary
                                    </button>
                                    <button type="button" className="btn btn-success rounded-pill">
                                        Success
                                    </button>
                                    <button type="button" className="btn btn-danger rounded-pill">
                                        Danger
                                    </button>
                                    <button type="button" className="btn btn-warning rounded-pill">
                                        Warning
                                    </button>
                                    <button type="button" className="btn btn-info rounded-pill">
                                        Info
                                    </button>
                                    <button type="button" className="btn btn-light rounded-pill">
                                        Light
                                    </button>
                                    <button type="button" className="btn btn-dark rounded-pill">
                                        Dark
                                    </button>
                                    <button type="button" className="btn btn-link rounded-pill">
                                        Link
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Rounded Buttons */}
                    {/* Outline Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Outline Buttons</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-outline-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-outline-primary">
                                        Primary
                                    </button>
                                    <button type="button" className="btn btn-outline-secondary">
                                        Secondary
                                    </button>
                                    <button type="button" className="btn btn-outline-success">
                                        Success
                                    </button>
                                    <button type="button" className="btn btn-outline-danger">
                                        Danger
                                    </button>
                                    <button type="button" className="btn btn-outline-warning">
                                        Warning
                                    </button>
                                    <button type="button" className="btn btn-outline-info">
                                        Info
                                    </button>
                                    <button type="button" className="btn btn-outline-light">
                                        Light
                                    </button>
                                    <button type="button" className="btn btn-outline-dark">
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Outline Buttons */}
                    {/* Rounded Outline Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Rounded Outline Buttons</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-outline-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button
                                        type="button"
                                        className="btn btn-outline-primary rounded-pill"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-secondary rounded-pill"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-success rounded-pill"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-danger rounded-pill"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-warning rounded-pill"
                                    >
                                        Warning
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-info rounded-pill"
                                    >
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-light rounded-pill"
                                    >
                                        Light
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-outline-dark rounded-pill"
                                    >
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Rounded Outline Buttons */}
                    {/* Soft Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Soft Buttons</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-soft-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-soft-primary">
                                        Primary
                                    </button>
                                    <button type="button" className="btn btn-soft-secondary">
                                        Secondary
                                    </button>
                                    <button type="button" className="btn btn-soft-success">
                                        Success
                                    </button>
                                    <button type="button" className="btn btn-soft-danger">
                                        Danger
                                    </button>
                                    <button type="button" className="btn btn-soft-warning">
                                        Warning
                                    </button>
                                    <button type="button" className="btn btn-soft-info">
                                        Info
                                    </button>
                                    <button type="button" className="btn btn-soft-light">
                                        Light
                                    </button>
                                    <button type="button" className="btn btn-soft-dark">
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Soft Buttons */}
                    {/* Soft Rounded Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Soft Rounded Button</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-soft-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button
                                        type="button"
                                        className="btn btn-soft-primary rounded-pill"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-soft-secondary rounded-pill"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-soft-success rounded-pill"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-soft-danger rounded-pill"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-soft-warning rounded-pill"
                                    >
                                        Warning
                                    </button>
                                    <button type="button" className="btn btn-soft-info rounded-pill">
                                        Info
                                    </button>
                                    <button type="button" className="btn btn-soft-light rounded-pill">
                                        Light
                                    </button>
                                    <button type="button" className="btn btn-soft-dark rounded-pill">
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Soft Rounded Buttons */}
                    {/* Square Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Square Button</h5>
                                <p className="text-muted mb-0">
                                    add <code>.btn-square</code> to change the style.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn  btn-square btn-primary">
                                        Primary
                                    </button>
                                    <button type="button" className="btn  btn-square btn-secondary">
                                        Secondary
                                    </button>
                                    <button type="button" className="btn  btn-square btn-success">
                                        Success
                                    </button>
                                    <button type="button" className="btn  btn-square btn-danger">
                                        Danger
                                    </button>
                                    <button type="button" className="btn  btn-square btn-warning">
                                        Warning
                                    </button>
                                    <button type="button" className="btn  btn-square btn-info">
                                        Info
                                    </button>
                                    <button type="button" className="btn  btn-square btn-light">
                                        Light
                                    </button>
                                    <button type="button" className="btn  btn-square btn-dark">
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Square Buttons */}
                    {/* Square Outline Buttons */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Square Outline Button</h5>
                                <p className="text-muted mb-0">
                                    add <code>.btn-square</code> to change the style.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button
                                        type="button"
                                        className="btn btn-square btn-outline-primary"
                                    >
                                        Primary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-square btn-outline-secondary"
                                    >
                                        Secondary
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-square btn-outline-success"
                                    >
                                        Success
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-square btn-outline-danger"
                                    >
                                        Danger
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-square btn-outline-warning"
                                    >
                                        Warning
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-info">
                                        Info
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-square btn-outline-light"
                                    >
                                        Light
                                    </button>
                                    <button type="button" className="btn btn-square btn-outline-dark">
                                        Dark
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Square Outline Buttons */}
                    {/* Sizes */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Sizes</h5>
                                <p className="text-muted mb-0">
                                    Add <code>.btn-lg</code>, <code>.btn-sm</code>, or{" "}
                                    <code>.btn-xs</code> for additional sizes.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary btn-sm">
                                        Small Button
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                        Default Button
                                    </button>
                                    <button type="button" className="btn btn-success btn-lg">
                                        Large Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Sizes */}
                    {/* Button Tags */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Button Tags</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-outline-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <Link className="btn btn-primary m-0 me-1" to="#" role="button">
                                        Link
                                    </Link>
                                    <button className="btn btn-primary m-0 me-1" type="submit">
                                        Button
                                    </button>
                                    <input
                                        className="btn btn-primary me-1"
                                        type="button"
                                        defaultValue="Input"
                                    />
                                    <input
                                        className="btn btn-primary me-1"
                                        type="submit"
                                        defaultValue="Submit"
                                    />
                                    <input
                                        className="btn btn-primary me-1"
                                        type="reset"
                                        defaultValue="Reset"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Button Tags */}
                    {/* Button Widths */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Button Widths</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-outline-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list d-flex flex-wrap">
                                    <button type="button" className="btn btn-primary btn-w-xs">
                                        XS
                                    </button>
                                    <button type="button" className="btn btn-secondary btn-w-sm">
                                        SM
                                    </button>
                                    <button type="button" className="btn btn-warning btn-w-md">
                                        MD
                                    </button>
                                    <button type="button" className="btn btn-info btn-w-lg me-0">
                                        LG
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Button Widths */}
                    {/* Button Disabled */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Button Disabled</h5>
                                <p className="text-muted mb-0">
                                    {" "}
                                    Add the <code>disabled</code> attribute to{" "}
                                    <code>&lt;button&gt;</code> buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary disabled">
                                        Primary
                                    </button>
                                    <button type="button" className="btn btn-success disabled">
                                        Success
                                    </button>
                                    <button type="button" className="btn btn-info disabled">
                                        Info
                                    </button>
                                    <button type="button" className="btn btn-warning disabled">
                                        Warning
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Button Disabled */}
                    {/* Button Loader */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Button Loader</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-outline-**</code> to quickly create a
                                    bordered buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list">
                                    <button type="button" className="btn btn-primary">
                                        <i className="fas fa-spinner fa-spin me-2"/>
                                        Loading...
                                    </button>
                                    <button type="button" className="btn btn-secondary">
                                    <i className="fas fa-spinner fa-spin me-2"/>
                                    Loading...
                                    </button>
                                    <button type="button" className="btn btn-warning">
                                    <i className="fas fa-spinner fa-spin me-2"/>
                                    Loading...
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Button Loader */}
                    {/* Icon Loader */}
                    <div className="col-xl-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Icon Buttons</h5>
                                <p className="text-muted mb-0">
                                    Use a classes <code>.btn-icon</code> to quickly create a bordered
                                    buttons.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list d-md-flex d-block">
                                    <button className="btn btn-icon btn-primary">
                                        <i className="fas fa-bell"/>
                                    </button>
                                    <button className="btn btn-icon btn-success">
                                    <i className="fas fa-bell"/>

                                    </button>
                                    <button className="btn btn-icon btn-soft-primary rounded-pill">
                                    <i className="fas fa-bell"/>

                                    </button>
                                    <button className="btn btn-icon btn-soft-success rounded-pill">
                                    <i className="fas fa-bell"/>

                                    </button>
                                    <button className="btn btn-icon btn-outline-primary rounded-pill">
                                    <i className="fas fa-bell"/>

                                    </button>
                                    <button className="btn btn-icon btn-outline-success rounded-pill">
                                    <i className="fas fa-bell"/>

                                    </button>
                                    <button type="button" className="btn btn-primary">
                                    <i className="fas fa-bell me-2"/>
                                        Like
                                    </button>
                                    <button type="button" className="btn btn-success">
                                    <i className="fas fa-bell me-2"/>
                                    Like
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Icon Loader */}
                    {/* Block Loader */}
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">Block buttons</h5>
                                <p className="text-muted mb-0">
                                    Create block level buttons by adding class <code>.d-grid</code> to
                                    parent div.
                                </p>
                            </div>
                            <div className="card-body">
                                <div className="btn-list d-block">
                                    <div className="d-grid gap-2 mb-4">
                                        <button className="btn btn-primary" type="button">
                                            Button
                                        </button>
                                        <button className="btn btn-secondary" type="button">
                                            Button
                                        </button>
                                    </div>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-info" type="button">
                                            Button
                                        </button>
                                        <button className="btn btn-success" type="button">
                                            Button
                                        </button>
                                    </div>
                                    <div className="d-grid gap-2 col-6 mx-auto">
                                        <button className="btn btn-danger" type="button">
                                            Button
                                        </button>
                                        <button className="btn btn-warning" type="button">
                                            Button
                                        </button>
                                    </div>
                                    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                                        <button className="btn btn-teal me-md-2" type="button">
                                            Button
                                        </button>
                                        <button className="btn btn-purple" type="button">
                                            Button
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Block Loader */}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Buttons
