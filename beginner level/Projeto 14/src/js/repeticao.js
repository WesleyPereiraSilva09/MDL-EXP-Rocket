//for(inicialização de uma variável; condição de continuação para o loop; expressão final)

//break - para a execuçao do loop
//continue - pula a execuçao do momento

// for (let i = 100; i > 0; i--) {
//   console.log(i);
// }

//WHILE

//while é muito utilizado em momento que vc nao sabe onde o codigo deve parar.

// let iniciador = 0;

// while (iniciador < 10) {
//   console.log(iniciador);

//   iniciador++;
// }

//FOR OF

// const name = "wes";
// const names = ["say", "ze3", "nani"];

// for (const char of name) {
//   console.log(char);
// }

//FOR IN

const person = {
  name: "wes",
  age: 21,
  weight: 100,
};

for (const property in person) {
  console.log(property);
  //maneira de acessar individualmente
  console.log(person.name);
  //maneira de puxar tudo atrazer do property, sendo atribuido como uma string
  console.log(person[property]);
}
