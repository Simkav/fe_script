"use strict";
class Queue {
  constructor() {
    this.size = 0;
  }
  enqueue(value) {
    this[this.size] = value;
    return this.size++;
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
    return this[0];
  }
  get isEmpty() {
    return this._size === 0 ? true : false;
  }
  set size(v) {
    this._size = v;
  }
  get size() {
    return this._size;
  }
}
const queue = new Queue();
