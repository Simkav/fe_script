let isSquare = false;
const userInput1 = prompt(
  "Введите первое число, оставьте пустым для решения кв. уравнения"
);
let userInput2;
if (userInput1 === "x" || userInput1 === "") {
  isSquare = true;
  userInput2 = prompt("Введите коэффициенты через ,");
} else {
  userInput2 = prompt("Пожалуйста введите 2 число");
}

quickMath(userInput1, userInput2);

function getMin(num1, num2) {
  return num1 < num2 ? num1 : num2;
}
function getMax(num1, num2) {
  return num1 < num2 ? num2 : num1;
}
function isEven(num) {
  return num % 2 === 0 ? true : false;
}
function isNumber(num) {
  return isNaN(+num) ? false : true;
}
function squareResolve(str) {
  str = str.split(","); // Получаем коэфы из строки
  let a = str[0];
  let b = str[1];
  let c = str[2];
  //Проверка на валидный ввод
  if (isNumber(a) && isNumber(b) && isNumber(c)) {
    const discriminant = b ** 2 - 4 * a * c;
    if (discriminant < 0) {
      console.log([]); // no roots
    } else {
      console.log(findRoots(a, b, discriminant));
    }
  } else {
    console.log("Wrong input " + str);
  }
}
//Нахождение корней квадратного уравнения через дискриминант
function findRoots(a, b, d) {
  if (d === 0) {
    return [-b / (2 * a)];
  } else {
    return [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
}

function floodProtect() {
  alert("Dont flood plz");
  alert("Dont flood plz");
  alert("Dont flood plz");
  alert("Dont flood plz");
  alert("Dont flood plz");
}

function quickMath(num1, num2) {
  if (num1 === null && num2 === null) {
    floodProtect();
  } else if (isSquare) {
    console.log(squareResolve(num2));
  } else {
    if (isNumber(num1) && isNumber(num2)) {
      console.log("Min number is: " + getMin(num1, num2));
      console.log("Max number is: " + getMax(num1, num2));
      console.log("Is " + num1 + " even? " + isEven(num1));
      console.log("Is " + num2 + " even? " + isEven(num2));
    } else {
      console.log("Wrong input");
    }
  }
}
