const chalk = require("chalk")

const nota = 7

if(nota >= 7){
console.log(chalk.bgGreen.blue("Parabéns, você está aprovado!!"));
}else{
    console.log(chalk.white.bgRed.bold("Ops, você está Reprovado!!"));

}
