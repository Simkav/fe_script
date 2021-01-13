'use strict';

const MIN_ZP = 6000 / 21;

class Worker {
  constructor(name, surName, salaryRate = 600, dayOnWork = 0) {
    this.name = name;
    this.surName = surName;
    this.salaryRate = salaryRate;
    this.dayOnWork = dayOnWork;
  }

  set salaryRate(newRate) {
    if (typeof newRate !== 'number') {
      throw new TypeError('Not a number');
    }
    if (newRate < 0) {
      throw new RangeError();
    }
    this._salaryRate = newRate;
  }

  getSalary() {
    return this.salaryRate * this.dayOnWork;
  }

  getFullName() {
    return `${this.name} ${this.surName}`;
  }

  changeSalaryRate(rate) {
    return (this.salaryRate = rate);
  }

  workedDay() {
    return ++this.dayOnWork;
  }

  issueSalary() {
    console.log(`Payed ${this.getSalary()} to ${this.getFullName()}`);
    this.workedDay = 0;
  }
}
const w1 = new Worker('John', 'Doe', 500, 5);

class Friend {
  constructor(name, appleAmount, friends) {
    this.name = name;
    this.appleAmount = appleAmount;
    this.friends = friends;
  }

  getAllApple() {
    let myApples = this.appleAmount;
    this.friends.forEach((friend) => {
      myApples += friend.appleAmount;
    });
    return myApples;
  }
}

const me = new Friend('Ivan', 5, [
  new Friend('John', 10),
  new Friend('Keks', 20),
]);
