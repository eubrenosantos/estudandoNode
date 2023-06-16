const fs = require("fs")

fs.readFile('arquivo.txt', "utf8", (err, value)=>{
    if(err){
        console.log(err)
    }else{
        console.log(value)
    }
})