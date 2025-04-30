import React, { useEffect, useRef, useState } from 'react';

interface CircleProgressProps {
  value: number;
}

const CircleProgress: React.FC<CircleProgressProps> = ({ value }) => {
  const [Class, setClass] = useState<any>('');
  const circleRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLSpanElement>(null);
  const rightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (circleRef.current && leftRef.current && rightRef.current) {
      const percentageToDegrees = (percentage: number): number => (percentage / 100) * 360;

      if (value > 0) {
        if (value <= 50) {
          rightRef.current.style.transform = `rotate(${percentageToDegrees(value)}deg)`;
        } else {
          rightRef.current.style.transform = 'rotate(180deg)';
          leftRef.current.style.transform = `rotate(${percentageToDegrees(value - 50)}deg)`;
        }
      }
    }
    if(value >= 80) {
      setClass('border-info')
    }else if(value >= 50 ) {
      setClass('border-success')
    }else if(value >= 25 ) {
      setClass('border-warning')
    } else {
      setClass('border-danger')
    }
  }, [value]);

  return (
    <>

    
    <div
        className="attendance-circle-progress attendance-progress mx-auto mb-3"
        data-value={value} ref={circleRef}
      >
        <span className="progress-left">
          <span className={`progress-bar ${Class}`} ref={leftRef}/>
        </span>
        <span className="progress-right">
          <span className={`progress-bar ${Class}`} ref={rightRef}/>
        </span>
        <div className="total-work-hours text-center w-100">
          <span className="fs-13 d-block mb-1">Total Hours</span>
          <h6>5:45:32</h6>
        </div>
      </div>
    </>
  );
};

export default CircleProgress;
