import { Usuario } from "../types/usuario";

const axios = require('axios')

export function sendPost(usuarios: Usuario[]) {
   axios.post('http://localhost:3000/api/sendemails', usuarios)
    .then(res => {
      console.log(`statusCode: ${res.statusCode}`);
      console.log(res);
    })
    .catch(error => {
      console.error(error)
    });
}