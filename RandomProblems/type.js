// return type of val without using typeof

function type(val) {
  // Object.prototype.toString.call(val) return [object typeofVal]
  // that's why we need to slice the return value;
  return Object.prototype.toString.call(val).slice(8, -1);
}
