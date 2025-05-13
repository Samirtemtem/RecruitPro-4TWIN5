import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact = () => {
  const [focus, setFocus] = useState(false);
  const [openJobCount, setOpenJobCount] = useState(0); // State for open job posts count
  const [userCount, setUserCount] = useState(0); // State for user count
  const [candidatesCount, setCandidatesCount] = useState(0); // State for candidates count

  const counterUpContent = [
    {
      id: 1,
      startCount: "0", // string
      endCount: userCount.toString(), // Use fetched user count
      endPointText: "",
      meta: "Daily active users", // Updated text
      animationDelay: "0",
    },
    {
      id: 2,
      startCount: "0", // string
      endCount: openJobCount.toString(), // Use fetched open job count
      endPointText: "",
      meta: "Open job positions", // Existing text
      animationDelay: "100",
    },
    {
      id: 3,
      startCount: "0", // string
      endCount: candidatesCount.toString(), // Use fetched candidates count
      endPointText: "",
      meta: "Candidates registered", // Updated text
      animationDelay: "200",
    },
  ];

  // Fetch the count of open job posts and user counts
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        // Fetch open job count
        const jobResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/jobs/job-posts/count/open`);
        const jobData = await jobResponse.json();
        setOpenJobCount(jobData.count);

        // Fetch user and candidates count
        const userResponse = await fetch(`${process.env.REACT_APP_BACKEND_URL}/api/user/countUsers`);
        const userData = await userResponse.json();
        if (userData.success) {
          setUserCount(userData.data.userCount);
          setCandidatesCount(userData.data.candidatesCount);
        }
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []); // Empty dependency array to run only once on mount

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="counter-column col-lg-4 col-md-4 col-sm-12"
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="count-box">
            <span className="count-text">
              <CountUp
                start={focus ? Number(val.startCount) : 0} // Convert to number
                end={Number(val.endCount)} // Use the respective count
                duration={2}
              >
                {({ countUpRef }) => (
                  <InView
                    as="span"
                    onChange={(isVisible) => {
                      if (isVisible) {
                        setFocus(true);
                      }
                    }}
                  >
                    <span ref={countUpRef} />
                  </InView>
                )}
              </CountUp>
              {/* Adding '+' before the count */}
              <span className="plus-sign">+</span>
            </span>
            {val.endPointText}
          </div>
          <h4 className="counter-title">{val.meta}</h4>
        </div>
      ))}
    </>
  );
};

export default Funfact;