// Print all even numbers from 0 to 10

const evenNumbers = function(number) {
  for (let num = 0; num <= number; num++) {
    if (num % 2 === 0) {
      console.log(num);
    }
  }
};

evenNumbers(10);