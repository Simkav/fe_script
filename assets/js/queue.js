'use strict';
class Queue {
  constructor(...args) {
    this.size = 0;
    this.tail = 0;
    this.head = 0;
    args.forEach((value) => {
      this.enqueue(value);
    });
  }
  enqueue(value) {
    this[this.tail] = value;
    ++this.tail;
    return ++this.size;
  }
  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    const returnValue = this[this.head];
    delete this[this.head++];
    --this.size;
    return returnValue;
  }
  front() {
    return this[this.head];
  }
  get isEmpty() {
    return !(this._size === 0);
  }
  set size(v) {
    this._size = v;
  }
  get size() {
    return this._size;
  }
  set tail(v) {
    this._tail = v;
  }
  get tail() {
    return this._tail;
  }
  set head(v) {
    this._head = v;
  }
  get head() {
    return this._head;
  }
  [Symbol.iterator]() {
    return new QueueIterator(this);
  }
}
class QueueIterator {
  constructor(queue) {
    this.queue = queue;
    this.nextElem = this.queue.head;
  }
  next() {
    return {
      value: queue[this.nextElem++],
      done: this.nextElem > queue.tail,
    };
  }
}

const queue = new Queue();
