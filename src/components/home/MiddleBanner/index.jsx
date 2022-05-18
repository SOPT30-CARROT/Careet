import React from "react";
import { StyledRoot } from "./style";
import Banner from "components/common/assets/img/middle_banner_img.png";

function middleBanner() {
  return (
    <StyledRoot>
      <img src={Banner} />
    </StyledRoot>
  );
}

export default middleBanner;
