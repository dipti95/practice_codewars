Examples: nickname("manuel"); // => 'MANU-MANU'
console.log(nickname("pikachu")); // => 'PIKA-PIKA'
nickname("bootcamp"); // => 'BOO-BOO'
nickname("bob"); // => 'BOB-BOB'

function nickname(str) {
  let vowel = "AEIOU";
  str = str.toUpperCase();
  let result = "";
  let count = 0;
  for (const ele of str) {
    if (count < 2) result += ele;
    if (vowel.includes(ele)) count++;
  }
  return result.concat("-", result);
}
