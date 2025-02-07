import React, { useEffect, useRef, useState } from 'react';

interface CircleProgressProps {
  value: number;
}

const CircleProgressSmall: React.FC<CircleProgressProps> = ({ value }) => {
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
    if (value >= 90) {
      setClass('border-primary')
    } else if (value >= 75) {
      setClass('border-success')
    } else if (value >= 65) {
      setClass('border-purple')
    } else if(value >= 60){
      setClass('border-info')
    }else if(value >= 50){
      setClass('border-black')
    }
  }, [value]);

  return (
    <>
       <div className="circle-progress circle-progress-md" data-value={value} ref={circleRef}>
      <span className="progress-left">
        <span className={`progress-bar ${Class}`} ref={leftRef} />
      </span>
      <span className="progress-right">
        <span className={`progress-bar ${Class}`} ref={rightRef} />
      </span>
      <div className="progress-value">{value}%</div>
    </div>
    </>
  );
};

export default CircleProgressSmall;
