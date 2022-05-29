import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;
  h3 {
    font-family: "AppleSDGothicNeoM00";
    font-size: 2.9rem;
    font-weight: bold;
    margin-bottom: 3.1rem;
    color: ${colors.black};
  }
`;

export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
