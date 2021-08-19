// find patterns in a given string
// input "lolol", lol
// output 2

const string = "AABAACAADAABAABA";

// const stringPatternSearch = (string, pattern) => {
//   let count = 0;

//   for (let i = 0; i <= string.length - 1; i++) {
//     for (let j = 0; j <= pattern.length; j++) {
//       if (string[i + j] !== pattern[j]) {
//         break;
//       }

//       if (j === pattern.length - 1) {
//         count++;
//       }
//     }
//   }

//   return count;
// };

const stringPatternSearch = (string, pattern) => {
    let count = 0;
    const lenOfPattern = pattern.length;

    for (let i = 0; i <= string.length - 1; i++) {
      const slicedWord = string.slice(i, i + lenOfPattern);

      if (slicedWord === pattern) {
        count++;
      }
    }

    return count;
  };

console.log(stringPatternSearch(string, "AABA"));
