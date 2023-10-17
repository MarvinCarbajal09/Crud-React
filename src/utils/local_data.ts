import jwtDecode from "jwt-decode";

export const SaveToken = 


(token: string) => {
  localStorage.setItem("@token", token);
};

export const GetToken = () => {
  return localStorage.getItem("@token") || "";
};

export const isExpiredToken = (token: string) => {
  const { exp } = jwtDecode(token) as { exp: number };
  const expire = exp * 1000;
  const timeOut = expire - Date.now();
  if (timeOut < 0) {
    return true;
  }
  return false;
};

export const IsAuth = () => {
  const token = GetToken();
  if (token) {
    return !isExpiredToken(token);
  } else {
    return false;
  }
};

export const RemoveToken = () => {
  localStorage.removeItem("token");
};
