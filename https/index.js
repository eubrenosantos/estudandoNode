const http = require("http");


const port = 3000


const server = http.createServer((req, response)=>{

    response.statusCode = 200;
    response.setHeader('Content-type' , 'text/html')    
    response.end("<h1>Olá tudo bem</h1>");

})

server.listen(port , ()=>{
    console.log("Servidor Rodando")
})

