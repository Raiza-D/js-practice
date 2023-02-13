// Calculate the MEAN -- average value of numbers in a list.

const mean = function(array) {

  if (array.length === 0) {
    return null;
  }

  let sum = 0;

  for (const elem of array) {
    sum += elem;
  }

  let avg = sum / array.length;

  return avg;
};

console.log(mean([4, 3, 9, 4, 5]));
console.log(mean([]));
