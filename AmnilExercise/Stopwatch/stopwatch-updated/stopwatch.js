export default class Stopwatch {
	constructor() {
		this.startTime = 0;
		this.running = false;
		this.elapsedTime = 0;
	}

	start() {
		if (!this.running) {
			this.running = true;
			this.startTime = new Date().getTime() - this.elapsedTime;
			this.timer = setInterval(() => {
				this.elapsedTime = new Date().getTime() - this.startTime;
				this.updateUI();
			}, 10);
		}
	}

	stop() {
		if (this.running) {
			this.running = false;
			clearInterval(this.timer);
		}
	}

	reset() {
		this.stop();
		this.elapsedTime = 0;
		this.updateUI();
	}

	updateUI() {
		const elapsedTimeString = this.formatElapsedTime();
		const stopwatchElem = document.getElementById('stopwatch');
		stopwatchElem.textContent = elapsedTimeString;
	}

	formatElapsedTime() {
		const hours = Math.floor(this.elapsedTime / (1000 * 60 * 60));
		const minutes = Math.floor((this.elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((this.elapsedTime % (1000 * 60)) / 1000);
		const milliseconds = Math.floor((this.elapsedTime % 1000) / 10);
		return `${this.padZero(hours)}:${this.padZero(minutes)}:${this.padZero(seconds)}.${this.padZero(milliseconds)}`;
	}

	padZero(num) {
		return num.toString().padStart(2, '0');
	}
}
