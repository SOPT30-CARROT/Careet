import React from "react";
import styled from "styled-components";
import FavePlace from "components/home/FavePlace";
import MiddleBanner from "components/home/MiddleBanner";
import NoMore from "components/home/noMore";
import KeywordTag from "components/home/KeywordTag";
import HotContents from "components/home/hotContents";

function Home() {
  return (
    <StyledRoot>
      <KeywordTag />
      <FavePlace />
      <MiddleBanner />
      <NoMore />
      <HotContents />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
