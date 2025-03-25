import React from 'react';

const Address = () => {
  const addressContent = [
    {
      id: 1,
      iconName: "placeholder",
      title: "Address",
      text: (
        <>
          1, 2 rue André Ampère - 2083 - <br />Pôle Technologique - El Ghazala.
        </>
      ),
    },
    {
      id: 2,
      iconName: "smartphone",
      title: "Call Us",
      text: (
        <>
          <a href="tel:+216702500000" className="phone">
            70 250 000
          </a>
        </>
      ),
    },
    {
      id: 3,
      iconName: "letter",
      title: "Email",
      text: (
        <>
          <a href="#">contact@esprit.tn</a>
        </>
      ),
    },
  ];

  return (
    <>
      <style>
        {`
          
          .contact-container {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
          }
          .contact-block {
              background: #fff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              margin: 10px;
              box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
              text-align: center;
              flex: 1 1 calc(30% - 20px); /* Adjust width for horizontal layout */
              transition: transform 0.2s;
          }
          .contact-block:hover {
              transform: scale(1.05);
          }
          .inner-box {
              display: flex;
              flex-direction: column;
              align-items: center;
          }
          .icon img {
              width: 40px;
              height: 40px;
              margin-bottom: 10px;
          }
          h4 {
              margin: 10px 0;
              font-size: 1.2em;
              color: #333;
          }
          p {
              font-size: 1em;
              color: #555;
          }
          .phone, a {
              color: #007bff;
              text-decoration: none;
          }
          .phone:hover, a:hover {
              text-decoration: underline;
          }
          @media (max-width: 768px) {
              .contact-block {
                  flex: 1 1 calc(100% - 20px); /* Stack on small screens */
              }
          }
        `}
      </style>
      <div className="contact-container">
        {addressContent.map((item) => (
          <div className="contact-block" key={item.id}>
            <div className="inner-box">
              <span className="icon">
                <img src={`/images/icons/${item.iconName}.svg`} alt="icon" />
              </span>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Address;