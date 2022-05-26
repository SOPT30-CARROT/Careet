import React, { useEffect, useState } from "react";
import { StyledRoot } from "./style";
import api from "api/index";

function hotContents() {
  const [hotContent, setHotContent] = useState([]);
  useEffect(() => {
    const hotContents = api.mock.fetchHotContents();
    hotContents.then((res) => setHotContent(res));
  }, []);

  const hotContentList = hotContent.map((hotContent) => (
    <li key={hotContent.id}>{hotContent.description}</li>
  ));

  return (
    <StyledRoot>
      <h3>요즘 대세! 인기 콘텐츠</h3>
      <ul>{hotContentList}</ul>
    </StyledRoot>
  );
}

export default hotContents;
