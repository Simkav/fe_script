"use strict";
class Queue {
  constructor() {
    this.size = 0;
    this.firstIndex = 0;
  }
  enqueue(value) {
    this[this.size] = value;
    return this.size++;
  }
  test() {
    if (this.size === 0) {
      return undefined;
    }
    const returnValue = this[this.firstIndex];
    delete this[this.firstIndex];
    // this.firstIndex = this.firstIndex + 1;
    --this.size;
    return returnValue;
  }

  dequeue() {
    if (this.size === 0) {
      return undefined;
    }
    const returnValue = this[0];
    for (let i = 0; i < this.size - 1; i++) {
      this[i] = this[i + 1];
    }
    delete this[this.size - 1];
    --this.size;
    return returnValue;
  }
  front() {
    return this[this.firstIndex];
  }
  get isEmpty() {
    return !(this._size === 0);
  }
  set firstIndex(v) {
    this._firstIndex = v;
  }
  get firstIndex() {
    return this._firstIndex;
  }
  set size(v) {
    this._size = v;
  }
  get size() {
    return this._size;
  }
  [Symbol.iterator]() {
    return new QueueIterator();
  }
}
class QueueIterator {}
const queue = new Queue();
