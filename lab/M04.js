const prompt = require('prompt-sync')();

const A = Number(prompt('Digite o lado A: '));
const B = Number(prompt('Digite o lado B: '));
const C = Number(prompt('Digite o lado C: '));

if (A < B + C && B < A + C && C < A + B) {
  if (A === B && B === C) {
    console.log('Equilátero');
  } else if (A !== B && B !== C && A !== C) {
    console.log('Escaleno');
  } else {
    console.log('Isósceles');
  }
} else {
  console.log('Não forma triângulo');
}