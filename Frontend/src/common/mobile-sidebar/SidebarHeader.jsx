
const SidebarHeader = () => {
  return (
    <div className="pro-header">
      <a href="/">
        <img src="LogoEsprit2.png" alt="brand" />
      </a>
      {/* End logo */}

      <div className="fix-icon" data-bs-dismiss="offcanvas" aria-label="Close">
        <span className="flaticon-close"></span>
      </div>
      {/* icon close */}
    </div>
  );
};

export default SidebarHeader;
