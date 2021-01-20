'use strict';
const compare = (firstString, secondString) => {
  if (firstString.length !== secondString.length) {
    throw new Error('Impossible');
  }
  const firstMap = new Map();
  const secondMap = new Map();
  for (const char of firstString) {
    firstMap.has(char)
      ? firstMap.set(char, firstMap.get(char) + 1)
      : firstMap.set(char, 1);
  }
  for (const char of secondString) {
    secondMap.has(char)
      ? secondMap.set(char, secondMap.get(char) + 1)
      : secondMap.set(char, 1);
  }
  for (const key of firstMap.keys()) {
    if (firstMap.get(key) !== secondMap.get(key)) {
      throw new Error('Impossible');
    }
  }
  return true;
};
