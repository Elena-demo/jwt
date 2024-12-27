import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { userReg } from "./controllers/userReg.js";
import { getUserData } from "./controllers/getUserData.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// const port = process.env.PORT;
// console.log("===============", port);
const port = 3000;

app.get("/", getUserData);
app.post("/", userReg);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
