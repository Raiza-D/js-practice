// Print all numbers from 0 - 100

const oddNumbers = function(limit) {
  for (let num = 0; num < 100; num++) {
    if (num % 2 !== 0) {
      console.log(num);
    }
  }
};