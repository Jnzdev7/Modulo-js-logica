const prompt = require('prompt-sync')();

const N = Number(prompt('Digite um número (N): '));

let primo = true;

if (N <= 1) {
  primo = false;
} else {
  for (let i = 2; i * i <= N; i++) {
    if (N % i === 0) {
      primo = false;
      break;
    }
  }
}

if (primo) {
  console.log('Primo');
} else {
  console.log('Não é primo');
}