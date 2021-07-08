const { HeartRate } = require('./observable/observable');

class BeatsOne {
	notify(event) {
		const { beat } = event;
		if (beat < 50) {
			console.log('Warning, bradycardia ');
		} else if (beat > 100) {
			console.log('Warning, tachycardia ');
		} else {
			console.log('you are healthy!');
		}
	}
}
class BeatsTwo {
	notify(event) {
		if (event.beat > 60 && event.beat < 100)
			console.log(`hearthbeat-2 is: ${event.beat}`);
	}
}

let heartRate = new HeartRate();

heartRate.subscribe(new BeatsOne());
heartRate.subscribe(new BeatsTwo());

setInterval(() => {
	heartRate.heartbeat();
}, 1000);
