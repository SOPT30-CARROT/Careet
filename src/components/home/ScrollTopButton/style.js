import styled from "styled-components";
import { ReactComponent as ScrollTopButton } from "components/common/assets/icon/navi_ic.svg";

export const StyledScrollTopButton = styled(ScrollTopButton)`
  width: 6.7rem;
  height: 6.7rem;
  position: sticky;
  bottom: 0;
  margin-left: calc(100vw - 6.7rem);
`;
