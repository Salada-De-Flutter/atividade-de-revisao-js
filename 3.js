// 3- Elabore um programa que leia três lados e verifique se eles podem ou não formar um triângulo. Para formar um triângulo, um dos lados não pode ser maior que a soma dos outros dois. Caso possam formar um triângulo, exiba também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2 lados iguais) e Escaleno (3 lados diferentes). 

const prompt = require("prompt-sync")();

let lado1 = parseFloat(prompt("Digite o primeiro lado: "))
let lado2 = parseFloat(prompt("Digite o segundo lado: "))
let lado3 = parseFloat(prompt("Digite o terceiro lado: "))

if(lado1 > lado2 + lado3 || lado2 > lado1 + lado3 || lado3 > lado2 + lado1){
    console.log("Não é um triangulo")
} else if(lado1 == lado2 && lado1 == lado3){
    console.log("É um triangulo equilatero")
} else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado1 || lado2 == lado3 || lado3 == lado2 || lado3 == lado1 ){

// lado 1 = lado 2, ou lado 3,
// lado 2 = lado 1 ou lado 3
// lado 3 = lado 2 ou lado 1

    console.log("O triangulo é equilatero")

} else {
    console.log("O triangulo é escaleno")
}

