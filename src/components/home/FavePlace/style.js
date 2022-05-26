import styled from "styled-components";
import { colors } from "styles/colors";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 8.6rem;
  margin-bottom: 4.9rem;

  div {
    display: flex;
    justify-content: space-between;
    h3 {
      font-family: "AppleSDGothicNeoM00";
      font-size: 2.9rem;
      font-weight: bold;
      margin-bottom: 3.8rem;
      color: ${colors.black};
    }
  }
`;

export const ButtonWrapper = styled.div`
  gap: 2.7rem;
  button {
    border: 0;
    outline: 0;
    background-color: transparent;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-list {
    width: 130rem;
    margin-left: 1.2rem;
    margin-right: 1rem;
  }

  .slick-slide div {
    outline: none;
    width: 43rem;
  }
`;
