//declaration - declaraçao da funçao
//function statament
// function createPharases() {
//   console.log("sdds dela");
// }
// createPharases();

//parametros sao os inicios e fim
//uma funçao sem parametros nas chaves é uma funçao anonima
const sdds = function (inicio, fim) {
  const sddsDela = inicio + fim;
  return sddsDela;
};

let inicio = 34;
let fim = 25;

sdds(inicio, fim); //argumentos

console.log(`o numero 1 é ${inicio}`, `o numero 2 é ${fim}`);
console.log(`a soma é ${sddsDela}`);
