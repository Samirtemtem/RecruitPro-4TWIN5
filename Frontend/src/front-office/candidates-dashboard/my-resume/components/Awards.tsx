import React from 'react';

interface AwardItem {
  id: number;
  initial: string;
  title: string;
  period: string;
  description: string;
}

const Awards: React.FC = () => {
  const awardItems: AwardItem[] = [
    {
      id: 1,
      initial: "P",
      title: "Perfect Attendance Programs",
      period: "2012 - 2014",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    },
    {
      id: 2,
      initial: "T",
      title: "Top Performer Recognition",
      period: "2012 - 2014",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a ipsum tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus."
    }
  ];

  return (
    <div className="resume-outer theme-yellow">
      <div className="upper-title">
        <h4>Awards</h4>
        <button type="button" className="add-info-btn">
          <span className="icon flaticon-plus"></span> Awards
        </button>
      </div>
      
      {awardItems.map((item) => (
        <div className="resume-block" key={item.id}>
          <div className="inner">
            <span className="name">{item.initial}</span>
            <div className="title-box">
              <div className="info-box">
                <h3>{item.title}</h3>
                <span></span>
              </div>
              <div className="edit-box">
                <span className="year">{item.period}</span>
                <div className="edit-btns">
                  <button type="button">
                    <span className="la la-pencil"></span>
                  </button>
                  <button type="button">
                    <span className="la la-trash"></span>
                  </button>
                </div>
              </div>
            </div>
            <div className="text">
              {item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Awards; 