"use strict";

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  set year(v) {
    if (typeof v !== "number") {
      throw new TypeError("Year must be number");
    }
    this._year = v;
  }
  get year() {
    return this._year;
  }
  getCourse() {
    const result = new Date().getFullYear() - this.year + 1;
    if (result > 5) {
      throw new RangeError("Student finish education");
    } else if (result < 0) {
      throw new RangeError("Student haven't started education yet");
    }
    return result;
  }
}

const student = new Student("Test", "Testovich", 2017);
//Test
/*
console.log(student.getCourse()) | 5;
student.year = 2020;
console.log(student.getCourse()) | 2;
student.year = 2021;
console.log(student.getCourse()) | 1;
*/
{
  //remove when use
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

  class RangeValidator {
    constructor(from, to) {
      this.from = from;
      this.to = to;
    }
    set from(v) {
      if (typeof v !== "number") {
        throw new TypeError(`${v} not a number`);
      } else if (this.to < v) {
        throw new RangeError("Second argument must be bigger then first");
      }
      this._from = v;
    }
    set to(v) {
      if (typeof v !== "number") {
        throw new TypeError(`${v} not a number`);
      } else if (this.from > v) {
        throw new RangeError("Second argument must be bigger then first");
      }
      this._to = v;
    }
    get from() {
      return this._from;
    }
    get to() {
      return this._to;
    }
    get range() {
      return [this._from, this._to];
    }
    validate(num) {
      if (num >= this._from && num <= this._to) {
        return num;
      }
      throw new RangeError(`${num} is not in the array`);
    }
  }
} //remove when use
