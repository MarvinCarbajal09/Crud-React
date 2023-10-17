import { LoginPayload } from "./auth.types"

export interface AuthState{
    token:string
    OnMakeLogin: (payload: LoginPayload)=> Promise<void>

    MakeLogout: () => void
}