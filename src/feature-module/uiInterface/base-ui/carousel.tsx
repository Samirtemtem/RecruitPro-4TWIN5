import React from 'react'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { Link } from "react-router-dom";

const Carousel = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Carousel</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Slides Only */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Slides Only</h5>
                                    <p className="sub-header">
                                        Here’s a carousel with slides only. Note the presence of the{" "}
                                        <code>.d-block</code> and <code>.img-fluid</code> on carousel
                                        images to prevent browser default image alignment.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleSlidesOnly"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-1.jpg"
                                                    alt="First slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-3.jpg"
                                                    alt="Second slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-4.jpg"
                                                    alt="Third slide"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Slides Only */}
                        {/* With Controls */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">With Controls</h5>
                                    <p className="sub-header">
                                        Adding in the previous and next controls:
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleControls"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-1.jpg"
                                                    alt="First slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-3.jpg"
                                                    alt="Second slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-4.jpg"
                                                    alt="Third slide"
                                                />
                                            </div>
                                        </div>
                                        <Link
                                            className="carousel-control-prev"
                                            to="#carouselExampleControls"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </Link>
                                        <Link
                                            className="carousel-control-next"
                                            to="#carouselExampleControls"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /With Controls */}
                    </div>
                    <div className="row">
                        {/* With Indicators */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">With Indicators</h5>
                                    <p className="sub-header">
                                        You can also add the indicators to the carousel, alongside the
                                        controls, too.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleIndicators"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <ol className="carousel-indicators">
                                            <li
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={0}
                                                className="active"
                                            />
                                            <li
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={1}
                                            />
                                            <li
                                                data-bs-target="#carouselExampleIndicators"
                                                data-bs-slide-to={2}
                                            />
                                        </ol>
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-1.jpg"
                                                    alt="First slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-2.jpg"
                                                    alt="Second slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-4.jpg"
                                                    alt="Third slide"
                                                />
                                            </div>
                                        </div>
                                        <Link
                                            className="carousel-control-prev"
                                            to="#carouselExampleIndicators"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </Link>
                                        <Link
                                            className="carousel-control-next"
                                            to="#carouselExampleIndicators"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /With Indicators */}
                        {/* With Captions */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">With Captions</h5>
                                    <p className="sub-header">
                                        Add captions to your slides easily with the{" "}
                                        <code>.carousel-caption</code> element within any{" "}
                                        <code>.carousel-item</code>.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleCaption"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner" role="listbox">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    src="assets/img/img-1.jpg"
                                                    alt="Slide"
                                                    className="d-block img-fluid"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h3 className="text-white">First slide label</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    src="assets/img/img-2.jpg"
                                                    alt="Slide"
                                                    className="d-block img-fluid"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h3 className="text-white">Second slide label</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    src="assets/img/img-3.jpg"
                                                    alt="Slide"
                                                    className="d-block img-fluid"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h3 className="text-white">Third slide label</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <Link
                                            className="carousel-control-prev"
                                            to="#carouselExampleCaption"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </Link>
                                        <Link
                                            className="carousel-control-next"
                                            to="#carouselExampleCaption"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /With Captions */}
                    </div>
                    <div className="row">
                        {/* Crossfade */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Crossfade</h5>
                                    <p className="sub-header">
                                        Add <code>.carousel-fade</code> to your carousel to animate
                                        slides with a fade transition instead of a slide.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleFade"
                                        className="carousel slide carousel-fade"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-1.jpg"
                                                    alt="First slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-2.jpg"
                                                    alt="Second slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-3.jpg"
                                                    alt="Third slide"
                                                />
                                            </div>
                                        </div>
                                        <Link
                                            className="carousel-control-prev"
                                            to="#carouselExampleFade"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </Link>
                                        <Link
                                            className="carousel-control-next"
                                            to="#carouselExampleFade"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Crossfade */}
                        {/* Individual Interval */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="card-title">Individual Interval</h5>
                                    <p className="sub-header">
                                        Add <code>data-bs-interval=&quot;&quot;</code> to a{" "}
                                        <code>.carousel-item</code> to change the amount of time to
                                        delay between automatically cycling to the next item.
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleInterval"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-2.jpg"
                                                    alt="First slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-3.jpg"
                                                    alt="Second slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    className="d-block img-fluid"
                                                    src="assets/img/img-4.jpg"
                                                    alt="Third slide"
                                                />
                                            </div>
                                        </div>
                                        <Link
                                            className="carousel-control-prev"
                                            to="#carouselExampleInterval"
                                            role="button"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </Link>
                                        <Link
                                            className="carousel-control-next"
                                            to="#carouselExampleInterval"
                                            role="button"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Individual Interval */}
                    </div>
                    <div className="row">
                        {/* Disable Touch Swiping */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Disable Touch Swiping</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleControlsNoTouching"
                                        className="carousel slide"
                                        data-bs-touch="false"
                                        data-bs-interval="false"
                                    >
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <ImageWithBasePath
                                                    src="assets/img/img-2.jpg"
                                                    className="d-block w-100"
                                                    alt="Slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    src="assets/img/img-3.jpg"
                                                    className="d-block w-100"
                                                    alt="Slide"
                                                />
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    src="assets/img/img-4.jpg"
                                                    className="d-block w-100"
                                                    alt="Slide"
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleControlsNoTouching"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleControlsNoTouching"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Disable Touch Swiping */}
                        {/* Dark Variant */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <div className="card-title">Dark Variant</div>
                                </div>
                                <div className="card-body">
                                    <div
                                        id="carouselExampleDark"
                                        className="carousel slide"
                                        data-bs-ride="carousel"
                                    >
                                        <div className="carousel-indicators">
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={0}
                                                className="active"
                                                aria-current="true"
                                                aria-label="Slide 1"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={1}
                                                aria-label="Slide 2"
                                            />
                                            <button
                                                type="button"
                                                data-bs-target="#carouselExampleDark"
                                                data-bs-slide-to={2}
                                                aria-label="Slide 3"
                                            />
                                        </div>
                                        <div className="carousel-inner">
                                            <div
                                                className="carousel-item active"
                                                data-bs-interval={10000}
                                            >
                                                <ImageWithBasePath
                                                    src="assets/img/img-2.jpg"
                                                    className="d-block w-100"
                                                    alt="Slide"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5 className="text-fixed-white">First slide label</h5>
                                                    <p className="op-7">
                                                        Some representative placeholder content for the first
                                                        slide.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="carousel-item" data-bs-interval={2000}>
                                                <ImageWithBasePath
                                                    src="assets/img/img-3.jpg"
                                                    className="d-block w-100"
                                                    alt="Slide"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5 className="text-fixed-white">Second slide label</h5>
                                                    <p className="op-7">
                                                        Some representative placeholder content for the second
                                                        slide.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="carousel-item">
                                                <ImageWithBasePath
                                                    src="assets/img/img-4.jpg"
                                                    className="d-block w-100"
                                                    alt="Slide"
                                                />
                                                <div className="carousel-caption d-none d-md-block">
                                                    <h5 className="text-fixed-white">Third slide label</h5>
                                                    <p className="op-7">
                                                        Some representative placeholder content for the third
                                                        slide.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="carousel-control-prev"
                                            type="button"
                                            data-bs-target="#carouselExampleDark"
                                            data-bs-slide="prev"
                                        >
                                            <span
                                                className="carousel-control-prev-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button
                                            className="carousel-control-next"
                                            type="button"
                                            data-bs-target="#carouselExampleDark"
                                            data-bs-slide="next"
                                        >
                                            <span
                                                className="carousel-control-next-icon"
                                                aria-hidden="true"
                                            />
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Dark Variant */}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Carousel
