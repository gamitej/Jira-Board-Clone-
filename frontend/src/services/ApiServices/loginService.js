import axios from "axios";
import config from "../config.json";

const endpoint = config.apiEndpoint + "/login";

export const postLogin = async (req) => {
  // eslint-disable-next-line
  const data = await axios.post(endpoint, req);
  return data;
};

export const checkUser = () => {
  const val = window.sessionStorage.getItem("user");
  return val;
};
