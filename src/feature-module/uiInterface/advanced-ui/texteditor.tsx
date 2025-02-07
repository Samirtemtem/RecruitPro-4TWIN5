import React from "react";
import DefaultEditor from "react-simple-wysiwyg";
import { Link } from "react-router-dom";
import { all_routes } from "../../router/all_routes";
import CommonTextEditor from "../../../core/common/textEditor";
const routes = all_routes;
const TextEditor = () => {


  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Text Editor</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to={routes.adminDashboard}
                  >Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Text Editor</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}
        <div className="row">
          {/* Editor */}
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Editor</h5>
              </div>
              <div className="card-body">
                {/* <div id="summernote" /> */}
                <CommonTextEditor />
              </div>
            </div>
          </div>
          {/* /Editor */}
        </div>
      </div>
    </div>
  );
};

export default TextEditor;
