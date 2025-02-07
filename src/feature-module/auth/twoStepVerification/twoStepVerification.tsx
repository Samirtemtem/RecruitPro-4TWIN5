import React, { useState } from "react";
import { all_routes } from "../../router/all_routes";
import { useNavigate } from "react-router";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
import { Link } from "react-router-dom";
import { InputOtp } from 'primereact/inputotp';

const TwoStepVerification = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.login);
  };

  const [token, setTokens] = useState<any>();

  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row">
          <div className="col-lg-5">
            <div className="login-background position-relative d-lg-flex align-items-center justify-content-center d-none flex-wrap vh-100">
              <div className="bg-overlay-img">
                <ImageWithBasePath src="assets/img/bg/bg-01.png" className="bg-1" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/bg-02.png" className="bg-2" alt="Img" />
                <ImageWithBasePath src="assets/img/bg/bg-03.png" className="bg-3" alt="Img" />
              </div>
              <div className="authentication-card w-100">
                <div className="authen-overlay-item border w-100">
                  <h1 className="text-white display-1">
                    Empowering people <br /> through seamless HR <br /> management.
                  </h1>
                  <div className="my-4 mx-auto authen-overlay-img">
                    <ImageWithBasePath src="assets/img/bg/authentication-bg-01.png" alt="Img" />
                  </div>
                  <div>
                    <p className="text-white fs-20 fw-semibold text-center">
                      Efficiently manage your workforce, streamline <br />{" "}
                      operations effortlessly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap">
              <div className="col-md-7 mx-auto vh-100">
                <form className="vh-100">
                  <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                    <div className=" mx-auto mb-5 text-center">
                      <ImageWithBasePath
                        src="assets/img/logo.svg"
                        className="img-fluid"
                        alt="Logo"
                      />
                    </div>
                    <div className="">
                      <div className="text-center mb-3">
                        <h2 className="mb-2">2 Step Verification</h2>
                        <p className="mb-0">
                          Please enter the OTP received to confirm your account
                          ownership. A code has been send to ******doe@example.com
                        </p>
                      </div>
                      <div className="text-center otp-input">
                        <div className="d-flex justify-content-center align-items-center mb-3">
                          {/* <input
                            type="text"
                            className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                            id="digit-1"
                            name="digit-1"
                            data-next="digit-2"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                            id="digit-2"
                            name="digit-2"
                            data-next="digit-3"
                            data-previous="digit-1"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold me-3"
                            id="digit-3"
                            name="digit-3"
                            data-next="digit-4"
                            data-previous="digit-2"
                            maxLength={1}
                          />
                          <input
                            type="text"
                            className=" rounded w-100 py-sm-3 py-2 text-center fs-26 fw-bold"
                            id="digit-4"
                            name="digit-4"
                            data-next="digit-5"
                            data-previous="digit-3"
                            maxLength={1}
                          /> */}
                          <InputOtp value={token} onChange={(e) => setTokens(e.value)} integerOnly />
                        </div>
                        <div>
                          <div className="badge bg-danger-transparent mb-3">
                            <p className="d-flex align-items-center ">
                              <i className="ti ti-clock me-1" />
                              09:59
                            </p>
                          </div>
                          <div className="mb-3 d-flex justify-content-center">
                            <p className="text-gray-9">
                              Didn't get the OTP?{" "}
                              <Link
                                to="#"
                                className="text-primary"
                              >
                                Resend OTP
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="submit" onClick={navigationPath} className="btn btn-primary w-100">
                          Verify &amp; Proceed
                        </button>
                      </div>
                    </div>
                    <div className="mt-5 pb-4 text-center">
                      <p className="mb-0 text-gray-9">Copyright © 2024 - Smarthr</p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default TwoStepVerification;
