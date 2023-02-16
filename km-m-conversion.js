// Write a function that converts kilometres to miles. Round to 2 decimal places.

const unitConverter = function(kmValue) {
  // Use toFixed method to round calculated value to two decimal places.
  // toFixed outputs a string
  let miles = (kmValue * 0.62137119).toFixed(2);

  // Use Number function to convert calculated value back to a Number.
  return Number(miles);
};

console.log(unitConverter(146));