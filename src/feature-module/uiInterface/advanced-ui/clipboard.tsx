import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import copy from "clipboard-copy";
import { all_routes } from "../../router/all_routes";

const ClipBoard: React.FC = () => {
  const inputCopyRef = useRef<HTMLInputElement>(null);
  const [isCopied, setIsCopied] = useState(false);
  const routes = all_routes;

  const handleCopy = () => {
    if (inputCopyRef.current) {
      copy(inputCopyRef.current.value);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const handleCut = () => {
    if (inputCopyRef.current) {
      copy(inputCopyRef.current.value);
      inputCopyRef.current.value = "";
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const textareaCopyRef = useRef<HTMLTextAreaElement>(null);
  const [isCopied1, setIsCopied1] = useState(false);

  const handleCopyTextArea = () => {
    if (textareaCopyRef.current) {
      copy(textareaCopyRef.current.value);
      setIsCopied1(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const handleCutTextArea = () => {
    if (textareaCopyRef.current) {
      copy(textareaCopyRef.current.value);
      textareaCopyRef.current.value = "";
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
  };

  const [isCopied2, setIsCopied2] = useState(false);
  const otpRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (otpRef.current && !otpRef.current.contains(event.target as Node)) {
        if (window.getSelection()?.toString() !== '') {
          window.getSelection()?.removeAllRanges();
        }
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleCopyOTP = () => {
    const otpValue = '22991';
    copy(otpValue);
    setIsCopied2(true);
  };

  const handleOtpClick = () => {
    if (window.getSelection()?.toString() !== '' && otpRef.current) {
      window.getSelection()?.removeAllRanges();
    }
  };

  const advancedParagraphRef = useRef<HTMLSpanElement>(null);
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const handleCopyLink = () => {
    if (advancedParagraphRef.current) {
      const linkToCopy = advancedParagraphRef.current.innerText;
      copy(linkToCopy);
      setCopiedLink(linkToCopy);
      clearSelection();
    }
  };

  const handleCopyHiddenCode = () => {
    const hiddenCode = '2291';
    copy(hiddenCode);
    setCopiedLink(null);
    clearSelection();
  };

  const clearSelection = () => {
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
    }
  };

  return (
    <div>
      <div className="page-wrapper cardhead">
        <div className="content">
          {/* Page Header */}
          <div className="page-header">
            <div className="row">
              <div className="col-sm-12">
                <h3 className="page-title">Clipboard</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to={routes.adminDashboard}>Dashboard</Link>
                  </li>
                  <li className="breadcrumb-item active">Clipboard</li>
                </ul>
              </div>
            </div>
          </div>
          {/* /Page Header */}
          <div className="row">
            {/* Drag Card */}
            <div className="col-md-12">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy from input</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard">
                    <form className="form-horizontal">
                      <input
                        type="text"
                        className={`form-control mb-4 ${isCopied ? "clipboardcopyedvalue" : ""}`}
                        id="input-copy"
                        defaultValue="http://www.admin-dashboard.com"
                        ref={inputCopyRef}
                      />
                      <button
                        className="mb-1 btn clip-btn btn-primary me-1"
                        type="button"
                        onClick={handleCopy}
                      >
                        <i className="far fa-copy" /> Copy from Input
                      </button>
                      <Link
                        onClick={handleCut}
                        className="mb-1 btn clip-btn btn-dark"
                        to="#"
                        data-clipboard-action="cut"
                        data-clipboard-target="#input-copy"
                      >
                        <i className="fas fa-cut" /> Cut from Input
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy from Text Area</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard">
                    <form className="form-horizontal">
                      <textarea
                        className={`form-control mb-4 ${isCopied1 ? "clipboardcopyedvalue" : ""}`}
                        rows={3}
                        id="textarea-copy"
                        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                        ref={textareaCopyRef}
                      />
                      <Link
                        className="mb-1 btn clip-btn btn-primary me-1"
                        to="#"
                        data-clipboard-action="copy"
                        data-clipboard-target="#textarea-copy"
                        onClick={handleCopyTextArea}
                      >
                        <i className="far fa-copy" /> Copy from Input
                      </Link>
                      <Link
                        className="mb-1 btn clip-btn btn-dark"
                        to="#"
                        data-clipboard-action="cut"
                        data-clipboard-target="#textarea-copy"
                        onClick={handleCutTextArea}
                      >
                        <i className="fas fa-cut" /> Cut from Input
                      </Link>
                    </form>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy Text from Paragraph</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard copy-txt">
                    <p className="otp-pass">
                      Here is your OTP{" "}
                      <span
                        id="paragraph-copy1"
                        className={isCopied2 ? 'orange-text' : ''}
                        ref={otpRef}
                        onClick={handleOtpClick}
                      >
                        22991
                      </span>
                      .
                    </p>
                    <p className="mb-4">Please do not share it to anyone</p>
                    <Link
                      className="mb-1 btn clip-btn btn-primary"
                      to="#"
                      data-clipboard-action="copy"
                      data-clipboard-target="#paragraph-copy1"
                      onClick={handleCopyOTP}
                    >
                      <i className="far fa-copy" /> Copy from Input
                    </Link>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">Copy Hidden Text (Advanced)</h5>
                </div>
                <div className="card-body">
                  <div className="clipboard copy-txt">
                    <p
                      className={`mb-4 ${copiedLink ? "clipboardcopyedvalue" : ""}`}
                    >
                      Link -&gt;{" "}
                      <span ref={advancedParagraphRef}>
                        {copiedLink || "http://www.example.com/example"}
                      </span>
                    </p>
                    <Link
                      className="mb-1 btn clip-btn btn-primary me-1"
                      to="#"
                      data-clipboard-action="copy"
                      data-clipboard-target="#advanced-paragraph"
                      onClick={handleCopyLink}
                    >
                      <i className="far fa-copy" /> Copy Link
                    </Link>
                    <Link
                      className={`mb-1 btn clip-btn btn-warning ${copiedLink ? "black-text" : ""}`}
                      to="#"
                      data-clipboard-action="copy"
                      data-clipboard-text={2291}
                      onClick={handleCopyHiddenCode}
                    >
                      <i className="far fa-copy" /> Copy Hidden Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* /Drag Card */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClipBoard;
