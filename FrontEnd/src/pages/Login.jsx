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

  if (!location?.state) {
    return <Navigate to="/" replace={true} />;
  }

  const loadModels = async () => {
   
    const uri = "/models";

    await faceapi.nets.ssdMobilenetv1.loadFromUri(uri);
    await faceapi.nets.faceLandmark68Net.loadFromUri(uri);
    await faceapi.nets.faceRecognitionNet.loadFromUri(uri);
  };

  useEffect(() => {
    setTempAccount(location?.state?.account);
  }, []);
  useEffect(() => {
    if (tempAccount) {
      loadModels()
        .then(async () => {
          const labeledFaceDescriptors = await loadLabeledImages();
          setLabeledFaceDescriptors(labeledFaceDescriptors);
        })
        .then(() => setModelsLoaded(true));
    }
  }, [tempAccount]);

  useEffect(() => {
    if (loginResult === "SUCCESS") {
      const counterInterval = setInterval(() => {
        setCounter((counter) => counter - 1);
      }, 1000);

      if (counter === 0) {
        videoRef.current.pause();
        videoRef.current.srcObject = null;
        localUserStream.getTracks().forEach((track) => {
          track.stop();
        });
        clearInterval(counterInterval);
        clearInterval(faceApiIntervalRef.current);
        localStorage.setItem(
          "faceAuth",
          JSON.stringify({ status: true, account: tempAccount })
        );
        navigate("/protected", { replace: true });
      }

      return () => clearInterval(counterInterval);
    }
    setCounter(5);
  }, [loginResult, counter]);

  const getLocalUserVideo = async () => {
    navigator.mediaDevices
      .getUserMedia({ audio: false, video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        setLocalUserStream(stream);
      })
      .catch((err) => {
        console.error("error:", err);
      });
  };

  const scanFace = async () => {
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
        // console.log(faceMatcher.matchDescriptor(d.descriptor).distance);
        if (faceMatcher.matchDescriptor(d.descriptor).distance < 0.2) {
          setImageError(true);
          return;
        }
        return faceMatcher.findBestMatch(d.descriptor);
      });

      if (!canvasRef.current) {
        return;
      }

      canvasRef.current
        .getContext("2d")
        .clearRect(0, 0, videoWidth, videoHeight);
      faceapi.draw.drawDetections(canvasRef.current, resizedDetections);
      faceapi.draw.drawFaceLandmarks(canvasRef.current, resizedDetections);

      if (results.length > 0 && tempAccount.name === results[0].label) {
        setLoginResult("SUCCESS");
      } else {
        setLoginResult("FAILED");
      }

      if (!faceApiLoaded) {
        setFaceApiLoaded(true);
      }
    }, 1000 / 15);
    faceApiIntervalRef.current = faceApiInterval;
  };

  async function loadLabeledImages() {
    if (!tempAccount) {
      return null;
    }
    const descriptions = [];

    let img;

    try {
      const imgPath = tempAccount.picture;
      img = await faceapi.fetchImage(imgPath);
    } catch {
      setImageError(true);
      return;
    }

    const detections = await faceapi
      .detectSingleFace(img)
      .withFaceLandmarks()
      .withFaceDescriptor();

    if (detections) {
      descriptions.push(detections.descriptor);
    }

    return new faceapi.LabeledFaceDescriptors(tempAccount.name, descriptions);
  }

  if (imageError) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-[24px] max-w-[840px] mx-auto">
        <h2 className="text-center text-3xl font-extrabold tracking-tight text-rose-700 sm:text-4xl">
          <span className="block">Profile picture doesn't matches.</span>
        </h2>
        <span className="block mt-4">
          Please contact administration for registration or try again later.
        </span>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col justify-between">
    <div className="h-full flex flex-col items-center justify-center gap-[24px] max-w-[720px] mx-auto ">
      {!localUserStream && !modelsLoaded && (
        <h2 className="text-center font-poppins text-3xl  tracking-tight text-gray-900 sm:text-4xl">
          <span className="block ">Processing your Login In Request ...</span>
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
            Unable to Recognize your face !!
          </span>
        </h2>
      )}
      {loginResult === "FAILED" && (
        <p className="text-red-800 text-poppins font-bold">
          {" "}
          Unaurthorized Access !!{" "}
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
                  Please wait while models were loading...
                </button>
              </>
            )}
          </>
        )}
      </div>
      {loginResult === "FAILED" && (
        <div
          onClick={() => {
            videoRef.current.pause();
            videoRef.current.srcObject = null;
            localUserStream.getTracks().forEach((track) => {
              track.stop();
            });
            clearInterval(counterInterval);
            clearInterval(faceApiIntervalRef.current);
            localStorage.removeItem("faceAuth");
            navigate("/");
          }}
          className="flex gap-2 w-fit  my-5 cursor-pointer px-3 py-2 rounded-full bg-gradient-to-r bg-red-400  "
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
