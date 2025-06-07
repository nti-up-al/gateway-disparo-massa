import axios from "axios";
import { Contribuinte } from "../types/contribuinte";

export function sendPost(contribuintes: Contribuinte[]) {
  axios
    .post(
      `${process.env.EMAILS_API_BASE_URL}/contribuicao-mensal`,
      contribuintes
    )
    .then((res) => {
      console.log(`statusCode: ${res.status}`);
      console.log(res);
    })
    .catch((error) => {
      console.error(error);
    });
}
