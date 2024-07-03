const prompt = require("prompt-sync")();
function adicao(a, b) {
  return a + b;
}
function subtracao(a, b) {
  return a - b;
}
function multiplicacao(a, b) {
  return a * b;
}
function divisao(a, b) {
  return a / b;
}
function porcentagem(a, b) {
  return (a/100)*b;
}
let opcao
while (opcao != 0) {
  console.log(`
        1- adição 
        2- Subtração 
        3- Multiplicação 
        4- Divisão 
        5- porcentagem
        0- sair`);
  opcao = prompt("Digite o que deseja fazer: ");
  if (isNaN(Number(opcao))) {
    console.log("Digite um NÚMERO");
  } else {
    opcao = Number(opcao);
    let numero, numero2;
        switch (opcao) {
        case 1:
            numero = prompt("Digite um número: ");
            if (isNaN(Number(numero))) {
                console.log("");
            } else {
                numero2 = prompt("Digite um segundo número para somar com o primeiro: ");
                if (isNaN(Number(numero2))) {
                console.log("Digite um NÚMERO");
                } else {
                console.log("resposta: " + adicao(numero,numero2))
                //console.log(`Resultado: ${adicao(Number(numero), Number(numero2))}`); 
                }
            }
            break;
        case 2:
            numero = prompt("Digite um número: ");
            if (isNaN(Number(numero))) {
                console.log("");
            } else {
                numero2 = prompt("Digite um segundo número para diminuir do primeiro: ");
                if (isNaN(Number(numero2))) {
                console.log("Digite um NÚMERO");
                } else {
                console.log("resposta: " + subtracao(numero,numero2))
                }
            }
            break;
        case 3:
            numero = prompt("Digite um número: ");
            if (isNaN(Number(numero))) {
                console.log("");
            } else {
                numero2 = prompt("Digite um segundo número para multiplicar o primeiro: ");
                if (isNaN(Number(numero2))) {
                console.log("Digite um NÚMERO");
                } else {
                console.log("resposta: " + multiplicacao(numero,numero2))
                }
            }
            break;
        case 4:
            numero = prompt("Digite um número: ");
            if (isNaN(Number(numero))) {
                console.log("");
            } else {
                numero2 = prompt("Digite um segundo número para dividir o primeiro: ");
                if (isNaN(Number(numero2))) {
                console.log("Digite um NÚMERO");
                } else {
                console.log("resposta: " + divisao(numero,numero2))
                }
            }
            break;
        case 5:
            numero = prompt("Digite a porcentagem: ");
            if (isNaN(Number(numero))) {
                console.log("");
            } else {
                numero2 = prompt(`Digite o segundo número para saber quanto é ${numero}% do número: `);
                if (isNaN(Number(numero2))) {
                console.log("Digite um NÚMERO");
                } else {
                console.log("resposta: " + porcentagem(numero,numero2))
                }
            }
            break;
        case 0:
            console.log("Saindo do programa");
            break;
        default:
            console.log("escolha uma opção válida entre");
            break;
        }
    }
}
