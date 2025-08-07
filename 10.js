// 10- Elabore um programa que liste os números em ordem decrescente com o valor inicial informado pelo usuário.

const prompt = require("prompt-sync")();

let num = parseInt(prompt("Digite o valor inicial: "))

for(num; num >= 0; num--){
    console.log("Contador: ", num)
}