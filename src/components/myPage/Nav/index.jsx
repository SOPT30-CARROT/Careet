import React from "react";
import {
  StyledMainEach,
  StyledMainNav,
  StyledPoint,
  StyledRoot,
  StyledSubNav,
} from "./style";

function Nav() {
  const MAIN_META = [
    { id: 1, name: "알림", count: 0 },
    { id: 2, name: "북마크", count: 3 },
    { id: 3, name: "하이라이트와 메모", count: 1 },
    { id: 4, name: "알림", count: 10 },
  ];

  return (
    <StyledRoot>
      <StyledMainNav>
        {MAIN_META.map(({ id, name, count }) => (
          <StyledMainEach key={id}>
            <span>{`${name} (${count})`}</span>
          </StyledMainEach>
        ))}
      </StyledMainNav>
      <StyledSubNav>
        <a>멤버쉽 관리</a>
        <StyledPoint>
          <a>포인트</a> <span>0원</span>
        </StyledPoint>
        <a>쿠폰 등록</a>
      </StyledSubNav>
    </StyledRoot>
  );
}

export default Nav;
