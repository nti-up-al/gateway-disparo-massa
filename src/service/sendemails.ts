import { Usuario } from "../types/usuario";
import { sendPost } from "./sendRequest";

export const sendEmails  =  async (usuarios : Usuario[])=>{
    console.log(await sendPost(usuarios));
}