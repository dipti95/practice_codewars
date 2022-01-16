function nextSmaller(n) {
  let arr = n.toString().split("");
  console.log(arr);

  let idx;

  for (let i = arr.length - 1; i > 0; i--) {
    if (Number(arr[i]) < Number(arr[i - 1])) {
      idx = i - 1;
      break;
    }
  }

  if (idx === undefined) return -1;

  let firstArr = arr.splice(idx);
  let ele = firstArr.splice(0, 1);

  let maxNum = null;
  let maxIdx = null;

  for (let i = 0; i < firstArr.length; i++) {
    if (Number(firstArr[i]) < Number(ele[0])) {
      if (maxNum === null || firstArr[i] > maxNum) {
        maxNum = firstArr[i];
        maxIdx = i;
      }
    }
  }

  if (maxIdx === null) {
    return -1;
  }

  firstArr.splice(maxIdx, 1);
  firstArr.push(ele);

  firstArr.sort((a, b) => b - a);

  console.log(maxNum);

  let result = [...arr, ...maxNum, ...firstArr].join("");

  return Number(result[0]) === 0 ? -1 : Number(result);
}
