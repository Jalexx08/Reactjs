const { HeartRate } = require('./observable/observable');

class BeatsOne {
	notify(event) {
		switch (event.beat) {
			case event.beat < 50:
				console.log('Warning, bradycardia ');
				break;
			case event.beat > 100:
				console.log('Warning, tachycardia ');
				break;

			default:
				console.log('you are healthy!');
				
				break;
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
