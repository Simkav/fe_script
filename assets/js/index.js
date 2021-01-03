"use strict";
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
  this.concat = function concat() {
    let bufferArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      bufferArray[i] = this[i];
    }
    bufferArray.length = this.length;
    for (let i = 0; i < arguments.length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        bufferArray.push(arguments[i][j]);
      }
    }
    return bufferArray;
  };
  this.reverse = function reverse() {
    const arrLength = this.length;
    const half = Math.floor(arrLength / 2);
    for (let i = 0; i < half; i++) {
      let buffer = this[i];
      this[i] = this[arrLength - 1 - i];
      this[arrLength - 1 - i] = buffer;
    }
    return this;
  };
  this.forEach = function forEach(f) {
    for (let i = 0; i < this.length; i++) {
      f(this[i]);
    }
  };
  this.map = function map(f) {
    let bufferArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      bufferArray.push(f(this[i]));
    }
    return bufferArray;
  };
}
function MyArray() {
  this.isMyArray = function isMyArray(obj) {
    return this instanceof obj;
  };
  this.length = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
}
MyArray.prototype = new MyArrayProto();

let arr = new MyArray(1, 2, 3, 4, 5, 6);
