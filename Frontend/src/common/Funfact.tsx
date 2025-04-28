import { useState, useEffect } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact = () => {
  const [focus, setFocus] = useState(false);
  const [openJobCount, setOpenJobCount] = useState(0); // State for open job posts count

  const counterUpContent = [
    {
      id: 1,
      startCount: "0", // string
      endCount: openJobCount.toString(), // Use fetched open job count
      endPointText: "",
      meta: "4 million daily active users", // Keep this text as an example
      animationDelay: "0",
    },
    {
      id: 2,
      startCount: "0", // string
      endCount: openJobCount.toString(), // Use fetched open job count
      endPointText: "",
      meta: "Open job positions", // Modified text
      animationDelay: "100",
    },
    {
      id: 3,
      startCount: "0", // string
      endCount: openJobCount.toString(), // Use fetched open job count
      endPointText: "",
      meta: "Over 20 million stories shared", // Keep this text as an example
      animationDelay: "200",
    },
  ];

  // Fetch the count of open job posts
  useEffect(() => {
    const fetchOpenJobCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/jobs/job-posts/count/open");
        const data = await response.json();
        setOpenJobCount(data.count); // Update state with the fetched count
      } catch (error) {
        console.error("Error fetching open job count:", error);
      }
    };

    fetchOpenJobCount();
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
                end={Number(val.endCount)} // Use the open job count
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