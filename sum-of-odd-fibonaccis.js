// find sum of Fibonacci numbers upto n
// For example, sumFibs(10) should return 10
// because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// MY ANSWER
function sumFibs(num) {
  let numsArr = [1, 1];
  let total = 0;
  for (let i = 0; i < num; i++) {
    if (numsArr[i] + numsArr[i + 1] <= num) {
      numsArr.push(numsArr[i] + numsArr[i + 1]);
      total = total + numsArr[i] + numsArr[i + 1];
    } else break;
  }
  return numsArr.reduce((prev, cur) => prev + (cur % 2 !== 0 ? cur : 0));
}

// FREECODECAMP ANSWER
// function sumFibs(num) {
//   let prevNumber = 0;
//   let currNumber = 1;
//   let result = 0;
//   while (currNumber <= num) {
//     if (currNumber % 2 !== 0) result += currNumber;

//     currNumber += prevNumber;
//     prevNumber = currNumber - prevNumber;
//   }

//   return result;
// }

console.log(sumFibs(4));
