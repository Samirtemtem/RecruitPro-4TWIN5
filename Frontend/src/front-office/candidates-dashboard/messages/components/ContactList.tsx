import React from "react";

// Sample contacts data
const contacts = [
  {
    id: 1,
    img: "/images/resource/candidate-1.png",
    name: "John Doe",
    designation: "UI Designer",
    online: true,
    active: true,
    lastMessage: "Hey, how's it going?",
    time: "09:00 AM"
  },
  {
    id: 2,
    img: "/images/resource/candidate-2.png",
    name: "Jane Smith",
    designation: "Software Engineer",
    online: false,
    active: false,
    lastMessage: "Thanks for the update!",
    time: "Yesterday"
  },
  {
    id: 3,
    img: "/images/resource/candidate-3.png",
    name: "Robert Johnson",
    designation: "Product Manager",
    online: true,
    active: false,
    lastMessage: "Let's schedule a call tomorrow",
    time: "Yesterday"
  },
  {
    id: 4,
    img: "/images/resource/candidate-4.png",
    name: "Sarah Williams",
    designation: "Marketing Specialist",
    online: false,
    active: false,
    lastMessage: "I've sent you the files",
    time: "22/3/2023"
  },
  {
    id: 5,
    img: "/images/resource/candidate-5.png",
    name: "Michael Brown",
    designation: "Frontend Developer",
    online: true,
    active: false,
    lastMessage: "Can you review my changes?",
    time: "21/3/2023"
  }
];

const ContactList: React.FC = () => {
  return (
    <ul className="contacts">
      {contacts.map((contact) => (
        <li className={contact.active ? "active" : ""} key={contact.id}>
          <a href="#">
            <div className="d-flex bd-highlight">
              <div className="img_cont">
                <img
                  src={contact.img}
                  className="rounded-circle user_img"
                  alt={contact.name}
                />
                {contact.online && (
                  <span className="online_icon"></span>
                )}
              </div>
              <div className="user_info">
                <span>{contact.name}</span>
                <p>{contact.designation}</p>
              </div>
              <span className="info">{contact.time}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ContactList; 