//switch case

// let expression = "a";

// switch (expression) {
//   case "a":
//     console.log("a");
//     break;
//   case "b":
//     console.log("b");
//     break;
//   default:
//     console.log("default");
//     break;
// }

// function calculate(number1, operator, number2) {
//   let result = 0;

//   switch (operator) {
//     case "+":
//       result = number1 + number2;
//       break;
//     case "-":
//       result = number1 - number2;
//       break;
//     case "*":
//       result = number1 * number2;
//       break;
//     case "/":
//       result = number1 / number2;
//       break;
//     default:
//       console.log("não implementado");
//       break;
//   }

//   return result;
// }

// console.log(calculate(4, "%", 8));

//throw, try/catch

//throw

function sayMyName(name = "") {
  if (name === "") {
    throw "nome é obrigatorio";
  }

  console.log("afeter error");
}

try {
  sayMyName();
} catch (e) {
  console.log(e);
}
