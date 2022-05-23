import React from "react";
import styled from "styled-components";
import MiddleBanner from "components/home/MiddleBanner";
import NoMore from "components/home/noMore";
import KeywordTag from "components/home/KeywordTag";

function Home() {
  return (
    <StyledRoot>
      <KeywordTag />
      <MiddleBanner />
      <NoMore />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
