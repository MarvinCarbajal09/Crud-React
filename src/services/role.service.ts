import axios from "axios";
import { API_URL } from "../utils/constants";
import { GetToken } from "../utils/local_data";
import { GetRol } from "../types/role.type";
import { BasicResponse } from "../types/golbal.types";

export const get_roles = async () => {
  const { data } = await axios.get<{ roles: GetRol[] }>(API_URL + "/rol", {
    headers: {
      token: GetToken(),
    },
  });
  return data;
};
export const create_roles = async (rol: string) => {
  const { data } = await axios.post<BasicResponse>(
    API_URL + "/rol",
    { rol },
    {
      headers: {
        token: GetToken(),
      },
    }
  );

  return data;
};

export const update_rol = async (rol: GetRol) => {
  const { data } = await axios.put<{ ok: boolean; msg: string }>(
    API_URL + "/rol/" + rol.id,
      rol,
    {
      headers: {
        token: GetToken(),
      },
    }
  );
  return data;
};

export const delete_rol = async (id: number) => {
  const { data } = await axios.delete<{ ok: boolean; msg: string }>(
    API_URL + "/rol/" + id,
    {
      headers: {
        token: GetToken(),
      },
    }
  );
  return data;
};
