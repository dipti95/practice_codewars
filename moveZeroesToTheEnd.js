function moveZero(array) {
  return array
    .filter((ele) => ele !== 0)
    .concat(array.filter((ele) => ele === 0));
}
