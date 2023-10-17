import { GetRol } from './role.type';


export interface RolState{
    roles: GetRol[]
    OnGetRoles: ()=> Promise<void>
    OnUpdateRoles: (rol: GetRol)=>Promise<void>  
}