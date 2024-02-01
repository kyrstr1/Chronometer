let timer;

let running = false;

let seconds = 0;
let minutes = 0;
let hours = 0;
function startStop() {
  if (running) {
    clearInterval(timer);
    document.getElementById("basDurdur").innerText = "Start";
  } else {
    timer = setInterval(updateTime, 1000);
    document.getElementById("basDurdur").innerText = "Stop";
  }
  running = !running;
}

function reset() {
  clearInterval(timer);
  running = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("time").innerText = "00:00:00";
  document.getElementById("basDurdur").innerText = "Start";
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  const formattedTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
  document.getElementById("time").innerText = formattedTime;
}

function pad(value) {
  return value < 10 ? "0" + value : value;
}

document.getElementById("basDurdur").addEventListener("click", startStop);
document.getElementById("sifirla").addEventListener("click", reset);
