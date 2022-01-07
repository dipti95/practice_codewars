function Mormons(startingNumber, reach, target) {
  let sum = startingNumber;

  let count = 0;

  if (sum >= target) return count;
  let curr = sum * reach;
  sum += curr;
  count = 1 + Mormons(sum, reach, target);

  return count;
}
