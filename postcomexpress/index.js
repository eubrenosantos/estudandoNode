const express = require("express");
const app = express();
const port = 3000;

app.get("/user/:id", (req, response) => {
  const id = req.params.id;

  response.send(`estamos buscando o user ${id}`);
});
app.get("/", (req, response) => {
  response.send("oie");
});

app.listen(port, () => {
  console.log(`app rodando na porta ${port}`);
});
