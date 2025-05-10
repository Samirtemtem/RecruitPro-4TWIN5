import { useEffect, useRef, useState, useContext } from "react";
import * as faceapi from "face-api.js";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { all_routes } from "../routing-module/router/all_routes";
import { AuthContext } from "../routing-module/AuthContext";

function Login() {
  const [tempAccount, setTempAccount] = useState(null);
  const [localUserStream, setLocalUserStream] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [faceApiLoaded, setFaceApiLoaded] = useState(false);
  const [loginResult, setLoginResult] = useState("PENDING");
  const [imageError, setImageError] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [counter, setCounter] = useState(5);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [labeledFaceDescriptors, setLabeledFaceDescriptors] = useState([]);
  const videoRef = useRef();
  const canvasRef = useRef();
  const faceApiIntervalRef = useRef();
  const videoWidth = 640;
  const videoHeight = 360;

  const location = useLocation();
  const navigate = useNavigate();
  const { updateProfileData, setRole, setUserId, setUser, setToken, token } = useContext(AuthContext);

  // Set tempAccount from location state
  useEffect(() => {
    console.log("Setting tempAccount from location state.");
    setTempAccount(location?.state?.account);
  }, [location]);

  // Load models and labeled images when tempAccount is set
  useEffect(() => {
    if (tempAccount) {
      console.log("tempAccount found, loading models...");
      loadModels()
        .then(async () => {
          console.log("Loading labeled images...");
          const descriptors = await loadLabeledImages();
          setLabeledFaceDescriptors(descriptors);
        })
        .then(() => {
          setModelsLoaded(true);
          console.log("Models loaded state updated.");
        })
        .catch((error) => {
          console.error("Error in model or image loading:", error);
          setImageError(true);
        });
    }
  }, [tempAccount]);

  // Handle countdown and user data storage on successful login
  useEffect(() => {
    if (loginResult === "SUCCESS") {
      console.log("Login successful, starting countdown...");
      const counterInterval = setInterval(() => {
        setCounter((prevCounter) => {
          const newCounter = prevCounter - 1;
          console.log("Counter:", newCounter);
          if (newCounter <= 0) {
            console.log("Counter reached zero, stopping video stream...");
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.srcObject = null;
            }
            localUserStream?.getTracks().forEach((track) => track.stop());
            clearInterval(counterInterval);
            clearInterval(faceApiIntervalRef.current);
            generateTokenAndSave();
          }
          return newCounter;
        });
      }, 1000);

      return () => clearInterval(counterInterval);
    }
  }, [loginResult, localUserStream]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (localUserStream) {
        localUserStream.getTracks().forEach((track) => track.stop());
      }
      if (faceApiIntervalRef.current) {
        clearInterval(faceApiIntervalRef.current);
      }
    };
  }, []);

  // Navigate after AuthContext is updated
  useEffect(() => {
  if (token && tempAccount?.role) {
    console.log("Token and role set, navigating to dashboard...", { role: tempAccount.role });
    switch (tempAccount.role) {
      case "ADMIN":
        navigate(all_routes.adminDashboard, { replace: true });
        break;
      case "CANDIDATE":
        navigate(all_routes.DashboardCandidate, { replace: true });
        break;
      case "HR-MANAGER":
        navigate(all_routes.DashboardRecruiter, { replace: true });
        break;
      case "TEAM-LEAD":
        navigate(all_routes.teamLeadDashboard, { replace: true });
        break;
      case "DEPARTMENT-MANAGER":
        navigate(all_routes.departmentManagerDashboard, { replace: true });
        break;
      default:
        console.warn("Unknown role, redirecting to home:", tempAccount.role);
        navigate("/", { replace: true });
        break;
    }
  }
}, [token, tempAccount?.role, navigate]);

  // Load face-api.js models
  const loadModels = async () => {
    console.log("Loading models...");
    const uri = "/models";
    try {
      await Promise.all([
        faceapi.nets.ssdMobilenetv1.loadFromUri(uri),
        faceapi.nets.faceLandmark68Net.loadFromUri(uri),
        faceapi.nets.faceRecognitionNet.loadFromUri(uri),
      ]);
      console.log("Models loaded successfully.");
    } catch (error) {
      console.error("Error loading models:", error);
      setImageError(true);
    }
  };

  // Start webcam stream
  const getLocalUserVideo = async () => {
    console.log("Getting local user video...");
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      console.error("Webcam not supported in this browser.");
      setLoginResult("FAILED");
      setApiError("Webcam not supported in this browser.");
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: true });
      console.log("Video stream obtained.");
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setLocalUserStream(stream);
    } catch (err) {
      console.error("Error obtaining video stream:", err);
      setLoginResult("FAILED");
      setApiError("Unable to access webcam. Please check permissions.");
    }
  };

  // Scan face and match against labeled descriptors
  const scanFace = async () => {
    console.log("Scanning face...");
    if (!canvasRef.current || !videoRef.current) return;
    faceapi.matchDimensions(canvasRef.current, videoRef.current);
    let failedAttempts = 0;
    const maxFailedAttempts = 10;

    const faceApiInterval = setInterval(async () => {
      try {
        const detections = await faceapi
          .detectAllFaces(videoRef.current)
          .withFaceLandmarks()
          .withFaceDescriptors();

        if (!detections.length) {
          failedAttempts++;
          if (failedAttempts >= maxFailedAttempts) {
            setLoginResult("FAILED");
          }
          return;
        }

        const resizedDetections = faceapi.resizeResults(detections, {
          width: videoWidth,
          height: videoHeight,
        });

        const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors, 0.45);
        const results = resizedDetections.map((d) => {
          if (d.descriptor) {
            return faceMatcher.findBestMatch(d.descriptor);
          }
          return null;
        }).filter(Boolean);

        if (!canvasRef.current) return;

        canvasRef.current
          .getContext("2d")
          .clearRect(0, 0, videoWidth, videoHeight);

        faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
        faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

        if (results.length > 0 && tempAccount?.firstName === results[0].label) {
          console.log("Face recognized successfully.");
          setLoginResult("SUCCESS");
          clearInterval(faceApiInterval);
        } else {
          failedAttempts++;
          if (failedAttempts >= maxFailedAttempts) {
            console.log("Face recognition failed.");
            setLoginResult("FAILED");
          }
        }

        if (!faceApiLoaded) {
          setFaceApiLoaded(true);
        }
      } catch (error) {
        console.error("Error during face scanning:", error);
        setLoginResult("FAILED");
      }
    }, 1000 / 5); // 5 FPS
    faceApiIntervalRef.current = faceApiInterval;
  };

  // Load labeled face descriptors from reference image
  async function loadLabeledImages() {
    console.log("Loading labeled images...");
    if (!tempAccount) {
      console.error("No tempAccount provided.");
      setImageError(true);
      return [];
    }

    if (!tempAccount.image) {
      console.error("No reference image provided for tempAccount.");
      setImageError(true);
      return [];
    }

    const descriptions = [];
    const imagePaths = [tempAccount.image];
    for (const imgPath of imagePaths) {
      try {
        const img = await faceapi.fetchImage(imgPath);
        console.log("Image fetched successfully:", imgPath);
        const detections = await faceapi
          .detectSingleFace(img)
          .withFaceLandmarks()
          .withFaceDescriptor();
        if (detections) {
          descriptions.push(detections.descriptor);
        } else {
          console.warn(`No face detected in image: ${imgPath}`);
        }
      } catch (error) {
        console.error(`Error loading image ${imgPath}:`, error);
        setImageError(true);
      }
    }

    const label = tempAccount.firstName || tempAccount.lastName || "Unknown User";
    if (typeof label !== "string" || label.trim() === "") {
      console.error("Invalid label: must be a non-empty string.");
      setImageError(true);
      return [];
    }

    console.log("Labeled images loaded:", label);
    return descriptions.length > 0
      ? [new faceapi.LabeledFaceDescriptors(label, descriptions)]
      : [];
  }

  // Store user data and update AuthContext
  const generateTokenAndSave = async () => {
    console.log("Authenticating user with API...");
    setIsAuthenticating(true);
    try {
      if (!tempAccount || !tempAccount.email) {
        throw new Error("Please provide a valid email address.");
      }

      if (!tempAccount._id) {
        console.warn("No user ID provided in tempAccount, generating temporary ID.");
      }

      const response = await fetch("http://localhost:5000/api/auth/facelogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: tempAccount.email }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || `API authentication failed: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("API response:", data);

      const token = data.token || data.accessToken || data.authToken;
      if (!token) {
        throw new Error("No token provided in API response.");
      }

      const userId = tempAccount._id || data.userId || data.user?.id || `temp-${Date.now()}`;
      const userRole = tempAccount.role || data.role || data.user?.role || "ADMIN";

      const userObject = {
        id: userId,
        _id: userId,
        firstName: tempAccount.firstName || "",
        lastName: tempAccount.lastName || "",
        email: tempAccount.email || "",
        role: userRole,
        department: tempAccount.department || "",
        phoneNumber: tempAccount.phoneNumber || "",
        is2FAEnabled: tempAccount.is2FAEnabled || false,
        image: tempAccount.image || "",
        createDate: tempAccount.createDate || new Date().toISOString(),
        lastLogin: new Date().toISOString(),
        isVerified: tempAccount.isVerified || false,
        team: tempAccount.team || "",
      };

      // Store in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("userId", userId);
      localStorage.setItem("user", JSON.stringify(userObject));

      // Update AuthContext
      setToken(token); // Explicitly set token
      setRole(userRole);
      setUserId(userId);
      setUser(userObject);

      // Profile data
      const profileData = {
        id: userId,
        _id: userId,
        firstName: userObject.firstName,
        lastName: userObject.lastName,
        email: userObject.email,
        role: userRole,
      };

      localStorage.setItem("profileData", JSON.stringify(profileData));
      updateProfileData(profileData);
      console.log("Profile data stored successfully");
      console.log("AuthContext updated:", { token, userId, userRole });
    } catch (error) {
      console.error("Error during API authentication:", error.message);
      setApiError(error.message);
      setLoginResult("FAILED");
    } finally {
      setIsAuthenticating(false);
    }
  };

  // Redirect to home if no account state is provided
  if (!location?.state) {
    console.log("No account state provided, redirecting to home.");
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div className="container">
      <div className="content">
        {imageError && (
          <h2 className="error">
            <span>Failed to load reference image or models. Please try again or contact support.</span>
          </h2>
        )}
        {apiError && (
          <h2 className="error">
            <span>{apiError.includes("email") ? "Please provide a valid email address." : apiError}</span>
          </h2>
        )}
        {isAuthenticating && (
          <h2 className="loading">
            <span>Authenticating...</span>
          </h2>
        )}
        {!localUserStream && !modelsLoaded && !imageError && !isAuthenticating && (
          <h2 className="loading">
            <span>Processing your login request...</span>
            <span className="loading-subtext">Preparing facial recognition models...</span>
          </h2>
        )}
        {!localUserStream && modelsLoaded && !imageError && !isAuthenticating && (
          <h2 className="prompt">
            <span>Position your face in front of the camera.</span>
          </h2>
        )}
        {localUserStream && loginResult === "SUCCESS" && !isAuthenticating && (
          <h2 className="success">
            <span>Your face has been successfully recognized!</span>
            <span>Please hold still for {counter} more seconds...</span>
          </h2>
        )}
        {localUserStream && loginResult === "FAILED" && !apiError && !isAuthenticating && (
          <h2 className="error">
            <span>Unable to recognize your face. Please try again!</span>
          </h2>
        )}
        {loginResult === "FAILED" && !isAuthenticating && (
          <p className="unauthorized">Unauthorized access!</p>
        )}
        {localUserStream && !faceApiLoaded && loginResult === "PENDING" && !isAuthenticating && (
          <h2 className="scanning">
            <span>Scanning your face...</span>
          </h2>
        )}
        <div className="video-container">
          <div className="video-wrapper">
            <video
              muted
              autoPlay
              ref={videoRef}
              height={videoHeight}
              width={videoWidth}
              onPlay={scanFace}
              className="video"
              style={{
                display: localUserStream ? "block" : "none",
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                display: localUserStream ? "block" : "none",
              }}
            />
          </div>
          {!localUserStream && (
            <>
              {modelsLoaded ? (
                <>
                  <img
                    alt="Loading models"
                    src="./images/face.gif"
                    className="loading-image"
                  />
                  <button
                    onClick={getLocalUserVideo}
                    type="button"
                    className="button primary"
                  >
                    Start Face Scan
                  </button>
                </>
              ) : (
                <>
                  <img
                    alt="Loading models"
                    src="./images/720.svg"
                    className="loading-image"
                  />
                  <button
                    disabled
                    type="button"
                    className="button disabled"
                  >
                    Please wait while models are loading...
                  </button>
                </>
              )}
            </>
          )}
        </div>
        {loginResult === "FAILED" && (
          <div
            onClick={() => {
              console.log("Retrying face recognition...");
              if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.srcObject = null;
              }
              localUserStream?.getTracks().forEach((track) => track.stop());
              clearInterval(faceApiIntervalRef.current);
              localStorage.removeItem("faceAuth");
              setLocalUserStream(null);
              setLoginResult("PENDING");
              setFaceApiLoaded(false);
              setApiError(null);
              setCounter(5);
              navigate("/");
            }}
            className="retry-button"
          >
            <span>Retry</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="retry-icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
          </div>
        )}
      </div>

      <style jsx>{`
        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: #f9fafb;
          padding: 20px;
          box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.1);
        }

        .content {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 24px;
          max-width: 720px;
          width: 100%;
          margin: auto;
          padding: 16px;
          border-radius: 10px;
          background: white;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          font-family: 'Poppins', sans-serif;
          color: #1f2937;
          font-size: 1.5rem;
        }

        .loading-subtext {
          color: #6366f1;
          font-weight: 600;
        }

        .prompt, .success, .scanning {
          font-size: 2rem;
        }

        .success {
          font-weight: 800;
          color: #4caf50;
        }

        .error {
          color: #b91c1c;
          font-weight: 800;
          font-size: 2rem;
          margin-top: 16px;
        }

        .unauthorized {
          color: #dc2626;
          font-weight: bold;
          font-size: 1.25rem;
        }

        .video-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          position: relative;
          border-radius: 10px;
          overflow: hidden;
        }

        .video-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .video {
          object-fit: cover;
          height: 360px;
          border-radius: 10px;
        }

        .loading-image {
          cursor: pointer;
          margin: 32px auto;
          object-fit: cover;
          height: 300px;
          width: 800px;
          border-radius: 10px;
          display: block;
        }

        .button {
          justify-content: center;
          width: 100%;
          padding: 10px;
          font-size: 1rem;
          border-radius: 0.375rem;
          border: 1px solid #e5e7eb;
          display: inline-flex;
          align-items: center;
          transition: background-color 0.2s;
          margin-top: 16px;
          background: #6366f1;
          color: white;
        }

        .button.primary:hover {
          background-color: #4f46e5;
        }

        .button.disabled {
          background-color: white;
          color: #1f2937;
          cursor: not-allowed;
        }

        .retry-button {
          display: flex;
          gap: 8px;
          margin: 20px 0;
          cursor: pointer;
          padding: 10px 16px;
          border-radius: 9999px;
          background: linear-gradient(to right, #fca5a1, #f87171);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.2s;
        }

        .retry-button:hover {
          transform: scale(1.05);
        }

        .retry-icon {
          width: 24px;
          height: 24px;
        }
      `}</style>
    </div>
  );
}

export default Login;