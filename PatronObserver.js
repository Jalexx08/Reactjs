//* Creating an abstract class Observable
class Observable {
	constructor() {
		this.observers = [];
	}

	//* Method to add all our observers
	subscribe(notifyingClass) {
		this.observers.push(notifyingClass);
	}

	//* Method to remove observers
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

//* Child class of Observable class
class NumberExample extends Observable {
	constructor() {
		super();
		this.value = 0;
	}

	increment() {
		this.value++;
		this.notifyObservable(this);
	}
}

//* Creating ours observers
class NumberExampleSpanish {
	notify(event) {
		console.log(`El nuevo número es: ${event.value}`);
	}
}

class NumberExampleEnglish {
	notify(event) {
		console.log(`The new number is: ${event.value}`);
	}
}

//* Running our Observable
let numberExample = new NumberExample();

numberExample.subscribe(new NumberExampleSpanish());
// numberExample.subscribe( new NumberExampleEnglish());

numberExample.increment();
numberExample.increment();
