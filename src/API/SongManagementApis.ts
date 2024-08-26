import axios from "axios";
import { API } from "./API";
import { IAddalbumPayload } from "../Types/Types";

export const AddAlbum = async(payload:IAddalbumPayload) =>{

    try{

        const response = await axios.post(API.baseUrl+API.addalbum,payload,{
            
        });
        return response

    }catch(err)
    {
        throw err;
    }
}