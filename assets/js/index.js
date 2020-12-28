"use strict";

const max_try = 5;

//1) Вывод чисел от 25 до 0 (порядок уменьшения)

function firstTask() {
  for (let i = 25; i > 0; i--) {
    console.log(i);
  }
}

//2) Вывод чисел от 10 до 50, которые кратны 5

function secondTask() {
  for (let i = 10; i <= 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

//3)  Найти сумму чисел в пределах от 1 до 100.

function ThirdTask() {
  let num = 0;
  for (let i = 1; i <= 100; i++) {
    num = num + i;
  }
  return num;
}

//4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

function FourthTask() {
  for (let i = 0; i < max_try; i++) {
    const userInput = +prompt("Enter solution of (2+2*2)?");
    if (userInput === 6) {
      alert("Right, good job!");
      break;
    }
  }
}

//1) Вывод чисел от 25 до 0 (порядок уменьшения)

function firstTaskwhile() {
  let i = 25;
  while (i > 0) {
    console.log(i);
    i--;
  }
}
//2) Вывод чисел от 10 до 50, которые кратны 5

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

//3)  Найти сумму чисел в пределах от 1 до 100.

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

//4) предлагать пользователю решить пример (2 + 2 * 2) до тех пор, пока он его не решит

function FourthTaskWhile() {
  let i = 0;
  while (i < max_try) {
    const userInput = +prompt("Enter solution of (2+2*2)?");
    if (userInput === 6) {
      alert("Right, good job!");
      break;
    }
    i++;
  }
}
