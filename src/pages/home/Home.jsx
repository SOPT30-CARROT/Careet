import React from "react";
import styled from "styled-components";
import MainTrend from "components/home/MainTrend";
import MiddleBanner from "components/home/MiddleBanner";
import KeywordTag from "components/home/KeywordTag";

function Home() {
  return (
    <StyledRoot>
      <MainTrend />
      <KeywordTag />
      <MiddleBanner />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
