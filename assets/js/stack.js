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
/**
 *
 * @param {String} sequence
 * @param {String} rules - String like "()[]<>{}"
 */
const checkSequence = (sequence, rules = '()[]<>{}') => {
  if (rules.length % 2 !== 0) {
    throw new Error('Wrong rules');
  }
  if (sequence.length % 2 !== 0) {
    throw new Error('Wrong sequence');
  }
  const stack = new Stack();
  for (let i = 0; i < sequence.length; i++) {
    const char = sequence[i];
    {
      if (rules.includes(char)) {
        if (rules.indexOf(char) % 2 === 0) {
          stack.push(char);
        } else {
          if (stack.peek() === rules[rules.indexOf(char) - 1]) {
            stack.pop();
          }
        }
      } else {
        throw new Error('rules dosnt include ' + char);
      }
    }
  }
  if (!stack.isEmpty) {
    throw new Error('Wrong sequence');
  }
  return true;
};
//Test
console.log(checkSequence('[[]]()([{}])'));
console.log(checkSequence('121212121212345566', '123456'));
console.log(checkSequence('(12{})', '(){}12'));
