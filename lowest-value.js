/* Write a function that returns the lowest value in a list.
E.g. min([6, 2, 0, 1, 4]);
Returns: 0
*/

const lowestValue = function(arr) {
  let minValue = 0;

  for (const num of arr) {
    if (num < minValue) {
      minValue = num;
    }
  }
  return minValue;
};

console.log(lowestValue([7, 10, 0, 1, 4]));