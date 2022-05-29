import React from "react";
import { useState, useEffect } from "react";
import {
  StyledRoot,
  StyledContainer,
  InfoText,
  Title,
  StyledArrowLeft,
  StyledArrowRight,
  StyledViewIcon,
  StyledBookmarkIcon,
  StyledShareIcon,
  BookmarkWrapper,
} from "./style";
import { ReactComponent as Mark } from "components/common/assets/icon/bookmark_ic-1.svg";
import { ReactComponent as UnMark } from "components/common/assets/icon/bookmark_ic.svg";

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

  // const toggleBookmark = async (id, bookmarked) => {
  //   trendInfo.map((trend) => {
  //     if (id === trend.id) {
  //       api.mock.mutateBookmark("MAIN_BANNER", trend.id, false);
  //     }
  //   const newTrendInfo = trendInfo.map((trend) => {
  //     if (id === trend.id) {
  //       return {
  //         ...trendInfo,
  //         bookmarked: false;
  //       }
  //     }
  //   })
  //     };
  // }\

  const toggleBookmark = async (id, bookmarkedStatus) => {
    await api.mock.mutateBookmark("MAIN_BANNER", id, !bookmarkedStatus);

    const newTrendInfo = trendInfo.map((trend) => {
      if (id === trend.id) {
        return {
          ...trend,
          bookmarked: !bookmarkedStatus,
        };
      }

      return trend;
    });

    setTrendInfo(newTrendInfo);
  };

  return (
    <StyledRoot>
      <StyledArrowLeft onClick={() => handleOrder(-1)} order={order} />
      <StyledContainer>
        <img src={currentTrend.src} alt="트렌드 썸네일 사진" />
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
        <BookmarkWrapper
          onClick={() =>
            toggleBookmark(currentTrend.id, currentTrend.bookmarked)
          }
        >
          {currentTrend.bookmarked === true ? <Mark /> : <UnMark />}
        </BookmarkWrapper>
      </StyledContainer>
      <StyledArrowRight onClick={() => handleOrder(1)} order={order} />
    </StyledRoot>
  );
}

export default mainTrend;
