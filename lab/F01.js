const prompt = require('prompt-sync')();

const entrada = prompt('Digite um número: ');
const N = Number(entrada);
const ultimoAlgarismo = N % 10;

console.log(ultimoAlgarismo);