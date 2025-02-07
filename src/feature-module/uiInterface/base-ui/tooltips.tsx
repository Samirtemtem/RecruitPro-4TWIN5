import React, { useState } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Tooltips = () => {
  const renderTooltip = (props: any) => (
    <Tooltip id="tooltip-primary" className="tooltip-primary" {...props}>
      Primary Tooltip
    </Tooltip>
  );
  const renderTooltipSecondary = (props: any) => (
    <Tooltip id="tooltip-secondary" className="tooltip-secondary" {...props}>
      Secondary Tooltip
    </Tooltip>
  );
  const renderTooltipWarning = (props: any) => (
    <Tooltip id="tooltip-warning" className="tooltip-warning" {...props}>
      Warning Tooltip
    </Tooltip>
  );
  const renderTooltipInfo = (props: any) => (
    <Tooltip id="tooltip-warning" className="tooltip-info" {...props}>
      Info Tooltip
    </Tooltip>
  );
  const renderTooltipSuccess = (props: any) => (
    <Tooltip id="tooltip-success" className="tooltip-success" {...props}>
      Success Tooltip
    </Tooltip>
  );
  const renderTooltipDanger = (props: any) => (
    <Tooltip id="tooltip-success" className="tooltip-danger" {...props}>
      Danger Tooltip
    </Tooltip>
  );
  const renderTooltipLight = (props: any) => (
    <Tooltip id="tooltip-light" className="tooltip-light" {...props}>
      Danger Tooltip
    </Tooltip>
  );
  const renderTooltipDark = (props: any) => (
    <Tooltip id="tooltip-dark" className="tooltip-darh" {...props}>
      Danger Tooltip
    </Tooltip>
  );
  const renderTooltipHover = (props: any) => (
    <Tooltip id="tooltip-example" {...props}>
      Popover title
    </Tooltip>
  );
  const tooltipContent = (
    <div>
      <em>Tooltip</em> <u>with</u> <b>HTML</b>
    </div>
  );
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  const tooltipContenthtml = (
    <Tooltip id="tooltip-html" show={showTooltip}>
      <em>Tooltip</em> <u>with</u> <b>HTML</b>
    </Tooltip>
  );

  const tooltipContentDisable = (
    <Tooltip id="disabled-tooltip">Disabled tooltip</Tooltip>
  );

  const tooltipContentLink = <Tooltip id="link-tooltip">Link Tooltip</Tooltip>;
  const tooltipContentImg = <Tooltip id="avatar-tooltip">Marina Kai</Tooltip>;
  const tooltipContentImg2 = <Tooltip id="avatar-tooltip">Alex Carey</Tooltip>;
  const tooltipContentImg3 = <Tooltip id="avatar-tooltip">Alex Carey</Tooltip>;

  return (
    <div>
      {/* Page Wrapper */}
      <div className="page-wrapper cardhead">
        <div className="content ">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Tooltip</h3>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Colored Tooltips */}
            <div className="col-xl-12">
              <div className="card">
                <div className="card-header justify-content-between">
                  <div className="card-title">Colored Tooltips</div>
                </div>
                <div className="card-body">
                  <div className="btn-list">
                    <button
                      className="btn btn-primary"
                      // variant ="primary"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-primary"
                      data-bs-placement="top"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltip}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Primary Tooltip</span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-secondary"
                      data-bs-placement="top"
                      data-bs-original-title="Secondary Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipSecondary}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">
                          Secondary Tooltip
                        </span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-warning"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-warning"
                      data-bs-placement="top"
                      data-bs-original-title="Warning Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipWarning}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Warning Tooltip</span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-info"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-info"
                      data-bs-placement="top"
                      data-bs-original-title="Info Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipInfo}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Info Tooltip</span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-success"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-success"
                      data-bs-placement="top"
                      data-bs-original-title="Success Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipSuccess}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Success Tooltip</span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-danger"
                      data-bs-placement="top"
                      data-bs-original-title="Danger Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipDanger}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Danger Tooltip</span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-light"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-light"
                      data-bs-placement="top"
                      data-bs-original-title="Light Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipLight}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Light Tooltip</span>
                      </OverlayTrigger>
                    </button>
                    <button
                      type="button"
                      className="btn btn-dark text-white"
                      data-bs-toggle="tooltip"
                      data-bs-custom-class="tooltip-dark"
                      data-bs-placement="top"
                      data-bs-original-title="Dark Tooltip"
                    >
                      <OverlayTrigger
                        placement="top"
                        overlay={renderTooltipDark}
                        offset={[0, 15]}
                      >
                        <span className="d-inline-block">Dark Tooltip</span>
                      </OverlayTrigger>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* /Colored Tooltips */}
          </div>
          <div className="row">
            {/* Html Element */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Html Element</h5>
                </div>
                <div className="card-body">
                  <div className="popover-list">
                    <OverlayTrigger
                      placement="top"
                      overlay={renderTooltipHover}
                      delay={{ show: 250, hide: 400 }}
                    >
                      <button
                        className="example-popover btn btn-primary"
                        type="button"
                      >
                        Hover Me
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
            {/* /Html Element */}
            {/* Direction Tooltip */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Direction Tooltip</h5>
                </div>
                <div className="card-body">
                  <div className="tooltip-list">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">Tooltip on top</Tooltip>
                      }
                    >
                      <button type="button" className="btn btn-primary me-2">
                        Tooltip on top
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="right"
                      overlay={
                        <Tooltip id="tooltip-right">Tooltip on right</Tooltip>
                      }
                    >
                      <button type="button" className="btn btn-primary me-2">
                        Tooltip on right
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="bottom"
                      overlay={
                        <Tooltip id="tooltip-bottom">Tooltip on bottom</Tooltip>
                      }
                    >
                      <button type="button" className="btn btn-primary me-2">
                        Tooltip on bottom
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      placement="left"
                      overlay={
                        <Tooltip id="tooltip-bottom">Tooltip on left</Tooltip>
                      }
                    >
                      <button type="button" className="btn btn-primary me-2">
                        Tooltip on left
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
            {/* /Direction Tooltip */}
            {/* Html Element */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Html Element</h5>
                </div>
                <div className="card-body">
                  <div className="popover-list">
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-html">{tooltipContent}</Tooltip>
                      }
                    >
                      <button type="button" className="btn btn-primary me-2">
                        Tooltip with HTML
                      </button>
                    </OverlayTrigger>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={tooltipContenthtml}
                    >
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={handleClick}
                      >
                        Click Me
                      </button>
                    </OverlayTrigger>
                  </div>
                </div>
              </div>
            </div>
            {/* /Html Element */}
            {/* Tooltip */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Disabled Elements</h5>
                </div>

                <div className="card-body">
                  <span
                    className="d-inline-block"
                    tabIndex={0}
                    data-bs-toggle="tooltip"
                  >
                    <OverlayTrigger
                      placement="top"
                      overlay={tooltipContentDisable}
                    >
                      <span className="d-inline-block">
                        <button
                          className="btn btn-primary"
                          type="button"
                          disabled
                        >
                          Disabled button
                        </button>
                      </span>
                    </OverlayTrigger>
                  </span>
                </div>
              </div>
            </div>
            {/* /Tooltip */}
            {/* Tooltip Links */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Tooltips on Links</h5>
                </div>
                <div className="card-body">
                  <p className="text-muted mb-0">
                    Hover on the link to view the{" "}
                    <OverlayTrigger
                      placement="top"
                      overlay={tooltipContentLink}
                    >
                      <Link to="#" className="text-primary">
                        Tooltip
                      </Link>
                    </OverlayTrigger>
                  </p>
                </div>
              </div>
            </div>
            {/* /Tooltip Links */}
            {/* Tooltip Images */}
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Tooltip For Images</h5>
                </div>
                <div className="card-body">
                  <OverlayTrigger placement="top" overlay={tooltipContentImg}>
                    <Link
                      to="#"
                      className="avatar avatar-md me-2 online avatar-rounded"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-01.jpg"
                        alt="img"
                      />
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltipContentImg2}>
                    <Link
                      to="#"
                      className="avatar avatar-lg me-2 online avatar-rounded"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-02.jpg"
                        alt="img"
                      />
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger placement="top" overlay={tooltipContentImg3}>
                    <Link
                      to="#"
                      className="avatar avatar-xl me-2 offline avatar-rounded"
                    >
                      <ImageWithBasePath
                        src="assets/img/profiles/avatar-03.jpg"
                        alt="img"
                      />
                    </Link>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
            {/* /Tooltip Images */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </div>
  );
};

export default Tooltips;
