Number.prototype.add = function (num) {
  //console.log(this)
  return this + num;
};

Number.prototype.subtract = function (num) {
  return Math.floor(this - num);
};
Number.prototype.multiply = function (num) {
  return this * num;
};
Number.prototype.divide = function (num) {
  return this / num;
};
Number.prototype.square = function () {
  return this ** 2;
};
