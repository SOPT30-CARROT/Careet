import ContentsCard from "components/common/ContentsCard";
import React, { useCallback, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ButtonWrapper, StyledRoot, StyledSlider } from "./style";
import NoMoreImg1 from "components/common/assets/img/nomore_card_img1.png";
import NoMoreImg2 from "components/common/assets/img/nomore_card_img2.png";
import NoMoreImg3 from "components/common/assets/img/nomore_card_img3.png";
import NoMoreImg4 from "components/common/assets/img/nomore_card_img4.png";
import NoMoreImg5 from "components/common/assets/img/nomore_card_img5.png";
import NoMoreImg6 from "components/common/assets/img/nomore_card_img6.png";
import { ReactComponent as PrevArrow } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as NextArrow } from "components/common/assets/icon/arrow_r.svg";

function NoMore() {
  const [faveCardsInfo, setFaveCardsInfo] = useState([
    {
      id: 1,
      thumbnail: NoMoreImg1,
      title: "실전편! Z세대에게 컨펌받은 메타버스 행사 체크리스트 5",
      isBookmarked: false,
    },
    {
      id: 2,
      thumbnail: NoMoreImg2,
      title: "누적 방문객 2천만! 제페토 한강공원 인기에는 다 이유가 있었구나",
      isBookmarked: false,
    },
    {
      id: 3,
      thumbnail: NoMoreImg3,
      title: "어렵다고 포기하실 건가요? Z세대는 이미 NFT에 주목하고 있습니다!",
      isBookmarked: false,
    },
    {
      id: 4,
      thumbnail: NoMoreImg4,
      title: "어떤 브랜드가 시험 기간 이벤트 잘했을까?",
      isBookmarked: false,
    },
    {
      id: 5,
      thumbnail: NoMoreImg5,
      title: "&quot;담당자가 바뀌었나?&quot; 이미지 싹 달라진 브랜드6",
      isBookmarked: false,
    },
    {
      id: 6,
      thumbnail: NoMoreImg6,
      title: "가정의 달 이벤트 준비 중이시죠? 레퍼런스 모아왔어요",
      isBookmarked: false,
    },
  ]);

  const toggleBookmark = (id) => {
    const newFaveCardsInfo = faveCardsInfo.map((faveCard) => {
      if (id === faveCard.id) faveCard.isBookmarked = !faveCard.isBookmarked;
      return faveCard;
    });
    setFaveCardsInfo(newFaveCardsInfo);
  };
  const slickRef = useRef(null);
  const movePrev = useCallback(() => slickRef.current.slickPrev(), []);
  const moveNext = useCallback(() => slickRef.current.slickNext(), []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 300,
    arrows: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <StyledRoot>
      <div>
        <h3>이제는 모르시면 안됩니다</h3>
        <ButtonWrapper>
          <button onClick={movePrev}>
            <PrevArrow />
          </button>
          <button onClick={moveNext}>
            <NextArrow />
          </button>
        </ButtonWrapper>
      </div>
      <StyledSlider ref={slickRef} {...settings}>
        {faveCardsInfo.map((faveCard) => {
          return (
            <div key={faveCard.id}>
              <ContentsCard
                faveCard={faveCard}
                onClick={() => toggleBookmark(faveCard.id)}
              />
            </div>
          );
        })}
      </StyledSlider>
    </StyledRoot>
  );
}

export default NoMore;
