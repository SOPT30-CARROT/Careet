import styled from "styled-components";
import FavePlace from "components/home/FavePlace";
import MiddleBanner from "components/home/MiddleBanner";
import NoMore from "components/home/noMore";
import KeywordTag from "components/home/KeywordTag";
import HotContents from "components/home/hotContents";
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

  return (
    <StyledRoot>
      <KeywordTag />
      <FavePlace toggleBookmark={toggleBookmark} />
      <MiddleBanner />
      <NoMore />
      <NoMore toggleBookmark={toggleBookmark} />
      <HotContents />
      <NewContents toggleBookmark={toggleBookmark} />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
