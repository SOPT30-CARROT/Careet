import styled from "styled-components";
import { colors } from "styles/colors";
import { ReactComponent as ArrowLeft } from "components/common/assets/icon/arrow_l.svg";
import { ReactComponent as ArrowRight } from "components/common/assets/icon/arrow_r.svg";

import { ReactComponent as ViewIcon } from "components/common/assets/icon/eye_ic.svg";
import { ReactComponent as BookmarkIcon } from "components/common/assets/icon/bookmark_ic_s.svg";
import { ReactComponent as ShareIcon } from "components/common/assets/icon/share_ic.svg";

import { ReactComponent as Bookmark } from "components/common/assets/icon/bookmark_ic.svg";

const StyledRoot = styled.div`
  width: 138.8rem;
  height: 41.2rem;
  position: relative;
`;

const StyledArrowLeft = styled(ArrowLeft)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
`;

const StyledArrowRight = styled(ArrowRight)`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  right: 0;
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
`;

const StyledBookmark = styled(Bookmark)`
  width: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const InfoText = styled.div`
  width: 100%;
  text-align: center;
  white-space: pre-wrap;

  h1 {
    font-family: "AppleSDGothicNeoB00";
    font-size: 1.7rem;
    color: ${colors.orange};
    margin-top: 5.3rem;
    margin-bottom: 1.5rem;
  }
  h2 {
    font-family: "AppleSDGothicNeoEB00";
    font-size: 3.6rem;
    font-weight: 400;
    color: ${colors.black};
    margin-bottom: 1.1rem;
    line-height: 4.561rem;
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

const ImageWrapper = styled.div``;

export {
  StyledRoot,
  StyledContainer,
  ImageWrapper,
  InfoText,
  StyledArrowLeft,
  StyledArrowRight,
  StyledViewIcon,
  StyledBookmarkIcon,
  StyledShareIcon,
  StyledBookmark,
};
