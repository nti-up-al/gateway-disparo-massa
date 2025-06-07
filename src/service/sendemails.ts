import { Contribuinte } from "../types/contribuinte";
import { sendPost } from "./sendRequest";

export const sendEmails = async (contribuintes: Contribuinte[]) => {
  sendPost(contribuintes);
};
