import { SaveToken } from './../utils/local_data';
import { LoginPayload } from "./../types/auth.types";

import { create } from "zustand";
import { GetToken, IsAuth, RemoveToken } from "../utils/local_data";
import { AuthState } from "../types/authStore.types";
import { ShowToast } from "../plugins/sweet-alert";
import { make_login } from "../services/auth.service";


export const useStore = create<AuthState>((set) => ({
  token: GetToken(),
  is_auth: IsAuth(),
  async OnMakeLogin(payload: LoginPayload) {
    const data = await make_login(payload);
    if (data.ok) {
      set((state) => ({
        ...state,
        token: data.token,
        
      })); 
      window.location.href = '/home'
      SaveToken(data.token)
      ShowToast("success", "Inicio de Sesión Correcto");
      
    } else {
        ShowToast("error", "Los datos son incorrectos");
    }

  },
  MakeLogout() {
    RemoveToken();
    set((state) => ({
      ...state,
      token: "",
    }));
    window.location.href = '/auth'
    ShowToast("success", "Cierre de sesión exitosa");
  },
}));
