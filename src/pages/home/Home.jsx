import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import FavePlace from "components/home/FavePlace";
import MiddleBanner from "components/home/MiddleBanner";
import NoMore from "components/home/noMore";
import KeywordTag from "components/home/KeywordTag";
import NewContents from "components/home/NewContents";

function Home() {
  // 카드의 북마크 토글 함수
  const toggleBookmark = (CardsInfo, setCardsInfo, id) => {
    const newCardsInfo = CardsInfo.map((Card) => {
      if (id === Card.id) Card.isBookmarked = !Card.isBookmarked;
      return Card;
    });
    setCardsInfo(newCardsInfo);
  };

  // 이미지 슬라이더 이동
  const slickRef = useRef(null);
  const movePrev = useCallback(() => slickRef.current.slickPrev(), []);
  const moveNext = useCallback(() => slickRef.current.slickNext(), []);

  return (
    <StyledRoot>
      <KeywordTag />
      <FavePlace
        toggleBookmark={toggleBookmark}
        slickRef={slickRef}
        movePrev={movePrev}
        moveNext={moveNext}
      />
      <MiddleBanner />
      <NoMore
        toggleBookmark={toggleBookmark}
        slickRef={slickRef}
        movePrev={movePrev}
        moveNext={moveNext}
      />
      <NewContents toggleBookmark={toggleBookmark} />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
