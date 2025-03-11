import { useState } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact = () => {
  const [focus, setFocus] = useState(false);

  const counterUpContent = [
    {
      id: 1,
      startCount: "0", // string
      endCount: "4", // string
      endPointText: "M",
      meta: "4 million daily active users",
      animationDelay: "0",
    },
    {
      id: 2,
      startCount: "0", // string
      endCount: "12", // string
      endPointText: "k",
      meta: "Over 12k open job positions",
      animationDelay: "100",
    },
    {
      id: 3,
      startCount: "0", // string
      endCount: "20", // string
      endPointText: "M",
      meta: "Over 20 million stories shared",
      animationDelay: "200",
    },
  ];

  return (
    <>
      {counterUpContent.map((val) => (
        <div
          className="counter-column col-lg-4 col-md-4 col-sm-12 "
          data-aos="fade-up"
          data-aos-delay={val.animationDelay}
          key={val.id}
        >
          <div className="count-box">
            <span className="count-text">
              <CountUp
                start={focus ? Number(val.startCount) : 0} // Convert to number
                end={Number(val.endCount)} // Convert to number
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
