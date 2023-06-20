const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, response) => {

  const urlInfo = url.parse(req.url, true);
  const name = urlInfo.query.name
  response.statusCode = 200;
  response.setHeader("Content-type", "text/html");
  if(!name){
        response.end(`
            <h1>Preencha seu nome</h1>
            <form method="GET">

                <input type="text" id="name" name="name">
                <input type="submit">
            

            
            </form>
        `)
  }else{

    response.end(`
            <h1>Seja bem vindo ${name}</h1>
        `)

  }
});

server.listen(port, () => {
  console.log("Servidor Rodando");
});
