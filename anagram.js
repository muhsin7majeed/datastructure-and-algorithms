// check if 2 strings are anagrams even with symbols and mixed cases.

const strOne = "smiTe!";
const strTwo = "items";

const isAnagram = (str1, str2) => {
  str1 = str1.replace(/[^a-zA-Z ]/g, "").toLowerCase();
  str2 = str2.replace(/[^a-zA-Z ]/g, "").toLowerCase();

  if (str1.length !== str2.length) return false;

  const strOneCharCounts = {};

  for (let i = 0; i <= str1.length - 1; i++) {
    const char = str1[i];

    strOneCharCounts[char] = strOneCharCounts[char] + 1 || 1;
  }

  for (let i = 0; i <= str2.length - 1; i++) {
    const char = str2[i];

    if (!strOneCharCounts[char]) {
      return false;
    } else {
      strOneCharCounts[char]--;
    }
  }

  return true;
};

console.log(isAnagram(strOne, strTwo));
