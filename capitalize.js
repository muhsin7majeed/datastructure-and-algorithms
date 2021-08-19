// capitalize first letter of each word for the given string

const text = "this is a test string. with 2 sentences";

const capitalize = (input) => {
  const capitalized = [];

  input.split(" ").forEach((w) => capitalized.push(w[0].toUpperCase() + w.slice(1)));

  return capitalized.join(" ");
};

console.log(capitalize(text));
