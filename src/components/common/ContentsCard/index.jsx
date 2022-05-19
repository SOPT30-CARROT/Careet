import React from "react";
import { ImgWrapper, StyledRoot, Title } from "./style";
import { ReactComponent as Mark } from "components/common/assets/icon/bookmark_ic_s.svg";
import { ReactComponent as UnMark } from "components/common/assets/icon/bookmark_ic.svg";

function ContentsCard({ thumbnail, title, isBookmarked }) {
  return (
    <StyledRoot>
      <ImgWrapper>
        <img src={thumbnail} alt="썸네일" />
      </ImgWrapper>
      <Title>{title}</Title>
      {isBookmarked === true ? <Mark /> : <UnMark />}
    </StyledRoot>
  );
}

export default ContentsCard;
