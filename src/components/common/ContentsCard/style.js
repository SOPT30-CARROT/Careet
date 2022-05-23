import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  width: 42rem;
  height: 34.8rem;
  font-family: "AppleSDGothicNeoB00";
  margin-right: 0.2rem;
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
  width: 40.1rem;
  height: 6.2rem;
`;

export const BookmarkWrapper = styled.div`
  /*  정렬할 때는  요소에 float 먹이기!*/
  margin-right: 0.3rem;
  svg {
    float: right;
  }
`;
