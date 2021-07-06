class Observable {
	constructor() {
		this.observers = [];
	}

	subscribe(notifyingClass) {
		this.observers.push(notifyingClass);
	}

	unsubscribe(notifyingClass) {
		this.observers = this.observers.filter(
			(observer) => observer instanceof notifyingClass !== true
		);
	}

	notifyObservable(event) {
		this.observers.forEach((observer) => {
			observer.notify(event);
		});
	}
}

class AlarmTemp extends Observable {
	constructor() {
		super();
		this.temp = 0;
	}

	alarm() {
        this.temp = Math.random() * 40;
        this.notifyObservable(this.temp);
	}
}

module.exports = {
	AlarmTemp,
};
