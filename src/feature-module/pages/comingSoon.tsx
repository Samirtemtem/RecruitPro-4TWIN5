import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../core/common/imageWithBasePath";

const ComingSoon = () => {
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (seconds > 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [seconds]);

  const formatTime = (time: number) => {
    // Add leading zero for single-digit numbers
    return time < 10 ? `0${time}` : time;
  };
  return (
    <div className="container">
    <div className="coming-soon">
      {/* Page Wrapper */}
      <div className="Page-wrapper">
        <div className="row flex-wrap justify-content-center align-items-center">
          <div className="col-md-8 d-flex justify-content-end align-items-center mx-auto">
            <div className="comming-soon-pg d-flex flex-column align-items-center justify-content-center">
              <div className="mb-4 p-4">
                <ImageWithBasePath src="assets/img/logo.svg" alt="logo" className="img-fluid" />
              </div>
              <div>
                <ImageWithBasePath
                  src="assets/img/bg/coming-soon.svg"
                  alt="image"
                  className="img-fluid"
                />
              </div>
              <ul className="d-inline-flex align-items-center justify-content-center mb-3">
                <li className="me-sm-3 me-2">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex counts-card align-items-center mb-2 justify-content-center flex-column border rounded bg-primary px-sm-4 py-sm-3 p-2">
                      <h3 className="days fs-sm-30 text-white fs-24">54</h3>
                    </div>
                    <p className="text-gray-9 fw-medium fs-16">Days</p>
                  </div>
                </li>
                <li className="text-gray fw-bold fs-30 me-sm-3 mb-4 me-2">:</li>
                <li className="me-sm-3 me-2">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center  counts-card mb-2 justify-content-center flex-column border rounded bg-primary px-sm-4 py-sm-3 p-2">
                      <h3 className="hours fs-sm-30 text-white fs-24">2</h3>
                    </div>
                    <p className="text-gray-9 fw-medium fs-16">Hours</p>
                  </div>
                </li>
                <li className="text-gray fw-bold fs-30 me-sm-3 mb-4 me-2">:</li>
                <li className="me-sm-3 me-2">
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center  counts-card mb-2 justify-content-center flex-column border rounded bg-primary px-sm-4 py-sm-3 p-2">
                      <h3 className="minutes fs-sm-30 text-white fs-24">54</h3>
                    </div>
                    <p className="text-gray-9 fw-medium fs-16">Minutes</p>
                  </div>
                </li>
                <li className="text-gray fw-bold fs-30 me-sm-3 mb-4 me-2">:</li>
                <li>
                  <div className="d-flex flex-column align-items-center">
                    <div className="d-flex align-items-center  counts-card mb-2 justify-content-center flex-column border rounded bg-primary px-sm-4 py-sm-3 p-2">
                      <h3 className="seconds fs-sm-30 text-white fs-24">{formatTime(seconds)}</h3>
                    </div>
                    <p className="text-gray-9 fw-medium fs-16">Seconds</p>
                  </div>
                </li>
              </ul>
              <div>
                <p className="fs-16 text-gray-9 text-center">
                  Please check back later, We are working hard to get <br />{" "}
                  everything just right.
                </p>
                <div className="subscribe-form">
                  <div className="mb-3 position-relative">
                    <p className="d-flex text-gray-9 text-center fw-medium fs-16 mb-3">
                      Subscribe to get notified
                    </p>
                    <div className="bg-transparent border  p-2 d-flex align-items-center rounded ps-0">
                      <input
                        type="email"
                        className="form-control bg-transparent border-0"
                        placeholder="Enter Your Email"
                      />
                      <Link to="#" className="btn btn-primary">
                        Subscribe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-wrap justify-content-center align-items-center pb-4">
                  <Link
                    to="#"
                    className="btn btn-primary rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-brand-facebook fs-16" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-brand-twitter fs-16" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary rounded-circle btn-icon btn-sm me-2 d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-brand-linkedin fs-16" />
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-primary rounded-circle btn-icon btn-sm d-flex align-items-center justify-content-center"
                  >
                    <i className="ti ti-brand-instagram fs-16" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </div>
  </div>
  
  
  );
};

export default ComingSoon;
