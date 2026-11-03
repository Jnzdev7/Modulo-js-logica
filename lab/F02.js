const prompt = require('prompt-sync')();

const H = Number(prompt('Digite a hora: '));
const M = Number(prompt('Digite os minutos: '));

const totalMinutos = (H * 60) + M;

console.log(totalMinutos);