// Print all even numbers from 0 to 10

const evenNumbers = function(number) {
  for (const num of number) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
};