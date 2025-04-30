import React from "react";

// Sample messages data
const messages = [
  {
    id: 1,
    sender: "you",
    text: "Hello, how can I help you today?",
    time: "09:10 AM, Today"
  },
  {
    id: 2,
    sender: "other",
    text: "I'm looking for information about the job posting for senior developer position.",
    time: "09:12 AM, Today"
  },
  {
    id: 3,
    sender: "you",
    text: "Of course, I'd be happy to provide more details. The position requires 5+ years of experience with React and Node.js.",
    time: "09:15 AM, Today"
  },
  {
    id: 4,
    sender: "other",
    text: "That sounds perfect for my background. What about the remote work policy?",
    time: "09:18 AM, Today"
  },
  {
    id: 5,
    sender: "you",
    text: "We offer hybrid work options with 3 days remote and 2 days in-office. Does that work for you?",
    time: "09:20 AM, Today"
  }
];

const ContentField: React.FC = () => {
  return (
    <div className="card">
      <div className="card-header msg_head">
        <div className="d-flex bd-highlight">
          <div className="img_cont">
            <img
              src="/images/resource/candidate-1.png"
              className="rounded-circle user_img"
              alt="John Doe"
            />
            <span className="online_icon"></span>
          </div>
          <div className="user_info">
            <span>John Doe</span>
            <p>Active</p>
          </div>
        </div>
      </div>
      {/* End top msg header */}

      <div className="card-body msg_card_body">
        {messages.map((message) => (
          <div 
            key={message.id}
            className={`d-flex ${
              message.sender === "you" 
                ? "justify-content-end mb-4" 
                : "justify-content-start mb-4"
            }`}
          >
            {message.sender !== "you" && (
              <div className="img_cont_msg">
                <img
                  src="/images/resource/candidate-1.png"
                  className="rounded-circle user_img_msg"
                  alt=""
                />
              </div>
            )}
            <div className={`msg_cotainer${message.sender === "you" ? "_send" : ""}`}>
              {message.text}
              <span className={`msg_time${message.sender === "you" ? "_send" : ""}`}>
                {message.time}
              </span>
            </div>
          </div>
        ))}
      </div>
      {/* End msg_card_body */}

      <div className="card-footer">
        <div className="form-group mb-0">
          <textarea
            className="form-control type_msg"
            placeholder="Type a message..."
          ></textarea>
          <div className="input-group-append">
            <button className="btn btn-primary btn_send" type="button">
              <span className="flaticon-search"></span>
            </button>
          </div>
        </div>
      </div>
      {/* End card-footer */}
    </div>
  );
};

export default ContentField; 