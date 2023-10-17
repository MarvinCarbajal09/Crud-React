import { API_URL } from './../utils/constants';
import axios from "axios";
import { LoginPayload } from "../types/auth.types"

export const make_login = async (payload: LoginPayload) => {
  const { data } = await axios.post<{ msg: string; token: string,ok:boolean }>(
    API_URL + "/login/sign",
    payload
  );

  return data;
};
