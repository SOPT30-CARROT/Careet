import { mockReq, realReq } from "./common/axios";
import { PATH } from "./common/constants";

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
  return realReq.GET(PATH.NEW_CONTENTS);
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
  mutateBookmark,
};

export const real = {
  fetchNewContents,
};
