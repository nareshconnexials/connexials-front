import axios from "axios";
import { getToken } from "../helpers/Utils";
import { apiURL } from "../utils/constants";

const config = {
  baseURL: apiURL,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
};

const configuredAxios = axios.create(config);

export default configuredAxios;
