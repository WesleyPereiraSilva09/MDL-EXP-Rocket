// let age, isHuman;

// age = 20;
// isHuman = true;

// console.log(age, isHuman);

// //para usar o interpolation o ${} de conter a variavel dentro das chaves, e so funciona uando crazes ``
// console.log(`o wes tem ${age} anos`);

//object

const person = {
  name: "wes",
  age: 21,
  weight: 99.1,
  isAdmin: true,
};

console.log(
  `${person.name} tem ${person.age} anos de idade e ele é ${person.isAdmin}`
);

const animals = [
  "lion",
  "monk",
  {
    name: "cat",
    age: 3,
  },
];
//com o lenght eu posso ver a quantidade de objetos contido no array
console.log(animals[2].name);
