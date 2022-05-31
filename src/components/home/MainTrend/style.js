import styled, { keyframes, css } from "styled-components";
import { colors } from "styles/colors";
import { ReactComponent as ArrowLeft } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as ArrowRight } from "components/common/assets/icon/arrow_r.svg";

import { ReactComponent as ViewIcon } from "components/common/assets/icon/eye_ic.svg";
import { ReactComponent as BookmarkIcon } from "components/common/assets/icon/bookmark_ic_s.svg";
import { ReactComponent as ShareIcon } from "components/common/assets/icon/share_ic.svg";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const StyledRoot = styled.div`
  width: 138.8rem;
  height: 41.2rem;
  position: relative;
  margin-top: 4.7rem;
  margin-bottom: 4.9rem;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  cursor: pointer;
  &:hover {
    path {
      stroke: ${colors.gray1};
    }
  }
`;

const StyledArrowRight = styled(ArrowRight)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 0;
  cursor: pointer;

  &:hover {
    path {
      stroke: ${colors.gray1};
    }
  }
`;

const StyledViewIcon = styled(ViewIcon)`
  margin-right: 0.5rem;
`;

const StyledBookmarkIcon = styled(BookmarkIcon)`
  margin-left: 1.9rem;
  margin-right: 0.5rem;
`;

const StyledShareIcon = styled(ShareIcon)`
  margin-left: 1.9rem;
  margin-right: 0.5rem;
`;

const StyledContainer = styled.div`
  width: 131rem;
  height: 100%;
  margin: 0 auto;
  display: flex;
  position: relative;
  cursor: pointer;
`;

const BookmarkWrapper = styled.div`
  width: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const InfoText = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;
  animation: ${(props) =>
    props.changeState === true
      ? css`
          ${fadeIn} 300ms ease-out;
        `
      : ""};
  h1 {
    font-family: "AppleSDGothicNeoB00";
    font-size: 1.7rem;
    color: ${colors.orange};
    margin-top: 5.3rem;
    margin-bottom: 1.5rem;
  }
  p {
    font-family: "AppleSDGothicNeoSB00";
    font-size: 1.55rem;
    color: ${colors.gray1};
    margin-bottom: 2.9rem;
    line-height: 2.382rem;
  }

  span {
    font-family: "Futura";
    font-size: 1.3rem;
    color: ${colors.gray1};
    line-height: 1.537rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Title = styled.h2`
  font-family: "AppleSDGothicNeoEB00";
  font-size: 3.6rem;
  font-weight: 400;
  margin-bottom: 1.1rem;
  line-height: 4.561rem;

  ${StyledContainer}:hover & {
    color: ${colors.orange};
  }
`;

export {
  StyledRoot,
  StyledContainer,
  InfoText,
  Title,
  StyledArrowLeft,
  StyledArrowRight,
  StyledViewIcon,
  StyledBookmarkIcon,
  StyledShareIcon,
  BookmarkWrapper,
};
