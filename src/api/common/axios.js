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
