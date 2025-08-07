// 2 - Elabore um programa que leia a velocidade permitida em uma estrada e a velocidade de um condutor. Se a velocidade for inferior ou igual à permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da velocidade permitida, exiba “Multa Grave” 

const prompt = require("prompt-sync")();

let velo_permitida = parseFloat(prompt("Digite a velocidade máxima permitida: "))
let velo_condutor =  parseFloat(prompt("Digite a velocidade do condutor: "))

if(velo_condutor <= velo_permitida){
    console.log("Sem Multa")
} else if(velo_condutor <= (velo_permitida * 1.2)){
    console.log("Multa Leve")
} else if (velo_condutor > (velo_permitida * 1.2)){
    console.log("Multa Grave")
}