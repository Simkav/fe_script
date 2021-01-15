"use strict";
class MyArray {
  constructor() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
      this.push(arguments[i]);
    }
  }
  flat(depth = 1) {
    let result = new MyArray();
    this.forEach((item) => {
      if (MyArray.isMyArray(item) && depth) {
        result = result.concat(item.flat(depth - 1));
      } else if (item !== undefined) {
        result.push(item);
      }
    });
  }
  push() {
    for (let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
    }
    this.length += arguments.length;
    return this.length;
  }
  pop() {
    const lastItem = this[this.length - 1];
    delete this[--this.length];
    return lastItem;
  }
  unshift() {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + arguments.length] = this[i];
      this[i] = arguments[i];
    }
    return (this.length += arguments.length);
  }
  shift() {
    const returnValue = this[0];
    for (let i = 1; i < this.length; i++) {
      this[i - 1] = this[i];
    }
    --this.length;
    return returnValue;
  }
  concat() {
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
  }
  reverse() {
    const arrLength = this.length;
    const half = Math.floor(arrLength / 2);
    for (let i = 0; i < half; i++) {
      let buffer = this[i];
      this[i] = this[arrLength - 1 - i];
      this[arrLength - 1 - i] = buffer;
    }
    return this;
  }
  some(func) {
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        return true;
      }
    }
    return false;
  }
  every(func) {
    for (let i = 0; i < this.length; i++) {
      if (!func(this[i])) {
        return false;
      }
    }
    return true;
  }
  filter(func) {
    const bufferArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        bufferArray.push(this[i]);
      }
    }
    return bufferArray;
  }
  forEach(f) {
    for (let i = 0; i < this.length; i++) {
      f(this[i]);
    }
  }
  map(f) {
    let bufferArray = new MyArray();
    for (let i = 0; i < this.length; i++) {
      bufferArray.push(f(this[i]));
    }
    return bufferArray;
  }
}
