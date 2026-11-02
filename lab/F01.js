const prompt = require('prompt-sync')();

const entrada = prompt();
const N = Number(entrada);
const ultimoAlgarismo = N % 10;

console.log(ultimoAlgarismo);