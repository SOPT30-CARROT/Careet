import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.8rem;
  height: 34.8rem;
`;

export const ImgWrapper = styled.div`
  img {
    width: 41.8rem;
    height: 23.2rem;
  }
`;

export const Title = styled.div`
  color: ${colors.black};
  font-size: 22px;
  letter-spacing: -1.5%;
  margin-top: 1.6rem;
  margin-bottom: 1.7rem;
  font-family: "AppleSDGothicNeoB";
`;

export const BookmarkWrapper = styled.div`
  /* position: absolute; */
`;
