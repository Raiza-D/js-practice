/* Sum the numbers in a list. The list may contain non-number type values. */

const sumArraysExceptions = function(array) {
  let sum = 0;

  for (const elem of array) {
    if (typeof elem === "number") {
      sum += elem;
    }
  }

  return sum;
};