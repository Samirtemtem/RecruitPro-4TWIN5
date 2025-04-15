const MapBox = () => {
  return (
    <div className="map-canvas">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1988.9638514967007!2d10.188167399414539!3d36.8995216205863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cbf4205a2da9%3A0xd9bcc077ddfbc0e!2sESPRIT%20Bloc%20E!5e0!3m2!1sfr!2stn!4v1742845567026!5m2!1sfr!2stn"
        width="1400"
        height="600"
        style={{ border: '0' }} // Changed to an object
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapBox;
