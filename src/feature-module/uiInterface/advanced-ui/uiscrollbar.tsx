import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from "react-router-dom";

const Scrollbar = () => {
  return (
    <div className="page-wrapper cardhead">
      <div className="content ">
        {/* Page Header */}
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Scroll Bar</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link to="/">Dashboard</Link>
                </li>
                <li className="breadcrumb-item active">Scroll Bar</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Scroll */}
          <div className="col-md-6 d-flex">
            <div className="card"  style={{ width: "100%" }}>
              <div className="card-header">
                <h5 className="card-title">Horizontal Scroll</h5>
              </div>
              <div className="card-body">
                <div className="scroll-bar-wrap">
                  <Scrollbars
                    style={{ width: "100%", height: "300px" }}
                    autoHide
                  >
                    <div className="horizontal-scroll scroll-demo">
                      <div
                        className="horz-scroll-content"
                        style={{ width: "1600px" }}
                      >
                        <div className="row">
                          <div className="col-sm-3">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry&apos;s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.Lorem Ipsum is
                              simply dummy text of the printing and typesetting
                              industry. Lorem Ipsum has been the industry&apos;s
                              standard dummy text ever since the 1500s, when an
                              unknown printer took a galley of type and
                              scrambled it to make a type specimen book. It has
                              survived not only five centuries, but also the
                              leap into electronic typesetting, remaining
                              essentially unchanged.
                            </p>
                          </div>
                          <div className="col-sm-3">
                            <p>
                              It was popularised in the 1960s with the release
                              of Letraset sheets containing Lorem Ipsum
                              passages, and more recently with desktop
                              publishing software like Aldus PageMaker including
                              versions of Lorem Ipsum.It was popularised in the
                              1960s with the release of Letraset sheets
                              containing Lorem Ipsum passages, and more recently
                              with desktop publishing software like Aldus
                              PageMaker including versions of Lorem Ipsum.
                            </p>
                          </div>
                          <div className="col-sm-3">
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words.It
                              was popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                          <div className="col-sm-3">
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              &apos;Content here, content here&apos;, making it
                              look like readable English. Many desktop
                              publishing packages and web page editors.It was
                              popularised in the 1960s with the release of
                              Letraset sheets containing Lorem Ipsum passages,
                              and more recently with desktop publishing software
                              like Aldus PageMaker including versions of Lorem
                              Ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
          </div>
          {/* /Scroll */}
          {/* Scroll */}
          <div className="col-md-6 d-flex">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">
                <h5 className="card-title">Vertical Scroll</h5>
              </div>
              <div className="card-body" style={{ height: "300px" }}>
                <Scrollbars style={{ width: "100%", height: "100%" }}>
                  <div className="vertical-scroll scroll-demo">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using &apos;Content here, content here&apos;,
                      making it look like readable English. Many desktop
                      publishing packages and web page editors.
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                    </p>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </div>
          {/* /Scroll */}
          {/* Scroll */}
          <div className="col-md-6 d-flex">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">
                <h5 className="card-title">Small Size Scroll</h5>
              </div>
              <div className="card-body" style={{ height: "300px" }}>
                <Scrollbars style={{ width: "100%", height: "80%" }}>
                  <div className="scrollbar-margins large-margin scroll-demo">
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the
                      industry&apos;s standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and
                      scrambled it to make a type specimen book. It has survived
                      not only five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged.
                    </p>
                    <p>
                      It was popularised in the 1960s with the release of
                      Letraset sheets containing Lorem Ipsum passages, and more
                      recently with desktop publishing software like Aldus
                      PageMaker including versions of Lorem Ipsum
                    </p>
                    <p>
                      Contrary to popular belief, Lorem Ipsum is not simply
                      random text. It has roots in a piece of classical Latin
                      literature from 45 BC, making it over 2000 years old.
                      Richard McClintock, a Latin professor at Hampden-Sydney
                      College in Virginia, looked up one of the more obscure
                      Latin words
                    </p>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using &apos;Content here, content here&apos;,
                      making it look like readable English. Many desktop
                      publishing packages and web page editors.
                    </p>
                    <p>
                      At vero eos et accusamus et iusto odio dignissimos ducimus
                      qui blanditiis praesentium voluptatum deleniti atque
                      corrupti quos dolores et quas molestias excepturi sint
                      occaecati cupiditate non provident, similique sunt in
                      culpa qui officia deserunt mollitia animi, id est laborum
                      et dolorum fuga.
                    </p>
                  </div>
                </Scrollbars>
              </div>
            </div>
          </div>
          {/* /Scroll */}
          {/* Scroll */}
          <div className="col-md-6 d-flex">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-header">
                <h5 className="card-title">Visible Scroll</h5>
              </div>
              <div className="card-body">
                <div className="scroll-bar-wrap">
                  <Scrollbars
                    style={{ width: "100%", height: "300px" }}
                    autoHide
                  >
                    <div className="visible-scroll always-visible scroll-demo">
                      <div
                        className="horz-scroll-content"
                        style={{ width: "1600px" }}
                      >
                        <div className="row">
                          <div className="col-sm-3">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry&apos;s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.
                            </p>
                            <p>
                              It was popularised in the 1960s with the release
                              of Letraset sheets containing Lorem Ipsum
                              passages, and more recently with desktop
                              publishing software like Aldus PageMaker including
                              versions of Lorem Ipsum
                            </p>
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words
                            </p>
                          </div>
                          <div className="col-sm-3">
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words
                            </p>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              &apos;Content here, content here&apos;, making it
                              look like readable English. Many desktop
                              publishing packages and web page editors.
                            </p>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi, id est laborum et dolorum
                              fuga.
                            </p>
                          </div>
                          <div className="col-sm-3">
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              and typesetting industry. Lorem Ipsum has been the
                              industry&apos;s standard dummy text ever since the
                              1500s, when an unknown printer took a galley of
                              type and scrambled it to make a type specimen
                              book. It has survived not only five centuries, but
                              also the leap into electronic typesetting,
                              remaining essentially unchanged.
                            </p>
                            <p>
                              It was popularised in the 1960s with the release
                              of Letraset sheets containing Lorem Ipsum
                              passages, and more recently with desktop
                              publishing software like Aldus PageMaker including
                              versions of Lorem Ipsum
                            </p>
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words
                            </p>
                          </div>
                          <div className="col-sm-3">
                            <p>
                              Contrary to popular belief, Lorem Ipsum is not
                              simply random text. It has roots in a piece of
                              classical Latin literature from 45 BC, making it
                              over 2000 years old. Richard McClintock, a Latin
                              professor at Hampden-Sydney College in Virginia,
                              looked up one of the more obscure Latin words
                            </p>
                            <p>
                              It is a long established fact that a reader will
                              be distracted by the readable content of a page
                              when looking at its layout. The point of using
                              Lorem Ipsum is that it has a more-or-less normal
                              distribution of letters, as opposed to using
                              &apos;Content here, content here&apos;, making it
                              look like readable English. Many desktop
                              publishing packages and web page editors.
                            </p>
                            <p>
                              At vero eos et accusamus et iusto odio dignissimos
                              ducimus qui blanditiis praesentium voluptatum
                              deleniti atque corrupti quos dolores et quas
                              molestias excepturi sint occaecati cupiditate non
                              provident, similique sunt in culpa qui officia
                              deserunt mollitia animi, id est laborum et dolorum
                              fuga.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Scrollbars>
                </div>
              </div>
            </div>
          </div>
          {/* /Scroll */}
        </div>
      </div>
    </div>
  );
};

export default Scrollbar;
