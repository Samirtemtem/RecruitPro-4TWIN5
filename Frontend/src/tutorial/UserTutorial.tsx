import React, { useState, useEffect } from "react";
import Joyride, { CallBackProps, STATUS, Step } from "react-joyride";

interface Props {
  steps: Step[];
  tutorialKey: string;
}

const UserTutorial: React.FC<Props> = ({ steps, tutorialKey }) => {
  const [run, setRun] = useState(false);

  useEffect(() => {
    // 🚀 Always launch tutorial after 1 second
    const timeout = setTimeout(() => {
      setRun(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleCallback = (data: CallBackProps) => {
    const { status } = data;
    if (status === STATUS.FINISHED || status === STATUS.SKIPPED) {
      // Remove this if you want it to restart every time
      localStorage.setItem(tutorialKey, "done");
      setRun(false);
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous
      scrollToFirstStep={false}
      disableScrolling={true}
      showSkipButton
      showProgress
      spotlightClicks={true}
      callback={handleCallback}
      styles={{
        options: {
            zIndex: 9999,
            arrowColor: "#fff",
            backgroundColor: "#ffffff",
            overlayColor: "rgba(0, 0, 0, 0.5)",
            primaryColor: "#D50000",
            textColor: "#333",
            width: 400,
            //borderRadius: 10,
        },
        tooltipContainer: {
            textAlign: "left",
            padding: "1.5rem",
        },
        buttonNext: {
            backgroundColor: "#D50000",
        },
        buttonBack: {
            color: "#D50000",
        },
        }}

    />
  );
};

export default UserTutorial;
