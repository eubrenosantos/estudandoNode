const inquirer = require("inquirer");

const x = [
  {
    name: "Nome_Completo",
    message: "Qual seu nome?",
  }
];

inquirer
  .prompt(x)
  .then((answers) => {

    if(answers.Nome_Completo === "Luana"){
      console.log('Olá, meu amor!')
    }else{
      console.log('Você não é minha namorada!!!!!!')
    };
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });