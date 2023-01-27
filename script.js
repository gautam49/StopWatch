let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let startStopButton = document.getElementById("start-stop");
function startStop() {
  if (startStopButton.innerHTML === "Start") {
    interval = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      document.getElementById("minutes").innerHTML = formatTime(minutes);
      document.getElementById("seconds").innerHTML = formatTime(seconds);
      document.getElementById("milliseconds").innerHTML = formatTime(milliseconds);
    }, 10);
    startStopButton.innerHTML = "Stop";
  } else {
    clearInterval(interval);
    startStopButton.innerHTML = "Start";
  }
}

function reset() {
  clearInterval(interval);
  startStopButton.innerHTML = "Start";
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";
  document.getElementById("milliseconds").innerHTML = "00";
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}
