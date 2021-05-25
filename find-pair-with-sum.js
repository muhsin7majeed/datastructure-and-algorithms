const arrOfInts = [2, 5, 7, 4, 6, 8];

const findPairWithGivenSum = (arr, sum) => {
  let possiblePair = "";

  arr.forEach((i) => {
    arr.forEach((j) => {
      if (possiblePair.length) return;

      if (i + j === sum) {
        // console.log(`${i} + ${j} = ${sum}`);
        return (possiblePair = `Pair Found (${i} + ${j} = ${sum})`);
      }
    });
  });

  return possiblePair || "No Pairs Found";
};

console.log(findPairWithGivenSum(arrOfInts, 7));
