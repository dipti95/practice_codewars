function sumIntervals(intervals) {
  intervals = intervals.sort(function (a, b) {
    return a[0] - b[0];
  });

  let sum = 0;
  let curr = -Infinity;
  for (let ele of intervals) {
    if (ele[1] < curr) continue;
    if (ele[0] < curr) {
      sum += ele[1] - curr;
      curr = ele[1];
    } else {
      sum += ele[1] - ele[0];
      curr = ele[1];
    }
  }
  return sum;
}
