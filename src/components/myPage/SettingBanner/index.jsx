import React from "react";
import ProfileIcon from "components/common/assets/icon/mypage_ic.svg";
import SettingIcon from "components/common/assets/icon/setting_ic.svg";
import {
  StyledMainInfo,
  StyledMyInfo,
  StyledRoot,
  StyledSpanWrapper,
  StyledSubInfo,
} from "./style";

function SettingBanner() {
  return (
    <StyledRoot>
      <StyledMyInfo>
        <StyledMainInfo>
          <img src={ProfileIcon} />
          <span>더 솝트</span>
          <img src={SettingIcon} />
        </StyledMainInfo>
        <StyledSubInfo>
          <div>thesopt@gmail.com</div>
          <StyledSpanWrapper>
            <span>{`정보 수정>`}</span>
          </StyledSpanWrapper>
        </StyledSubInfo>
      </StyledMyInfo>
    </StyledRoot>
  );
}

export default SettingBanner;
