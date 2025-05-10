import React from 'react';

const SocialTwo = ({ title }) => {
  const socialContent = [
    {
      id: 1,
      name: "Facebook",
      icon: "fa-facebook-f",
      iconClass: "facebook",
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(title)}`,
    },
    {
      id: 2,
      name: "Twitter",
      icon: "fa-twitter",
      iconClass: "twitter",
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`,
    },
    {
      id: 3,
      name: "LinkedIn",
      icon: "fa-linkedin",
      iconClass: "linkedin",
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(title)}`,
    },
  ];

  return (
    <>
      {socialContent.map((item) => (
        <a
          href={item.link}
          className={item.iconClass}
          target="_blank"
          rel="noopener noreferrer"
          key={item.id}
        >
          <i className={`fab ${item.icon}`}></i> {item.name}
        </a>
      ))}
    </>
  );
};

export default SocialTwo;