import { mockReq, realReq } from "./common/axios";
import { PATH } from "./common/constants";

function fetchBookmark() {
  return realReq.GET(`${PATH.BOOKMARKED}/628ccd7c020e2964ddd2c153`);
}

function fetchMainBanner() {
  return mockReq.GET(PATH.MAIN_BANNER);
}

function fetchKeyword() {
  return mockReq.GET(PATH.KEYWORD);
}

function fetchUpperSlider() {
  return mockReq.GET(PATH.UPPER_SLIDER);
}

function fetchLowerSlider() {
  return mockReq.GET(PATH.LOWER_SLIDER);
}

function fetchHotContents() {
  return mockReq.GET(PATH.HOT_CONTENTS);
}

function fetchNewContents() {
  return mockReq.GET(PATH.NEW_CONTENTS);
}
function mutateBookmark(category, id, payload) {
  switch (category) {
    case "MAIN_BANNER":
      return mockReq.PATCH(`${PATH.MAIN_BANNER}/${id}`, {
        bookmarked: payload,
      });
    case "UPPER_SLIDER":
      return mockReq.PATCH(`${PATH.UPPER_SLIDER}/${id}`, {
        bookmarked: payload,
      });
    case "LOWER_SLIDER":
      return mockReq.PATCH(`${PATH.LOWER_SLIDER}/${id}`, {
        bookmarked: payload,
      });
    case "NEW_CONTENTS":
      return mockReq.PATCH(`${PATH.NEW_CONTENTS}/${id}`, {
        bookmarked: payload,
      });
    default:
      throw new Error("존재하지 않는 경로입니다.");
  }
}

export const mock = {
  fetchMainBanner,
  fetchKeyword,
  fetchUpperSlider,
  fetchLowerSlider,
  fetchHotContents,
  fetchNewContents,
  mutateBookmark,
};

export const real = {
  fetchBookmark,
};
