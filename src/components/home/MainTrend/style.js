import styled from "styled-components";
import { colors } from "styles/colors";

const StyledRoot = styled.div`
  width: 138.8rem;
  height: 41.2rem;
  background-color: ${colors.orange};
  position: relative;

  //화살표 아이콘 정렬.
  svg {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  }

  svg:nth-of-type(2) {
    right: 0;
  }
`;

const StyledContainer = styled.div`
  width: 131rem;
  height: 100%;
  margin: 0 auto;
  background-color: ${colors.gray1};
`;

export { StyledRoot, StyledContainer };
