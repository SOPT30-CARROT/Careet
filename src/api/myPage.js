import { realReq } from "./common/axios";
import { PATH } from "./common/constants";

function fetchBookmark() {
  return realReq.GET(`${PATH.BOOKMARKED}/628ccd7c020e2964ddd2c153`);
}

export const real = {
  fetchBookmark,
};
