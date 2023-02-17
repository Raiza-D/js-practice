// Create a function that returns the number of vowels in a string

const vowelCount = function(words) {
  const vowels = ["a", "e", "i", "o", "u"];
  let vowelCount = 0;

  for (const letter of words.toLowerCase()) {
    if (vowels.includes(letter)) {
      vowelCount++;
    }
  }

  return vowelCount;
};

console.log(vowelCount("Crocodile Dundee"));
console.log(vowelCount("LALA LAND"));