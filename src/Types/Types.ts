import { ReactNode } from "react"

export type ProtectedRouteType = {
    children: ReactNode;
}

export type TextInputType = {
    placeholder: string;
    className: string;
    value: string;
    setValue: Function;
    type?: string;
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

export interface IMenuList  {
    name:string,
    screenName:string,
}

export interface IMenuTile extends ISideBar{
    item:IMenuList
}

export interface ISideBar{
    handleOutletNavigation:Function
}

export interface IAddPopup{
    children:ReactNode,
    className: string,
    closeModal:Function
}

export interface IAddAlbumsModal{
    closeModal:Function
}

export interface IFileInput{
    setValue:Function,
    setFile: Function,
}

export interface IUploadImagetoStorage{
    directoryName:string,
    filename:string,
    file:File,
}

export interface IAlertPopup{
    type:string,
    title:string,
    handleClose:Function
}

export interface IAddalbumPayload{
    title:string,
    artist:string,
    coverimg:string,
    release_date:string,
    genre:string

}

export interface ICard{
    data: IAddalbumPayload
}