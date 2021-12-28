function hamming(n) {
  let arr = [];

  let i = 1;
  while (arr.length !== n) {
    let num = i;

    while (num % 2 === 0 && num !== 0) {
      num = num / 2;
    }

    while (num % 3 === 0 && num !== 0) {
      num = num / 3;
    }
    while (num % 5 === 0 && num !== 0) {
      num = num / 5;
    }
    if (num === 1) arr.push(i);
    i++;
  }
  console.log(arr);
  return arr[arr.length - 1];
}
