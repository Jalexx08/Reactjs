const { AlarmTemp } = require('./observable/observable');

class Test1 {
	notify(event) {
		if (event > 15 && event < 27) {
			console.log('The weather 1 is cool');
		}
		if (event >= 0 && event < 15) {
			console.log('The weather 1 is a few cold');
		}
		if (event > 27) {
			console.log('The weather 1 is hotter');
		}
	}
}
class Test2 {
	notify(event) {
		if (event > 15 && event < 27) {
			console.log('The weather 2 is cool');
		}
		if (event >= 0 && event < 15) {
			console.log('The weather 2 is a few cold');
		}
		if (event > 27) {
			console.log('The weather 2 is hotter');
		}
	}
}


let weather = new AlarmTemp();

weather.subscribe( new Test1());
weather.subscribe( new Test2());

weather.alarm();
weather.alarm();
