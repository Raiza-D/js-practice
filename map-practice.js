// Write a program prints the length of each word in a list.

const bodiesOfWater = [
  "Indian Ocean",
  "Arctic Ocean",
  "Mediterranean Sea",
  "Pacific Ocean"
];

const nameLength = function(array) {
  array.map((water) => {
    return water.length;
  });
};