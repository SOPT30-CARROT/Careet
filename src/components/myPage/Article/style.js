import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.article`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  height: 21.6rem;
  font-size: "AppleSDGothicNeoM00";
`;

export const StyledTitle = styled.div`
  font-weight: 400;
  font-size: 3rem;
  letter-spacing: -0.015em;
`;

export const StyledDescription = styled.div`
  font-weight: 400;
  font-size: 1.6rem;
  letter-spacing: -0.03em;
  color: ${colors.gray1};
  margin-top: 2rem;
`;

export const StyledX = styled.img`
  width: 1.6rem;
  height: 1.6rem;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;
