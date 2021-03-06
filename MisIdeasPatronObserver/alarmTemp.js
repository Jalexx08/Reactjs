const { AlarmTemp } = require('./observable/observable');

class Test1 {
	notify(event) {
		const { temp } = event;
		if (temp >= 10 && temp <= 18) {
			console.log('Temperature 1 is OK');
		} else {
			console.log('Danger!!!!');
		}
	}
}
class Test2 {
	notify(event) {
		console.log('Temperature 2 is: ' + event.temp);
	}
}

let weather = new AlarmTemp();

weather.subscribe(new Test1());
weather.subscribe(new Test2());

weather.alarm();
weather.alarm();
weather.alarm();
weather.alarm();
