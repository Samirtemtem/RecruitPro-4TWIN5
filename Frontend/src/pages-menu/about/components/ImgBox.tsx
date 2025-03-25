const ImgBox = () => {
  const imgContent = [
    {
      id: 1,
      block: [{ img: "About1" }],
    },
    {
      id: 2,
      block: [{ img: "About2" }, { img: "About3" }],
    },
    {
      id: 3,
      block: [{ img: "hero" }, { img: "imagee" }],
    },
    {
      id: 4,
      block: [{ img: "About6" }],
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
                  src={`/about/${itemImg.img}.jpg`} // Updated to .png and correct filenames
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