import { GetRol } from "./../types/role.type";

import { create } from "zustand";
import {
  create_roles,
  get_roles,
  update_rol,
  delete_rol,
} from "../services/role.service";
import { ShowToast } from "../plugins/sweet-alert";
import { RolState } from "../types/rolStore.types";

export const rolStore = create<RolState>((set, get) => ({
  roles: [],
  async OnGetRoles() {
    const data = await get_roles();
    if (data.roles) {
      set((state) => ({
        ...state,
        roles: data.roles,
      }));
    } else {
      data.roles = [];
    }
  },
  //Crear nuevo
  async OnCreateRoles(rol: string) {
    const data = await create_roles(rol);
    if (data.ok) {
      ShowToast("success", "Se creo el rol");
      get().OnGetRoles();
    } else {
      ShowToast("error", "Error al crear el rol");
    }
  },
  //Modificar
  async OnUpdateRoles(rol: GetRol) {
    const data = await update_rol(rol);
    if (data.ok) {
      ShowToast("success", "Se modifico el rol");
      get().OnGetRoles();
    } else {
      ShowToast("error", "Error al modificar rol");
    }
  },
  //Eliminar
  async OnDeleteRol(id: number) {
    const data = await delete_rol(id);
    if (data.ok) {
      get().OnGetRoles();
    }
  },
}));
