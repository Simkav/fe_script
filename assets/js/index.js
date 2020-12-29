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
    if (this.length > 0) {
      const lastItem = this[this.length - 1];
      delete this[--this.length];
    }
  };
  this.unshift = function unshift() {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
      this[i] = arguments[i];
    }
    return (this.length += arguments.length);
  };
}
MyArray.prototype = new MyArrayProto();
function MyArray() {
  this.length = 0;
  if (arguments.length > 0) {
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
}

const myArr = new MyArray();
