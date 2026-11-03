const prompt = require('prompt-sync')();

const N = Number(prompt('Digite o número de ovos:'));

const caixas = Math.floor(N / 12);
const soltos = N % 12;

console.log('Caixas: ' + caixas);
console.log('Soltos: ' + soltos);