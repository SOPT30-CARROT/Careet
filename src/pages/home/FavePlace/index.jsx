import ContentsCard from "components/common/ContentsCard";
import React, { useState } from "react";
import { StyledRoot } from "./style";
import { FaveCardImg1 } from "components/common/assets/img/fave_card_img1.png";
import { FaveCardImg2 } from "components/common/assets/img/fave_card_img2.png";
import { FaveCardImg3 } from "components/common/assets/img/fave_card_img3.png";
import { FaveCardImg4 } from "components/common/assets/img/fave_card_img4.png";
import { FaveCardImg5 } from "components/common/assets/img/fave_card_img5.png";

// img랑 title이랑 북마크 여부를 각각 객체로 만들것인지
// or 카드별로 img/title/븍마크 를 묶을지
// const faveCardImg = [
//   FaveCardImg1,
//   FaveCardImg2,
//   FaveCardImg3,
//   FaveCardImg4,
//   FaveCardImg5,
// ];
// const faveCardTitle = [
//   "넷플릭스가 MZ세대에게 ‘팝업 스토어’ 맛집으로 소문난 이유",
//   "오픈 3일 만에 6억 원 매출? 와인 전문 매장'보틀벙커' 체험기",
//   "MZ세대가 생각하는 ‘핫플'의 기준이 바뀌고 있다",
//   "Z세대가 직접 추천해준 졸업 선물 핫 아이템6",
//   "쉿 우리끼리 봐요. Z세대 팬 비율이 높은 아티스트 LIST",
// ];

function FavePlace() {
  const [faveCard1Bookmarked, setfaveCard1Bookmarked] = useState(false);
  const [faveCard2Bookmarked, setfaveCard2Bookmarked] = useState(false);
  const [faveCard3Bookmarked, setfaveCard3Bookmarked] = useState(false);
  const [faveCard4Bookmarked, setfaveCard4Bookmarked] = useState(false);
  const [faveCard5Bookmarked, setfaveCard5Bookmarked] = useState(false);

  const faveCardsArr = [
    [
      FaveCardImg1,
      "넷플릭스가 MZ세대에게 ‘팝업 스토어’ 맛집으로 소문난 이유",
      faveCard1Bookmarked,
    ],
    [
      FaveCardImg2,
      "오픈 3일 만에 6억 원 매출? 와인 전문 매장'보틀벙커' 체험기",
      faveCard2Bookmarked,
    ],
    [
      FaveCardImg3,
      "MZ세대가 생각하는 ‘핫플'의 기준이 바뀌고 있다",
      faveCard3Bookmarked,
    ],
    [
      FaveCardImg4,
      "Z세대가 직접 추천해준 졸업 선물 핫 아이템6",
      faveCard4Bookmarked,
    ],
    [
      FaveCardImg5,
      "쉿 우리끼리 봐요. Z세대 팬 비율이 높은 아티스트 LIST",
      faveCard5Bookmarked,
    ],
  ];

  return (
    <StyledRoot>
      {/* {faveCardsArr.map(faveCard => <ContentsCard thumbnail={faveCard[0]} title={faveCard[1]} isBookmarked={faveCard[2]})} */}
    </StyledRoot>
  );
}

export default FavePlace;
