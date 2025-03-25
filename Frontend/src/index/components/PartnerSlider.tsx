import React from "react";
import Slider from "react-slick";

const PartnerSlider: React.FC = () => {
  const settings = {
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1200,
    arrows: false,

    responsive: [
      { breakpoint: 1400, settings: { slidesToShow: 6 } },
      { breakpoint: 1024, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 600, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
      { breakpoint: 0, settings: { slidesToShow: 1 } },
    ],
  };

  const sliderGallery = [
    { id: 1, link: "#", imgNumber: "LOGO_SAGEMCOM" },
    { id: 2, link: "#", imgNumber: "sopra-removebg-preview" },
    { id: 3, link: "#", imgNumber: "LOGO_SAGEMCOM" },
    { id: 4, link: "#", imgNumber: "sopra-removebg-preview" },
    { id: 5, link: "#", imgNumber: "LOGO_SAGEMCOM" },
    { id: 6, link: "#", imgNumber: "sopra-removebg-preview" },
  
  ];

  return (
    <div className="partner-slider">
      <Slider {...settings}>
        {sliderGallery.map((item) => (
          <div className="slide-item" key={item.id}>
            <figure className="image-box">
              <a href={item.link}>
                <img
                  src={`/images/clients/${item.imgNumber}.png`}
                  alt={`Partner ${item.id}`}
                />
              </a>
            </figure>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PartnerSlider;
