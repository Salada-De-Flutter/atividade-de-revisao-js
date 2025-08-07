// 9- Elabore um programa para uma loja, o qual leia o preço de um produto e informe as opções de pagamento da loja. Calcule e informe o valor para pagamento à vista com 10% de desconto e o valor em 3x. 
// Exemplo:
// Preço R$: 60.00 
// À Vista R$: 54.00 
// Ou 3x de R$: 20.00

const prompt = require("prompt-sync")();

let preco = parseFloat(prompt("Informe o preço do produto: "))
console.log("Preço a vista: ", 0.9 * preco)
console.log("Ou 3x de:", preco / 3)