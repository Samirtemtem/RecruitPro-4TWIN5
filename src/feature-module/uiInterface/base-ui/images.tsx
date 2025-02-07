import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Images = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Images</h4>
          </div>
        </div>
        <div className="row">
          {/* Images Shapes */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Images Shapes</div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12">
                    <p>
                      Add classes to an <code>&lt;img&gt;</code> element to
                      easily style images in any project.
                    </p>
                    <div className="row">
                      <div className="col-sm-3">
                        <ImageWithBasePath
                          src="assets/img/img-4.jpg"
                          alt="image"
                          className="img-fluid rounded"
                          width={200}
                        />
                        <p className="mb-0">
                          <code>.rounded</code>
                        </p>
                      </div>
                      <div className="col-sm-3">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-03.jpg"
                          alt="image"
                          className="img-fluid rounded-circle"
                          width={133}
                        />
                        <p className="mb-0">
                          <code>.rounded-circle</code>
                        </p>
                      </div>
                      <div className="col-sm-3">
                        <ImageWithBasePath
                          src="assets/img/img-1.jpg"
                          alt="image"
                          className="img-fluid img-thumbnail"
                          width={200}
                        />
                        <p className="mb-0">
                          <code>.img-thumbnail</code>
                        </p>
                      </div>
                      <div className="col-sm-3">
                        <ImageWithBasePath
                          src="assets/img/profiles/avatar-02.jpg"
                          alt="image"
                          className="img-thumbnail rounded-pill"
                          width={133}
                        />
                        <p className="mb-0">
                          <code>.rounded-pill</code>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Images Shapes */}
        </div>
        <div className="row">
          {/* Image Left Align */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Image Left Align</div>
              </div>
              <div className="card-body">
                <ImageWithBasePath
                  className="rounded float-start"
                  src="assets/img/img-1.jpg"
                  alt="..."
                  width={200}
                />
              </div>
            </div>
          </div>
          {/* /Image Left Align */}
          {/* Image Center Align */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Image Center Align</div>
              </div>
              <div className="card-body">
                <ImageWithBasePath
                  className="rounded mx-auto d-block"
                  src="assets/img/img-1.jpg"
                  alt="..."
                  width={200}
                />
              </div>
            </div>
          </div>
          {/* /Image Center Align */}
          {/* Image Right Align */}
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Image Right Align</div>
              </div>
              <div className="card-body">
                <ImageWithBasePath
                  className="rounded float-end"
                  src="assets/img/img-1.jpg"
                  alt="..."
                  width={200}
                />
              </div>
            </div>
          </div>
          {/* /Image Right Align */}
          {/* Figures */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Figures</div>
              </div>
              <div className="card-body d-flex justify-content-between gap-2">
                <figure className="figure">
                  <ImageWithBasePath
                    className="bd-placeholder-img figure-img img-fluid rounded card-img"
                    src="assets/img/img-1.jpg"
                    alt="..."
                  />
                  <figcaption className="figure-caption">
                    A caption for the above image.
                  </figcaption>
                </figure>
                <figure className="figure float-end">
                  <ImageWithBasePath
                    className="bd-placeholder-img figure-img img-fluid rounded card-img"
                    src="assets/img/img-1.jpg"
                    alt="..."
                  />
                  <figcaption className="figure-caption text-end">
                    A caption for the above image.
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
          {/* /Figures */}
        </div>
      </div>
    </div>
  );
};

export default Images;
