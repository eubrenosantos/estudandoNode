const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Qual seu nome: ' , (Name)=>{
    console.log(`É um prazer ter você aqui, ${Name}`)
    readline.close()
})