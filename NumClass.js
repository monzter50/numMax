class NumMax {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.max;
  }
  calculate() {
    if (this.x > this.y && this.x > this.z) {
      this.max = this.x;
    } else {
      if (this.z > this.y) {
        this.max = this.z;
      } else {
        this.max = this.y;
      }
    }
    console.log("max", this.max);
  }
  getMax() {
    return this.max;
  }
}

module.exports = NumMax;
