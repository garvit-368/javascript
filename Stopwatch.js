// HTML code
// <div id="stopwatch">00:00</div>

// JavaScript code
let seconds = 0;
let timer;

function startStopwatch() {
  timer = setInterval(() => {
    seconds++;
    document.getElementById('stopwatch').textContent = formatTime(seconds);
  }, 1000);
}

function stopStopwatch() {
  clearInterval(timer);
}

function resetStopwatch() {
  stopStopwatch();
  seconds = 0;
  document.getElementById('stopwatch').textContent = formatTime(seconds);
}

function formatTime(time) {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  return `${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
  return number < 10 ? '0' + number : number;
}

// Event listeners for buttons
document.getElementById('start-btn').addEventListener('click', startStopwatch);
document.getElementById('stop-btn').addEventListener('click', stopStopwatch);
document.getElementById('reset-btn').addEventListener('click', resetStopwatch);
