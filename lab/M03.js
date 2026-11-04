const prompt = require('prompt-sync')();

const V = Number(prompt('Digite o valor da compra (V): '));

let valorFinal;

if (V <= 100) {
  valorFinal = V;
} else if (V <= 300) {
  valorFinal = V * 0.90;
} else {
  valorFinal = V * 0.85;
}

console.log(`Total: R$ ${valorFinal.toFixed(2)}`);