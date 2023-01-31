/* Create a function that returns a Boolean if a number is divisible by 10 */

const checkIfDivisibleBy = function(number) {
  if (number % 10 !== 0) {
    return false;
  }
  else {
    return true;
  }
};

console.log(checkIfDivisibleBy(25));
console.log(checkIfDivisibleBy(30));