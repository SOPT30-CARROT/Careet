import React, { useEffect, useState } from "react";
import { StyledRoot, StyledContainer } from "./style";
import api from "api/index";

function hotContents() {
  const [hotContent, setHotContent] = useState([]);
  useEffect(() => {
    const hotContents = api.mock.fetchHotContents();
    hotContents.then((res) => setHotContent(res.slice(0, 6)));
  }, []);

  const hotContentList = hotContent.map((hotContent, index) => (
    <li key={hotContent.id}>
      <span>{index + 1}</span>
      <img src={hotContent.description} />
      <p>{hotContent.description}</p>
    </li>
  ));

  return (
    <StyledRoot>
      <StyledContainer>
        <h3>요즘 대세! 인기 콘텐츠</h3>
        <ul>{hotContentList}</ul>
      </StyledContainer>
    </StyledRoot>
  );
}

export default hotContents;
