/*
  new 
  *let-hand-side expression
  *criar um novo objeto
*/

//new gera objetos usando as constructor functions.

// const nameUser = new String("Wes");
// nameUser.surName = "silva";
// let age = new Number(23);
// console.log(nameUser, age);

// let date = new Date("2023-12-04");
// console.log(date);

/* 

  operadores unarios
  typeof
  delete

*/

// const person = {
//   name: "wes",
//   age: 25,
// };
// delete person.age;

// console.log(person);

/*
  operadores aritimeticos

  multiplicaçao usa se o *
  
  divissao usa se a /

  soma usa se o +

  subtraçao usa se o -

  resto da divissao(remainder) usa se o  %

  incremento usa se o ++

  o decremento usa se o --

  exponencial usa se o **

*/

/*

  sinais de comparaçao 

  == é igual a
  console.log(two == 1) result false
  console.log(one == 1) true

  != é diferente De

  console.log(two != one) result true

*/

/*
  Operadores de estritamente igual

  === é estritamente igual a
  !== estritamente diferente de

*/

/*

  operadores de atribuiçao

  assignment
  x = 1


  addintion assignment
  x += 2

  subtraction assignment
  x -=1

  multiplication assignment
  x *=2

  division assignment
  x /= 2

  remainder, exponetiation
  x %= 2
  x **=2

*/

/*
  operadores logicos

  and &&

  or ||

  not !

*/

/*
  OPERADOR CONDICIONAL TERNARIO

let pao = true;
let queijo = true;

const cafeDaManha = pao && queijo ? "cafe top" : "café ruim";

let age = 16;

const piloto = age >= 18 ? "can drive" : "can't drive";
*/

/*
  // De cima para baixo, do mais importante ao menos importante.

  * grouping                      ( )
  * negação e incremento          ! ++ --
  * multiplicação e divisão       * /
  * adição e subtração            + -
  * relacional                    < <= > >=
  * igualdade                     == != === !==
  * AND                           && 
  * OR                            ||
  * condicional                   ?:
  * assignment (atribuição)       = += -= *= %= 

*/

const temperature = 37.5;

if (temperature >= 37) {
  console.log("ta com febre");
} else {
  console.log("ta normal");
}
