import React from "react";
import styled from "styled-components";
import MiddleBanner from "components/home/MiddleBanner";
import NoMore from "components/home/noMore";

function Home() {
  return (
    <StyledRoot>
      <MiddleBanner />
      <NoMore />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
