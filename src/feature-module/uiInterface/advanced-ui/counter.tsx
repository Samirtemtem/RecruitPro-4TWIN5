import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
const routes = all_routes;
const Counter = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content container-fluid">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Counter</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Counter</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Clients</h5>
                <h6 className="counter">
                  <CountUp end={3000} />
                </h6>
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Total Sales</h5>
                <h6 className="counter">
                  <CountUp end={10000} />
                </h6>
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h5>Total Projects</h5>
                <h6 className="counter">
                  <CountUp end={15000} />
                </h6>
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Down</h5>
              </div>
              <div className="card-body">
                <h6>Time Count from 3</h6>
                {/* <span id="timer-countdown" /> */}
                <CountUp
                  start={59}
                  end={0}
                  duration={59}
                  prefix="00 Day 00 : 02 :"
                />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Up</h5>
              </div>
              <div className="card-body">
                <h6>Time Counting From 0</h6>
                {/* <span id="timer-countup" /> */}
                <CountUp end={60} duration={60} prefix="00 Day 00 : 00 :" />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Inbetween</h5>
              </div>
              <div className="card-body">
                <h6>Time counting from 30 to 20</h6>
                {/* <span id="timer-countinbetween" /> */}
                <CountUp end={30} duration={10} prefix="00 Day 00 : 00 :" />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Count Callback</h5>
              </div>
              <div className="card-body">
                <h6>Count from 10 to 0 and calls timer end callback</h6>
                {/* <span id="timer-countercallback"> */}
                <CountUp
                  start={10}
                  end={0}
                  duration={10}
                  prefix="00 Day 00 : 00 :"
                  onEnd={() => {
                    return "calls timer end";
                  }}
                  className="linestripe"
                />
              </div>
            </div>
          </div>
          {/* /Counter */}
          {/* Counter */}
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Custom Output</h5>
              </div>
              <div className="card-body">
                <h6>Changed output pattern</h6>
                {/* <span id="timer-outputpattern" /> */}
                <CountUp
                  start={60}
                  end={0}
                  duration={60}
                  prefix="02 Days 23 Hour 59 Min "
                  suffix=" Sec.."
                />
              </div>
            </div>
          </div>
          {/* /Counter */}
        </div>
      </div>
    </div>
  );
};

export default Counter;
