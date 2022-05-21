import styled from "styled-components";
import { colors } from "styles/colors";
export const StyledRoot = styled.div`
  width: 130.2rem;

  h3 {
    font-family: "AppleSDGothicNeoB";
    font-size: 2.9rem;
    font-weight: bold;

    margin-bottom: 4.4rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem 0.9rem;
    padding-right: 5.8rem;
  }

  li {
    font-family: "AppleSDGothicNeoSB00";
    color: ${colors.gray2};
    font-size: 1.6rem;
    line-height: 2.23rem;
    letter-spacing: -0.032rem;

    box-sizing: border-box;
    height: 3.6rem;
    padding: 0.6rem 2rem;

    border: 0.1rem solid ${colors.tagGray};
    border-radius: 1.8rem;

    &:hover {
      background-color: ${colors.orange};
      border-color: ${colors.orange};
      color: ${colors.white};
      cursor: pointer;
    }
  }
`;
