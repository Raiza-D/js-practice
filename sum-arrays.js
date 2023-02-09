/* Sum the numbers in a list. Assume all the items are numbers already. */

const sumNumbers = function(array) {
  let sum = 0;
  for (const elem of array) {
    sum += elem;
  }

  return sum;
}

console.log(sumNumbers([1, 2, 3, 4, 5]));