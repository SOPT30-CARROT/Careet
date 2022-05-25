import React from "react";
import { useState, useEffect } from "react";
import {
  StyledRoot,
  StyledContainer,
  ImageWrapper,
  InfoText,
  Title,
  StyledArrowLeft,
  StyledArrowRight,
  StyledViewIcon,
  StyledBookmarkIcon,
  StyledShareIcon,
  StyledBookmark,
} from "./style";

import api from "api/index";

function mainTrend() {
  const [isHovering, setIsHovering] = useState(false);
  //const [order, setOrder] = useState(0);
  const [trendInfo, setTrendInfo] = useState([]);
  useEffect(() => {
    const trends = api.mock.fetchMainBanner();
    trends.then((res) => setTrendInfo(res[1]));
  }, []);

  // const handleOrder = (id) => {
  //   const currentTrend = trendInfo.filter((trend) => trend.id === order);
  //   setTrendInfo(currentTrend);
  // };

  return (
    <StyledRoot>
      <StyledArrowLeft />
      <StyledContainer
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <ImageWrapper>
          {/* <img src={require(`{trendInfo.src}`).default} /> */}
        </ImageWrapper>
        <InfoText>
          <h1>지금 꼭 알아야 할 트렌드</h1>
          <Title isHovering={isHovering}>{trendInfo.title}</Title>
          <p>{trendInfo.subTitle}</p>
          <span>
            <StyledViewIcon />
            {trendInfo.view}
            <StyledBookmarkIcon />
            {trendInfo.bookmark}
            <StyledShareIcon />
            {trendInfo.share}
          </span>
        </InfoText>
        <StyledBookmark />
      </StyledContainer>
      <StyledArrowRight />
    </StyledRoot>
  );
}

export default mainTrend;
