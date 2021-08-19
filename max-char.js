const stringOfText = "testst";

const findMaxChar = (text) => {
  const lettersObj = {};
  let maxLetter = {};

  [...text].forEach((letter) => {
    lettersObj[letter] = (lettersObj[letter] || 0) + 1;

    if (maxLetter[letter]) {
      if (lettersObj[letter] > maxLetter[letter]) {
        maxLetter = lettersObj[letter];
      }
    } else {
      maxLetter = { [letter]: lettersObj[letter] };
    }
  });

  return maxLetter;
};

console.log(findMaxChar(stringOfText));
