import { useState, useCallback } from "react";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";

const Funfact: React.FC = () => {
  const [focus, setFocus] = useState(false);

  const handleInView = useCallback((inView: boolean) => {
    if (inView) setFocus(true);
  }, []);

  const counterUpContent = [
    { id: 1, endCount: 4, suffix: "M", meta: "4 million daily active users", delay: "0" },
    { id: 2, endCount: 12, suffix: "k", meta: "Over 12k open job positions", delay: "100" },
    { id: 3, endCount: 20, suffix: "M", meta: "Over 20 million stories shared", delay: "200" },
  ];

  return (
    <div className="funfact-container">
      {counterUpContent.map(({ id, endCount, suffix, meta, delay }) => (
        <div
          key={id}
          className="counter-column col-lg-4 col-md-4 col-sm-12"
          data-aos="fade-up"
          data-aos-delay={delay}
        >
          <div className="count-box">
            <span className="count-text">
              <InView as="span" onChange={handleInView}>
                <CountUp start={focus ? 0 : undefined} end={endCount} duration={2} />
              </InView>
            </span>
            {suffix}
          </div>
          <h4 className="counter-title">{meta}</h4>
        </div>
      ))}
    </div>
  );
};

export default Funfact;
