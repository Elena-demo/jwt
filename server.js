import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userReg } from "./controllers/userReg.js";
import { select } from "./controllers/select.js";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = 3000;

app.get("/", select);
app.post("/", userReg);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});