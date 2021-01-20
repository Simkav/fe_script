'use strict';
const compare = (firstString, secondString) => {
  if (firstString.length !== secondString.length) {
    throw new Error('Impossible');
  }
  const firstMap = createVocabulary(secondString);
  const secondMap = createVocabulary(secondString);
  for (const key of firstMap.keys()) {
    if (firstMap.get(key) !== secondMap.get(key)) {
      throw new Error('Impossible');
    }
  }
  return true;
};

const createVocabulary = (str) => {
  const map = new Map();
  for (const char of str) {
    map.has(char) ? map.set(char, map.get(char) + 1) : map.set(char, 1);
  }
  return map;
};
