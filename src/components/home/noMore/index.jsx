import ContentsCard from "components/common/ContentsCard";
import React, { useCallback, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import api from "api/index";

import { ButtonWrapper, StyledRoot, StyledSlider } from "./style";
import { ReactComponent as PrevArrow } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as NextArrow } from "components/common/assets/icon/arrow_r.svg";

function NoMore({ toggleBookmark }) {
  const [noMoreCardsInfo, setNoMoreCardsInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await api.api.mock.fetchLowerSlider();
      setNoMoreCardsInfo(data);
    })();
  }, []);

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
        {noMoreCardsInfo.map((noMoreCard) => {
          return (
            <div key={noMoreCard.id}>
              <ContentsCard
                CardInfo={noMoreCard}
                onClick={() =>
                  toggleBookmark(
                    noMoreCardsInfo,
                    setNoMoreCardsInfo,
                    noMoreCard.id
                  )
                }
              />
            </div>
          );
        })}
      </StyledSlider>
    </StyledRoot>
  );
}

export default NoMore;
