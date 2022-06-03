import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledRoot = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 6rem;
`;

export const StyledBannerInfo = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  font-family: "AppleSDGothicNeoM00";
  margin-top: 2rem;
  letter-spacing: -0.035em;
`;

export const StyledRecordWrapper = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-weight: 400;
  & > span {
    color: ${colors.orange};
    margin-left: 0.3rem;
  }
`;

export const StyledRecommendWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const StyledCopyButton = styled.button`
  font-family: "Helvetica";
  border: none;
  border-radius: 1.95rem;
  padding: 1.2rem 5.2rem;
  background-color: ${colors.bgGray};
  margin-left: 0.75rem;
`;
