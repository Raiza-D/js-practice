// Create a function that takes in an array of numbers and filters out any negative numbers in the list.

const filterNegNumbers = function(array) {
  let filteredArray = [];

  for (const elem of array) {
    if (elem > 0) {
      filteredArray.push(elem);
    }
  }

  return filteredArray;
};

console.log(filterNegNumbers([-1, 10, 3, 2, -2, -10, -7]));