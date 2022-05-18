import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.div`
  width: 130.2rem;

  h3 {
    font-family: "AppleSDGothicNeoB";
    src: url("./AppleSDNeo/AppleSDGothicNeo.ttf") format("truetype");
    font-weight: bold;
    font-size: 2.9rem;
    margin-bottom: 4.4rem;
  }

  ul {
    padding-right: 5.8rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 0.9rem;
  }

  li {
    font-family: "AppleSDGothicNeoSB00";
    src: url("./AppleSDNeo/AppleSDGothicNeoSB.ttf") format("truetype");
    font-size: 1.6rem;
    color: ${colors.gray2};
    line-height: 2.23rem;
    letter-spacing: -0.032rem;
    box-sizing: border-box;
    padding: 0.6rem 2rem;
    height: 3.6rem;
    border: 0.1rem solid ${colors.tagGray}; //색 지정 필요.
    border-radius: 1.8rem;

    &:hover {
      background-color: ${colors.orange};
      color: ${colors.white};
      cursor: pointer;
      border-color: ${colors.orange};
    }
  }
`;
