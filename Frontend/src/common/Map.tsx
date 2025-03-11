import React from "react";

// In a real application, you would use a proper map library like Google Maps or Leaflet
// For this example, we'll create a simple Map placeholder
const Map: React.FC = () => {
  return (
    <div className="map-outer">
      <div style={{ height: "486px", width: "100%" }}>
        <div style={{ height: "100%", position: "relative" }}>
          <div className="map-canvas" style={{ height: "100%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14041.4008264331!2d-0.05551648320356775!3d51.52847215347721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761d2ef7e069c3%3A0xeb23a66c17748915!2sSquare%20Works!5e0!3m2!1sen!2s!4v1714503147212!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div style={{ position: "absolute", width: "80%", bottom: "20px", left: "10%", zIndex: 5 }}>
            <div
              style={{
                padding: "5px",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                fontSize: "12px",
                fontFamily: "Arial,sans-serif",
                textAlign: "center",
              }}
            >
              This map is for illustration purposes only
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Map }; 