const prompt = require("prompt-sync")();

const tarifaBase = 5;
const precoPorKm = 2;
const valorPorMinuto = 0.5;
let km = Number(prompt("Quantos Km a corrida tem?"));
let minutos = Number(prompt("Quantos minutos a corrida tem?"));
let multiplicadorChuva = Number(prompt("Está chovendo? (1 = não, 1.5 = sim): "));
let total = (tarifaBase + precoPorKm * km + valorPorMinuto * minutos) * multiplicadorChuva;
console.log("Valor total da corrida: R$", total);

