import { ReactNode } from "react"

export type ProtectedRouteType = {
    children: ReactNode;
}

export type TextInputType = {
    placeholder: string;
    className: string;
    value: string;
    setValue: Function;
}

export type transparentContainerType = {
   className: string;
   children: ReactNode;
}

export type videoPlayerProps = {
    video : string;
    className : string;
}

export type TextType = {
    text : string;
    className: string;
    
}

export type Buttonprops = {
    name: string;
    onClick: Function;
    className: string;
    textStyle:string;
}

export interface User {
    username: string;
    email: string;
}

export interface AuthState {
    isAuthenticated?: boolean;
    authToken: string | null;
    refreshToken: string | null;
    user: User | null;
}

export type loginPayloadType = {
    email:string;
    password:string;
}

export type LoginComponentType = {
    getUserEmail : string,
    setUserEmail : Function,
    getUserPassword : string,
    setUserPassword: Function,
    handleSubmit : Function
}