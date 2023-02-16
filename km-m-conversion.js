// Write a function that converts kilometres to miles. Round to 2 decimal places.

const unitConverter = function(kmValue) {
  let miles = Math.round(kmValue * 1000)

  return miles;
};