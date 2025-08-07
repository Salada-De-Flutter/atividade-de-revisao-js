// 8- Elabore um programa para uma pizzaria, o qual leia o valor total de uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser pago por cliente.
// Exemplo: 
// Valor da Conta R$: 90.00 
// Número de Clientes: 3 
// Valor por cliente R$: 30.00

const prompt = require("prompt-sync")();

let conta = parseFloat(prompt("Digite o valor total da conta: "))
let clientes = parseInt(prompt("Digite o número de clientes: "))

console.log("Valor total por cliente: ", conta / clientes)