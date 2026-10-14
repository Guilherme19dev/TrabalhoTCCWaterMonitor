
const express = require("express");

const app = express();

const rotasLogin = require("./testeLogin");
const rotasInfo = require("./testePegarInfo");

app.use(express.json());

// Login e cadastro: POST /
app.use("/", rotasLogin);

// Consulta de informações: GET /Pegar-info
app.use("/", rotasInfo);

app.listen(3000, "0.0.0.0", () => {
  console.log("Servidor rodando na porta 3000");
});
