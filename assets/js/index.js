"use strict";

// const firstCat = {
//   name: "Vasyka",
//   color: "grey",
//   breed: "Persian",
//   age: 3,
//   isSleeping: true,
//   isMale: true,
//   isRunning: false,
//   run: function () {
//     this.isRunning = !this.isRunning;
//     return this.isRunning ? "Im running now" : "Im walking now";
//   },
//   sleep: function() {
//     this.isSleeping = !this.isSleeping;
//     return this.isSleeping ? "Im sleeping now" : "Im awake now"
//   }
// };
// const secondCat = new Object(firstCat);

function Cat(name, color, breed, age, isSleeping, isMale) {
  this.name = name;
  this.color = color;
  this.breed = breed;
  this.age = age;
  this.isSleeping = isSleeping;
  this.isMale = isMale;
  this.run = function () {
    this.isRunning = !this.isRunning;
    return this.isRunning ? "Im running now" : "Im walking now";
  };
  this.sleep = function () {
    this.isSleeping = !this.isSleeping;
    return this.isSleeping ? "Im sleeping now" : "Im awake now";
  };
}

const firstCat = new Cat("Vaska", "grey", "Persian", 3, true, true);

const secondCat = new Cat("Mashka", "black", "Spinx", 2, true, true);

function User(name, surname, age) {
  this.name = name;
  this.surname = surname;
  this.fullName = name + " " + surname;
  this.age = age;
}

const firstUser = new User("Ivan", "Ivanovich", "Ivan Ivanovich", 16);

function Country(name, population, area) {
  this.name = name;
  this.population = population;
  this.area = area;
  this.update = function () {
    this.density = this.population / this.area;
  };
  this.update();
}

const Ukraine = new Country("Ukraine", 25000, 50);

function Car(name, maxSpeed) {
  this.name = name;
  this.maxSpeed = maxSpeed;
  this.speed = 0;
  this.accelerate = function (number) {
    this.speed = this.speed + number;
    if (this.speed > this.speed) {
      this.speed = this.maxSpeed;
    }
    return this.speed;
  };
  this.deaccelerate = function (number) {
    this.speed = this.speed - number;
    if (0 < this.speed) {
      this.speed = 0;
    }
    return this.speed;
  };
  this.stop = function () {
    return (this.speed = 0);
  };
}

const car = new Car("Shevrole", 120);
