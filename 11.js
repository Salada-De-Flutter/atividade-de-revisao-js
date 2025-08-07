// 11- Digamos que o número de chinchilas de uma fazenda triplica a cada ano, após o primeiro ano. Elaborar um programa que leia o número inicial de chinchilas e anos e informe ano a ano o número médio previsto de chinchilas da fazenda. Validar a entrada para que o número inicial de chinchilas seja maior ou igual a 2 (um casal)

const prompt = require("prompt-sync")();

let num_chinchilas = parseInt(prompt("Digite o número inicial de chinchilas: "))
let anos = parseInt(prompt("Digite o número de anos: "))

if(num_chinchilas < 2){
    console.log("Precisa ser um casal")
} else {

    for(contador = 0; contador <= anos; contador++){
        console.log("No ano ", contador ," a média de chinchilas previstas é: ", num_chinchilas)
        num_chinchilas = num_chinchilas * 3
    }

}