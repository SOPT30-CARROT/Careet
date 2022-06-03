import React from "react";
import ArticleSection from "../ArticleSection";
import BannerSection from "../BannerSection";
import Nav from "../Nav";
import { StyledRoot } from "./style";

function MainSection() {
  return (
    <StyledRoot>
      <Nav />
      <BannerSection />
      <ArticleSection />
    </StyledRoot>
  );
}

export default MainSection;
