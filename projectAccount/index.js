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
      } else if (response.action === "Sacar") {
        creatLoot();
      } else if (response.action === "Sair") {
        LogMessage(200, "Obrigado por usar nosso banco!");
        process.exit();
      }
    })
    .catch((err) => console.log(err));
}

const creatAccount = () => {
  inquirer
    .prompt([
      {
        name: "NameAccount",
        message: "Qual seu nome?",
      },
      {
        name: "DocAccount",
        message: "Digite seu CPF/CNPJ",
      },
    ])
    .then((response) => {
      let Account = Contas.filter((value) => {
        if (
          value.Name === response.NameAccount ||
          value.Document === response.DocAccount
        ) {
          return value;
        }
      });

      if (Account.length === 0) {
        Contas.push({
          Name: response.NameAccount,
          Document: response.DocAccount,
          Saldo: 0,
        });
        LogMessage(
          200,
          `Uma conta foi criada com sucesso para ${response.NameAccount}`
        );
        operation();
      } else {
        LogMessage(
          400,
          "Já existe uma conta com essas credenciais, tente novamente com outros dados!"
        );
        creatAccount();
      }
    })
    .catch((err) => console.log(err));
};

const checkBalance = () => {
  inquirer
    .prompt([
      {
        name: "NameAccount",
        message: "Qual nome da conta?",
      },
      {
        name: "DocAccount",
        message: "Qual CPF/CNPJ da conta?",
      },
    ])
    .then((response) => {
      let Account = Contas.filter((value) => {
        if (
          value.Name === response.NameAccount ||
          value.Document === response.DocAccount
        ) {
          return value;
        }
      });

      if (Account.length === 0) {
        LogMessage(
          400,
          "Não encontramos nenhuma conta que corresponde as credenciais!"
        );
        checkBalance();
      } else {
        console.log("Saldo em conta:");
        LogMessage(200, `R$${Account[0].Saldo.toFixed(2).replace(".", ",")}`);
        operation();
      }
    })
    .catch((err) => console.log(err));
};

const creatDeposit = () => {
  inquirer
    .prompt([
      {
        name: "NameAccount",
        message: "Qual nome da conta?",
      },
      {
        name: "DocAccount",
        message: "Qual CPF/CNPJ da conta?",
      },
    ])
    .then((response) => {
      let Account = Contas.filter((value) => {
        if (
          value.Name === response.NameAccount ||
          value.Document === response.DocAccount
        ) {
          return value;
        }
      });

      if (Account.length === 0) {
        LogMessage(
          400,
          "Não encontramos nenhuma conta que corresponde as credenciais!"
        );
        creatDeposit();
      } else {
        LogMessage(300, `Digite o valor que deseja depositar`);
        inquirer
          .prompt([
            {
              name: "ValorParaSacar",
              message: "R$: ",
            },
          ])
          .then((response) => {
            Account[0].Saldo += parseFloat(response.ValorParaSacar);
            LogMessage(
              200,
              `Foi creditado um valor de ${response.ValorParaSacar} em sua conta!`
            );
            operation();
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};
const creatLoot = () => {
  inquirer
    .prompt([
      {
        name: "NameAccount",
        message: "Qual nome da conta?",
      },
      {
        name: "DocAccount",
        message: "Qual CPF/CNPJ da conta?",
      },
    ])
    .then((response) => {
      let Account = Contas.filter((value) => {
        if (
          value.Name === response.NameAccount ||
          value.Document === response.DocAccount
        ) {
          return value;
        }
      });

      if (Account.length === 0) {
        LogMessage(
          400,
          "Não encontramos nenhuma conta que corresponde as credenciais!"
        );
        creatDeposit();
      } else {
        LogMessage(300, `Digite o valor que deseja sacar`);
        inquirer
          .prompt([
            {
              name: "ValorParaSacar",
              message: "R$: ",
            },
          ])
          .then((response) => {
            Account[0].Saldo -= parseFloat(response.ValorParaSacar);
            LogMessage(
              200,
              `Foi sacado um valor de ${response.ValorParaSacar} de sua conta!`
            );
            operation();
          })
          .catch((err) => console.log(err));
      }
    })
    .catch((err) => console.log(err));
};

const LogMessage = (status, message) => {
  if (status === 200) {
    console.log(chalk.bgGreen(message));
  } else if (status === 300) {
    console.log(chalk.bgYellow(message));
  } else if (status === 400) {
    console.log(chalk.bgRed(message));
  } else {
    console.log(message);
  }
};

operation();
