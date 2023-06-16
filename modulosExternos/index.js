const minimist = require("minimist")

const args = minimist(process.argv.slice(2))

const name = args['nome']
console.log(name)