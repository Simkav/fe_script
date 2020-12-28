"use strict";

const max_try = 5;

function firstTask() {
  for (let i = 25; i > 0; i--) {
    console.log(i);
  }
}

function secondTask() {
  for (let i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function ThirdTask() {
  let num = 0;
  for (let i = 1; i <= 100; i++) {
    num = num + i;
  }
  return num;
}

function FourthTask() {
  for (let i = 0; i < max_try; i++) {
    const userInput = +prompt("Enter solution of (2+2*2)?");
    if (userInput === 6) {
      alert("Right, good job!");
      break;
    }
  }
}

function firstTaskwhile() {
  let i = 25;
  while (i > 0) {
    console.log(i);
    i--;
  }
}

function secondTaskWhile() {
  const startCounetr = 10;
  const endCounter = 50;
  let i = startCounetr;
  while (i <= endCounter) {
    if (i % 5 === 0) {
      console.log(i);
    }
    i++;
  }
}

function ThirdTaskWhile() {
  let counter = 0;
  const goal = 100;
  let result = 0;
  while (counter <= goal) {
    result += counter;
    counter++;
  }
  return result;
}

function FourthTaskWhile() {
  let i = 0;
  while (i < max_try) {
    const userInput = +prompt("Enter solution of (2+2*2)?");
    if (userInput === 6) {
      alert("Right, good job!");
      break;
    }
  }
}
