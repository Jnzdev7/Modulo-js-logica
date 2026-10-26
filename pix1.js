const prompt = require("prompt-sync")();

let saldo = Number(prompt("Qual o saldo da conta?"));
let valor = Number(prompt("Qual o valor do Pix?"));
let hora = Number(prompt("Qual a hora do Pix? (0-23)"));

if (hora >= 23 && valor > 1000) {
    console.log("Bloqueado. Limite noturno.");
} else if (saldo >= valor) {
    saldo = saldo - valor;
    console.log("Pix enviado. Saldo: R$", saldo.toFixed(2));
} else {
    console.log("Saldo insuficiente. Saldo: R$", saldo.toFixed(2));
}
