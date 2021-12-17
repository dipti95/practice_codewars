function sumStrings(a, b) {
  a = a.split("").reverse();
  b = b.split("").reverse();
  let carry = 0;
  let index = 0;
  let sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    let aDigit = index < a.length ? parseInt(a[index]) : 0;
    let bDigit = index < b.length ? parseInt(b[index]) : 0;
    let digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == "0") sumDigits.shift();
  return sumDigits.join("");
}
