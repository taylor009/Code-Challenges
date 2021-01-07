/**
 * Queues are FIFO
 * First In First Out
 */

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
	}
}

class Queue {
	constructor(){
		this.first = null;
		this.last = null;
		this.length = 0;
	}
	// First in the queue
	peek() {
		return this.first
	}
	// Adds item to the end of the queue
	enqueue(value){
		const newNode = new Node(value);
		if(this.length === 0){
			this.first = newNode;
			this.last = newNode;
		} else {
			this.last.next = newNode;
			this.last = newNode;
		}
		this.length++;
		return this;
	}
	// Removes first item from the queue
	dequeue(){
		if(!this.first){
			return null;
		}
		if(this.first === this.last){
			this.last = null;
		}
		this.first = this.first.next;
		this.length--;
		return this;
	}
	//isEmpty;
}

const myQueue = new Queue();

myQueue.peek();

//Joy
//Matt
//Pavel
//Samir
