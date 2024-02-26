import axios from "axios";

export const baseAxios = axios.create({
  baseURL: "https://the-trivia-api.com/v2",
});
