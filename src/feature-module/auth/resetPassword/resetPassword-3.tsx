import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";
type PasswordField = "oldPassword" | "newPassword" | "confirmPassword";

const ResetPassword3 = () => {
  const routes = all_routes;
  const navigation = useNavigate();
  const navigationPath = () => {
    navigation(routes.resetPasswordSuccess3);
  };
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  });
  const [password, setPassword] = useState("");
  const [passwordResponce, setPasswordResponce] = useState({
    passwordResponceText: "Use 8 or more characters with a mix of letters, numbers, and symbols.",
    passwordResponceKey: "",
  });

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setPasswordVisibility((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const onChangePassword = (password: string) => {
    setPassword(password);
    if (password.match(/^$|\s+/)) {
      setPasswordResponce({
        passwordResponceText: "Use 8 or more characters with a mix of letters, numbers & symbols",
        passwordResponceKey: "",
      });
    } else if (password.length === 0) {
      setPasswordResponce({
        passwordResponceText: "",
        passwordResponceKey: "",
      });
    } else if (password.length < 8) {
      setPasswordResponce({
        passwordResponceText: "Weak. Must contain at least 8 characters",
        passwordResponceKey: "0",
      });
    } else if (
      password.search(/[a-z]/) < 0 ||
      password.search(/[A-Z]/) < 0 ||
      password.search(/[0-9]/) < 0
    ) {
      setPasswordResponce({
        passwordResponceText: "Average. Must contain at least 1 upper case and number",
        passwordResponceKey: "1",
      });
    } else if (password.search(/(?=.*?[#?!@$%^&*-])/) < 0) {
      setPasswordResponce({
        passwordResponceText: "Almost. Must contain a special symbol",
        passwordResponceKey: "2",
      });
    } else {
      setPasswordResponce({
        passwordResponceText: "Awesome! You have a secure password.",
        passwordResponceKey: "3",
      });
    }
  };
  return (
    <div className="container-fuild">
      <div className="w-100 overflow-hidden position-relative flex-wrap d-block vh-100">
        <div className="row justify-content-center align-items-center vh-100 overflow-auto flex-wrap ">
          <div className="col-md-4 mx-auto vh-100">
            <form action="success-3.html" className="vh-100">
              <div className="vh-100 d-flex flex-column justify-content-between p-4 pb-0">
                <div className=" mx-auto mb-5 text-center">
                  <ImageWithBasePath src="assets/img/logo.svg" className="img-fluid" alt="Logo" />
                </div>
                <div className="">
                  <div className="text-center mb-3">
                    <h2 className="mb-2">Reset Password</h2>
                    <p className="mb-0">
                      Your new password must be different from previous used
                      passwords.
                    </p>
                  </div>
                  <div>
                    <div className="input-block mb-3">
                      <div className="mb-3">
                        <label className="form-label">Password</label>
                        <div className="pass-group" id="passwordInput">
                          <input
                            type={passwordVisibility.password ? "text" : "password"}
                            value={password}
                            onChange={(e) => onChangePassword(e.target.value)}
                            className="form-control pass-input"
                            placeholder="Enter your password"
                          />
                          <span
                            className={`ti toggle-passwords ${passwordVisibility.password ? "ti-eye" : "ti-eye-off"
                              }`}
                            onClick={() => togglePasswordVisibility("password")}
                            style={{ cursor: "pointer" }}
                          ></span>
                        </div>
                      </div>
                      <div
                        className={`password-strength d-flex ${passwordResponce.passwordResponceKey === "0"
                          ? "poor-active"
                          : passwordResponce.passwordResponceKey === "1"
                            ? "avg-active"
                            : passwordResponce.passwordResponceKey === "2"
                              ? "strong-active"
                              : passwordResponce.passwordResponceKey === "3"
                                ? "heavy-active"
                                : ""
                          }`}
                        id="passwordStrength"
                      >
                        <span id="poor" className="active" />
                        <span id="weak" className="active" />
                        <span id="strong" className="active" />
                        <span id="heavy" className="active" />
                      </div>
                    </div>
                    <p className="fs-12">{passwordResponce.passwordResponceText}</p>
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
                    <div className="mb-3">
                      <button type="submit" onClick={navigationPath}  className="btn btn-primary w-100">
                        Submit
                      </button>
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
  );
};

export default ResetPassword3;
