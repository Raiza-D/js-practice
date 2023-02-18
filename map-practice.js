// Write a program prints the length of each word in a list.

const bodiesOfWater = [
  "Indian Ocean",
  "Arctic Ocean",
  "Mediterranean Sea",
  "Pacific Ocean"
];

const nameLength =
  bodiesOfWater.map(water => {
    return water.length;
});

console.log(nameLength);