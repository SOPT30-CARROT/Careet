import React from "react";
import { StyledRoot } from "./style";

function keywordTag() {
  const keywords = [
    {
      id: "marketingReference",
      name: "마케팅레퍼런스",
    },
    {
      id: "influencer",
      name: "인플루언서",
    },
    {
      id: "sns",
      name: "SNS",
    },
    {
      id: "teenTrends",
      name: "10대트렌드",
    },
    {
      id: "recruitment",
      name: "채용",
    },
    {
      id: "fanCulture",
      name: "덕질문화",
    },
    {
      id: "collaboration",
      name: "콜라보",
    },
    {
      id: "data",
      name: "데이터",
    },
    {
      id: "buzzword",
      name: "유행어",
    },
    {
      id: "genz-communication",
      name: "Z세대소통법",
    },
    {
      id: "goods",
      name: "굿즈",
    },
    {
      id: "trendAbroad",
      name: "해외트렌드",
    },
    {
      id: "metaverse",
      name: "메타버스",
    },
    {
      id: "environmentFriendly",
      name: "친환경",
    },
    {
      id: "esg",
      name: "ESG",
    },
    {
      id: "organisationCulture",
      name: "조직문화",
    },
    {
      id: "meme",
      name: "밈",
    },
    {
      id: "modelCast",
      name: "모델섭외",
    },
    {
      id: "riskManagement",
      name: "리스크관리",
    },
    {
      id: "persona",
      name: "페르소나",
    },
    {
      id: "consumeTrend",
      name: "소비트렌드",
    },
    {
      id: "community",
      name: "커뮤니티",
    },
    {
      id: "shortForm",
      name: "숏폼",
    },
    {
      id: "space",
      name: "공간",
    },
    {
      id: "tiktok",
      name: "틱톡",
    },
  ];
  const keywordList = keywords.map((keyword) => (
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
