const prompt = require('prompt-sync')();

const P = Number(prompt('Digite a quantidade de pessoas (P): '));
const C = Number(prompt('Digite a capacidade do ônibus (C): '));

let onibus = Math.floor(P / C);

if (P % C !== 0) {
  onibus = onibus + 1;
}

console.log(onibus);