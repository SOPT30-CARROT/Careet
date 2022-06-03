import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.section`
  width: 100%;
  padding-top: 5rem;
`;

export const StyledArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & > article {
    border-top: 1px solid ${colors.lineGray};
  }
  & > article:last-child {
    border-bottom: 1px solid ${colors.lineGray};
  }
`;
