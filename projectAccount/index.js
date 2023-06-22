const inquirer = require("inquirer");
const chalk = require("chalk");
const fs = require("fs");

const Contas = [
    {
        Name: "Breno Santos",
        Document: "492.578.108-10",
        Saldo: 0,
    },
];

const prompts = [
    {
        type: "list",
        name: "action",
        message: "O que você deseja fazer?",
        choices: ["Criar Conta", "Consultar Saldo", "Depositar", "Sacar", "Sair"],
    },
];

function operation() {
    inquirer
        .prompt(prompts)
        .then((response) => {
            let responseAction = response.action;
            if (responseAction === "Criar Conta") {
                creatAccount();
            } else if (responseAction === "Consultar Saldo") {
                checkBalance();
            } else if (responseAction === "Depositar") {
                creatDeposit();
            } else {
            }
        })
        .catch((err) => console.log(err));
}

const creatAccount = () => {
    inquirer
        .prompt([
            {
                name: "NomeDaConta",
                message: "Qual Seu nome?",
            },
            {
                name: "Document",
                message: "Qual Seu documento?",
            },
        ])
        .then((response) => {
            let search = Contas.filter((value) => {
                if (
                    value.Name === response.NomeDaConta ||
                    value.Document === response.Document
                ) {
                    console.log(
                        chalk.bgRed(
                            "Já existe uma conta com essas credenciais, tente novamente!"
                        )
                    );
                    creatAccount();
                } else {
                    Contas.push({
                        Name: response.NomeDaConta,
                        Document: response.Document,
                        Saldo: 0,
                    });
                    console.log(
                        chalk.bgGreen(
                            `Abrimos uma conta com sucesso para ${response.NomeDaConta}!`
                        )
                    );
                    operation();
                }
            });
        })
        .catch((err) => console.log(err));
};

const checkBalance = () => {
    inquirer
        .prompt([
            {
                name: "NomeDaConta",
                message: "Digite o nome da conta",
            },
        ])
        .then((response) => {
            Contas.filter((value) => {
                if (value.Name === response.NomeDaConta) {
                  console.log(
                    chalk.bgGreen(`O saldo de sua conta é ${value.Saldo}`)
                  );
                  return
                } else {
                  console.log(
                    chalk.bgRed("Não encontramos essa conta, tente novamente!")
                  );
                  checkBalance();
                  return
                }
            });
        })
        .catch((err) => console.log(err));
};

const creatDeposit = () => {
    inquirer
        .prompt([
            {
                name: "NomeDaConta",
                message: "Digite o nome da conta",
            },
        ])
        .then((response) => {
            Contas.filter((value) => {
                if (value.Name === response.NomeDaConta) {
                  console.log("Quanto você deseja depositar?");
                  inquirer
                    .prompt([
                      {
                        name: "valor",
                        message: "R$: ",
                      },
                    ])
                    .then((response) => {
                      value.Saldo += parseFloat(response.valor);
                      console.log(chalk.bgGreen(`Seu saldo foi atualizado!`));
                      return
                    })
                    .catch((err) => console.log(err));
                } else {
                  console.log(
                    chalk.bgRed("Não encontramos essa conta, tente novamente!")
                  );
                  creatDeposit();
                }
            });
        })
        .catch((err) => console.log(err));
};

operation();
