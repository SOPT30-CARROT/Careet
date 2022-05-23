import ContentsCard from "components/common/ContentsCard";
import React, { useCallback, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { ButtonWrapper, StyledRoot, StyledSlider } from "./style";
import FaveCardImg1 from "components/common/assets/img/fave_card_img1.png";
import FaveCardImg2 from "components/common/assets/img/fave_card_img2.png";
import FaveCardImg3 from "components/common/assets/img/fave_card_img3.png";
import FaveCardImg4 from "components/common/assets/img/fave_card_img4.png";
import FaveCardImg5 from "components/common/assets/img/fave_card_img5.png";
import { ReactComponent as PrevArrow } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as NextArrow } from "components/common/assets/icon/arrow_r.svg";

function FavePlace() {
  const [faveCardsInfo, setFaveCardsInfo] = useState([
    {
      id: 1,
      thumbnail: FaveCardImg1,
      title: "넷플릭스가 MZ세대에게 ‘팝업 스토어’ 맛집으로 소문난 이유",
      isBookmarked: false,
    },
    {
      id: 2,
      thumbnail: FaveCardImg2,
      title: "오픈 3일 만에 6억 원 매출? 와인 전문 매장'보틀벙커' 체험기",
      isBookmarked: false,
    },
    {
      id: 3,
      thumbnail: FaveCardImg3,
      title: "MZ세대가 생각하는 ‘핫플'의 기준이 바뀌고 있다",
      isBookmarked: false,
    },
    {
      id: 4,
      thumbnail: FaveCardImg4,
      title: "Z세대가 직접 추천해준 졸업 선물 핫 아이템6",
      isBookmarked: false,
    },
    {
      id: 5,
      thumbnail: FaveCardImg5,
      title: "쉿 우리끼리 봐요. Z세대 팬 비율이 높은 아티스트 LIST",
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
    slidesToScroll: 2,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <StyledRoot>
      <div>
        <h3>요즘 사람들이 좋아하는 공간의 비밀</h3>
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

export default FavePlace;
