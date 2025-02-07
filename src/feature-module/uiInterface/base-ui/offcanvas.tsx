import React from "react";
import { Link } from "react-router-dom";

const Offcanvas = () => {
  return (
    <div className="page-wrapper">
  <div className="content">
    <div className="page-header">
      <div className="page-title">
        <h4>Offcanvas</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body card-buttons">
            <h4 className="header-title">Offcanvas</h4>
            <p>
              You can use a link with the <code>href</code> attribute, or a
              button with the <code>data-bs-target</code> attribute. In both
              cases, the <code>data-bs-toggle="offcanvas"</code> is required.
            </p>
            <div className="button-list">
              <Link
                className="btn btn-primary mt-1 me-1"
                data-bs-toggle="offcanvas"
                to="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
              >
                Link with href
              </Link>
              <button
                className="btn btn-primary mt-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                Button with data-bs-target
              </button>
            </div>{" "}
            {/* end button-list*/}
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasExampleLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>{" "}
              {/* end offcanvas-header*/}
              <div className="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-3">List</h5>
                <ul className="">
                  <li className="">
                    Nemo enim ipsam voluptatem quia aspernatur
                  </li>
                  <li className="">Neque porro quisquam est, qui dolorem</li>
                  <li className="">Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul className="">
                  <li className="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li className="">Et harum quidem rerum facilis</li>
                  <li className="">
                    Temporibus autem quibusdam et aut officiis
                  </li>
                </ul>
              </div>{" "}
              {/* end offcanvas-body*/}
            </div>{" "}
            {/* end offcanvas*/}
          </div>{" "}
          {/* end card-body*/}
        </div>{" "}
        {/* end card*/}
        <div className="card">
          <div className="card-body card-buttons">
            <h4 className="header-title">Offcanvas Backdrop</h4>
            <p>
              Scrolling the <code>&lt;body&gt;</code> element is disabled when
              an offcanvas and its backdrop are visible. Use the{" "}
              <code>data-bs-scroll</code> attribute to toggle{" "}
              <code>&lt;body&gt;</code> scrolling and{" "}
              <code>data-bs-backdrop</code> to toggle the backdrop.
            </p>
            <div className="button-list">
              <button
                className="btn btn-primary mt-2 me-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasScrolling"
                aria-controls="offcanvasScrolling"
              >
                Enable body scrolling
              </button>
              <button
                className="btn btn-primary mt-2 me-1"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBackdrop"
                aria-controls="offcanvasWithBackdrop"
              >
                Enable backdrop (default)
              </button>
              <button
                className="btn btn-primary mt-2"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasWithBothOptions"
                aria-controls="offcanvasWithBothOptions"
              >
                Enable both scrolling &amp; backdrop
              </button>
            </div>{" "}
            {/* end button-list*/}
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabIndex={-1}
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
                  Colored with scrolling
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>{" "}
              {/* end offcanvas-header*/}
              <div className="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-3">List</h5>
                <ul className="ps-3">
                  <li className="">
                    Nemo enim ipsam voluptatem quia aspernatur
                  </li>
                  <li className="">Neque porro quisquam est, qui dolorem</li>
                  <li className="">Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul className="ps-3">
                  <li className="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li className="">Et harum quidem rerum facilis</li>
                  <li className="">
                    Temporibus autem quibusdam et aut officiis
                  </li>
                </ul>
              </div>{" "}
              {/* end offcanvas-body*/}
            </div>{" "}
            {/* end offcanvas*/}
            <div
              className="offcanvas offcanvas-start"
              tabIndex={-1}
              id="offcanvasWithBackdrop"
              aria-labelledby="offcanvasWithBackdropLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasWithBackdropLabel">
                  Offcanvas with backdrop
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>{" "}
              {/* end offcanvas-header*/}
              <div className="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-3">List</h5>
                <ul className="ps-3">
                  <li className="">
                    Nemo enim ipsam voluptatem quia aspernatur
                  </li>
                  <li className="">Neque porro quisquam est, qui dolorem</li>
                  <li className="">Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul className="ps-3">
                  <li className="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li className="">Et harum quidem rerum facilis</li>
                  <li className="">
                    Temporibus autem quibusdam et aut officiis
                  </li>
                </ul>
              </div>{" "}
              {/* end offcanvas-body*/}
            </div>{" "}
            {/* end offcanvas*/}
            <div
              className="offcanvas offcanvas-start"
              data-bs-scroll="true"
              tabIndex={-1}
              id="offcanvasWithBothOptions"
              aria-labelledby="offcanvasWithBothOptionsLabel"
            >
              <div className="offcanvas-header">
                <h5
                  className="offcanvas-title"
                  id="offcanvasWithBothOptionsLabel"
                >
                  Backdroped with scrolling
                </h5>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                />
              </div>{" "}
              {/* end offcanvas-header*/}
              <div className="offcanvas-body">
                <div>
                  Some text as placeholder. In real life you can have the
                  elements you have chosen. Like, text, images, lists, etc.
                </div>
                <h5 className="mt-3">List</h5>
                <ul className="ps-3">
                  <li className="">
                    Nemo enim ipsam voluptatem quia aspernatur
                  </li>
                  <li className="">Neque porro quisquam est, qui dolorem</li>
                  <li className="">Quis autem vel eum iure qui in ea</li>
                </ul>
                <ul className="ps-3">
                  <li className="">
                    At vero eos et accusamus et iusto odio dignissimos
                  </li>
                  <li className="">Et harum quidem rerum facilis</li>
                  <li className="">
                    Temporibus autem quibusdam et aut officiis
                  </li>
                </ul>
              </div>{" "}
              {/* end offcanvas-body*/}
            </div>{" "}
            {/* end offcanvas*/}
          </div>{" "}
          {/* end card-body*/}
        </div>{" "}
        {/* end card*/}
      </div>{" "}
      {/* end col*/}
      <div className="col-xl-6">
        <div className="card">
          <div className="card-body card-buttons">
            <h4 className="header-title">Offcanvas Placement</h4>
            <ul className="ps-0 mb-3">
              <li>
                <code>.offcanvas-start</code> places offcanvas on the left of
                the viewport (shown above)
              </li>
              <li>
                <code>.offcanvas-end</code> places offcanvas on the right of the
                viewport
              </li>
              <li>
                <code>.offcanvas-top</code> places offcanvas on the top of the
                viewport
              </li>
              <li>
                <code>.offcanvas-bottom</code> places offcanvas on the bottom of
                the viewport
              </li>
            </ul>
            <div>
              <div className="button-list">
                <button
                  className="btn btn-primary mt-2 me-1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasTop"
                  aria-controls="offcanvasTop"
                >
                  Toggle Top offcanvas
                </button>
                <button
                  className="btn btn-primary mt-2 me-1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Toggle right offcanvas
                </button>
                <button
                  className="btn btn-primary mt-2 me-1"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  Toggle bottom offcanvas
                </button>
                <button
                  className="btn btn-primary mt-2"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasLeft"
                  aria-controls="offcanvasLeft"
                >
                  Toggle Left offcanvas
                </button>
              </div>{" "}
              {/* end button-list*/}
              <div
                className="offcanvas offcanvas-top"
                tabIndex={-1}
                id="offcanvasTop"
                aria-labelledby="offcanvasTopLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasTopLabel">Offcanvas Top</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>{" "}
                {/* end offcanvas-header*/}
                <div className="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-3">List</h5>
                  <ul className="ps-3">
                    <li className="">
                      Nemo enim ipsam voluptatem quia aspernatur
                    </li>
                    <li className="">Neque porro quisquam est, qui dolorem</li>
                    <li className="">Quis autem vel eum iure qui in ea</li>
                  </ul>
                </div>{" "}
                {/* end offcanvas-body*/}
              </div>{" "}
              {/* end offcanvas*/}
              <div
                className="offcanvas offcanvas-end"
                tabIndex={-1}
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>{" "}
                {/* end offcanvas-header*/}
                <div className="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-3">List</h5>
                  <ul className="ps-3">
                    <li className="">
                      Nemo enim ipsam voluptatem quia aspernatur
                    </li>
                    <li className="">Neque porro quisquam est, qui dolorem</li>
                    <li className="">Quis autem vel eum iure qui in ea</li>
                  </ul>
                </div>{" "}
                {/* end offcanvas-body*/}
              </div>{" "}
              {/* end offcanvas*/}
              <div
                className="offcanvas offcanvas-bottom"
                tabIndex={-1}
                id="offcanvasBottom"
                aria-labelledby="offcanvasBottomLabel"
              >
                <div className="offcanvas-header">
                  <h5 className="offcanvas-title" id="offcanvasBottomLabel">
                    Offcanvas bottom
                  </h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>{" "}
                {/* end offcanvas-header*/}
                <div className="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-3">List</h5>
                  <ul className="ps-3">
                    <li className="">
                      Nemo enim ipsam voluptatem quia aspernatur
                    </li>
                    <li className="">Neque porro quisquam est, qui dolorem</li>
                    <li className="">Quis autem vel eum iure qui in ea</li>
                  </ul>
                </div>{" "}
                {/* end offcanvas-body*/}
              </div>{" "}
              {/* end offcanvas*/}
              <div
                className="offcanvas offcanvas-start"
                tabIndex={-1}
                id="offcanvasLeft"
                aria-labelledby="offcanvasLeftLabel"
              >
                <div className="offcanvas-header">
                  <h5 id="offcanvasLeftLabel">Offcanvas Left</h5>
                  <button
                    type="button"
                    className="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  />
                </div>{" "}
                {/* end offcanvas-header*/}
                <div className="offcanvas-body">
                  <div>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </div>
                  <h5 className="mt-3">List</h5>
                  <ul className="ps-3">
                    <li className="">
                      Nemo enim ipsam voluptatem quia aspernatur
                    </li>
                    <li className="">Neque porro quisquam est, qui dolorem</li>
                    <li className="">Quis autem vel eum iure qui in ea</li>
                  </ul>
                </div>{" "}
                {/* end offcanvas-body*/}
              </div>{" "}
              {/* end offcanvas*/}
            </div>
          </div>{" "}
          {/* end card-body*/}
        </div>{" "}
        {/* end card*/}
      </div>{" "}
      {/* end col*/}
    </div>
  </div>
</div>

  );
};

export default Offcanvas;
