import { Usuario } from "../types/usuario";
import { sendPost } from "./sendRequest";

export const sendEmails  =  async (usuarios : Usuario[])=>{
    await sendPost(usuarios);
}