// Calculate the MEAN -- average value of numbers in a list.

const mean = function(array) {
  let sum = 0;

  for (const elem of array) {
    sum += elem;
    console.log(sum);
  }

  let avg = sum / array.length;

  return avg;
};

console.log(mean([4, 3, 9, 4, 5]));