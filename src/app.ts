import cors from "cors";
import express from "express";
import rotas from "./apis/rotas";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", rotas);
app.listen(PORT, () => {
  return console.log(`Express is listening at http://localhost:${PORT}`);
});
