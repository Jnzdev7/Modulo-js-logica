const prompt = require('prompt-sync')();

const N = Number(prompt('Digite o valor de N: '));

let a = 0;
let b = 1;

const termos = [];

while (a <= N) {
  termos.push(a);
  const proximo = a + b;
  a = b;
  b = proximo;
}

console.log(termos.join(' '));