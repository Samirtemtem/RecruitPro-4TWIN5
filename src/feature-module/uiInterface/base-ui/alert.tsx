import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Alert = () => {
  const MySwal = withReactContent(Swal);

  const showAlert = (config: any) => {
    MySwal.fire(config);
  };

  const handleBasicAlert = () => {
    showAlert({
      text: "Any fool can use a computer",
      confirmButtonText: "OK",
    });
  };

  const handleWithTitle = () => {
    showAlert({
      title: "The Internet?",
      text: "That thing is still around?",
      confirmButtonText: "OK",
    });
  };

  const handleFooterAlert = () => {
    showAlert({
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<p>Why do I have this issue?</p>",
    });
  };

  const handleButtonClick = (position: any) => {
    displayAlert(position);
  };

  const displayAlert = (position: any) => {
    MySwal.fire({
      text: `Your work has been saved`,
      position: position,
      showConfirmButton: false,
    });
  };


  const showAlert1 = (title: any) => {
    MySwal.fire({
      title: title,
      text: "You clicked the button!",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  };

  const initialTime = 1600;
  const endTime = 700;

  const showCustomTimerAlert = () => {
    MySwal.fire({
      title: "Auto Close Alert",
      text: "This alert will close automatically!",
      confirmButtonText: "OK",
      showConfirmButton: false,
      timer: initialTime,
      didOpen: () => {
        const updateTimer = () => {
          const timerLeft = MySwal.getTimerLeft();
          if (timerLeft !== null && timerLeft !== undefined) {
            MySwal.getTimerLeft(); // Refresh the timer to trigger the update

            if (timerLeft <= endTime) {
              clearInterval(timerInterval);
            }
          }
        };

        const timerInterval = setInterval(updateTimer, 100);
      },
      willClose: () => {
        MySwal.fire({
          title: "OK Button Clicked",
          icon: "success",
          confirmButtonText: "OK",
        });
      },
    });
  };

  const showClickOutsideAlert = () => {
    MySwal.fire({
      title: "Click Outside Alert",
      text: "Try clicking outside the modal!",
      confirmButtonText: "OK",
    });
  };

  const showQuestionAlert = () => {
    MySwal.fire({
      title: "Question 1",
      html: '<p>Chaining swal2 modals is easy</p><input id="swal-input1" class="swal2-input">',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: '<span style="display: flex; align-items: center;">Next <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></span>',
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const answer1 = (document.getElementById("swal-input1") as HTMLInputElement)?.value;
        showQuestion2Alert(answer1);
      }
    });
  };

  const showQuestion2Alert = (answer1: any) => {
    MySwal.fire({
      title: "Question 2",
      html: `<p>Your answer from Question 1: <strong>${answer1}</strong></p><input id="swal-input2" class="swal2-input" placeholder="">`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: '<span style="display: flex; align-items: center;">Next <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></span>',
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const answer2 = (document.getElementById("swal-input2") as HTMLInputElement)?.value;
        showQuestion3Alert(answer1, answer2);
      }
    });
  };

  const showQuestion3Alert = (answer1: any, answer2: any) => {
    MySwal.fire({
      title: "Question 3",
      html: `<p>Your answers from Questions 1 and 2: <strong>${answer1}</strong>, <strong>${answer2}</strong></p><input id="swal-input3" class="swal2-input" placeholder="">`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: '<span style="display: flex; align-items: center;">Next <i class="fas fa-arrow-right" style="margin-left: 5px;"></i></span>',
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const answer3 = (document.getElementById("swal-input3") as HTMLInputElement)?.value;
        MySwal.fire({
          title: "All Done",
          text: `Your answers: ["${answer1}", "${answer2}", "${answer3}"]`,
          confirmButtonText: "Lovely!",
        });
      }
    });
  };

  const showConfirmationAlert = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: "#00ff00",
      confirmButtonText: "Yes, delete it!",
      cancelButtonColor: "#ff0000",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        MySwal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          customClass: {
            confirmButton: "btn btn-success",
          },
          confirmButtonText: "OK",
        });
      } else {
        MySwal.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          customClass: {
            confirmButton: "btn btn-success",
          },
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content ">
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Sweetalerts</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Basic Examples</h4>
                </div>
                <div className="card-body">
                  <p>
                    SweetAlert automatically centers itself on the page and
                    looks great no matter if you are using a desktop computer,
                    mobile, or tablet. Its even highly customizable, as you can
                    see below!
                  </p>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    onClick={handleBasicAlert}
                  >
                    Basic
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    onClick={handleWithTitle}
                  >
                    With Title
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-primary mr-1 mb-1"
                    onClick={handleFooterAlert}
                  >
                    With Footer
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Position</h4>
                </div>
                <div className="card-body">
                  <p>
                    You can specify the position of your alert with{" "}
                    <code>
                      position : {"{"} top-start | top-end | bottom-start |
                      bottom-end {"}"}
                    </code>{" "}
                    in JS.
                  </p>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    onClick={() => handleButtonClick("top-start")}
                  >
                    Top Start
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    onClick={() => handleButtonClick("top-end")}
                  >
                    Top End
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    onClick={() => handleButtonClick("bottom-start")}
                  >
                    Bottom Start
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    onClick={() => handleButtonClick("bottom-end")}
                  >
                    Bottom End
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Timer</h4>
                </div>
                <div className="card-body">
                  <p>
                    Add a timer to your alert with <code>timer : 3000 </code> in
                    JS.
                  </p>
                  <button
                    className="btn btn-outline-danger mr-1 mb-1 me-1"
                    onClick={showCustomTimerAlert}
                  >
                    Timer
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Chaining modals</h4>
                </div>
                <div className="card-body">
                  <p>
                    Combine multiple modals. You can return an input value to
                    the next modal for chaining.
                  </p>
                  <button
                    className="btn btn-outline-success"
                    onClick={showQuestionAlert}
                  >
                    Chaining modals
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Alert Types</h4>
                </div>
                <div className="card-body">
                  <p>
                    Use various types of alerts like <code>success</code>,{" "}
                    <code>info</code>, <code>error</code>, <code>warning</code>,
                    and <code>question</code> in JS.
                  </p>
                  <button
                    className="btn btn-outline-info mr-1 mb-1 me-1"
                    onClick={() => showAlert1("info")}
                  >
                    Info
                  </button>
                  <button
                    className="btn btn-outline-danger mr-1 mb-1 me-1"
                    onClick={() => showAlert1("error")}
                  >
                    Error
                  </button>
                  <button
                    className="btn btn-outline-warning mr-1 mb-1 me-1"
                    onClick={() => showAlert1("warning")}
                  >
                    Warning
                  </button>
                  <button
                    className="btn btn-outline-success mr-1 mb-1 me-1"
                    onClick={() => showAlert1("success")}
                  >
                    Success
                  </button>
                  <button
                    className="btn btn-outline-question mr-1 mb-1 me-1"
                    onClick={() => showAlert1("question")}
                  >
                    Question
                  </button>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">RTL</h4>
                </div>
                <div className="card-body">
                  <p>
                    Display the confirm button on the right side in RTL (Right
                    To Left) mode by setting the{" "}
                    <code>confirmButtonText</code> option.
                  </p>
                  <button
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    onClick={showClickOutsideAlert}
                  >
                    Click Outside
                  </button>
                  <button
                    className="btn btn-outline-primary mr-1 mb-1 me-1"
                    onClick={showConfirmationAlert}
                  >
                    Confirmation Alert
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alert;
