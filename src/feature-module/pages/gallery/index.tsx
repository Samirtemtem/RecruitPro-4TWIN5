import React from 'react'
import { Link } from 'react-router-dom'
import ImageWithBasePath from '../../../core/common/imageWithBasePath'
import { all_routes } from '../../router/all_routes';
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import CollapseHeader from '../../../core/common/collapse-header/collapse-header';


const Gallery = () => {

    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const [open9, setOpen9] = React.useState(false);


    return (
        <>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    {/* Breadcrumb */}
                    <div className="d-md-flex d-block align-items-center justify-content-between page-breadcrumb mb-3">
                        <div className="my-auto mb-2">
                            <h2 className="mb-1">Gallery</h2>
                            <nav>
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={all_routes.adminDashboard}>
                                            <i className="ti ti-smart-home" />
                                        </Link>
                                    </li>
                                    <li className="breadcrumb-item">Pages</li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Gallery
                                    </li>
                                </ol>
                            </nav>
                        </div>
                        <div className="head-icons ms-2">
                            <CollapseHeader />
                        </div>
                    </div>
                    {/* /Breadcrumb */}
                    {/* Gallery */}
                    <div className="card">
                        <div className="card-body">
                            <div className="row row-gap-4 justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open1}
                                        close={() => setOpen1(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },
                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen1(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open2}
                                        close={() => setOpen2(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen2(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-06.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open3}
                                        close={() => setOpen3(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen3(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-07.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open4}
                                        close={() => setOpen4(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen4(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-08.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open5}
                                        close={() => setOpen5(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen5(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-09.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open6}
                                        close={() => setOpen6(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen6(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-05.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open7}
                                        close={() => setOpen7(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen7(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-10.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open8}
                                        close={() => setOpen8(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen8(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-11.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Lightbox
                                        open={open9}
                                        close={() => setOpen9(false)}
                                        slides={[
                                            { src: "assets/img/social/gallery.jpg" },
                                            { src: "assets/img/social/gallery-06.jpg" },
                                            { src: "assets/img/social/gallery-07.jpg" },
                                            { src: "assets/img/social/gallery-08.jpg" },
                                            { src: "assets/img/social/gallery-09.jpg" },
                                            { src: "assets/img/social/gallery-05.jpg" },
                                            { src: "assets/img/social/gallery-10.jpg" },
                                            { src: "assets/img/social/gallery-11.jpg" },
                                            { src: "assets/img/social/gallery-12.jpg" },

                                        ]}
                                    />
                                    <Link
                                        to="#"
                                        onClick={() => setOpen9(true)}
                                        className="gallery-item"
                                    >
                                        <ImageWithBasePath
                                            src="assets/img/social/gallery-12.jpg"
                                            className="img-fluid rounded w-100"
                                            alt="img"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /Gallery */}
                </div>
                <div className="footer d-sm-flex align-items-center justify-content-between border-top bg-white p-3">
                    <p className="mb-0">2014 - 2025 © SmartHR.</p>
                    <p>
                        Designed &amp; Developed By{" "}
                        <Link to="#" className="text-primary">
                            Dreams
                        </Link>
                    </p>
                </div>
            </div>
            {/* /Page Wrapper */}
        </>

    )
}

export default Gallery
