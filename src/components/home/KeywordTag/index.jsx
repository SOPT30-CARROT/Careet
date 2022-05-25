import React, { useEffect, useState } from "react";
import { StyledRoot } from "./style";
import api from "api/index";

function keywordTag() {
  const [keyword, setKeyword] = useState([]);
  useEffect(() => {
    const keywords = api.mock.fetchKeyword();
    keywords.then((res) => setKeyword(res));
  }, []);

  const keywordList = keyword.map((keyword) => (
    <li key={keyword.id}>{keyword.name}</li>
  ));

  return (
    <StyledRoot>
      <h3>관심 키워드로 콘텐츠 찾기</h3>
      <ul>{keywordList}</ul>
    </StyledRoot>
  );
}

export default keywordTag;
