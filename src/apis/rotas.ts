import { Router, Request, Response } from "express";
import { sendEmails } from "../service/sendemails";
const rotas = Router();
// Get all books
//TODO CONSTRUIR UM REDIRECIONADOR
rotas.post("/sendemails", (req: Request, res: Response) => {
    res.json(sendEmails(req.body));
});




export default rotas ;