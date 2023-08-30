const peso = 76
const altura = 1.79
const imc = 0

console.log(`Para uma pessoa com peso de:
 ${peso} e altura de: 
 ${altura} o 
 IMC e de ${(peso / (Math.pow(altura, 2))).toFixed(1)}`);