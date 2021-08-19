// split array to given chunks

// eg:
// input => [1, 2, 3, 4, 5, 6], 2
// output => [1, 2, 3], [4, 5, 6]

const egArray = [1, 2, 3, 4, 5, 6, 7];

const chunkArray = (arr, size) => {
  const output = [];

  arr.forEach((el) => {
    const lastEl = output[output.length - 1];

    if (!lastEl || lastEl.length === size) {
      output.push([el]);
    } else {
      lastEl.push(el);
    }
  });

  return output;
};

console.log(chunkArray(egArray, 3));
