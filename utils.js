function numMax(x, y, z) {
  let max;
  if (x > y && x > z) {
    max = x;
  } else {
    if (z > y) {
      max = z;
    } else {
      max = y;
    }
  }
  console.log("max", max);
}

module.exports = numMax;
