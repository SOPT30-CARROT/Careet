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

const StyledRoot = styled.div``;
