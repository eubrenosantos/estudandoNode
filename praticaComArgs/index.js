const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

function somar(a, b) {
  return a + b;
}


const a = parseInt(args["a"]);
const b = parseInt(args["b"]);

console.log(somar(a, b));