// Write a function that takes two or more arrays
// and returns a new array of unique values
// in the order of the original provided arrays.

const uniteUnique = (...arr) => {
  let mix = [].concat.apply([], arr); // turn multi-dim array to flat array
  let out = [];
  mix.forEach(num => (!out.includes(num) ? out.push(num) : false)); //push to output if item doesnt already exist
  return out;
};

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
