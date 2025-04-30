import React from "react";

// You can keep this component if you plan to use it for custom markers
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "300px", width: "400px" }}> {/* Set the height and width for the container */}
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3190.626269788938!2d10.189367!3d36.899288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb7454c6ed51%3A0x683b3ab5565cd357!2sESPRIT!5e0!3m2!1sen!2stn!4v1742862037051!5m2!1sen!2stn" 
        width="100%" 
        height="100%" 
        style={{ border: 0 }} // Use an object for style
        allowFullScreen 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}