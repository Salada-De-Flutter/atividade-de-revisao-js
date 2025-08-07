// 4- Elabore um programa que leia um número. Calcule e informe o dobro desse número.

const prompt = require("prompt-sync")();

let num =parseInt(prompt("Digite um número: "))

console.log("O dobro desse número é: ", num * 2)