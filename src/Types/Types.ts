import { ReactNode } from "react"

export type ProtectedRouteType = {
    children: ReactNode;
}

export type TextInputType = {
    placeholder: string;
    className: string;
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