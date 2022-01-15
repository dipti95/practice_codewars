function parseInt(string) {
  console.log(string);

  let obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    million: 1000000,
  };

  let arr = [];

  string.split(" ").map((ele) => {
    if (ele.includes("-")) {
      ele.split("-").map((val) => {
        if (val in obj) arr.push(obj[val]);
      });
    }
    if (ele in obj) {
      arr.push(obj[ele]);
    }
  });

  console.log(arr);

  if (arr.length === 1) return arr[0];

  if (!arr.includes(1000) && !arr.includes(1000000)) return getSum100(arr);
  else if (arr.includes(1000)) return getSum1000(arr);
  else return getSumMillion(arr);
}

function getSum100(arr) {
  let stack = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 100) {
      if (i === arr.length - 1) {
        sum += stack.pop() * arr[i];
      } else {
        sum += stack.pop() * arr[i];
      }
    } else {
      stack.push(arr[i]);
    }
  }

  return stack.reduce((acc, ele) => (acc += ele), sum);
}
function getSumMillion(arr) {
  let stack = [];
  let x = "";
  let sum = "";

  let idx = arr.indexOf(1000000);
  for (let i = 0; i < idx; i++) {
    stack.push(arr[i]);
  }
  console.log(stack);

  sum += getSum100(stack);
  if (idx === arr.length - 1) {
    sum += "000000";
  }
  stack = [];

  for (let i = idx + 1; i < arr.length; i++) {
    if (arr[i] === 1000) {
      sum += getSum100(stack);
      stack = [];
    } else if (i === arr.length - 1) {
      stack.push(arr[i]);
      sum += getSum100(stack);
    } else {
      stack.push(arr[i]);
    }
  }
  return Number(sum);
}

function getSum1000(arr) {
  let stack = [];
  let sum = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1000) {
      if (i === arr.length - 1) {
        sum += getSum100(stack);
        sum += "000";
      } else {
        sum += getSum100(stack);
        stack = [];
      }
    } else if (i === arr.length - 1) {
      stack.push(arr[i]);
      sum += getSum100(stack);
    } else {
      stack.push(arr[i]);
    }
  }
  return Number(sum);
}

console.log(parseInt("seven hundred thousand"));
