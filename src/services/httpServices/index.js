import axios from "axios";

export const baseRequest = axios.create({
  baseURL: "https://baconipsum.com/api",
});

export { getTextRequest } from "./text";
