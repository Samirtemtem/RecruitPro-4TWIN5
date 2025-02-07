import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
type PasswordField = "password" | "confirmPassword";

const Register = () => {
  const routes = all_routes;
  const navigation = useNavigate();

  const navigationPath = () => {
    navigation(routes.login);
  };
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: PasswordField) => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };
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
                        <h2 className="mb-2">Sign Up</h2>
                        <p className="mb-0">Please enter your details to sign up</p>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Name</label>
                        <div className="input-group">
                          <input
                            type="text"
                            defaultValue=""
                            className="form-control border-end-0"
                          />
                          <span className="input-group-text border-start-0">
                            <i className="ti ti-user" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <div className="input-group">
                          <input
                            type="text"
                            defaultValue=""
                            className="form-control border-end-0"
                          />
                          <span className="input-group-text border-start-0">
                            <i className="ti ti-mail" />
                          </span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="pass-group">
                          <input
                            type={
                              passwordVisibility.password
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                          <span
                            className={`ti toggle-passwords ${passwordVisibility.password
                              ? "ti-eye"
                              : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("password")
                            }
                          ></span>
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Confirm Password</label>
                        <div className="pass-group">
                          <input
                            type={
                              passwordVisibility.confirmPassword
                                ? "text"
                                : "password"
                            }
                            className="pass-input form-control"
                          />
                          <span
                            className={`ti toggle-passwords ${passwordVisibility.confirmPassword
                                ? "ti-eye"
                                : "ti-eye-off"
                              }`}
                            onClick={() =>
                              togglePasswordVisibility("confirmPassword")
                            }
                          ></span>
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mb-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check form-check-md mb-0">
                            <input
                              className="form-check-input"
                              id="remember_me"
                              type="checkbox"
                            />
                            <label
                              htmlFor="remember_me"
                              className="form-check-label text-dark mt-0"
                            >
                              Agree to{" "}
                              <span className="text-primary">
                                Terms &amp; Privacy
                              </span>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="mb-3">
                        <button type="submit" onClick={navigationPath} className="btn btn-primary w-100">
                          Sign Up
                        </button>
                      </div>
                      <div className="text-center">
                        <h6 className="fw-normal text-dark mb-0">
                          Already have an account?
                          <Link to={all_routes.login} className="hover-a ms-1">
                            Sign In
                          </Link>
                        </h6>
                      </div>
                      <div className="login-or">
                        <span className="span-or">Or</span>
                      </div>
                      <div className="mt-2">
                        <div className="d-flex align-items-center justify-content-center flex-wrap">
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="br-10 p-2 btn btn-info d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid m-1"
                                src="assets/img/icons/facebook-logo.svg"
                                alt="Facebook"
                              />
                            </Link>
                          </div>
                          <div className="text-center me-2 flex-fill">
                            <Link
                              to="#"
                              className="br-10 p-2 btn btn-outline-light border d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid m-1"
                                src="assets/img/icons/google-logo.svg"
                                alt="Facebook"
                              />
                            </Link>
                          </div>
                          <div className="text-center flex-fill">
                            <Link
                              to="#"
                              className="bg-dark br-10 p-2 btn btn-dark d-flex align-items-center justify-content-center"
                            >
                              <ImageWithBasePath
                                className="img-fluid m-1"
                                src="assets/img/icons/apple-logo.svg"
                                alt="Apple"
                              />
                            </Link>
                          </div>
                        </div>
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

export default Register;
