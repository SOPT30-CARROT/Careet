import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  font-family: "AppleSDGothicNeoM00";
  letter-spacing: -0.03em;
`;

export const StyledMainNav = styled.div`
  display: flex;
  width: 44rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledMainEach = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: ${({ selected }) => (selected ? colors.orange : colors.gray2)};
  cursor: pointer;
  &:hover {
    color: ${colors.orange};
  }
`;

export const StyledSubNav = styled.div`
  display: flex;
  width: 25.2rem;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  font-size: 1.7rem;
  font-weight: bold;
`;

export const StyledPoint = styled.div`
  display: flex;
  align-items: center;
  & > span:last-child {
    color: ${colors.orange};
    border-bottom: 1px solid ${colors.orange};
    margin-left: 0.3rem;
  }
`;
