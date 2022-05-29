import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.div`
  background-color: ${colors.bgGray};
  width: 100vw;
  margin-left: calc(-50vw + 50%);
  padding-top: 6.8rem;
  padding-bottom: 8.3rem;
  display: flex;
  justify-content: center;

  h3 {
    font-family: "AppleSDGothicNeoB";
    font-size: 2.9rem;
    font-weight: bold;

    margin-bottom: 3rem;
  }

  ul {
    height: 35.2rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5.6rem;
  }

  li {
    width: 61.9rem;
    height: 8rem;

    display: flex;
  }

  //번호.
  li > span {
    font-family: "Montserrat";
    font-size: 3.2rem;
    letter-spacing: -0.03em;
    margin: auto 0;
  }

  li > img {
    width: 13.8rem;
    height: 7.6rem;
    margin-left: 2.6rem;
    margin-right: 2.1rem;
  }

  //description.
  li > p {
    font-family: "AppleSDGothicNeoSB00";
    font-weight: 400;
    font-size: 1.95rem;
    line-height: 2.7rem;
    letter-spacing: -0.02em;

    width: 42.2rem;
  }
`;

export const StyledContainer = styled.div`
  width: 127.3rem;
  height: 41.6rem;
  padding-right: 2.9rem;
`;
