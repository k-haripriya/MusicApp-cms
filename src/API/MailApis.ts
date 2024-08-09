import axios from "axios"
import { API } from "./API"


export const sendLoginMailAPI = async(mail:string) =>{
    try{
        const res = await axios.post(API.baseUrl+API.sendLoginMail+mail)
        return res;

    }catch(err)
    {
        throw err
    }
}