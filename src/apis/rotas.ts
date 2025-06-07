import { Router, Request, Response } from "express";
import { sendEmails } from "../service/sendemails";

const rotas = Router();

//TODO CONSTRUIR UM REDIRECIONADOR
rotas.post("/contribuicao-mensal", (req: Request, res: Response) => {
  res.json(sendEmails(req.body));
});

export default rotas;
