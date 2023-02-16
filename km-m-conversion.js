// Write a function that converts kilometres to miles. Round to 2 decimal places.

const unitConverter = function(kmValue) {
  let miles = (kmValue * 0.62137119).toFixed(2);

  return Number(miles);
};

console.log(unitConverter(145));