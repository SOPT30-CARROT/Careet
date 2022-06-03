import React from "react";
import Logo from "components/common/assets/icon/logo.svg";
import Under from "components/common/assets/icon/under_arrow_ic.svg";
import MyPageIcon from "components/common/assets/icon/mypage_ic.svg";
import Border from "components/common/assets/icon/short_border_line_ic.svg";
import SearchIcon from "components/common/assets/icon/search_ic.svg";
import {
  StyledEachNav,
  StyledHeader as StyledRoot,
  StyledNav,
  StyledProfile,
  StyledRegisterButton,
  StyledUtil,
} from "./style";
function Header() {
  const NAV_META = [
    { id: 1, name: "Contents" },
    { id: 2, name: "Trend letter" },
    { id: 3, name: "Dictionary" },
    { id: 4, name: "News" },
  ];
  const selected = 1;
  return (
    <StyledRoot>
      <StyledNav>
        <img src={Logo} />
        {NAV_META.map(({ id, name }) => (
          <StyledEachNav key={id}>
            {name}
            {selected === id && <img src={Under} />}
          </StyledEachNav>
        ))}
      </StyledNav>
      <StyledUtil>
        <StyledRegisterButton>지금 멤버십 가입</StyledRegisterButton>
        <StyledProfile>
          <span>더솝트님</span>
          <img src={MyPageIcon} />
        </StyledProfile>
        <img src={Border} />
        <img src={SearchIcon} />
      </StyledUtil>
    </StyledRoot>
  );
}

export default Header;
