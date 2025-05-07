/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState, useContext } from "react";
import * as faceapi from "face-api.js";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { all_routes } from "../routing-module/router/all_routes";
import axios from "axios";
import { AuthContext } from "../routing-module/AuthContext";

function Login() {
  const [tempAccount, setTempAccount] = useState("");
  const [localUserStream, setLocalUserStream] = useState(null);
  const [modelsLoaded, setModelsLoaded] = useState(false);
  const [faceApiLoaded, setFaceApiLoaded] = useState(false);
  const [loginResult, setLoginResult] = useState("PENDING");
  const [imageError, setImageError] = useState(false);
  const [counter, setCounter] = useState(5);
  const [labeledFaceDescriptors, setLabeledFaceDescriptors] = useState({});
  const videoRef = useRef();
  const canvasRef = useRef();
  const faceApiIntervalRef = useRef();
  const videoWidth = 640;
  const videoHeight = 360;

  const location = useLocation();
  const navigate = useNavigate();
  const { updateProfileData, setRole, setUserId, setUser } = useContext(AuthContext);

  // Redirect to home if no account state is provided
  if (!location?.state) {
    console.log("No account state provided, redirecting to home.");
    return <Navigate to="/" replace={true} />;
  }

  const loadModels = async () => {
    console.log("Loading models...");
    const uri = "/models";
    await faceapi.nets.ssdMobilenetv1.loadFromUri(uri);
    await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
    await faceapi.nets.faceRecognitionNet.loadFromUri(uri);
    console.log("Models loaded successfully.");
  };

  useEffect(() => {
    console.log("Setting tempAccount from location state.");
    setTempAccount(location?.state?.account);
  }, []);

  useEffect(() => {
    if (tempAccount) {
      console.log("tempAccount found, loading models...");
      loadModels()
        .then(async () => {
          console.log("Loading labeled images...");
          const labeledFaceDescriptors = await loadLabeledImages();
          setLabeledFaceDescriptors(labeledFaceDescriptors);
        })
        .then(() => {
          setModelsLoaded(true);
          console.log("Models loaded state updated.");
        });
    }
  }, [tempAccount]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (loginResult === "SUCCESS") {
      console.log("Login successful, starting countdown...");
      const counterInterval = setInterval(() => {
        setCounter((prevCounter) => {
          console.log("Counter:", prevCounter);
          return prevCounter - 1;
        });
      }, 1000);

      if (counter === 0) {
        console.log("Counter reached zero, stopping video stream and generating token...");
        videoRef.current.pause();
        videoRef.current.srcObject = null;
        localUserStream?.getTracks().forEach((track) => {
          track.stop();
        });
        clearInterval(counterInterval);
        clearInterval(faceApiIntervalRef.current);

        // Generate token and save user data
        generateTokenAndSave();
      }

      return () => clearInterval(counterInterval);
    }
  }, [loginResult, counter, localUserStream]);

  const getLocalUserVideo = async () => {
    console.log("Getting local user video...");
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        console.log("Video stream obtained.");
        videoRef.current.srcObject = stream;
        setLocalUserStream(stream);
      })
      .catch((err) => {
        console.error("Error obtaining video stream:", err);
      });
  };

  const scanFace = async () => {
    console.log("Scanning face...");
    faceapi.matchDimensions(canvasRef.current, videoRef.current);
    const faceApiInterval = setInterval(async () => {
      const detections = await faceapi
        .detectAllFaces(videoRef.current)
        .withFaceLandmarks()
        .withFaceDescriptors();

      const resizedDetections = faceapi.resizeResults(detections, {
        width: videoWidth,
        height: videoHeight,
      });

      const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

      const results = resizedDetections.map((d) => {
        if (d.descriptor) {
          const match = faceMatcher.findBestMatch(d.descriptor);
          return match;
        }
        return null;
      }).filter(Boolean);

      if (!canvasRef.current) {
        console.log("Canvas ref is not defined.");
        return;
      }

      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);

      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

      if (results.length > 0 && tempAccount.firstName === results[0].label) {
        console.log("Face recognized successfully.");
        setLoginResult("SUCCESS");
      } else {
        console.log("Face recognition failed.");
        setLoginResult("FAILED");
      }

      if (!faceApiLoaded) {
        setFaceApiLoaded(true);
        console.log("Face API loaded state updated.");
      }
    }, 1000 / 15);
    faceApiIntervalRef.current = faceApiInterval;
  };

  async function loadLabeledImages() {
    console.log("Loading labeled images...");
    if (!tempAccount) {
      console.error("No tempAccount provided.");
      return [];
    }

    const descriptions = [];
    let img;

    try {
      const imgPath = tempAccount.image;
      img = await faceapi.fetchImage(imgPath);
      console.log("Image fetched successfully.");
    } catch {
      setImageError(true);
      console.error("Error loading image.");
      return [];
    }

    const detections = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detections) {
      descriptions.push(detections.descriptor);
    }

    const label = tempAccount.firstName || tempAccount.lastName || "Unknown User";
    if (typeof label !== "string" || label.trim() === "") {
      console.error("Invalid label: must be a non-empty string.");
      return [];
    }

    console.log("Labeled images loaded:", label);
    return [new faceapi.LabeledFaceDescriptors(label, descriptions)];
  }

  const generateTokenAndSave = async () => {
    console.log("Generating token and saving...");
    try {
      const response = await fetch("http://localhost:5000/faceRecog/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: tempAccount.email,
          password: tempAccount.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login response data:", data);
      const userId = data.userId;
      const userRole = data.userRole;
      const user = data.user; // Assuming the API returns a user object

      // Store token in localStorage
      localStorage.setItem("token", data.token);

      // Create the complete user object
      const userObject = {
        id: userId,
        _id: user._id || userId,
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email,
        role: userRole,
        department: user.department || "",
        phoneNumber: user.phoneNumber || "",
        is2FAEnabled: user.is2FAEnabled || false,
        image: user.image || "",
        createDate: user.createDate || new Date().toISOString(),
        lastLogin: user.lastLogin || new Date().toISOString(),
        isVerified: user.isVerified || false,
        team: user.team || "",
      };

      // Store in AuthContext
      setRole(userRole);
      setUserId(userId);
      setUser(userObject);

      // Persist in localStorage
      localStorage.setItem("userRole", userRole);
      localStorage.setItem("userId", userId);
      localStorage.setItem("user", JSON.stringify(userObject));

      // Fetch and update profile data
      const fetchSocialLoginProfile = async () => {
        try {
          const profileResponse = await axios.post("http://localhost:5000/api/profile/me", {
            userId,
          });
          console.log("Profile API response:", profileResponse.data);

          const profileData = {
            ...profileResponse.data,
            id: userId,
            _id: profileResponse.data._id || userId,
          };

          localStorage.setItem("profileData", JSON.stringify(profileData));
          updateProfileData(profileData);
          console.log("Profile data fetched and stored successfully");
        } catch (error) {
          console.error("Error fetching profile data:", error);
        }
      };

      await fetchSocialLoginProfile();

      // Role-based redirection
      switch (userRole) {
        case "ADMIN":
          navigate(all_routes.adminDashboard);
          break;
        case "CANDIDATE":
          navigate(all_routes.DashboardCandidate);
          break;
        case "HR-MANAGER":
          navigate(all_routes.DashboardRecruiter);
          break;
        default:
          navigate("/");
          break;
      }
    } catch (error) {
      console.error("Error generating token:", error);
      setLoginResult("FAILED");
    }
  };

  return (
    <div className="container">
      <div className="content">
        {!localUserStream && !modelsLoaded && (
          <h2 className="loading">
            <span>Processing your login request...</span>
            <span className="loading-subtext">Preparing facial recognition models...</span>
          </h2>
        )}
        {!localUserStream && modelsLoaded && (
          <h2 className="prompt">
            <span>Position your face in front of the camera.</span>
          </h2>
        )}
        {localUserStream && loginResult === "SUCCESS" && (
          <h2 className="success">
            <span>Your face has been successfully recognized!</span>
            <span>Please hold still for {counter} more seconds...</span>
          </h2>
        )}
        {localUserStream && loginResult === "FAILED" && (
          <h2 className="error">
            <span>Unable to recognize your face. Please try again!</span>
          </h2>
        )}
        {loginResult === "FAILED" && (
          <p className="unauthorized">Unauthorized access!</p>
        )}
        {localUserStream && !faceApiLoaded && loginResult === "PENDING" && (
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
              videoRef.current.pause();
              videoRef.current.srcObject = null;
              localUserStream?.getTracks().forEach((track) => {
                track.stop();
              });
              clearInterval(faceApiIntervalRef.current);
              localStorage.removeItem("faceAuth");
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