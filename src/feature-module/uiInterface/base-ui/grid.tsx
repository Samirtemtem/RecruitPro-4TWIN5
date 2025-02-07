import React from "react";
import ImageWithBasePath from "../../../core/common/imageWithBasePath";

const Grid = () => {
  return (
    <div className="page-wrapper">
      <div className="content">
        <div className="page-header">
          <div className="page-title">
            <h4>Grid</h4>
          </div>
        </div>
        <div className="row">
          {/* Grid options */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Grid options</h5>
                <p className="mt-1 f-m-light" />
                Bootstrap grid system allow all six breakpoints, and any
                breakpoints you can customize.
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th />
                        <th className="text-center">
                          <p>Extra small</p>
                          <small>&lt;576px</small>
                        </th>
                        <th className="text-center">
                          <p>Small</p>
                          <small>≥576px</small>
                        </th>
                        <th className="text-center">
                          <p>Medium</p>
                          <small>≥768px</small>
                        </th>
                        <th className="text-center">
                          <p>Large</p>
                          <small>≥992px</small>
                        </th>
                        <th className="text-center">
                          <p>Extra large</p>
                          <small>≥1200px</small>
                        </th>
                        <th className="text-center">
                          <p>Extra extra large</p>
                          <small className="digits">≥1400px</small>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Grid behavior
                        </th>
                        <td>Horizontal at all times</td>
                        <td colSpan={5}>
                          Collapsed to start, horizontal above breakpoints
                        </td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Max container width
                        </th>
                        <td>None (auto)</td>
                        <td>540px</td>
                        <td>720px</td>
                        <td>960px</td>
                        <td>1140px</td>
                        <td>1320px</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Class prefix
                        </th>
                        <td>
                          <code>.col-</code>
                        </td>
                        <td>
                          <code>.col-sm-</code>
                        </td>
                        <td>
                          <code>.col-md-</code>
                        </td>
                        <td>
                          <code>.col-lg-</code>
                        </td>
                        <td>
                          <code>.col-xl-</code>
                        </td>
                        <td>
                          <code>.col-xxl-</code>
                        </td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          # of columns
                        </th>
                        <td colSpan={6}>12</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Gutter width
                        </th>
                        <td colSpan={6}>1.5rem (.75rem on left and right)</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Nestable
                        </th>
                        <td colSpan={6}>Yes</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Offsets
                        </th>
                        <td colSpan={6}>Yes</td>
                      </tr>
                      <tr>
                        <th className="text-nowrap" scope="row">
                          Column ordering
                        </th>
                        <td colSpan={6}>Yes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          {/* /Grid options */}
          {/* Grid for column */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Grid for column</h5>
                <p className="mt-1 f-m-light">
                  You may use predefined grid classes. Using{" "}
                  <code>.col-md-* </code>you can set the grid system.
                </p>
              </div>
              <div className="card-body grid-showcase">
                <div className="row">
                  <div className="col-md-1 text-center">
                    <span>col-md-1</span>
                  </div>
                  <div className="col-md-2 text-center">
                    <span>col-md-2</span>
                  </div>
                  <div className="col-md-2 text-center">
                    <span>col-md-2</span>
                  </div>
                  <div className="col-md-3 text-center">
                    <span>col-md-3</span>
                  </div>
                  <div className="col-md-4 text-center">
                    <span>col-md-4</span>
                  </div>
                  <div className="col-md-5 text-center">
                    <span>col-md-5</span>
                  </div>
                  <div className="col-md-7 text-center">
                    <span>col-md-7</span>
                  </div>
                  <div className="col-md-6 text-center">
                    <span>col-md-6</span>
                  </div>
                  <div className="col-md-6 text-center">
                    <span>col-md-6</span>
                  </div>
                  <div className="col-md-8 text-center">
                    <span>col-md-8</span>
                  </div>
                  <div className="col-md-4 text-center">
                    <span>col-md-4</span>
                  </div>
                  <div className="col-md-9 text-center">
                    <span>col-md-9</span>
                  </div>
                  <div className="col-md-3 text-center">
                    <span>col-md-3</span>
                  </div>
                  <div className="col-md-10 text-center">
                    <span>col-md-10</span>
                  </div>
                  <div className="col-md-2 text-center">
                    <span>col-md-2</span>
                  </div>
                  <div className="col-md-12 text-center">
                    <span>col-md-12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Grid for column */}
          {/* Vertical alignment */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Vertical alignment</h5>
                <p className="mt-1 f-m-light">
                  You can use the <code>align-items-*</code> class to set the
                  vertical alignment.
                </p>
              </div>
              <div className="card-body grid-showcase mb-0">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="row grid-vertical align-items-start m-1 g-2 bg-light">
                      <div className="col-6">
                        <span className="bg-white custom-react-clr">one column</span>
                      </div>
                      <div className="col-6">
                        <span className="bg-white custom-react-clr">two column</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="row grid-vertical align-items-center m-1 g-2 bg-light">
                      <div className="col-6">
                        <span className="bg-white custom-react-clr">one column</span>
                      </div>
                      <div className="col-6">
                        <span className="bg-white custom-react-clr">two column</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="row grid-vertical align-items-end m-1 g-2 bg-light">
                      <div className="col-6">
                        <span className="bg-white custom-react-clr">one column</span>
                      </div>
                      <div className="col-6">
                        <span className="bg-white custom-react-clr">two column</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Vertical alignment */}
          {/* Horizontal alignment */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Horizontal alignment</h5>
                <p className="mt-1 f-m-light">
                  You can use the <code>justify-content-*</code> class to set
                  the horizontal alignment.
                </p>
              </div>
              <div className="card-body grid-showcase grid-align">
                <div className="row justify-content-start bg-light">
                  <div className="col-5">
                    <span className="bg-white text-dark">One column</span>
                  </div>
                  <div className="col-5">
                    <span className="bg-white text-dark">Two column</span>
                  </div>
                </div>
                <div className="row justify-content-center bg-light">
                  <div className="col-5">
                    <span className="bg-white text-dark">One column</span>
                  </div>
                  <div className="col-5">
                    <span className="bg-white text-dark">Two column</span>
                  </div>
                </div>
                <div className="row justify-content-end bg-light">
                  <div className="col-5">
                    <span className="bg-white text-dark">One column</span>
                  </div>
                  <div className="col-5">
                    <span className="bg-white text-dark">Two column</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Horizontal alignment */}
          {/* Nesting */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Nesting</h5>
                <p className="mt-1 f-m-light">
                  To nest your content with the default grid, add a new
                  <code>.row</code> and set of <code>.col-sm-*</code> columns
                  within an existing <code>.col-sm-*</code> column.
                </p>
              </div>
              <div className="card-body grid-showcase">
                <div className="row g-3">
                  <div className="col-3">
                    <span>Level 1: .col-3</span>
                  </div>
                  <div className="col-9">
                    <div className="grid-wrapper pb-0">
                      <div className="row g-2">
                        <div className="col-5">
                          <span className="border border-2">
                            Level 2: .col-5
                          </span>
                        </div>
                        <div className="col-7">
                          <span className="border border-2">
                            Level 2: .col-7
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="grid-wrapper pb-0">
                      <div className="row g-2">
                        <div className="col-sm-2 col-4">
                          <span className="border border-2">
                            Level 1: .col-2
                          </span>
                        </div>
                        <div className="col-sm-10 col-8">
                          <span className="border border-2">
                            Level 1: .col-10
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4">
                    <span>Level 2: .col-4</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Nesting */}
          {/* Order */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Order</h5>
                <p className="mt-1 f-m-light">
                  Using <code>.order </code>class, you can set the order
                  position.
                </p>
              </div>
              <div className="card-body grid-showcase">
                <div className="row g-2">
                  <div className="col-3 order-3">
                    <span>First Item (order-3)</span>
                  </div>
                  <div className="col-5 order-first">
                    <span>Second Item (order-first)</span>
                  </div>
                  <div className="col-4 order-last">
                    <span>Third Item (order-last)</span>
                  </div>
                  <div className="col-3 order-2">
                    <span>Fourth Item (order-2)</span>
                  </div>
                  <div className="col-sm-2 col-4 order-5">
                    <span>fifth Item (order-5)</span>
                  </div>
                  <div className="col-sm-6 col-4 order-4">
                    <span>sixth Item (order-4)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Order */}
          {/* Offset */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title">Offset</h5>
                <p className="mt-1 f-m-light">
                  You can offset the grid column using <code>.offset-*</code>{" "}
                  grid class.
                </p>
              </div>
              <div className="card-body grid-showcase">
                <div className="row g-2">
                  <div className="col-sm-5 col-4 offset-sm-3 offset-2">
                    <span>col-5 offset-3</span>
                  </div>
                  <div className="col-sm-2 col-4 offset-sm-2 offset-1">
                    <span>col-2 offset-2</span>
                  </div>
                  <div className="col-sm-4 col-5 offset-2">
                    <span>col-4 offset-2</span>
                  </div>
                  <div className="col-sm-3 col-4 offset-sm-2 offset-1">
                    <span>col-3 offset-2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Offset */}
          {/* Column wrapping */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Column wrapping</div>
              </div>
              <div className="card-body">
                <div className="grid-showcase">
                  <div className="row">
                    <div className="col-9">
                      <span>.col-9</span>
                    </div>
                    <div className="col-4">
                      <span>
                        .col-4
                        <br />
                        Since 9 + 4 = 13 &gt; 12, this 4-column-wide div gets
                        wrapped onto a new line as one contiguous unit.
                      </span>
                    </div>
                    <div className="col-6">
                      <span>
                        .col-6
                        <br />
                        Subsequent columns continue along the new line.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Column wrapping */}
          {/* Margin utilities */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Margin utilities</div>
              </div>
              <div className="card-body">
                <p className="mb-4">
                  With the move to flexbox in v4, you can use margin utilities
                  like <span className="text-danger">.me-auto</span>to force
                  sibling columns away from one another.
                </p>
                <div className="grid-showcase">
                  <div className="row mb-3">
                    <div className="col-md-4">
                      <span>.col-md-4</span>
                    </div>
                    <div className="col-md-4 ms-auto">
                      <span>.col-md-4 .ms-auto</span>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-md-3 ms-md-auto">
                      <span>.col-md-3 .ms-md-auto</span>
                    </div>
                    <div className="col-md-3 ms-md-auto">
                      <span>.col-md-3 .ms-md-auto</span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-auto me-auto">
                      <span>.col-auto .me-auto</span>
                    </div>
                    <div className="col-auto">
                      <span>.col-auto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Margin utilities */}
          {/* Column breaks */}
          <div className="col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">Column breaks</div>
              </div>
              <div className="card-body">
                <div className="grid-showcase mb-3">
                  <div className="row">
                    <div className="col-6 col-sm-3">
                      <span>.col-6 .col-sm-3</span>
                    </div>
                    <div className="col-6 col-sm-3">
                      <span>.col-6 .col-sm-3</span>
                    </div>
                    {/* Force next columns to break to new line */}
                    <div className="w-100" />
                    <div className="col-6 col-sm-3">
                      <span>.col-6 .col-sm-3</span>
                    </div>
                    <div className="col-6 col-sm-3">
                      <span>.col-6 .col-sm-3</span>
                    </div>
                  </div>
                </div>
                <p>
                  You may also apply this break at specific breakpoints with our{" "}
                  <span className="text-danger">
                    responsive display utilities.
                  </span>
                </p>
                <div className="grid-showcase">
                  <div className="row">
                    <div className="col-6 col-sm-4">
                      <span>.col-6 .col-sm-4</span>
                    </div>
                    <div className="col-6 col-sm-4">
                      <span>.col-6 .col-sm-4</span>
                    </div>
                    <div className="w-100 d-none d-md-block" />
                    <div className="col-6 col-sm-4">
                      <span>.col-6 .col-sm-4</span>
                    </div>
                    <div className="col-6 col-sm-4">
                      <span>.col-6 .col-sm-4</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Column breaks */}
          {/* Standalone column classes */}
          <div className="col-xl-12">
            <div className="card ">
              <div className="card-header">
                <div className="card-title">Standalone column classes</div>
              </div>
              <div className="card-body">
                <p>
                  The <span className="text-danger">.col-*</span> classes can
                  also be used outside a
                  <span className="text-danger">.row</span> to give an element a
                  specific width. Whenever column classes are used as non direct
                  children of a row,the paddings are omitted.
                </p>
                <div className="grid-showcase">
                  <div className="col-3">
                    <span>.col-3: width of 25%</span>
                  </div>
                  <div className="col-sm-9">
                    <span>.col-sm-9: width of 75% above sm breakpoint</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /Standalone column classes */}
          {/* Wrap */}
          <div className="col-lg-6">
            <div className="card">
              <div className="card-body">
                <p>
                  The classes can be used together with utilities to create
                  responsive floated images. Make sure to wrap the content in a{" "}
                  <span className="text-danger">.clearfix</span> wrapper to
                  clear the float if the text is shorter.
                </p>
                <div className="clearfix">
                  <ImageWithBasePath
                    src="assets/img/supplier/edit-supplier.jpg"
                    className="bd-placeholder-img col-md-6 float-md-end mb-3 ms-md-3 rounded img-fluid"
                    alt="..."
                  />
                  <p>
                    A paragraph of placeholder text. We&apos;re using it here to
                    show the use of the clearfix class. We&apos;re adding quite
                    a few meaningless phrases here to demonstrate how the
                    columns interact here with the floated image.
                  </p>
                  <p>
                    As you can see the paragraphs gracefully wrap around the
                    floated image. Now imagine how this would look with some
                    actual content in here, rather than just this boring
                    placeholder text that goes on and on, but actually conveys
                    no tangible information at. It simply takes up space and
                    should not really be read.{" "}
                  </p>
                  <p>
                    And yet, here you are, still persevering in reading this
                    placeholder text, hoping for some more insights, or some
                    hidden easter egg of content. A joke, perhaps.
                    Unfortunately, there&apos;s none of that here.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Wrap */}
        </div>
      </div>
    </div>
  );
};

export default Grid;
