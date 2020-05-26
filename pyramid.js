const pyramid = height => {
  for (let i = 1; i <= height; i++) {
    const padding = "-".repeat(height - i);
    const hash = "#".repeat(i * 2 - 1);

    console.log(padding + hash + padding);
  }
};
console.log(pyramid(10));
