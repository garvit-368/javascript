import Stopwatch from './stopwatch.js';

const stopwatch = new Stopwatch();

const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');

startBtn.addEventListener('click', () => {
	stopwatch.start();
});

stopBtn.addEventListener('click', () => {
	stopwatch.stop();
});

resetBtn.addEventListener('click', () => {
	stopwatch.reset();
});

