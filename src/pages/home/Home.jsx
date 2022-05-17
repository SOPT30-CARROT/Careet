import React from "react";
import styled from "styled-components";
import MiddleBanner from "components/home/MiddleBanner";

function Home() {
  return (
    <StyledRoot>
      <MiddleBanner />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div`
  width: 172.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
