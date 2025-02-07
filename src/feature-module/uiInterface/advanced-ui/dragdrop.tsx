import React, { useEffect, useRef } from "react";
import dragula from "dragula";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";

const DragAndDrop = () => {
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);

  useEffect(() => {
    const leftContainer = leftContainerRef.current;
    const rightContainer = rightContainerRef.current;

    if (leftContainer && rightContainer) {
      dragula([leftContainer, rightContainer]);
    }
  }, []);
  return (
    <div className="page-wrapper cardhead">
      <div className="content">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Drag &amp; Drop</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Drag &amp; Drop</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          <div className="col-xl-6" id="draggable-left" ref={leftContainerRef}>
            <div className="card custom-card card-bg-primary">
              <Link to="#" className="card-anchor" />
              <div className="card-body">
                <blockquote className="blockquote mb-0 text-center">
                  <h6 className="text-fixed-white">
                    The best and most beautiful things in the world cannot be
                    seen or even touched — they must be felt with the heart..
                  </h6>
                  <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
                    Someone famous as{" "}
                    <cite title="Source Title">-Helen Keller</cite>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="card custom-card">
              <div className="card-header justify-content-between">
                <div className="card-title">Card With Fullscreen Button</div>
                <Link to="#" data-bs-toggle="card-fullscreen">
                  <i data-feather="maximize" className="feather-zap" />
                </Link>
              </div>
              <div className="card-body">
                <h6 className="card-text fw-semibold">FullScreen Card</h6>
                <p className="card-text mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
            <div className="card custom-card overlay-card text-fixed-white">
              <ImageWithBasePath
                src="assets/img/media/media-35.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column p-0">
                <div className="card-header text-fixed-white">
                  <div className="card-title">Image Overlays Are Awesome!</div>
                </div>
                <div className="card-body overflow-hidden text-fixed-white">
                  <div className="card-text mb-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even.
                  </div>
                  <div className="card-text">Last updated 3 mins ago</div>
                </div>
              </div>
            </div>
            <div className="card custom-card">
              <Link to="#" className="card-anchor" />
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-md">
                      <ImageWithBasePath
                        src="assets/img/media/media-35.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div>
                    <p className="card-text mb-0 fs-14 fw-semibold">
                      Atharva Simon.
                    </p>
                    <div className="card-title text-muted fs-12 mb-0">
                      Correspondent Professor
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card custom-card border border-info">
              <Link to="#" className="card-anchor" />
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="me-3">
                    <span className="avatar avatar-xl">
                      <ImageWithBasePath
                        src="assets/img/media/media-35.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div>
                    <p className="card-text text-info mb-1 fs-14 fw-semibold">
                      Alicia Keys.
                    </p>
                    <div className="card-title fs-12 mb-1">
                      Department Of Commerce
                    </div>
                    <div className="card-title text-muted fs-11 mb-0">
                      24 Years, Female
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6"
            id="draggable-right"
            ref={rightContainerRef}
          >
            <div className="card custom-card overlay-card">
              <ImageWithBasePath
                src="assets/img/media/media-36.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                <div className="card-body text-fixed-white">
                  <div className="card-text">Image Overlays Are Awesome!</div>
                  <div className="card-text mb-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which
                    don&apos;t look even.
                  </div>
                  <div className="card-text">Last updated 3 mins ago</div>
                </div>
                <div className="card-footer text-fixed-white">
                  Last updated 3 mins ago
                </div>
              </div>
            </div>
            <div className="card custom-card card-bg-success">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-11.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div>
                    <div className="fs-15 fw-semibold">Samantha sid</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      In leave for 1 month
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card custom-card">
              <div className="card-header border-bottom-0 justify-content-between">
                <div className="card-title">Card With Collapse Button</div>
                <Link
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i
                    data-feather="chevron-down"
                    className="fs-18 collapse-open"
                  />
                  <i
                    data-feather="chevron-up"
                    className="collapse-close fs-18"
                  />
                </Link>
              </div>
              <div className="collapse show border-top" id="collapseExample">
                <div className="card-body">
                  <h6 className="card-text fw-semibold">Collapsible Card</h6>
                  <p className="card-text mb-0">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words
                  </p>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Read More</button>
                </div>
              </div>
            </div>
            <div className="card custom-card">
              <div className="card-header justify-content-between">
                <div className="card-title">Card With Close Button</div>
                <Link to="#" data-bs-toggle="card-remove">
                  <i data-feather="x" className="fs-18" />
                </Link>
              </div>
              <div className="card-body">
                <h6 className="card-text fw-semibold">Closed Card</h6>
                <p className="card-text mb-0">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
