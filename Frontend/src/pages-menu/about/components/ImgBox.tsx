const ImgBox = () => {
  const imgContent = [
    {
      id: 1,
      block: [{ img: "about-img-1" }],
    },
    {
      id: 2,
      block: [{ img: "about-img-2" }, { img: "about-img-3" }],
    },
    {
      id: 3,
      block: [{ img: "about-img-4" }, { img: "about-img-5" }],
    },
    {
      id: 4,
      block: [{ img: "about-img-6" }],
    },
  ];

  return (
    <div className="images-box">
      <div className="row">
        {imgContent.map((item) => (
          <div className="column col-lg-3 col-md-6 col-sm-6" key={item.id}>
            {item.block.map((itemImg, i) => (
              <figure className="image" key={i}>
                <img
                  src={`/images/resource/${itemImg.img}.jpg`}
                  alt="about image"
                  width={300}
                  height={200}
                />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgBox;
