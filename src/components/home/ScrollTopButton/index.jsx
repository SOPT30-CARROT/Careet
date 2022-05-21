import React from "react";
import { StyledScrollTopButton } from "./style";

function ScrollTopButton() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return <StyledScrollTopButton onClick={scrollTop} />;
}

export default ScrollTopButton;
