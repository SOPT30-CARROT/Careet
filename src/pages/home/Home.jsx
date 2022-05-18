import React from "react";
import styled from "styled-components";
import MiddleBanner from "components/home/MiddleBanner";
import KeywordTag from "components/home/KeywordTag";

function Home() {
  return (
    <StyledRoot>
      <KeywordTag />
      <MiddleBanner />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
