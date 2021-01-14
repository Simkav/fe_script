"use strict";
function sum(...args) {
  let result = 0;
  for (const num of args) {
    result += num;
  }
  return result;
}
