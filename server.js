const http = require("http");
const numero = 5
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain"
  });

  res.end(
    "Esse texto foi criado para testar a capacidade de exibicao de texto do servidor node  "+numero
  );
});

server.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});