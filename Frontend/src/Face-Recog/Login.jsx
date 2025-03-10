import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

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
        localUserStream.getTracks().forEach((track) => {
          track.stop();
        });
        clearInterval(counterInterval);
        clearInterval(faceApiIntervalRef.current);

        // Generate token and save it in sessionStorage
        generateTokenAndSave();

        // Role-based redirection
        const userRole = tempAccount.role;
        console.log("User role:", userRole);
        if (userRole === "ADMIN") {
          navigate("/adminDashboard", { replace: true });
        } else if (userRole === "CANDIDATE") {
          navigate("/protected", { replace: true });
        } else {
          navigate("/");
        }
      }

      return () => clearInterval(counterInterval);
    }
    setCounter(5);
  }, [loginResult, counter]);

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

      // Check if any results are found
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
      const response = await fetch('http://localhost:5000/faceRecog/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: tempAccount.email,
          password: tempAccount.password 
        }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      sessionStorage.setItem('token', data.token);
      console.log('Token saved:', data.token);
    } catch (error) {
      console.error('Error generating token:', error);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-between">
      <div className="h-full flex flex-col items-center justify-center gap-[24px] max-w-[720px] mx-auto ">
        {!localUserStream && !modelsLoaded && (
          <h2 className="text-center font-poppins text-3xl tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Processing your Login Request ...</span>
            <span className="block text-indigo-400 mt-2 font-semibold">
              Loading Models...
            </span>
          </h2>
        )}
        {!localUserStream && modelsLoaded && (
          <h2 className="text-center text-3xl font-poppins tracking-tight text-gray-900 sm:text-4xl">
            <span className="block text-indigo-500 mt-2">
              Please show your Face in the Camera
            </span>
          </h2>
        )}
        {localUserStream && loginResult === "SUCCESS" && (
          <h2 className="text-center text-xl font-extrabold tracking-tight text-gray-900 ">
            <span className="block text-indigo-500 mt-2">
              We've successfully recognized your face!
            </span>
            <span className="block mt-2">
              Please stay {counter} more seconds...
            </span>
          </h2>
        )}
        {localUserStream && loginResult === "FAILED" && (
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-rose-700 ">
            <span className="block mt-[56px]">
              Unable to Recognize your face!!
            </span>
          </h2>
        )}
        {loginResult === "FAILED" && (
          <p className="text-red-800 text-poppins font-bold">
            Unauthorized Access!!
          </p>
        )}
        {localUserStream && !faceApiLoaded && loginResult === "PENDING" && (
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-gray-900 ">
            <span className="block mt-[56px] text-indigo-400">
              Scanning Face...
            </span>
          </h2>
        )}
        <div className="w-full">
          <div className="relative flex flex-col items-center p-[10px] ">
            <video
              muted
              autoPlay
              ref={videoRef}
              height={videoHeight}
              width={videoWidth}
              onPlay={scanFace}
              style={{
                objectFit: "fill",
                height: "360px",
                borderRadius: "10px",
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
                    alt="loading models"
                    src="./images/face.gif"
                    className="cursor-pointer my-8 mx-auto object-cover h-[272px]"
                  />
                  <button
                    onClick={getLocalUserVideo}
                    type="button"
                    className="justify-center  w-full py-2.5 px-5 mr-2 text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-700 rounded-lg border border-gray-200 inline-flex items-center"
                  >
                    Scan my face
                  </button>
                </>
              ) : (
                <>
                  <img
                    alt="loading models"
                    src="./images/720.svg"
                    className="cursor-pointer my-8 mx-auto object-cover h-[272px]"
                  />
                  <button
                    disabled
                    type="button"
                    className="cursor-not-allowed justify-center w-full py-2.5 px-5 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 inline-flex items-center"
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
              localUserStream.getTracks().forEach((track) => {
                track.stop();
              });
              clearInterval(faceApiIntervalRef.current);
              localStorage.removeItem("faceAuth");
              navigate("/");
            }}
            className="flex gap-2 w-fit my-5 cursor-pointer px-3 py-2 rounded-full bg-gradient-to-r bg-red-400"
          >
            <span className="text-white">Retry</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6"
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
    </div>
  );
}

export default Login;