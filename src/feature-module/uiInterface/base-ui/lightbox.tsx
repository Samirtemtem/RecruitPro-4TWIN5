import React from "react";
import { Link } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Lightboxes = () => {
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Light Box</h4>
          </div>
        </div>
        <div className="row">
          {/* Lightbox */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Single Image Lightbox</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <Lightbox
                    open={open1}
                    close={() => setOpen1(false)}
                    slides={[
                      { src: "assets/img/img-01.jpg" },
                      { src: "assets/img/img-02.jpg" },
                    ]}
                  />
                  <div className="col-md-4 mb-2 mb-md-0">
                    <Link
                      onClick={() => setOpen1(true)}
                      to="#"
                      className="image-popup"
                    >
                      <ImageWithBasePath
                        src="assets/img/img-01.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </Link>
                  </div>
                  <div className="col-md-4 mb-2 mb-md-0">
                    <Link
                      to="#"
                      className="image-popup"
                      onClick={() => setOpen1(true)}
                    >
                      <ImageWithBasePath
                        src="assets/img/img-02.jpg"
                        className="img-fluid"
                        alt="image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <>
            {/* Lightbox */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Image with Description</h5>
                </div>
                <div className="card-body">
                  <div className="row">
                    <Lightbox
                      open={open2}
                      close={() => setOpen2(false)}
                      slides={[
                        { src: "assets/img/img-03.jpg" },
                        { src: "assets/img/img-04.jpg" },
                        { src: "assets/img/img-05.jpg" },
                      ]}
                    />
                    <div className="col-md-4 mb-2 mb-md-0">
                      <Link
                        onClick={() => setOpen2(true)}
                        to="#"
                        className="image-popup-desc"
                        data-title="Title 01"
                        data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                      >
                        <ImageWithBasePath
                          src="assets/img/img-03.jpg"
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <Link
                        onClick={() => setOpen2(true)}
                        to="#"
                        className="image-popup-desc"
                        data-title="Title 02"
                        data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                      >
                        <ImageWithBasePath
                          src="assets/img/img-04.jpg"
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                      </Link>
                    </div>
                    <div className="col-md-4 mb-2 mb-md-0">
                      <Link
                        onClick={() => setOpen2(true)}
                        to="#"
                        className="image-popup-desc"
                        data-title="Title 03"
                        data-description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit"
                      >
                        <ImageWithBasePath
                          src="assets/img/img-05.jpg"
                          className="img-fluid"
                          alt="work-thumbnail"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /Lightbox */}
          </>
        </div>
      </div>
    </div>
  );
};

export default Lightboxes;
