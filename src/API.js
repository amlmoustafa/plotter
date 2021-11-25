import { camelizeKeys } from "humps";
import axios from "axios";

export const API_BASE_URL = "https://plotter-task.herokuapp.com";

export const fetchColumns = () => {
  return axios({
    method: "get",
    url: `${API_BASE_URL}/columns`,
  }).then((response) => camelizeKeys(response));
};
