import React from "react";
//import { useState } from "react";
import { StyledRoot, StyledContainer } from "./style";
import { ReactComponent as ArrowLeft } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as ArrowRight } from "components/common/assets/icon/arrow_r.svg";
//import { ReactComponent as bookmarkIcon } from "components/common/assets/icon/bookmark_ic.svg";

function middleBanner() {
  return (
    <StyledRoot>
      <ArrowLeft />
      <StyledContainer>
        {/* <ImageWrapper />
        <InfoText /> */}
      </StyledContainer>
      <ArrowRight />
    </StyledRoot>
  );
}

export default middleBanner;
