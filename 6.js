// 6- Elabore um programa que leia o valor de um jantar. Calcule e informe o valor da taxa do garçom (10%) e o valor total a ser pago.
// Exemplo:
// Valor do Jantar R$: 80.00
// Taxa do Garçom R$: 8.00 
// Total a Pagar R$: 88.00

const prompt = require("prompt-sync")();

let valor_jantar = parseFloat(prompt("Digite o valor do jantar: "))

console.log("Taxa do garçom: ", 0.10 * valor_jantar)
console.log("Total a pagar: ", valor_jantar + (valor_jantar * 0.10))