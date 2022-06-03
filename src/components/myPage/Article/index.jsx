import React from "react";
import X from "components/common/assets/icon/X_ic.svg";
import { StyledDescription, StyledRoot, StyledTitle, StyledX } from "./style";

function Article({ article }) {
  const { title, description } = article;
  return (
    <StyledRoot>
      <StyledTitle>{title}</StyledTitle>
      <StyledDescription>{description}</StyledDescription>
      <StyledX src={X} />
    </StyledRoot>
  );
}

export default Article;
