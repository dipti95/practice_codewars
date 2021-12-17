/**
 g (integer >= 2) which indicates the gap we are looking for

m (integer > 2) which gives the start of the search (m inclusive)

n (integer >= m) which gives the end of the search (n inclusive) */

function gap(g, m, n) {
  let arr = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) arr.push(i);
    if (arr.length !== 2) continue;
    else {
      if (arr[1] - arr[0] === g) return [arr[0], arr[1]];
      else arr.shift();
    }
  }

  return null;
}

function isPrime(num) {
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
