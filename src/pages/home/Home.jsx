import React from "react";
import styled from "styled-components";
import FavePlace from "components/home/FavePlace";
import MiddleBanner from "components/home/MiddleBanner";
import KeywordTag from "components/home/KeywordTag";

function Home() {
  return (
    <StyledRoot>
      <KeywordTag />
      <FavePlace />
      <MiddleBanner />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
