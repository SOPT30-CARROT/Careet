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
  const [order, setOrder] = useState(0);
  //trend 받아오기.
  const [trendInfo, setTrendInfo] = useState([]);
  //보여주고 있는 트렌드.
  const [currentTrend, setCurrentTrend] = useState([]);

  useEffect(() => {
    (async () => {
      const trends = await api.mock.fetchMainBanner();
      setTrendInfo(trends);
    })();
  }, []);

  useEffect(() => {
    if (trendInfo.length > 0) setCurrentTrend(trendInfo[order]);
  }, [trendInfo, order]);

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
      <StyledContainer>
        <ImageWrapper>
          <img src={currentTrend.src} alt="트렌드 썸네일 사진" />
        </ImageWrapper>
        <InfoText>
          <h1>지금 꼭 알아야 할 트렌드</h1>
          <Title>{currentTrend.title}</Title>
          <p>{currentTrend.subTitle}</p>
          <span>
            <StyledViewIcon />
            {currentTrend.view}
            <StyledBookmarkIcon />
            {currentTrend.bookmark}
            <StyledShareIcon />
            {currentTrend.share}
          </span>
        </InfoText>
        <StyledBookmark />
      </StyledContainer>
      <StyledArrowRight onClick={() => handleOrder(1)} order={order} />
    </StyledRoot>
  );
}

export default mainTrend;
