import React from 'react'

const Video = () => {
    return (
        <div>
            {/* Page Wrapper */}
            <div className="page-wrapper">
                <div className="content">
                    <div className="page-header">
                        <div className="page-title">
                            <h4>Video</h4>
                        </div>
                    </div>
                    <div className="row">
                        {/* Responsive embed video 21:9 */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Responsive embed video 21:9</h5>
                                    <p className="sub-header">
                                        Use class <code>.ratio-21x9</code>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div className="ratio ratio-21x9">
                                    <iframe
  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
  title="YouTube Video"
/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Responsive embed video 21:9 */}
                        {/* Responsive embed video 16:9 */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Responsive embed video 16:9</h5>
                                    <p className="sub-header">
                                        Use class <code>.ratio-16x9</code>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div className="ratio ratio-16x9">
                                    <iframe
  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
  title="YouTube Video"
/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Responsive embed video 16:9 */}
                    </div>
                    <div className="row">
                        {/* Responsive embed video 4:3 */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Responsive embed video 4:3</h5>
                                    <p className="sub-header">
                                        Use class <code>.ratio-4x3</code>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div className="ratio ratio-4x3">
                                    <iframe
  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
  title="YouTube Video"
/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Responsive embed video 4:3 */}
                        {/* Responsive embed video 1:1 */}
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-header justify-content-between">
                                    <h5 className="card-title">Responsive embed video 1:1</h5>
                                    <p className="sub-header">
                                        Use class <code>.ratio-1x1</code>
                                    </p>
                                </div>
                                <div className="card-body">
                                    <div className="ratio ratio-1x1">
                                    <iframe
  src="https://www.youtube.com/embed/6bzTrChjEdc?autohide=0&showinfo=0&controls=0"
  title="YouTube Video"
/>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /Responsive embed video 1:1 */}
                    </div>
                </div>
            </div>
            {/* /Page Wrapper */}
        </div>
    )
}

export default Video
