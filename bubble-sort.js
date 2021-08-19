// implement bubblsort

const bubbleSort = (arr) => {
  let loopCount = 0;

  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j <= arr.length - i; j++) {
      let currentVal = arr[j];
      let nextVal = arr[j + 1];

      if (currentVal > nextVal) {
        arr[j] = nextVal;
        arr[j + 1] = currentVal;
      }

      loopCount++;
    }
  }

  console.log("LOOP RAN", loopCount);
  return arr;
};

console.log(bubbleSort([6, 7, 2, 3, 8, 4, 9, 5, 1]));
