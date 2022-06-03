import axios from "axios";
import React, { useEffect, useState } from "react";
import Article from "../Article";
import { StyledArticleWrapper, StyledRoot } from "./style";

function ArticleSection() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios("bookmark/628ccd7c020e2964ddd2c153", {
        headers: { "Content-Type": "application/json" },
      });
      setArticles(data.data.contents);
    })();
  }, []);

  return (
    <StyledRoot>
      <StyledArticleWrapper>
        {articles.map((article) => (
          <Article key={article.id} article={article} />
        ))}
      </StyledArticleWrapper>
    </StyledRoot>
  );
}

export default ArticleSection;
