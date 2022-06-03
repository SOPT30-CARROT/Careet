import React, { useEffect, useState } from "react";
import { StyledRoot, StyledContainer } from "./style";
import axios from "axios";

function hotContents() {
  const [hotContent, setHotContent] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/content/popular");
        setHotContent(response.data.data.contents.slice(0, 6));
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const hotContentList = hotContent.map((hotContent, index) => (
    <li key={hotContent._id}>
      <span>{index + 1}</span>
      <img src={hotContent.thumbnail} />
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
