const screen1 = document.querySelector(".firstScreen");
const screen2 = document.querySelector(".secondScreen");
const btnCloseCookie = document.querySelector(".btnCloseCookie");
const btnAnotherCookie = document.querySelector(".anotherCookie");

//event
btnCloseCookie.addEventListener("click", handleClick);
btnAnotherCookie.addEventListener("click");

const handleClick = (event) => {
  event.preventDefault(); //nao faca o padrao
  const inptCloseCookie = document.querySelector("#inptCloseCookie");
  if (inptCloseCookie.value) {
    toggleScreen();
    document.querySelector(".secondScreen").innerHTML;
  }
};

function handleResetClick() {
  toggleScreen();
}

function toggleScreen() {
  firstScreen.classList.toggle("hide");
  secondScreen.classList.toggle("hide");
}
