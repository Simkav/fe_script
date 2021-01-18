'use strict';
class Stack {
  constructor(...args) {
    this.size = 0;
    args.forEach((value) => {
      this.push(value);
    });
  }
  push(v) {
    this[this.size++] = v;
    return this.size;
  }
  pop() {
    if (this.isEmpty) {
      return undefined;
    }
    const returnValue = this[this.size - 1];
    delete this[--this.size];
    return returnValue;
  }
  peek() {
    return this[this.size - 1];
  }
  get isEmpty() {
    return this.size === 0;
  }
  set size(v) {
    this._size = v;
  }
  get size() {
    return this._size;
  }
  [Symbol.iterator]() {
    return new StackIterator(this);
  }
}
class StackIterator {
  constructor(stack) {
    this.stack = stack;
    this.size = this.stack.size - 1;
  }
  next() {
    return {
      value: stack[this.size--],
      done: this.size < -1,
    };
  }
}
//TEST
const checkSequence = (str) => {
  const stack = new Stack();
  for (const symbol of str) {
    if (symbol === '(') {
      stack.push(symbol);
    } else if (symbol === ')' && stack.peek() === '(') {
      stack.pop();
    } else if (symbol === '[') {
      stack.push(symbol);
    } else if (symbol === ']' && stack.peek() === '[') {
      stack.pop();
    } else {
      throw new Error('error');
    }
  }
  if (!stack.isEmpty) {
    throw new Error('error');
  }
  return true;
};
