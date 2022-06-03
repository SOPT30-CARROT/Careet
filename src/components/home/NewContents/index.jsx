import api from "api/index";
import axios from "axios";
import ContentsCard from "components/common/ContentsCard";
import { useEffect, useState } from "react";
import { CardsContainer, StyledRoot } from "./style";

function newContents() {
  const [newCardsInfo, setNewCardsInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/content/recent");
        setNewCardsInfo(response.data.contents);
      } catch (e) {
        console.error(e);
      }
    };
    fetchData();
  }, []);

  const toggleBookmark = (CardsInfo, setCardsInfo, id) => {
    const postBookmark = async () => {
      try {
        const data = await api.realApi.real.postToggleBookmark(
          `/${id}/628ccd7c020e2964ddd2c153`
        );
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
    postBookmark();
    const newCardsInfo = CardsInfo.map((Card) => {
      if (id === Card._id) Card.isBookmarked = !Card.isBookmarked;
      return Card;
    });

    setCardsInfo(newCardsInfo);
  };

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
                  toggleBookmark(newCardsInfo, setNewCardsInfo, newCard._id)
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
