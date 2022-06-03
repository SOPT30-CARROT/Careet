import React from "react";
import Banner from "components/common/assets/img/mypage_banner.png";
import {
  StyledBannerInfo,
  StyledCopyButton,
  StyledRecommendWrapper,
  StyledRecordWrapper,
  StyledRoot,
} from "./style";

function BannerSection() {
  return (
    <StyledRoot>
      <img src={Banner} />
      <StyledBannerInfo>
        <StyledRecordWrapper>
          <div>지금까지</div>
          <span>0명</span>
          <div>을 초대하고 포인트</div>
          <span>0원</span>
          <div>을 받았습니다.</div>
        </StyledRecordWrapper>
        <StyledRecommendWrapper>
          <div>더솝트님의 추천인 코드 - 21057A14DE</div>
          <StyledCopyButton>복사하기</StyledCopyButton>
        </StyledRecommendWrapper>
      </StyledBannerInfo>
    </StyledRoot>
  );
}

export default BannerSection;
