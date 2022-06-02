import api from "api/index";
import ContentsCard from "components/common/ContentsCard";
import { useEffect, useState } from "react";
import { CardsContainer, StyledRoot } from "./style";

function newContents({ toggleBookmark }) {
  const [newCardsInfo, setNewCardsInfo] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await api.realApi.real.fetchNewContents();
      setNewCardsInfo(data.data.contents);
    })();
  }, []);

  return (
    <StyledRoot>
      <h3>새로 나온 콘텐츠</h3>
      <CardsContainer>
        {newCardsInfo?.slice(0, 6).map((newCard) => {
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
