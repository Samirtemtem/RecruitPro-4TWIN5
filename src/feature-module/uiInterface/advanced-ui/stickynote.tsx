import React from "react";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import ReactStickyNotes from '@react-latest-ui/react-sticky-notes';

const routes = all_routes;
const Stickynote = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Sticky Note</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}>Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Sticky Note</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Sticky */}
          <div className="col-md-12">
            <div className="card">
              <div className="sticky-note" id="board" />

              <ReactStickyNotes />
            </div>
          </div>
          {/* /Sticky */}
        </div>
      </div>
    </div>
  );
};

export default Stickynote;
