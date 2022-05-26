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
  const [order, setOrder] = useState(0);
  const [trendInfo, setTrendInfo] = useState([]);
  useEffect(() => {
    const trends = api.mock.fetchMainBanner();
    trends.then((res) => setTrendInfo(res[order]));
  }, [order]);

  function handleOrder(num) {
    //왼쪽 클릭.
    if (num === -1) {
      if (order === 0) {
        setOrder(3);
      } else {
        setOrder((prevState) => prevState - 1);
      }
      //오른쪽 클릭.
    } else {
      if (order === 3) {
        setOrder(0);
      } else {
        setOrder((prevState) => prevState + 1);
      }
    }
  }

  return (
    <StyledRoot>
      <StyledArrowLeft onClick={() => handleOrder(-1)} order={order} />
      <StyledContainer
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <ImageWrapper>
          <img src={trendInfo.src} alt="트렌드 썸네일 사진" />
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
      <StyledArrowRight onClick={() => handleOrder(1)} order={order} />
    </StyledRoot>
  );
}

export default mainTrend;
