const dias = [1, 1, 1, 1];

let atual = 0;
let maxima = 0;

for (let i = 0; i < dias.length; i++) {
  if (dias[i] === 1) {
    atual++;
    if (atual > maxima) {
      maxima = atual;
    }
  } else {
    atual = 0;
  }
}

console.log('Maior sequência: ' + maxima);