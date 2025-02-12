import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { setHeaderCollapse } from "../../data/redux/themeSettingSlice";

const CollapseHeader = () => {
  const dispatch = useDispatch();
  const headerCollapse = useSelector((state: any) => state.themeSetting.headerCollapse);

  const toggleHeaderCollapse = () => {
    dispatch(setHeaderCollapse(!headerCollapse));
    
  };

  return (
    <>
        
      
      <OverlayTrigger
        placement="bottom"
        overlay={<Tooltip id="collapse-tooltip">Collapse</Tooltip>}
      >
        <Link to="#" id="collapse-header" className={headerCollapse?'active':''} onClick={toggleHeaderCollapse}>
          <i className="ti ti-chevrons-up" />
        </Link>
        
      </OverlayTrigger>
    </>
  );
};

export default CollapseHeader;
