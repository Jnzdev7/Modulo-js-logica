const prompt = require('prompt-sync')();

const A = Number(prompt("Diga o ano: "));

if ((A % 4 === 0 && A % 100 !== 0) || (A % 400 === 0)) {
  console.log('Bissexto');
} else {
  console.log('Não bissexto');
}