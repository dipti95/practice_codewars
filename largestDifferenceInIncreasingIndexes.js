function largestDifference(data) {
  let maxDiff = 0;
  for (let i = 0; i < data.length; i++) {
    let curr = 0;
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] <= data[j]) curr = j - i;
    }
    if (maxDiff < curr) {
      maxDiff = curr;
    }
  }
  return maxDiff;
}
