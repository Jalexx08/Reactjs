//* Creating an abstract class (Observable class)
class Observable {
	constructor() {
		this.observers = [];
	}

	//* Method adding all our observers(subscribers)
	subscribe(notifyingClass) {
		this.observers.push(notifyingClass);
	}

	//* Method removing observers(subscribers)
	unsubscribe(notifyingClass) {
		this.observers = this.observers.filter(
			(observer) => observer instanceof notifyingClass !== true
		);
	}

	//* Method calling all our observers(subscribers)
	notifyObservable(event) {
		this.observers.forEach((observer) => {
			observer.notify(event);
		});
	}
}

//* Creating our observable (Subject)
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

//* Creating ours observers class(subscribers)
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

//* Instancing our subject
let numberExample = new NumberExample();

//* Defining our subscribers to the subject.
numberExample.subscribe(new NumberExampleSpanish());
numberExample.subscribe(new NumberExampleEnglish());

//* Listening changes from subject's method increment.
numberExample.increment();
numberExample.increment();
