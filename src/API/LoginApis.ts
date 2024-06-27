import axios from "axios";
import { API } from "./API";
import { loginPayloadType } from "../Types/Types";

export const LoginAPI = async (data: loginPayloadType) => {
  try {
    const payload = {
      username: data.email,
      password: data.password,
    };
    const res = await axios.post(API.baseUrl + API.login, payload);
    return res.data;
  } catch (err) {
    throw err;
  }
};
