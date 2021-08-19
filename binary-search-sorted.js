// binary search in a sorted array

const arrOfNums = [2, 3, 5, 7, 12, 15, 21, 25, 28, 32, 34];

const binarySearch = (arr, find) => {
  let left = 0;
  let right = arr.length - 1;

  let iteration = 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const midVal = arr[mid];

    console.log("LOOP #" + iteration, "LOOKING FOR " + find);
    console.log("LEFT_IDX = " + left, "RIGHT_IDX = " + right);
    console.log("MID_IDX = " + mid, "MID_VALUE = " + midVal);

    if (find === midVal) return mid;
    else if (find < midVal) right = mid - 1;
    else left = mid + 1;

    iteration++;

    console.log("--------------------");
  }

  return -1;
};

console.log(binarySearch(arrOfNums, 25));
