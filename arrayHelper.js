Array.prototype.sum = function () {
  let sum = 0;
  for (const ele of this) {
    sum += ele;
  }
  return sum;
};
Array.prototype.square = function () {
  return this.map((ele) => ele ** 2);
};
Array.prototype.cube = function () {
  return this.map((ele) => ele ** 3);
};
Array.prototype.average = function () {
  let sum = 0;
  for (const ele of this) {
    sum += ele;
  }
  return sum / this.length;
};
Array.prototype.even = function () {
  return this.filter((ele) => ele % 2 === 0);
};
Array.prototype.odd = function () {
  return this.filter((ele) => ele % 2 !== 0);
};
