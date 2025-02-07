import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = () => {
  return (
    <>
      {/* Page Wrapper */}
      <div className="page-wrapper">
        <div className="content">
          <div className="page-header">
            <h4 className="page-title my-auto">Pagination</h4>
            <div>
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <Link to="#">Ui Elements</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Pagination
                </li>
              </ol>
            </div>
          </div>
          <div className="row">
            {/* Basic Pagination */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title"> Basic Pagination </h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation">
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Basic Pagination */}
            {/* Basic Pagination with Arrow */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Basic Pagination with Arrow</h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation">
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          <i className="fas fa-arrow-left-long me-2" />
                          Previous
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                          <i className="fas fa-arrow-right-long ms-2" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Basic Pagination with Arrow */}
            {/* Basic Pagination with Icons */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pagination With Icons</h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation">
                    <ul className="pagination mb-0">
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Previous"
                        >
                          <span aria-hidden="true">
                            <i className="fas fa-angle-left" />
                          </span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link"
                          to="#"
                          aria-label="Next"
                        >
                          <span aria-hidden="true">
                            <i className="fas fa-angle-right" />
                          </span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Basic Pagination with Icons */}
            {/* Pagination Sizing */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pagination Sizing</h5>
                </div>
                <div className="card-body d-flex flex-wrap justify-content-between gap-2">
                  <nav aria-label="...">
                    <ul className="pagination pagination-sm mb-0">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="...">
                    <ul className="pagination mb-0">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="...">
                    <ul className="pagination pagination-lg mb-0">
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">1</span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Pagination Sizing */}
            {/* Center & Right Aligned Pagination */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Center &amp; Right Aligned Pagination{" "}
                  </h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-center mb-3">
                      <li className="page-item disabled">
                        <Link to="#" className="page-link">Previous</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="Page navigation">
                    <ul className="pagination justify-content-end mb-0">
                      <li className="page-item disabled">
                        <Link to="#"className="page-link">Previous</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          3
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Center & Right Aligned Pagination */}
            {/* Active and Disabled States */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Active and Disabled States</h5>
                </div>
                <div className="card-body d-flex flex-wrap">
                  <nav aria-label="..." className="me-3">
                    <ul className="pagination  mb-3">
                      <li className="page-item disabled">
                        <Link to="#" className="page-link">Previous</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                  <nav aria-label="...">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <span className="page-link">Previous</span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <span className="page-link">2</span>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Active and Disabled States */}
            {/* Pagination Style 1 */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pagination Style 1</h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation" className="pagination-style-1">
                    <ul className="pagination mb-0">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-left align-middle" />
                          <i className="ri-arrow-left-s-line align-middle" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fas fa-ellipsis-h" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          21
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fas fa-angle-right align-middle" />
                          <i className="ri-arrow-right-s-line align-middle" />
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Pagination Style 1 */}
            {/* Pagination Style 2 */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pagination Style 2</h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation" className="pagination-style-2">
                    <ul className="pagination mb-0 flex-wrap">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fas fa-ellipsis-h" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          17
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link text-primary"
                          to="#"
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Pagination Style 2 */}
            {/* Pagination Style 3 */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pagination Style 3</h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation" className="pagination-style-3">
                    <ul className="pagination mb-0 flex-wrap">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fas fa-ellipsis-h" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          16
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link text-primary"
                          to="#"
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Pagination Style 3 */}
            {/* Pagination Style 4 */}
            <div className="col-xl-6">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Pagination Style 4</h5>
                </div>
                <div className="card-body">
                  <nav aria-label="Page navigation" className="pagination-style-4">
                    <ul className="pagination mb-0 flex-wrap">
                      <li className="page-item disabled">
                        <Link className="page-link" to="#">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item active">
                        <Link className="page-link" to="#">
                          1
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          <i className="fas fa-ellipsis-h" />
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          16
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">
                          17
                        </Link>
                      </li>
                      <li className="page-item">
                        <Link
                          className="page-link text-primary"
                          to="#"
                        >
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            {/* /Pagination Style 4 */}
          </div>
        </div>
      </div>
      {/* /Page Wrapper */}
    </>
  )
}

export default Pagination
