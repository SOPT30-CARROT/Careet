import styled from "styled-components";
import { colors } from "styles/colors";

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 2.5rem 21.3rem;
  font-family: "Helvetica";
  font-weight: 700;
  line-height: 2rem;
  letter-spacing: -0.02em;
`;

export const StyledNav = styled.nav`
  display: flex;
  width: 59.7rem;
  justify-content: space-between;
  align-items: center;
`;

export const StyledEachNav = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;

  & > img {
    margin-left: 1.1rem;
  }
`;

export const StyledUtil = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & > img:last-child {
    margin-left: 2rem;
  }
`;

export const StyledRegisterButton = styled.button`
  border: 1px solid ${colors.gray2};
  border-radius: 2rem;
  background-color: transparent;
  color: ${colors.gray2};
  padding: 1.2rem 1.3rem;
  font-size: 1.3rem;
`;

export const StyledProfile = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.7rem;
  margin: 0 2rem;

  & > img {
    margin-left: 1rem;
  }
`;

export const StyledFooter = styled.footer`
  width: 100%;
  height: 53.1rem;
  background-color: ${colors.bgGray};
  display: flex;
  justify-content: center;
  padding: 0 21.3rem;
`;
