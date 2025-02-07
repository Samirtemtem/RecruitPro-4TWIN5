import React from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Cards = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Cards</h4>
          </div>
        </div>
        {/* Feature Card */}
        <div className="row">
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <ImageWithBasePath
                src="assets/img/img-01.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold">Card title</h6>
                <p className="card-text text-muted">
                  when an unknown printer took a galley of type and scrambled it
                  to make a type specimen book. It has survived not only five
                  centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.
                </p>
                <Link to="#" className="btn btn-primary">
                  Read More
                </Link>
              </div>
              <div className="card-footer">
                <span className="card-text">Last updated 3 mins ago</span>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Featured</div>
              </div>
              <div className="card-body">
                <h6 className="card-title fw-semibold">
                  Special title treatment
                </h6>
                <p className="card-text">
                  Richard McClintock, a Latin professor at Hampden-Sydney
                  College in Virginia, looked up one of the more obscure Latin
                  words, consectetur, from a Lorem Ipsum passage
                </p>
                <Link to="#" className="btn btn-primary">
                  Read More
                </Link>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <h6 className="card-title fw-semibold mb-2">Card title</h6>
                <p className="card-subtitle mb-3 text-muted">Card subtitle</p>
                <p className="card-text">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration many
                  variations of passages of Lorem Ipsum available there are so
                  many ways to solve but the majority have suffered.
                </p>
              </div>
              <div className="card-footer">
                <Link to="#" className="card-link text-danger m-1">
                  Buy Now
                </Link>
                <Link to="#" className="card-link text-success m-1">
                  <u>Review</u>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <ImageWithBasePath
                src="assets/img/img-02.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
            <h6 className="mb-3">Only Card Body:</h6>
            <div className="card">
              <div className="card-body">
                <div className="card-text">
                  <p className="mb-0">
                    It is a long established fact that a reader will be
                    distracted by the readable content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <div className="card">
              <ImageWithBasePath
                src="assets/img/img-03.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold">Card title</h6>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
              </ul>
              <div className="card-body">
                <Link to="#" className="card-link text-primary">
                  Card link
                </Link>
                <Link
                  to="#"
                  className="card-link text-secondary d-inline-block"
                >
                  Another link
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* / Feature Card */}
        {/* Quote Card */}
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <div className="row">
              <h6 className="mb-3">Quote:</h6>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 text-center">
                      <h6 className="">
                        The greatest glory in living lies not in never falling,
                        but in rising every time we fall.
                      </h6>
                      <footer className="blockquote-footer mt-2 fs-14">
                        Someone famous in{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <h6 className="mb-3">List Group:</h6>
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                        <li className="list-group-item">A fourth item</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="card">
                      <div className="card-header">Featured</div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-sm-4">
                    <div className="card">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">An item</li>
                        <li className="list-group-item">A second item</li>
                        <li className="list-group-item">A third item</li>
                      </ul>
                      <div className="card-footer">Card footer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-12">
            <h6 className="mb-3">Using Grid Markups:</h6>
            <div className="row row-cols-12">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <ImageWithBasePath
                      src="assets/img/img-04.jpg"
                      className="card-img mb-3"
                      alt="..."
                    />
                    <h6 className="card-title fw-semibold">Product A</h6>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <ImageWithBasePath
                      src="assets/img/img-05.jpg"
                      className="card-img mb-3"
                      alt="..."
                    />
                    <h6 className="card-title fw-semibold">Product B</h6>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" className="btn btn-secondary">
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <ImageWithBasePath
                      src="assets/img/img-02.jpg"
                      className="card-img mb-3"
                      alt="..."
                    />
                    <h6 className="card-title fw-semibold">Product-C</h6>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" className="btn btn-light">
                      Purchase
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Quote Card */}
        {/* Text Alignment */}
        <div className="row">
          <div className="col-xl-9">
            <h6 className="mb-3">Text Alignment:</h6>
            <div className="row">
              <div className="col-xl-4">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/img/img-01.jpg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <h6 className="card-title fw-semibold">
                      Where it come from
                    </h6>
                    <p className="card-text">
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card text-center">
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/img/img-02.jpg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <h6 className="card-title fw-semibold">
                      Why do we use it?
                    </h6>
                    <p className="card-text">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4">
                <div className="card text-end">
                  <div className="card-body">
                    <div className="mb-2">
                      <span className="avatar avatar-md">
                        <ImageWithBasePath
                          src="assets/img/img-03.jpg"
                          alt="img"
                        />
                      </span>
                    </div>
                    <h6 className="card-title fw-semibold">What is special?</h6>
                    <p className="card-text">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="row">
              <h6 className="mb-3">Mixins utilities:</h6>
              <div className="col-xl-12">
                <div className="card border border-success mb-3">
                  <div className="card-header bg-transparent border-bottom border-success">
                    Header
                  </div>
                  <div className="card-body text-success">
                    <h6 className="card-title fw-semibold">
                      Looking For Success?
                    </h6>
                    <p className="card-text">
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text. All the Lorem Ipsum generators on the
                      Internet tend to repeat predefined chunks as necessary.
                    </p>
                  </div>
                  <div className="card-footer bg-transparent border-top border-success">
                    Footer
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Text Alignment */}
        {/* Card Header & Footer */}
        <h6 className="mb-3">Card Header &amp; Footer:</h6>
        <div className="row">
          <div className="col-xl-3">
            <div className="card">
              <div className="card-header">
                <div className="d-flex align-items-center w-100">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-01.jpg"
                    alt="img"
                    className="avatar avatar-rounded me-2"
                  />
                  <div className="">
                    <div className="fs-15 fw-semibold">Adam Smith</div>
                    <p className="mb-0 text-muted fs-11">28 Years, Male</p>
                  </div>
                  <div className="dropdown ms-auto">
                    <Link
                      to="#"
                      className="btn btn-icon btn-sm btn-light"
                      data-bs-toggle="dropdown"
                    >
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                    <ul className="dropdown-menu">
                      <li>
                        <Link className="dropdown-item" to="#">
                          Week
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Month
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="#">
                          Year
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                If you are going to use, you need to be sure there isn't
                anything embarrassing hidden in the middle of text. All the
                Lorem Ipsum generators.
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-between">
                  <div className="fs-semibold fs-14">28,Nov 2022</div>
                  <div className="fw-semibold text-success">
                    Assistant Professor
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card">
              <div className="card-header border-bottom-0 pb-0">
                <div>
                  <span className="text-warning me-1">
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="text-warning me-1">
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="text-warning me-1">
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="text-warning me-1">
                    <i className="fa-solid fa-star" />
                  </span>
                  <span className="text-black op-1">
                    <i className="fa-solid fa-star" />
                  </span>
                  <p className="d-block text-muted mb-0 fs-12 fw-semibold">
                    1 year ago
                  </p>
                </div>
              </div>
              <div className="card-body pt-3">
                <div className="fw-semibold fs-15 mb-2">Very Great!</div>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour
              </div>
              <div className="card-footer">
                <div className="d-flex align-items-center">
                  <span className="avatar avatar-sm avatar-rounded me-2">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-02.jpg"
                      alt="img"
                    />
                  </span>
                  <div className="fw-semibold fs-14">Corey Anderson</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card text-center">
              <div className="card-header border-bottom-0 pb-0">
                <span className="ms-auto shadow-lg fs-17">
                  <i className="fa-solid fa-heart text-danger" />
                </span>
              </div>
              <div className="card-body pt-1">
                <span className="avatar avatar-xl avatar-rounded me-2 mb-2">
                  <ImageWithBasePath
                    src="assets/img/profiles/avatar-07.jpg"
                    alt="img"
                  />
                </span>
                <div className="fw-semibold fs-16">Sasha Max</div>
                <p className="mb-4 text-muted fs-11">Web Developer</p>
                <div className="btn-list">
                  <button className="btn btn-icon btn-facebook btn-wave">
                    <i className="fa-brands fa-facebook-f" />
                  </button>
                  <button className="btn btn-icon btn-twitter btn-wave">
                    <i className="fa-brands fa-twitter" />
                  </button>
                  <button className="btn btn-icon btn-instagram btn-wave">
                    <i className="fa-brands fa-instagram" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-primary">
              <div className="card-body">
                <div className="cals-icon">
                  <i className="fa solid fa-calculator" />
                </div>
                <p className="mb-0 mt-3 fs-20 fw-semibold lh-1">Calculations</p>
              </div>
              <div className="card-footer">
                Lorem Ipsum is therefore always free from repetition, injected
                humour.
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="card">
              <div className="card-body">
                <ImageWithBasePath
                  src="assets/img/img-1.jpg"
                  className="card-img mb-3"
                  alt="..."
                />
                <h6 className="card-title fw-semibold mb-3">
                  Mountains
                  <span className="badge bg-primary float-end fs-10">New</span>
                </h6>
                <p className="card-text">
                  With supporting text below as a natural lead-in.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="card">
              <div className="card-body">
                <ImageWithBasePath
                  src="assets/img/img-2.jpg"
                  className="card-img mb-3"
                  alt="..."
                />
                <h6 className="card-title fw-semibold mb-3">
                  Hills
                  <span className="badge bg-secondary float-end fs-10">
                    Hot
                  </span>
                </h6>
                <p className="card-text">
                  With supporting text below as a natural lead-in.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-2">
            <div className="card">
              <div className="card-body">
                <ImageWithBasePath
                  src="assets/img/img-3.jpg"
                  className="card-img mb-3"
                  alt="..."
                />
                <h6 className="card-title fw-semibold mb-3">
                  Nature
                  <span className="badge bg-light text-dark float-end fs-10">
                    Offer
                  </span>
                </h6>
                <p className="card-text">
                  With supporting text below as a natural lead-in.
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card text-center">
              <div className="card-header">
                <div className="card-title">Featured</div>
              </div>
              <div className="card-body">
                <h6 className="card-title fw-semibold mb-2">Breaking News !</h6>
                <p className="card-text mb-4">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <Link to="#" className="btn btn-primary mt-2">
                  Read More
                </Link>
                <Link to="#" className="btn btn-outline-secondary mt-2">
                  Close
                </Link>
              </div>
              <div className="card-footer text-muted">11.32pm</div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card">
              <div className="card-header">
                <div className="d-flex w-100">
                  <div className="me-4">
                    <span className="avatar avatar-lg avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="d-flex align-items-center justify-content-between w-100 flex-wrap">
                    <div className="me-3">
                      <p className="text-muted mb-0">Posts</p>
                      <p className="fw-semibold fs-16 mb-0">25</p>
                    </div>
                    <div className="me-3">
                      <p className="text-muted mb-0">Followers</p>
                      <p className="fw-semibold fs-16 mb-0">1253</p>
                    </div>
                    <div className="me-3">
                      <p className="text-muted mb-0">Following</p>
                      <p className="fw-semibold fs-16 mb-0">367</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="fw-semibold fs-16">Angelina Caprio</div>
                <div className="text-muted fs-11 mb-4">Angular Developer</div>
                <p className="fs-14 fw-semibold mb-1">About:</p>
                <p className="mb-0 card-text">
                  Finibus Bonorum et Malorum" by Cicero are also reproduced in
                  their exact original form, accompanied by English versions{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between d-flex flex-wrap">
                <div className="card-title">Card With Collapse Button</div>
                <Link
                  to="#"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <i className="fa-solid fa-chevron-down fs-18 collapse-open" />
                  <i className="fa-solid fa-chevron-up collapse-close fs-18" />
                </Link>
              </div>
              <div className="collapse show" id="collapseExample">
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
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between d-flex flex-wrap">
                <div className="card-title">Card With Close Button</div>
                <Link to="#" data-bs-toggle="card-remove">
                  <i className="fa-solid fa-xmark fs-18" />
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
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header justify-content-between d-flex flex-wrap">
                <div className="card-title">Card With Fullscreen Button</div>
                <Link to="#" data-bs-toggle="card-fullscreen">
                  <i className="fa-solid fa-expand" />
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
          </div>
        </div>
        {/* /Card Header & Footer */}
        {/* Using Utilities */}
        <div className="row">
          <div className="col-xxl-6 col-xl-12">
            <h6 className="mb-3">Using Utilities:</h6>
            <div className="row">
              <div className="col-xl-6">
                <div className="card w-75">
                  <div className="card-header">
                    <div className="card-title">Using Width 75%</div>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Id nostrum omnis excepturi consequatur molestiae
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to="#" className="btn btn-primary d-grid">
                      Button
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card w-50">
                  <div className="card-header">
                    <div className="card-title">Using Width 50%</div>
                  </div>
                  <div className="card-body">
                    <div className="card-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit
                    </div>
                  </div>
                  <div className="card-footer">
                    <Link to="#" className="btn btn-primary d-grid">
                      Button
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-12">
            <h6 className="mb-3">Navigation:</h6>
            <div className="row">
              <div className="col-xl-6">
                <div className="card text-center">
                  <div className="card-header">
                    <ul className="nav nav-tabs card-header-tabs ms-1">
                      <li className="nav-item">
                        <Link
                          className="nav-link active"
                          aria-current="true"
                          to="#"
                        >
                          Active
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          Link
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link disabled">Disabled</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Special title treatment
                    </h6>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="card text-center">
                  <div className="card-header">
                    <ul className="nav nav-pills card-header-pills ms-1">
                      <li className="nav-item">
                        <Link className="nav-link active" to="#">
                          Active
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="#">
                          Link
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link to="#" className="nav-link disabled">Disabled</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Special title treatment
                    </h6>
                    <p className="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <Link to="#" className="btn btn-primary">
                      Go somewhere
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Using Utilities */}
        {/* Image Caps */}
        <h6 className="mb-3">Image Caps:</h6>
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <ImageWithBasePath
                src="assets/img/img-01.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold">
                  Image caps are widely used in Blog's
                </h6>
                <p className="card-text mb-3 text-muted">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings.
                </p>
                <p className="card-text mb-0">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title fw-semibold">
                  Image caps are widely used in Blog's
                </h6>
                <p className="card-text mb-3 text-muted">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound.
                </p>
                <p className="card-text mb-0">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
              <ImageWithBasePath
                src="assets/img/img-02.jpg"
                className="card-img-bottom"
                alt="..."
              />
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h6 className="card-title fw-semibold mb-1">
                  Image caps are widely used in Blog's
                </h6>
                <p className="card-text mb-1 text-muted">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <ImageWithBasePath
                src="assets/img/img-2.jpg"
                className="card-img rounded-0"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text mb-0">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Image caps are widely used in Blog's
                </div>
              </div>
              <div className="card-body">
                <p className="card-text mb-1 text-muted">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <ImageWithBasePath
                src="assets/img/img-04.jpg"
                className="card-img rounded-0"
                alt="..."
              />
              <div className="card-footer">
                <p className="card-text mb-0">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <ImageWithBasePath
                src="assets/img/img-05.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-header">
                <div className="card-title">
                  Image caps are widely used in Blog's
                </div>
              </div>
              <div className="card-body">
                <p className="card-text mb-1 text-muted">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <p className="card-text mb-0">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Image caps are widely used in Blog's
                </div>
              </div>
              <div className="card-body">
                <p className="card-text mb-1 text-muted">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <p className="card-text mb-0">
                  <small>Last updated 3 mins ago</small>
                </p>
              </div>
              <ImageWithBasePath
                src="assets/img/img-1.jpg"
                className="card-img-bottom"
                alt="..."
              />
            </div>
          </div>
        </div>
        {/* /Image Caps */}
        {/* Image Overlays */}
        <h6 className="mb-3">Image Overlays:</h6>
        <div className="row">
          <div className="col-xl-4">
            <div className="card overlay-card">
              <ImageWithBasePath
                src="assets/img/img-2.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column p-0">
                <div className="card-header">
                  <div className="card-title text-fixed-white">
                    Image Overlays Are Awesome!
                  </div>
                </div>
                <div className="card-body text-fixed-white">
                  <div className="card-text mb-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </div>
                  <div className="card-text">Last updated 3 mins ago</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card overlay-card">
              <ImageWithBasePath
                src="assets/img/img-3.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column p-0 over-content-bottom">
                <div className="card-body text-fixed-white">
                  <div className="card-text text-fixed-white">
                    Image Overlays Are Awesome!
                  </div>
                  <div className="card-text mb-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </div>
                  <div className="card-text">Last updated 3 mins ago</div>
                </div>
                <div className="card-footer text-fixed-white">
                  Last updated 3 mins ago
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card overlay-card">
              <ImageWithBasePath
                src="assets/img/img-4.jpg"
                className="card-img"
                alt="..."
              />
              <div className="card-img-overlay d-flex flex-column p-0">
                <div className="card-header">
                  <div className="card-title text-fixed-white">
                    Image Overlays Are Awesome!
                  </div>
                </div>
                <div className="card-body text-fixed-white">
                  <div className="card-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even.
                  </div>
                </div>
                <div className="card-footer text-fixed-white">
                  Last updated 3 mins ago
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Image Overlays */}
        {/* Horizontal Cards */}
        <h6 className="mb-3">Horizontal Cards:</h6>
        <div className="row">
          <div className="col-xl-4">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-4">
                  <ImageWithBasePath
                    src="assets/img/img-05.jpg"
                    className="img-fluid rounded-start object-fit-cover h-100 w-100"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-header">
                    <div className="card-title">Horizontal Cards</div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Horizontal cards are awesome!
                    </h6>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer">
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-header">
                    <div className="card-title">Horizontal Cards</div>
                  </div>
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Horizontal cards are awesome!
                    </h6>
                    <p className="card-text mb-3">
                      This is a wider card with suppo rting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <ImageWithBasePath
                    src="assets/img/img-01.jpg"
                    className="img-fluid rounded-end object-fit-cover h-100 w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-body">
                    <h6 className="card-title fw-semibold mb-2">
                      Horizontal Cards
                    </h6>
                    <div className="card-title mb-3">
                      Horizontal cards are awesome!
                    </div>
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                  </div>
                  <div className="card-footer">
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <ImageWithBasePath
                    src="assets/img/img-02.jpg"
                    className="img-fluid rounded-end object-fit-cover h-100 w-100"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Horizontal Cards */}
        {/* Background Colored Cards */}
        <h6 className="mb-3">Background Colored Cards:</h6>
        <div className="row">
          <div className="col-xl-3">
            <div className="card card-bg-primary">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold">Adam Smith</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      Finished by today
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-fixed-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-secondary">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold">Elisha Corner</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      Completed 24 days back
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-fixed-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-warning">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold">Sarah Alina</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      Completed today
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-fixed-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-info">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-07.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold">Monica Karen</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      Pending from 4 days
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-fixed-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-success">
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
                  <div className="">
                    <div className="fs-15 fw-semibold">Samantha sid</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      In leave for 1 month
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-fixed-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-danger">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-04.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold">Sebastien steyn</div>
                    <p className="mb-0 text-fixed-white op-7 fs-12">
                      Completed by Tomorrow
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-fixed-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-light">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-05.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold">Jacob Smith</div>
                    <p className="mb-0 text-muted op-7 fs-12">
                      Finished by 24,Nov
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-default">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card card-bg-dark">
              <div className="card-body">
                <div className="d-flex align-items-center w-100">
                  <div className="me-2">
                    <span className="avatar avatar-rounded">
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-06.jpg"
                        alt="img"
                      />
                    </span>
                  </div>
                  <div className="">
                    <div className="fs-15 fw-semibold text-white">
                      Pope Adam
                    </div>
                    <p className="mb-0 op-7 fs-12 text-white">
                      Completed on 24,may
                    </p>
                  </div>
                  <div className="ms-auto">
                    <Link to="#" className="text-white">
                      <i className="fa-solid fa-ellipsis-vertical" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Background Colored Cards */}
        {/* Colored Border Cards */}
        <h6 className="mb-3">Colored Border Cards:</h6>
        <div className="row">
          <div className="col-xl-3">
            <div className="card border border-primary">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">Home Page Design</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-primary-transparent">
                    Framework
                  </span>
                  <span className="badge bg-secondary-transparent">
                    Angular
                  </span>
                  <span className="badge bg-info-transparent">Php</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-02.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-03.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-secondary">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">
                  Landing Page Design
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-danger-transparent">Laravel</span>
                  <span className="badge bg-info-transparent">Codeignitor</span>
                  <span className="badge bg-success-transparent">Php</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-04.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-05.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-warning">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">
                  Update New Project
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-warning-transparent">Html</span>
                  <span className="badge bg-secondary-transparent">
                    Bootstrap
                  </span>
                  <span className="badge bg-info-transparent">React</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-06.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-07.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-08.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-09.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-info">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">
                  New Project Discussion
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-info-transparent">React</span>
                  <span className="badge bg-primary-transparent">
                    Typescript
                  </span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-10.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-11.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-12.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-danger">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">
                  Recent Projects Testing
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-primary-transparent">Ui</span>
                  <span className="badge bg-secondary-transparent">
                    Angular
                  </span>
                  <span className="badge bg-info-transparent">Java</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-13.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-success">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">
                  About Us Page redesign
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-danger-transparent">Html</span>
                  <span className="badge bg-warning-transparent">Symphony</span>
                  <span className="badge bg-success-transparent">Php</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-14.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-15.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-light">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">New Employees</p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-warning-transparent">Html</span>
                  <span className="badge bg-info-transparent">Cake Php</span>
                  <span className="badge bg-success-transparent">React</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-16.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-17.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-18.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-3">
            <div className="card border border-dark">
              <div className="card-body">
                <p className="fs-14 fw-semibold mb-2 lh-1">
                  Terminated Employees
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4">
                  <span className="badge bg-primary-transparent">Angular</span>
                </div>
                <div className="avatar-list-stacked">
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-01.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-02.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-03.jpg"
                      alt="img"
                    />
                  </span>
                  <span className="avatar avatar-sm avatar-rounded">
                    <ImageWithBasePath
                      src="assets/img/profiles/avatar-04.jpg"
                      alt="img"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Colored Border Cards */}
        {/* Card Groups With Footer */}
        <h6 className="mb-3">Card Groups With Footer:</h6>
        <div className="row">
          <div className="col-xl-12">
            <div className="card-group">
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/img-01.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">
                    Delecious food is a blessing!
                  </h6>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/img-02.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">
                    Is office the best place to earn knowledge?
                  </h6>
                  <p className="card-text">
                    This card has supporting text below as a natural lead-in to
                    additional content.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
              <div className="card">
                <ImageWithBasePath
                  src="assets/img/img-03.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h6 className="card-title fw-semibold">Writing is an art.</h6>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Card Groups With Footer */}
        {/* Cards With Link */}
        <h6 className="mb-3">Cards With Link:</h6>
        <div className="row">
          <div className="col-xxl-3 col-xl-12">
            <div className="card">
              <Link to="#" className="card-anchor" />
              <ImageWithBasePath
                src="assets/img/img-1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold mb-0">
                  Forests are Awesome.
                </h6>
              </div>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6">
            <div className="row">
              <div className="col-xxl-12 col-xl-12">
                <div className="card card-bg-primary">
                  <Link to="#" className="card-anchor" />
                  <div className="card-body">
                    <blockquote className="blockquote mb-0 text-center">
                      <h6 className="text-fixed-white">
                        The best and most beautiful things in the world cannot
                        be seen or even touched — they must be felt with the
                        heart..
                      </h6>
                      <footer className="blockquote-footer mt-3 fs-14 text-fixed-white op-7">
                        Someone famous as{" "}
                        <cite title="Source Title">-Helen Keller</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-12">
                <div className="card">
                  <Link to="#" className="card-anchor" />
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <span className="avatar avatar-md">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-02.jpg"
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
                <div className="card border border-info">
                  <Link to="#" className="card-anchor" />
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="me-3">
                        <span className="avatar avatar-xl">
                          <ImageWithBasePath
                            src="assets/img/profiles/avatar-01.jpg"
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
              <div className="col-xxl-7 col-xl-12">
                <div className="card">
                  <Link to="#" className="card-anchor" />
                  <div className="row g-0">
                    <div className="col-md-8">
                      <div className="card-body">
                        <h6 className="card-title mb-2 fw-semibold">
                          Fox is Beautiful ?
                        </h6>
                        <p className="card-text mb-0">
                          This is a wild animal with supporting tactics and are
                          very efficient at kill,they are very Dangerous.
                        </p>
                        <p className="mb-0 card-text">
                          Fox lives mainly in forests and are well known for
                          their hunting skills.
                        </p>
                      </div>
                      <div className="card-footer">
                        <p className="card-text">
                          <small className="text-muted">
                            Last updated 3 mins ago
                          </small>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <ImageWithBasePath
                        src="assets/img/img-5.jpg"
                        className="img-fluid rounded-end object-fit-cover h-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-xl-6">
            <div className="card">
              <Link to="#" className="card-anchor" />
              <ImageWithBasePath
                src="assets/img/img-4.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h6 className="card-title fw-semibold">
                  Most tropical areas are suitable
                </h6>
                <p className="card-text">
                  {" "}
                  If you are going to use a passage of Lorem Ipsum, you need to
                  be sure there isn't anything embarrassing hidden in the middle
                  of text.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* /Cards With Link */}
        {/* Grid Cards */}
        <h6 className="mb-3">Grid Cards:</h6>
        <div className="row">
          <div className="col-xl-12">
            <div className="row row-cols-1 row-cols-md-4 g-4">
              <div className="col">
                <div className="card">
                  <ImageWithBasePath
                    src="assets/img/img-01.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Morphology of a typical fruit.
                    </h6>
                    <p className="card-text">
                      {" "}
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <ImageWithBasePath
                    src="assets/img/img-02.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Research improves ability &amp; agility !
                    </h6>
                    <p className="card-text">
                      {" "}
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <ImageWithBasePath
                    src="assets/img/img-03.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Most tropical areas are suitable
                    </h6>
                    <p className="card-text">
                      {" "}
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card">
                  <ImageWithBasePath
                    src="assets/img/img-04.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h6 className="card-title fw-semibold">
                      Are They seasonal fruits ?
                    </h6>
                    <p className="card-text">
                      {" "}
                      If you are going to use a passage of Lorem Ipsum, you need
                      to be sure there isn't anything embarrassing hidden in the
                      middle of text.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Grid Cards */}
      </div>
    </div>
  );
};

export default Cards;
