import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 18.4rem;
  font-family: "AppleSDGothicNeoM00";
  background-color: ${colors.bgGray};
`;

export const StyledMyInfo = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 400;
`;

export const StyledMainInfo = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-weight: bold;
    font-size: 3rem;
    margin: 0 0.85rem;
  }
`;

export const StyledSubInfo = styled.div`
  display: flex;
  font-size: 1.5rem;
  padding-top: 1.7rem;
`;

export const StyledSpanWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  margin-left: 1.45rem;
`;
