import React from "react";
import styled from "styled-components";
import FavePlace from "pages/home/FavePlace";
import MiddleBanner from "components/home/MiddleBanner";

function Home() {
  return (
    <StyledRoot>
      <FavePlace />
      <MiddleBanner />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
