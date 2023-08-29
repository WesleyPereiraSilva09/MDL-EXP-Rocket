const nameStudant = prompt("Insira seu nome: ");
const firsGrade = prompt("Insira a sua primeira nota: ");
const secondGrade = prompt("insira sua segunda nota: ");
const thirdGrade = prompt("insira sua terceira nota: ");

average = (Number(firsGrade) + Number(secondGrade) + Number(thirdGrade)) / 3;

average = average.toFixed(2);

const result = average > 6;

if (result) {
  alert(`Parabens ${nameStudant} sua média é ${average} voce foi aprovado`);
} else if (average < 5) {
  alert("REPROVADO!!!");
} else {
  alert(
    ` ${nameStudant} sua média é ${average} voce nao foi aprovado, e estará de DP na materia.`
  );
}
