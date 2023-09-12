//function scopw

let subject;

function creatThink(subject) {
  subject = "oi";
  return subject;
}

console.log(subject);
console.log(creatThink(subject));

//function hoisting

// unica maneira de uma function sofrer hoisting é sendo escrita como está abaixo

sayWes();

function sayWes() {
  console.log("wes");
}

//arrow function

const sayMyName = (name) => {
  name = "wesley";
  console.log(name);
};

sayMyName();

//callback function

const sayMyNigga = (nome) => {
  console.log("before execute callback");
  nome();

  console.log("after execute callback ");
};

sayMyNigga(() => {
  console.log("pai ta de callback");
});

/* 
  function constructor
  expressao new
  criar um novo objeto
  this keyword

*/

function Person(name) {
  this.name = name;
  this.walk = function () {
    return this.name + " olha o caminhar do elemento";
  };
}
const wes = new Person("wes");
console.log(wes.walk());
