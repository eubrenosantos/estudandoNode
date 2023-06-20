const http = require("http");


const port = 3000


const server = http.createServer((req, response)=>{

    response.write("<h1>Olá mundo</h1>")
    response.end()

})

server.listen(port , ()=>{
    console.log("Servidor Rodando")
})

