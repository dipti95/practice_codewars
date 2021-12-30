function hamming(a, b) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) count++;
  }
  return count;
}
