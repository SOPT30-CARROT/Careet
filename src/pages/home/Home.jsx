import React from "react";
import styled from "styled-components";
import FavPlace from "pages/home/FavPlace";
import MiddleBanner from "components/home/MiddleBanner";

function Home() {
  return (
    <StyledRoot>
      <FavPlace />
      <MiddleBanner />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
