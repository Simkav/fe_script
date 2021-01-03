"use strict";
//TODO ARRAY.SHIFT
function MyArrayProto() {
  this.push = function push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  };
  this.pop = function pop() {
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  };
  this.unshift = function unshift() {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
      this[i] = arguments[i];
    }
    return (this.length += arguments.length);
  };
  this.shift = function shift() {
    const returnValue = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    --this.length;
    return returnValue;
  };
}
function MyArray() {
  this.length = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
}
MyArray.prototype = new MyArrayProto();

function Accumulator(startingValue) {
  if (this.checkNumber(startingValue)) {
    this.value = startingValue;
  } else {
    throw Error("WRONG INPUT");
  }
}

function AccumulatorProto() {
  this.read = function read() {
    const input = +prompt("Input number");
    if (this.checkNumber(input)) {
      return;
    }
    return (this.value += input);
  };
  this.checkNumber = function checkNumber(num) {
    return !isNaN(num) && num > 0;
  };
}

Accumulator.prototype = new AccumulatorProto();
