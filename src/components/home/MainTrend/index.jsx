import React from "react";
//import { useState } from "react";
import {
  StyledRoot,
  StyledContainer,
  ImageWrapper,
  InfoText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledViewIcon,
  StyledBookmarkIcon,
  StyledShareIcon,
  StyledBookmark,
} from "./style";

//import { ReactComponent as bookmarkIcon } from "components/common/assets/icon/bookmark_ic.svg";
import { trendInfo } from "./trendInfo";
function middleBanner() {
  return (
    <StyledRoot>
      <StyledArrowLeft />
      <StyledContainer>
        <ImageWrapper>
          <img src={trendInfo[0].img} />
        </ImageWrapper>
        <InfoText>
          <h1>지금 꼭 알아야 할 트렌드</h1>
          <h2>{trendInfo[0].title}</h2>
          <p>{trendInfo[0].subTitle}</p>
          <span>
            <StyledViewIcon />
            {trendInfo[0].view}
            <StyledBookmarkIcon />
            {trendInfo[0].bookmark}
            <StyledShareIcon />
            {trendInfo[0].share}
          </span>
        </InfoText>
        <StyledBookmark />
      </StyledContainer>
      <StyledArrowRight />
    </StyledRoot>
  );
}

export default middleBanner;
