import realApi from "api/index";
import ContentsCard from "components/common/ContentsCard";
import { useEffect, useState } from "react";
import { CardsContainer, StyledRoot } from "./style";

function newContents({ toggleBookmark }) {
  const [newCardsInfo, setNewCardsInfo] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await realApi.real.fetchNewContents();
      setNewCardsInfo(data);
    })();
  }, []);

  return (
    <StyledRoot>
      <h3>새로 나온 콘텐츠</h3>
      <CardsContainer>
        {newCardsInfo.map((newCard) => {
          return (
            <div key={newCard.id}>
              <ContentsCard
                CardInfo={newCard}
                onClick={() =>
                  toggleBookmark(newCardsInfo, setNewCardsInfo, newCard.id)
                }
              />
            </div>
          );
        })}
      </CardsContainer>
    </StyledRoot>
  );
}

export default newContents;
