const screen1 = document.querySelector(".firstScreen");
const screen2 = document.querySelector(".secondScreen");
const btnCloseCookie = document.querySelector(".btnCloseCookie");
const btnAnotherCookie = document.querySelector(".anotherCookie");

//event
function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

const handleClick = (event) => {
  event.preventDefault(); //nao faca o padrao
  const inptCloseCookie = document.querySelector("#inptCloseCookie");
  toggleScreen();
  document.querySelector(".secondScreen").innerHTML;
};

function handleResetClick() {
  toggleScreen();
}
btnCloseCookie.addEventListener("click", handleClick);
btnAnotherCookie.addEventListener("click");
