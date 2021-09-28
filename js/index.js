const start = document.getElementById("start");
const stop = document.getElementById("stop");
const restart = document.getElementById("restart");
const text = document.getElementById("text");
const title = document.getElementById("title");
let { minutos, segundos, estudio } = {
  minutos: 24,
  segundos: 60,
  estudio: true,
};
let intervalCount = 0;
start.addEventListener("click", () => {
  intervalCount = setInterval(conteo, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(intervalCount);
});
restart.addEventListener("click", () => {
  clearInterval(intervalCount);
  text.innerHTML = "00 : 00";
  minutos = 24;
  segundos = 60;
});

const conteo = () => {
  estudio
    ? (title.innerHTML = "STAY FOCUS")
    : (title.innerHTML = "TAKE A BREAK");

  if (minutos === 0 && segundos === 0) {
    if (estudio) {
      minutos = 4;
      segundos = 60;
      estudio = false;
    } else {
      minutos = 24;
      segundos = 60;
      estudio = true;
    }
  } else if (segundos === 0) {
    minutos -= 1;
    segundos = 60;
  } else {
    segundos -= 1;
  }
  text.innerHTML = `${minutos} : ${segundos}`;
};
