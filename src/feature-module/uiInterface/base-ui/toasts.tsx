import React, { useEffect, useState } from 'react'
import { Button, Toast } from 'react-bootstrap';

const Toasts = () => {
    const [showTopLeftToast, setShowTopLeftToast] = useState(false);

    const handleTopLeftButtonClick = () => {
        setShowTopLeftToast(true);
    };

    const handleTopLeftToastClose = () => {
        setShowTopLeftToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowTopLeftToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showTopLeftToast]);

    const [showTopCenterToast, setShowTopCenterToast] = useState(false);

    const handleTopCenterButtonClick = () => {
        setShowTopCenterToast(true);
    };

    const handleTopCenterToastClose = () => {
        setShowTopCenterToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowTopCenterToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showTopCenterToast]);

    const [showTopEndToast, setShowTopEndToast] = useState(false);

    const handleTopEndButtonClick = () => {
        setShowTopEndToast(true);
    };

    const handleTopEndToastClose = () => {
        setShowTopEndToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowTopEndToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showTopEndToast]);

    const [showMiddleLeftToast, setShowMiddleLeftToast] = useState(false);

    const handleMiddleLeftButtonClick = () => {
        setShowMiddleLeftToast(true);
    };

    const handleMiddleLeftToastClose = () => {
        setShowMiddleLeftToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMiddleLeftToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showMiddleLeftToast]);
    const [showMiddleCenterToast, setShowMiddleCenterToast] = useState(false);

    const handleMiddleCenterButtonClick = () => {
        setShowMiddleCenterToast(true);
    };

    const handleMiddleCenterToastClose = () => {
        setShowMiddleCenterToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMiddleCenterToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showMiddleCenterToast]);

    const [showMiddleRightToast, setShowMiddleRightToast] = useState(false);

    const handleMiddleRightButtonClick = () => {
        setShowMiddleRightToast(true);
    };

    const handleMiddleRightToastClose = () => {
        setShowMiddleRightToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowMiddleRightToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showMiddleRightToast]);
    const [showBottomLeftToast, setShowBottomLeftToast] = useState(false);

    const handleBottomLeftButtonClick = () => {
        setShowBottomLeftToast(true);
    };

    const handleBottomLeftToastClose = () => {
        setShowBottomLeftToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowBottomLeftToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showBottomLeftToast]);

    const [showBottomCenterToast, setShowBottomCenterToast] = useState(false);

    const handleBottomCenterButtonClick = () => {
        setShowBottomCenterToast(true);
    };

    const handleBottomCenterToastClose = () => {
        setShowBottomCenterToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowBottomCenterToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showBottomCenterToast]);

    const [showBottomRightToast, setShowBottomRightToast] = useState(false);

    const handleBottomRightButtonClick = () => {
        setShowBottomRightToast(true);
    };

    const handleBottomRightToastClose = () => {
        setShowBottomRightToast(false);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowBottomRightToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showBottomRightToast]);

    const [showLiveToast, setShowLiveToast] = useState(false);

    const handleLiveToastButtonClick = () => {
        setShowLiveToast(true);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowLiveToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showLiveToast]);

    const handleLiveToastClose = () => {
        setShowLiveToast(false);
    };
    const [showPrimaryToast, setShowPrimaryToast] = useState(false);

    const handlePrimaryToastButtonClick = () => {
        setShowPrimaryToast(true);
    };

    const handlePrimaryToastClose = () => {
        setShowPrimaryToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowPrimaryToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showPrimaryToast]);

    const [showSecondaryToast, setShowSecondaryToast] = useState(false);

    const handleSecondaryToastButtonClick = () => {
        setShowSecondaryToast(true);
    };

    const handleSecondaryToastClose = () => {
        setShowSecondaryToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSecondaryToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSecondaryToast]);

    const [showWarningToast, setShowWarningToast] = useState(false);

    const handleWarningToastButtonClick = () => {
        setShowWarningToast(true);
    };

    const handleWarningToastClose = () => {
        setShowWarningToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowWarningToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showWarningToast]);

    const [showInfoToast, setShowInfoToast] = useState(false);
    const handleInfoToastButtonClick = () => {
        setShowInfoToast(true);
    };
    const handleInfoToastClose = () => {
        setShowInfoToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowInfoToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showInfoToast]);

    const [showSuccessToast, setShowSuccessToast] = useState(false);

    const handleSuccessToastButtonClick = () => {
        setShowSuccessToast(true);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSuccessToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSuccessToast]);

    const handleSuccessToastClose = () => {
        setShowSuccessToast(false);
    };
    const [showDangerToast, setShowDangerToast] = useState(false);

    const handleDangerToastButtonClick = () => {
        setShowDangerToast(true);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowDangerToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showDangerToast]);

    const handleDangerToastClose = () => {
        setShowDangerToast(false);
    };
    const [showSolidPrimaryToast, setShowSolidPrimaryToast] = useState(false);

    const handleSolidPrimaryToastButtonClick = () => {
        setShowSolidPrimaryToast(true);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSolidPrimaryToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSolidPrimaryToast]);

    const handleSolidPrimaryToastClose = () => {
        setShowSolidPrimaryToast(false);
    };
    const [showSolidSecondaryToast, setShowSolidSecondaryToast] = useState(false);

    const handleSolidSecondaryToastButtonClick = () => {
        setShowSolidSecondaryToast(true);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSolidSecondaryToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSolidSecondaryToast]);

    const handleSolidSecondaryToastClose = () => {
        setShowSolidSecondaryToast(false);
    };

    const [showSolidWarningToast, setShowSolidWarningToast] = useState(false);

    const handleSolidWarningToastButtonClick = () => {
        setShowSolidWarningToast(true);
    };

    const handleSolidWarningToastClose = () => {
        setShowSolidWarningToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSolidWarningToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSolidWarningToast]);

    const [showSolidInfoToast, setShowSolidInfoToast] = useState(false);

    const handleSolidInfoToastButtonClick = () => {
        setShowSolidInfoToast(true);
    };

    const handleSolidInfoToastClose = () => {
        setShowSolidInfoToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSolidInfoToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSolidInfoToast]);

    const [showSolidSuccessToast, setShowSolidSuccessToast] = useState(false);

    const handleSolidSuccessToastButtonClick = () => {
        setShowSolidSuccessToast(true);
    };

    const handleSolidSuccessToastClose = () => {
        setShowSolidSuccessToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSolidSuccessToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSolidSuccessToast]);

    const [showSolidDangerToast, setShowSolidDangerToast] = useState(false);

    const handleSolidDangerToastButtonClick = () => {
        setShowSolidDangerToast(true);
    };

    const handleSolidDangerToastClose = () => {
        setShowSolidDangerToast(false);
    };
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setShowSolidDangerToast(false);
        }, 6000);
        return () => clearTimeout(timeoutId);
    }, [showSolidDangerToast]);

    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Toastr</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Toastr */}
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Live Example</div>
                                </div>
                                <div className="card-body">
                                    <button
                                        type="button"
                                        className="btn btn-primary btn-wave"
                                        id="liveToastBtn"
                                        onClick={handleLiveToastButtonClick}
                                    >
                                        Show live toast
                                    </button>

                                    <div className="toast-container position-fixed top-0 end-0 p-3">
                                        <Toast
                                            show={showLiveToast}
                                            onClose={handleLiveToastClose}
                                            id="liveToast"
                                            className="toast"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="text-default">
                                                <strong className="me-auto">Toast</strong>
                                                <small>11 mins ago</small>
                                            </Toast.Header>
                                            <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
                                        </Toast>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Color schemes</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="toast align-items-center text-bg-primary border-0 fade show mb-4"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="d-flex">
                                            <div className="toast-body">
                                                Hello, world! This is the Primary toast message.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white me-2 m-auto"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="toast align-items-center text-bg-secondary border-0 fade show mb-4"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="d-flex">
                                            <div className="toast-body">
                                                Hello, world! This is the Secondary toast.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white me-2 m-auto"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="toast align-items-center text-bg-success border-0 fade show mb-4"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="d-flex">
                                            <div className="toast-body">
                                                Hello, world! This is the Success toast message.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white me-2 m-auto"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="toast align-items-center text-bg-info border-0 fade show"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="d-flex">
                                            <div className="toast-body">
                                                Hello, world! This is the info toast message.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close btn-close-white me-2 m-auto"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Toastr */}
                        {/* Toastr */}
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Basic example</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="toast fade show"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="toast-header text-default">
                                            <strong className="me-auto">Toast</strong>
                                            <small>11 mins ago</small>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="toast-body">
                                            Hello, world! This is a toast message.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Stacking</div>
                                </div>
                                <div className="card-body">
                                    <div className="toast-container position-static">
                                        <div
                                            className="toast fade show"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <div className="toast-header text-default">
                                                <strong className="me-auto">Toast</strong>
                                                <small className="text-muted">just now</small>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="toast"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="toast-body">See? Just like this.</div>
                                        </div>
                                        <div
                                            className="toast fade show"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <div className="toast-header text-default">
                                                <strong className="me-auto">Toast</strong>
                                                <small className="text-muted">2 seconds ago</small>
                                                <button
                                                    type="button"
                                                    className="btn-close"
                                                    data-bs-dismiss="toast"
                                                    aria-label="Close"
                                                />
                                            </div>
                                            <div className="toast-body">
                                                Heads up, toasts will stack automatically
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Toastr */}
                        {/* Translucent */}
                        <div className="col-xl-4">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Translucent</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="toast fade show"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="toast-header text-default">
                                            <strong className="me-auto">Toast</strong>
                                            <small className="text-muted">11 mins ago</small>
                                            <button
                                                type="button"
                                                className="btn-close"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            />
                                        </div>
                                        <div className="toast-body">
                                            Hello, world! This is a toast message.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Custom content</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        className="toast align-items-center fade show mb-3"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="d-flex">
                                            <div className="toast-body">
                                                Hello, world! This is a toast message.
                                            </div>
                                            <button
                                                type="button"
                                                className="btn-close me-2 m-auto"
                                                data-bs-dismiss="toast"
                                                aria-label="Close"
                                            ></button>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="my-4 text-muted">
                                            Alternatively, you can also add additional controls and
                                            components to toasts.
                                        </span>
                                    </div>
                                    <div
                                        className="toast fade show mt-2"
                                        role="alert"
                                        aria-live="assertive"
                                        aria-atomic="true"
                                    >
                                        <div className="toast-body">
                                            Hello, world! This is a toast message.
                                            <div className="mt-2 pt-2 border-top">
                                                <button
                                                    type="button"
                                                    className="btn btn-primary btn-sm btn-wave me-2"
                                                >
                                                    Take action
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-secondary btn-sm btn-wave"
                                                    data-bs-dismiss="toast"
                                                >
                                                    Close
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Translucent */}
                    </div>
                    <div className="row">
                        {/* Color Variants Live */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Color Variants Live</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">

                                        <button
                                            type="button"
                                            className="btn btn-primary-light me-2 btn-wave"
                                            id="primaryToastBtn"
                                            onClick={handlePrimaryToastButtonClick}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary me-2 btn-wave"
                                            id="secondaryToastBtn"
                                            onClick={handleSecondaryToastButtonClick}
                                        >
                                            Secondary
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning me-2 btn-wave"
                                            id="warningToastBtn"
                                            onClick={handleWarningToastButtonClick}
                                        >
                                            Warning
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info me-2 btn-wave"
                                            id="infoToastBtn"
                                            onClick={handleInfoToastButtonClick}
                                        >
                                            Info
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success me-2 btn-wave"
                                            id="successToastBtn"
                                            onClick={handleSuccessToastButtonClick}
                                        >
                                            Success
                                        </button>

                                        <button
                                            type="button"
                                            className="btn btn-danger me-2 btn-wave"
                                            id="dangerToastBtn"
                                            onClick={handleDangerToastButtonClick}
                                        >
                                            Danger
                                        </button>
                                    </div>
                                    <div className="toast-container position-fixed top-0 end-0 p-3">
                                        <Toast
                                            show={showPrimaryToast}
                                            onClose={handlePrimaryToastClose}
                                            id="primaryToast"
                                            className="colored-toast bg-primary-transparent"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handlePrimaryToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Hello, world! This is a primary toast message.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showSecondaryToast}
                                            onClose={handleSecondaryToastClose}
                                            id="secondaryToast"
                                            className="colored-toast bg-secondary-transparent"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-secondary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSecondaryToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>

                                        <Toast
                                            show={showWarningToast}
                                            onClose={handleWarningToastClose}
                                            id="warningToast"
                                            className="colored-toast bg-warning-transparent"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-warning text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleWarningToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>

                                        <Toast
                                            show={showInfoToast}
                                            onClose={handleInfoToastClose}
                                            id="infoToast"
                                            className="colored-toast bg-info-transparent"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-info text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleInfoToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showSuccessToast}
                                            onClose={handleSuccessToastClose}
                                            id="successToast"
                                            className="colored-toast bg-success-transparent"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-success text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSuccessToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showDangerToast}
                                            onClose={handleDangerToastClose}
                                            id="dangerToast"
                                            className="colored-toast bg-danger-transparent"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-danger text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleDangerToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Color Variants Live */}
                        {/* Solid Background Toasts */}
                        <div className="col-xl-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Solid Background Toasts</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <button
                                            type="button"
                                            className="btn btn-primary me-2 btn-wave"
                                            id="solidPrimaryToastBtn"
                                            onClick={handleSolidPrimaryToastButtonClick}
                                        >
                                            Primary
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-secondary me-2 btn-wave"
                                            id="solidSecondaryToastBtn"
                                            onClick={handleSolidSecondaryToastButtonClick}
                                        >
                                            Secondary
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning me-2 btn-wave"
                                            id="solidWarningToastBtn"
                                            onClick={handleSolidWarningToastButtonClick}
                                        >
                                            Warning
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-info me-2 btn-wave"
                                            id="solidInfoToastBtn"
                                            onClick={handleSolidInfoToastButtonClick}
                                        >
                                            Info
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success me-2 btn-wave"
                                            id="solidSuccessToastBtn"
                                            onClick={handleSolidSuccessToastButtonClick}
                                        >
                                            Success
                                        </button>
                                        <Button
                                            type="button"
                                            className="btn btn-danger me-2 btn-wave"
                                            id="solidDangerToastBtn"
                                            onClick={handleSolidDangerToastButtonClick}
                                        >
                                            Danger
                                        </Button>
                                    </div>
                                    <div className="toast-container position-fixed top-0 end-0 p-3">
                                        <Toast
                                            show={showSolidPrimaryToast}
                                            onClose={handleSolidPrimaryToastClose}
                                            id="solidPrimaryToast"
                                            className="colored-toast bg-primary text-fixed-white"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSolidPrimaryToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showSolidSecondaryToast}
                                            onClose={handleSolidSecondaryToastClose}
                                            id="solidSecondaryToast"
                                            className="colored-toast bg-secondary text-fixed-white"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-secondary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSolidSecondaryToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>

                                        <Toast
                                            show={showSolidWarningToast}
                                            onClose={handleSolidWarningToastClose}
                                            id="solidWarningToast"
                                            className="colored-toast bg-warning text-fixed-white"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-warning text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSolidWarningToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showSolidInfoToast}
                                            onClose={handleSolidInfoToastClose}
                                            id="solidInfoToast"
                                            className="colored-toast bg-info text-fixed-white"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-info text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSolidInfoToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showSolidSuccessToast}
                                            onClose={handleSolidSuccessToastClose}
                                            id="solidSuccessToast"
                                            className="colored-toast bg-success text-fixed-white"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-success text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSolidSuccessToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>
                                        <Toast
                                            show={showSolidDangerToast}
                                            onClose={handleSolidDangerToastClose}
                                            id="solidDangerToast"
                                            className="colored-toast bg-danger text-fixed-white"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-danger text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleSolidDangerToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>
                                                {/* Add your toast content here */}
                                                Your toast message here.
                                            </Toast.Body>
                                        </Toast>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Solid Background Toasts */}
                    </div>
                    {/* Toast Placements */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Toast Placements</div>
                                </div>
                                <div className="card-body">
                                    <div className="btn-list">
                                        <Button
                                            variant="outline-primary me-2 btn-wave"
                                            id="topleftToastBtn"
                                            onClick={handleTopLeftButtonClick}
                                        >
                                            Top Left
                                        </Button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="topcenterToastBtn"
                                            onClick={handleTopCenterButtonClick}
                                        >
                                            Top Center
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="topendToastBtn"
                                            onClick={handleTopEndButtonClick}
                                        >
                                            Top Right
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="middleleftToastBtn"
                                            onClick={handleMiddleLeftButtonClick}
                                        >
                                            Middle Left
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="middlecenterToastBtn"
                                            onClick={handleMiddleCenterButtonClick}
                                        >
                                            Middle Center
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="middlerightToastBtn"
                                            onClick={handleMiddleRightButtonClick}
                                        >
                                            Middle Right
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="bottomleftToastBtn"
                                            onClick={handleBottomLeftButtonClick}
                                        >
                                            Bottom Left
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="bottomcenterToastBtn"
                                            onClick={handleBottomCenterButtonClick}
                                        >
                                            Bottom Center
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-primary me-2 btn-wave"
                                            id="bottomrightToastBtn"
                                            onClick={handleBottomRightButtonClick}
                                        >
                                            Bottom End
                                        </button>
                                    </div>
                                    <div className="toast-container position-fixed top-0 start-0 p-3">
                                        <Toast className="toast colored-toast bg-primary-transparent text-primary"
                                            show={showTopLeftToast}
                                            onClose={handleTopLeftToastClose}
                                            id="topleft-Toast"
                                            bg="primary-transparent"
                                            // text="text-primary"
                                        >
                                            <Toast.Header className="toast-header bg-primary text-fixed-white"
                                            //  text="text-fixed-white"
                                             >
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleTopLeftToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your ,toast message here.</Toast.Body>
                                        </Toast>
                                    </div>
                                    <div className="toast-container position-fixed top-0 start-50 translate-middle-x p-3">
                                        <Toast
                                            show={showTopCenterToast}
                                            onClose={handleTopCenterToastClose}
                                            id="topcenter-Toast"
                                            className="top-0 start-50 translate-middle-x"
                                            bg="primary-transparent"
                                            // text="text-primary"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleTopCenterToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>
                                    </div>

                                    <div className="toast-container position-fixed top-0 end-0 p-3">
                                        <Toast
                                            show={showTopEndToast}
                                            onClose={handleTopEndToastClose}
                                            id="topend-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleTopEndToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>


                                    </div>
                                    <div className="toast-container position-fixed top-50 start-0 translate-middle-y p-3">
                                        <Toast
                                            show={showMiddleLeftToast}
                                            onClose={handleMiddleLeftToastClose}
                                            id="middleleft-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleMiddleLeftToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>


                                    </div>
                                    <div className="toast-container position-fixed top-50 start-50 translate-middle">
                                        <Toast
                                            show={showMiddleCenterToast}
                                            onClose={handleMiddleCenterToastClose}
                                            id="middlecenter-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleMiddleCenterToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>
                                    </div>
                                    <div className="toast-container position-fixed top-50 end-0 translate-middle-y p-3">
                                        <Toast
                                            show={showMiddleRightToast}
                                            onClose={handleMiddleRightToastClose}
                                            id="middleright-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleMiddleRightToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>

                                    </div>
                                    <div className="toast-container position-fixed bottom-0 start-0 p-3">
                                        <Toast
                                            show={showBottomLeftToast}
                                            onClose={handleBottomLeftToastClose}
                                            id="bottomleft-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleBottomLeftToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>
                                    </div>
                                    <div className="toast-container position-fixed bottom-0 start-50 translate-middle-x p-3">
                                        <Toast
                                            show={showBottomCenterToast}
                                            onClose={handleBottomCenterToastClose}
                                            id="bottomcenter-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleBottomCenterToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>

                                    </div>
                                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                                        <Toast
                                            show={showBottomRightToast}
                                            onClose={handleBottomRightToastClose}
                                            id="bottomright-Toast"
                                            className="colored-toast bg-primary-transparent text-primary"
                                            role="alert"
                                            aria-live="assertive"
                                            aria-atomic="true"
                                        >
                                            <Toast.Header closeButton className="bg-primary text-fixed-white">
                                                <strong className="me-auto">Toast</strong>
                                                <Button
                                                    variant="close"
                                                    onClick={handleBottomRightToastClose}
                                                    aria-label="Close"
                                                />
                                            </Toast.Header>
                                            <Toast.Body>Your, toast message here.</Toast.Body>
                                        </Toast>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Toast Placements */}
                    {/* Aligning Toast Using Flexbox */}
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Aligning Toast Using Flexbox</div>
                                </div>
                                <div className="card-body">
                                    <div className="bd-example bd-example-toasts d-flex p-2">
                                        <div
                                            aria-live="polite"
                                            aria-atomic="true"
                                            className="d-flex justify-content-center align-items-center w-100"
                                        >
                                            <div
                                                className="toast fade show shadow-lg"
                                                role="alert"
                                                aria-live="assertive"
                                                aria-atomic="true"
                                            >
                                                <div className="toast-header text-default">
                                                    <strong className="me-auto">Toast</strong>
                                                    <small>11 mins ago</small>
                                                    <button
                                                        type="button"
                                                        className="btn-close"
                                                        data-bs-dismiss="toast"
                                                        aria-label="Close"
                                                    />
                                                </div>
                                                <div className="toast-body">
                                                    Hello, world! This is a toast message.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Aligning Toast Using Flexbox */}
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Toasts
