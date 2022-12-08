import { formatDiagnosticsWithColorAndContext } from "typescript";
import { NewsletterController } from "./controller/newsletter/newsletterController";
import { UserController } from "./controller/user/userController";

const mongoose = require("mongoose");
const express = require("express");

/**
 * On créé une nouvelle "application" express
 */
const app = express();

app.use(express.json());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.get("/", (req, res) =>
  res.send("L'API est fonctionelle, mais vous n'avez spécifié aucune requête.")
);
app.get("/signin/:user/:hash", (req, res) =>
  UserController.connectUser(req, res)
);
// app.get('/informations/:user/:hash/:token', (req, res) => UserController.findOneUser(req, res))
app.post("/newsletter", (req, res) => NewsletterController.postMail(req, res));
app.post("/signup", (req, res) => UserController.postUser(req, res));

app.listen(3001, () => {
  "Serveur listening on port :3001";
});

async function main() {
  await mongoose.connect("mongodb://localhost:27017/api-lean");
  console.log("console ok");
}

main().catch((err) => console.log(err));
