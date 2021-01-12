'use strict';

const MIN_ZP = 6000 / 21;

class Worker {
  constructor(name, surName, salaryRate = MIN_ZP, dayOnWork = 0) {
    this.name = name;
    this.surName = surName;
    this.salaryRate = salaryRate;
    this.dayOnWork = dayOnWork;
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

  getSalary() {
    return this.salaryRate * this.dayOnWork;
  }

  issueSalary() {
    console.log(`Payed ${this.getSalary()} to ${this.getFullName()}`);
    this.workedDay = 0;
  }
}
const w1 = new Worker('John', 'Doe', 500, 5);
