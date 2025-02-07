import React from "react";

const Progress = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Progress Bar</h4>
          </div>
        </div>
        <div className="row">
          {/* Basic Progress */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic Progress</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={0}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "0%" }} />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "25%" }} />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "50%" }} />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "75%" }} />
                </div>
                <div
                  className="progress mb-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
          {/* /Basic Progress */}
          {/* Colored Progress */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Colored Progress</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "20%" }}
                  />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "40%" }}
                  />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "60%" }}
                  />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "80%" }}
                  />
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Colored Progress */}
          {/* Striped Progress */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Striped Progress</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped bg-secondary"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped bg-success"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped bg-info"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped bg-warning"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Striped Progress */}
          {/* Progress Height */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Progress Height</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress progress-xs mb-3"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "10%" }}
                  ></div>
                </div>
                <div
                  className="progress progress-sm mb-3"
                  role="progressbar"
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "50%" }}
                  ></div>
                </div>
                <div
                  className="progress progress-lg mb-3"
                  role="progressbar"
                  aria-valuenow={75}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <div
                  className="progress progress-xl"
                  role="progressbar"
                  aria-valuenow={100}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Progress Height */}
          {/* Progress With Labels */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Progress With Labels</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "10%" }}>
                    10%
                  </div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "20%" }}
                  >
                    20%
                  </div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "40%" }}
                  >
                    40%
                  </div>
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "60%" }}
                  >
                    60%
                  </div>
                </div>
                <div
                  className="progress mb-0"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "80%" }}
                  >
                    80%
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Progress With Labels */}
          {/* Multiple bars With Sizes */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Multiple bars With Sizes</h5>
              </div>
              <div className="card-body">
                <div className="progress-stacked progress-xs mb-3">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "5%" }}
                    aria-valuenow={5}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "15%" }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress-stacked progress-sm mb-3">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "10%" }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "15%" }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress-stacked mb-3">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: "15%" }}
                    aria-valuenow={15}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress-stacked progress-lg mb-3">
                  <div
                    className="progress-bar bg-purple"
                    role="progressbar"
                    style={{ width: "20%" }}
                    aria-valuenow={20}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-teal"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-orange"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress-stacked progress-xl mb-0">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "30%" }}
                    aria-valuenow={30}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow={35}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Multiple bars With Sizes */}
          {/* Animated Stripped Progress */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Animated Stripped Progress</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated"
                    style={{ width: "10%" }}
                  />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary progress-bar-striped progress-bar-animated"
                    style={{ width: "20%" }}
                  />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success progress-bar-striped progress-bar-animated"
                    style={{ width: "40%" }}
                  />
                </div>
                <div
                  className="progress mb-3"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info progress-bar-striped progress-bar-animated"
                    style={{ width: "60%" }}
                  />
                </div>
                <div
                  className="progress"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning progress-bar-striped progress-bar-animated"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Animated Stripped Progress */}
          {/* Gradient Progress */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Gradient Progress</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary-gradient"
                    style={{ width: "10%" }}
                  />
                </div>
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary-gradient"
                    style={{ width: "20%" }}
                  />
                </div>
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success-gradient"
                    style={{ width: "40%" }}
                  />
                </div>
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info-gradient"
                    style={{ width: "60%" }}
                  />
                </div>
                <div
                  className="progress progress-animate"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning-gradient"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Gradient Progress */}
          {/* Progress Vertical */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Progress Vertical</h5>
              </div>
              <div className="card-body">
                <div className="progress progress-vertical progress-xs">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ height: "10%" }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical progress-sm">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ height: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ height: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical progress-lg">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ height: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical progress-xl">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ height: "90%" }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Progress Vertical */}
          {/* Progress Vertical Bottom */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Progress Vertical Bottom</h5>
              </div>
              <div className="card-body">
                <div className="progress progress-vertical-bottom progress-xs">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ height: "10%" }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical-bottom progress-sm">
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{ height: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical-bottom">
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ height: "50%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical-bottom progress-lg">
                  <div
                    className="progress-bar bg-warning"
                    role="progressbar"
                    style={{ height: "75%" }}
                    aria-valuenow={75}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
                <div className="progress progress-vertical-bottom progress-xl">
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ height: "90%" }}
                    aria-valuenow={10}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Progress Vertical Bottom */}
          {/* Custom Progress 1 */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Progress 1</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress progress-sm progress-custom mb-5 progress-animate"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "50%" }}>
                    <div className="progress-bar-value">50%</div>
                  </div>
                </div>
                <div
                  className="progress progress-sm progress-custom mb-5 progress-animate"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "60%" }}
                  >
                    <div className="progress-bar-value bg-secondary">60%</div>
                  </div>
                </div>
                <div
                  className="progress progress-sm progress-custom progress-animate"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "70%" }}
                  >
                    <div className="progress-bar-value bg-success">70%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Progress 1 */}
          {/* Custom Progress 2 */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Progress 2</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress progress-sm mb-4"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-item-1 bg-primary" />
                  <div className="progress-item-2" />
                  <div className="progress-item-3" />
                  <div className="progress-bar" style={{ width: "50%" }} />
                </div>
                <div
                  className="progress progress-sm mb-4"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-item-1 bg-secondary" />
                  <div className="progress-item-2 bg-secondary" />
                  <div className="progress-item-3" />
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "60%" }}
                  />
                </div>
                <div
                  className="progress progress-sm mb-4"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-item-1 bg-success" />
                  <div className="progress-item-2 bg-success" />
                  <div className="progress-item-3" />
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "70%" }}
                  />
                </div>
                <div
                  className="progress progress-sm mb-4"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-item-1 bg-info" />
                  <div className="progress-item-2 bg-info" />
                  <div className="progress-item-3 bg-info" />
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "80%" }}
                  />
                </div>
                <div
                  className="progress progress-sm"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-item-1 bg-warning" />
                  <div className="progress-item-2 bg-warning" />
                  <div className="progress-item-3 bg-warning" />
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "90%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Progress 2 */}
          {/* Custom Progress 3 */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Progress 3</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress progress-lg mb-5 custom-progress-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div className="progress-bar" style={{ width: "50%" }}>
                    <div className="progress-bar-value">50%</div>
                  </div>
                </div>
                <div
                  className="progress progress-lg mb-5 custom-progress-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "60%" }}
                  >
                    <div className="progress-bar-value secondary">60%</div>
                  </div>
                </div>
                <div
                  className="progress progress-lg mb-5 custom-progress-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "70%" }}
                  >
                    <div className="progress-bar-value success">70%</div>
                  </div>
                </div>
                <div
                  className="progress progress-lg custom-progress-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={70}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "80%" }}
                  >
                    <div className="progress-bar-value danger">80%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Progress 3 */}
          {/* Custom Progress 4 */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Progress 4</h5>
              </div>
              <div className="card-body">
                <div
                  className="progress progress-xl mb-3 progress-animate custom-progress-4"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary"
                    style={{ width: "10%" }}
                  />
                  <div className="progress-bar-label">10%</div>
                </div>
                <div
                  className="progress progress-xl mb-3 progress-animate custom-progress-4 secondary"
                  role="progressbar"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary"
                    style={{ width: "20%" }}
                  />
                  <div className="progress-bar-label">20%</div>
                </div>
                <div
                  className="progress progress-xl mb-3 progress-animate custom-progress-4 success"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "40%" }}
                  />
                  <div className="progress-bar-label">40%</div>
                </div>
                <div
                  className="progress progress-xl mb-3 progress-animate custom-progress-4 info"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info"
                    style={{ width: "60%" }}
                  />
                  <div className="progress-bar-label">60%</div>
                </div>
                <div
                  className="progress progress-xl mb-3 progress-animate custom-progress-4 warning"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning"
                    style={{ width: "80%" }}
                  />
                  <div className="progress-bar-label">80%</div>
                </div>
                <div
                  className="progress progress-xl progress-animate custom-progress-4 danger"
                  role="progressbar"
                  aria-valuenow={90}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-danger"
                    style={{ width: "90%" }}
                  />
                  <div className="progress-bar-label">90%</div>
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Progress 4 */}
          {/* Custom Progress 5 */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Custom Progress 5</div>
              </div>
              <div className="card-body">
                <h6 className="fw-semibold mb-2">Project Dependencies</h6>
                <div className="progress-stacked progress-xl mb-5">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "25%" }}
                    aria-valuenow={25}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    25%
                  </div>
                  <div
                    className="progress-bar bg-secondary"
                    role="progressbar"
                    style={{ width: "35%" }}
                    aria-valuenow={35}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    35%
                  </div>
                  <div
                    className="progress-bar bg-danger"
                    role="progressbar"
                    style={{ width: "40%" }}
                    aria-valuenow={40}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    40%
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-xl-5">
                    <div className="border p-3">
                      <p className="fs-12 fw-semibold mb-0 text-muted">
                        Html
                        <span className="float-end fs-10 fw-normal">25%</span>
                      </p>
                      <div
                        className="progress progress-xs mb-4 progress-animate"
                        role="progressbar"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-primary"
                          style={{ width: "25%" }}
                        ></div>
                      </div>
                      <p className="fs-12 fw-semibold mb-0 text-muted">
                        Css
                        <span className="float-end fs-10 fw-normal">35%</span>
                      </p>
                      <div
                        className="progress progress-xs mb-4 progress-animate"
                        role="progressbar"
                        aria-valuenow={35}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-secondary"
                          style={{ width: "35%" }}
                        ></div>
                      </div>
                      <p className="fs-12 fw-semibold mb-0 text-muted">
                        Js<span className="float-end fs-10 fw-normal">40%</span>
                      </p>
                      <div
                        className="progress progress-xs mb-0 progress-animate"
                        role="progressbar"
                        aria-valuenow={40}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      >
                        <div
                          className="progress-bar bg-danger"
                          style={{ width: "40%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Progress 5 */}
          {/* Custom Animated Progress */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header justify-content-between">
                <div className="card-title">Custom Animated Progress</div>
              </div>
              <div className="card-body">
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={10}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-primary-gradient"
                    style={{ width: "10%" }}
                  />
                </div>
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={20}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-secondary-gradient"
                    style={{ width: "20%" }}
                  />
                </div>
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={40}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-success-gradient"
                    style={{ width: "40%" }}
                  />
                </div>
                <div
                  className="progress mb-3 progress-animate"
                  role="progressbar"
                  aria-valuenow={60}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-info-gradient"
                    style={{ width: "60%" }}
                  />
                </div>
                <div
                  className="progress progress-animate"
                  role="progressbar"
                  aria-valuenow={80}
                  aria-valuemin={0}
                  aria-valuemax={100}
                >
                  <div
                    className="progress-bar bg-warning-gradient"
                    style={{ width: "80%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Custom Animated Progress */}
        </div>
      </div>
    </div>
  );
};

export default Progress;
