// 1- Elabore um programa que leia um número. Informe se ele é par ou ímpar
 
const prompt = require("prompt-sync")()

let num = parseInt(prompt("Digite o seu número: "));

if(num % 2 == 0){
    console.log("O número " + num + " é par");
} else {
    console.log("O número " + num + " é impar");
}