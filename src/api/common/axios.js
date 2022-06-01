import axios from "axios";

const MOCK_BASE_URL = "http://localhost:8080";
const mock = axios.create({
  baseURL: MOCK_BASE_URL,
});

export const mockReq = {
  async GET(path) {
    const { data } = await mock(path);
    return data;
  },

  async PATCH(path, body) {
    await mock.patch(path, body);
  },
};

const REAL_BASE_URL = "13.125.254.72:8000";
const real = axios.create({
  baseURL: REAL_BASE_URL,
});

export const realReq = {
  async GET(path) {
    const { data } = await real(path);
    return data;
  },

  async PATCH(path, body) {
    await real.patch(path, body);
  },
};
