import React from "react";
import styled from "styled-components";
import FavPlace from "pages/home/FavPlace";

function Home() {
  return (
    <StyledRoot>
      <FavPlace />
    </StyledRoot>
  );
}

export default Home;

const StyledRoot = styled.div``;
