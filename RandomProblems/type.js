// return type of val without using typeof

function type(val) {
  return Object.prototype.toString.call(val).slice(8, -1);
}
