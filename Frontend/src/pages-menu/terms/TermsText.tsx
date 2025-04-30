const TermsText = () => {
  const textBoxStyle = {
    marginTop: "20px",
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    // backgroundColor: "#f9f9f9", // Optional
    // borderRadius: "8px", // Optional
    // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Optional
  };

  const headingStyle = {
    fontSize: "30px",
    fontWeight: "500",
    marginBottom: "31px", // Optional
    color: "#202124", // Optional
  };

  const paragraphStyle = {
    fontSize: "15px",
    lineHeight: "26px",
    marginBottom: "26px",
    color: "#696969", 
  };

  return (
    <>
      <div style={textBoxStyle}>
        <h3 style={headingStyle}>1. Terms</h3>
        <p style={paragraphStyle}>
          Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
          nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
          urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
          elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non
          risus.{" "}
        </p>
        <p style={paragraphStyle}>
          Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
          faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi
          augue aliquet mauris non elementum tincidunt eget facilisi.
          Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.{" "}
        </p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>2. Limitations</h3>
        <p style={paragraphStyle}>
          Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
          nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
          urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
          elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non
          risus.{" "}
        </p>
        <p style={paragraphStyle}>
          Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
          faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi
          augue aliquet mauris non elementum tincidunt eget facilisi.
          Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.{" "}
        </p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>3. Revisions and Errata</h3>
        <p style={paragraphStyle}>
          Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
          nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
          urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
          elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non
          risus.{" "}
        </p>
        <p style={paragraphStyle}>
          Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
          faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi
          augue aliquet mauris non elementum tincidunt eget facilisi.
          Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.{" "}
        </p>
      </div>

      <div style={textBoxStyle}>
        <h3 style={headingStyle}>4. Site Terms of Use Modifications</h3>
        <p style={paragraphStyle}>
          Pharetra nulla ullamcorper sit lectus. Fermentum mauris pellentesque
          nec nibh sed et, vel diam, massa. Placerat quis vel fames interdum
          urna lobortis sagittis sed pretium. Aliquam eget posuere sit enim
          elementum nulla vulputate magna. Morbi sed arcu proin quis tortor non
          risus.{" "}
        </p>
        <p style={paragraphStyle}>
          Elementum lectus a porta commodo suspendisse arcu, aliquam lectus
          faucibus. Nisl malesuada tortor, ligula aliquet felis vitae enim. Mi
          augue aliquet mauris non elementum tincidunt eget facilisi.
          Pellentesque massa ipsum tempus vel aliquam massa eu pulvinar eget.{" "}
        </p>
      </div>
    </>
  );
};

export default TermsText;
