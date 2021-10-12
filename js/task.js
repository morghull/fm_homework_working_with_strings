'use strict';

const vowelCount = (str) =>
  String(str)
    .split('')
    .filter((letter) =>
      ['a', 'u', 'e', 'i', 'o'].includes(letter)
    ).length;

console.log(vowelCount('some text'));
