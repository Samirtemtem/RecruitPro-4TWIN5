import React from "react";
import { Link } from "react-router-dom";
import { OverlayTrigger, Popover } from "react-bootstrap";

const Popovers: React.FC = () => {
  const popoverTop = (
    <Popover id="popover-top">
      <Popover.Header as="h3">Popover Top</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  const popoverRight = (
    <Popover id="popover-right">
      <Popover.Header as="h3">Popover Right</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  const popoverBottom = (
    <Popover id="popover-bottom">
      <Popover.Header as="h3">Popover Bottom</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  const popoverLeft = (
    <Popover id="popover-left">
      <Popover.Header as="h3">Popover Left</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  const popoverTitle = (
    <Popover id="popover-example">
      <Popover.Header as="h3">Popover Title</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  const popover1 = (
    <Popover id="popover-1">
      <Popover.Header as="h3">Popover Title</Popover.Header>
      <Popover.Body>
        And here's some amazing content. It's very engaging. Right?
      </Popover.Body>
    </Popover>
  );

  const popover2 = (
    <Popover id="popover-2">
      <Popover.Header as="h3">Popover Title</Popover.Header>
      <Popover.Body>
        Vivamus sagittis lacus vel augue laoreet rutrum faucibus.
      </Popover.Body>
    </Popover>
  );

  const createPopover = (id: string, title: string, content: string, customClass: string) => (
    <Popover id={id} className={customClass}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{content}</Popover.Body>
    </Popover>
  );

  const createPopoverLight = (id: string, title: string, content: string, customClass: string) => (
    <Popover id={id} className={customClass}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{content}</Popover.Body>
    </Popover>
  );

  const createPopoverDark = (id: string, title: string, content: string, customClass: string) => (
    <Popover id={id} className={customClass}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{content}</Popover.Body>
    </Popover>
  );

  const createPopoverDismiss = (id: string, title: string, content: string, customClass: string = "") => (
    <Popover id={id} className={customClass}>
      <Popover.Header as="h3">{title}</Popover.Header>
      <Popover.Body>{content}</Popover.Body>
    </Popover>
  );



  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Popovers</h4>
          </div>
        </div>
        <div className="row">
          {/* Default Popovers */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Default Popovers</h5>
              </div>
              <div className="card-body">
                <div className="btn-list popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={popoverTop}
                  >
                    <Link to="#"
                      tabIndex={0}
                      className="btn btn-outline-primary btn-wave"
                    >
                      Popover Top
                    </Link>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={popoverRight}
                  >
                    <Link to="#"
                      tabIndex={0}
                      className="btn btn-outline-primary btn-wave"
                    >
                      Popover Right
                    </Link>
                  </OverlayTrigger>
                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={popoverBottom}
                  >
                    <Link to="#"
                      tabIndex={0}
                      className="btn btn-outline-primary btn-wave"
                    >
                      Popover Bottom
                    </Link>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={popoverLeft}
                  >
                    <Link to="#"
                      tabIndex={0}
                      className="btn btn-outline-primary btn-wave"
                    >
                      Popover Left
                    </Link>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Default Popovers */}
          {/* Basic Popovers */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Basic Popovers</h5>
              </div>
              <div className="card-body">
                <div className="btn-list popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={popoverTitle}
                  >
                    <button className="btn btn-primary" type="button">
                      Click to toggle popover
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="focus"
                    placement="top"
                    overlay={popover1}
                  >
                    <Link to="#"
                      className="example-popover btn btn-primary"
                      tabIndex={0}
                    >
                      Dismissible popover
                    </Link>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement="bottom"
                    overlay={popover2}
                  >
                    <button
                      className="example-popover btn btn-primary"
                      type="button"
                    >
                      On Hover Tooltip
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Basic Popovers */}
          {/* Colored Headers */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Colored Headers</h5>
              </div>
              <div className="card-body">
                <div className="btn-list popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={createPopover(
                      "popover-header-primary",
                      "Color Header",
                      "Popover with primary header.",
                      "header-primary"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-wave"
                    >
                      Header Primary
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={createPopover(
                      "popover-header-secondary",
                      "Color Header",
                      "Popover with secondary header.",
                      "header-secondary"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-wave"
                    >
                      Header Secondary
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={createPopover(
                      "popover-header-info",
                      "Color Header",
                      "Popover with info header.",
                      "header-info"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-info btn-wave"
                    >
                      Header Info
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={createPopover(
                      "popover-header-warning",
                      "Color Header",
                      "Popover with warning header.",
                      "header-warning"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-wave"
                    >
                      Header Warning
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={createPopover(
                      "popover-header-success",
                      "Color Header",
                      "Popover with success header.",
                      "header-success"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-success btn-wave"
                    >
                      Header Success
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={createPopover(
                      "popover-header-danger",
                      "Color Header",
                      "Popover with danger header.",
                      "header-danger"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-wave"
                    >
                      Header Danger
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Colored Headers */}
          {/* Light Popovers */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Light Popovers</h5>
              </div>
              <div className="card-body">
                <div className="btn-list popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={createPopoverLight(
                      "popover-header-primary",
                      "Popover title",
                      "Popover with primary header.",
                      "popover-light header-primary"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-wave"
                    >
                      Header Primary
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={createPopoverLight(
                      "popover-header-secondary",
                      "Popover title",
                      "Popover with secondary header.",
                      "popover-light header-secondary"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-wave"
                    >
                      Header Secondary
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={createPopoverLight(
                      "popover-header-info",
                      "Popover title",
                      "Popover with info header.",
                      "popover-light header-info"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-info btn-wave"
                    >
                      Header Info
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={createPopoverLight(
                      "popover-header-warning",
                      "Popover title",
                      "Popover with warning header.",
                      "popover-light header-warning"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-wave"
                    >
                      Header Warning
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={createPopoverLight(
                      "popover-header-success",
                      "Popover title",
                      "Popover with success header.",
                      "popover-light header-success"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-success btn-wave"
                    >
                      Header Success
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={createPopoverLight(
                      "popover-header-danger",
                      "Popover title",
                      "Popover with danger header.",
                      "popover-light header-danger"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-wave"
                    >
                      Header Danger
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Light Popovers */}
          {/* Dark Popovers */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Dark Popovers</h5>
              </div>
              <div className="card-body">
                <div className="btn-list popover-list">
                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={createPopoverDark(
                      "popover-header-primary",
                      "Popover title",
                      "Popover with primary header.",
                      "popover-dark header-primary"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-wave"
                    >
                      Header Primary
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="right"
                    overlay={createPopoverDark(
                      "popover-header-secondary",
                      "Popover title",
                      "Popover with secondary header.",
                      "popover-dark header-secondary"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-secondary btn-wave"
                    >
                      Header Secondary
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={createPopoverDark(
                      "popover-header-info",
                      "Popover title",
                      "Popover with info header.",
                      "popover-dark header-info"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-info btn-wave"
                    >
                      Header Info
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="left"
                    overlay={createPopoverDark(
                      "popover-header-warning",
                      "Popover title",
                      "Popover with warning header.",
                      "popover-dark header-warning"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-warning btn-wave"
                    >
                      Header Warning
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="top"
                    overlay={createPopoverDark(
                      "popover-header-success",
                      "Popover title",
                      "Popover with success header.",
                      "popover-dark header-success"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-success btn-wave"
                    >
                      Header Success
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="click"
                    placement="bottom"
                    overlay={createPopoverDark(
                      "popover-header-danger",
                      "Popover title",
                      "Popover with danger header.",
                      "popover-dark header-danger"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-wave"
                    >
                      Header Danger
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Dark Popovers */}
          {/* Dismiss on next click */}
          <div className="col-xl-6">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Dismiss on next click</h5>
              </div>
              <div className="card-body">
                <div className="btn-list popover-list">
                  <OverlayTrigger
                    trigger="focus"
                    placement="top"
                    overlay={createPopoverDismiss(
                      "popover-1",
                      "Dismissible popover",
                      "And here's some amazing content. It's very engaging. Right?"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-wave"
                    >
                      Dismissible popover
                    </button>
                  </OverlayTrigger>

                  <OverlayTrigger
                    trigger="focus"
                    placement="top"
                    overlay={createPopoverDismiss(
                      "popover-2",
                      "Disabled popover",
                      "Disabled Popover",
                      "popover-disabled"
                    )}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-wave"
                      disabled
                    >
                      Disabled popover
                    </button>
                  </OverlayTrigger>
                </div>
              </div>
            </div>
          </div>
          {/* /Dismiss on next click */}
        </div>
      </div>
    </div>
  );
};

export default Popovers;
