'use strict';
class Queue {
  constructor(...args) {
    this._tail = 0;
    this._head = 0;
    args.forEach((value) => {
      this.enqueue(value);
    });
  }
  static mergeQueues(q1, q2) {
    const buffer = new Queue();
    while (!q1.isEmpty || !q2.isEmpty) {
      if (q1.size) {
        buffer.enqueue(q1.dequeue());
      }
      if (q2.size) {
        buffer.enqueue(q2.dequeue());
      }
    }
    return buffer;
  }
  get size() {
    return this._tail - this._head;
  }
  enqueue(value) {
    this[this._tail] = value;
    this._tail++;
    return this.size;
  }
  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    const returnValue = this[this._head];
    delete this[this._head++];
    return returnValue;
  }
  front() {
    return this[this._head];
  }
  get isEmpty() {
    return this.size === 0;
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
//TEST
const queue = new Queue(1, 3, 5, 7, 9);
const testquee = new Queue(2, 4);
