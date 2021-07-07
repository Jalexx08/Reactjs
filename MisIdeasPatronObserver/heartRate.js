const { HeartRate } = require('./observable/observable');

class BeatsOne {
	notify(event) {
		console.log(`hearthbeat-1 is: ${event.beat}`);
	}
}
class BeatsTwo {
	notify(event) {
		console.log(`hearthbeat-2 is: ${event.beat}`);
	}
}

let heartRate = new HeartRate();

heartRate.subscribe(new BeatsOne());
heartRate.subscribe(new BeatsTwo());

setInterval(() => {
    
    heartRate.heartbeat();
}, 1000);