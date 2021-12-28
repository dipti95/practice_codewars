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

//come with another solution
function hamming(n) {
  let arr = [1];
  let idx2 = 0;
  let idx3 = 0;
  let idx5 = 0;

  for (let i = 1; i < n; i++) {
    let ele = Math.min(2 * arr[idx2], 3 * arr[idx3], 5 * arr[idx5]);
    arr.push(ele);
    if (ele >= 2 * arr[idx2]) idx2++;
    if (ele >= 3 * arr[idx3]) idx3++;
    if (ele >= 5 * arr[idx5]) idx5++;
  }
  return arr[n - 1];
}
