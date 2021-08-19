const arrOfInts = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];

const findSubArrWithZeroSum = (arr) => {
  let currVal;
  let currPairs = [];

  arr.forEach((i) => {
    currVal = i;
    currPairs = [];

    for (let j = arr.indexOf(i) + 1; j <= arr.length - 1; j++) {
      currVal += arr[j];
      console.log({ currVal, pos: `${i}, ${arr[j - 1]}, ${arr[j]}` });
    }
  });

  console.log({ currPairs, currVal });
  //   return currVal;
};

console.log(findSubArrWithZeroSum(arrOfInts));
