const primeFactors = n => {
    if (n < 2) return `(${n})`;
    let factors = '';
    for ( let i = 2; i <= n; i++) {
      let count = 0;
      while ( n%i === 0 ) {
        count++; 
        n /= i;
      }
      if (count) {
        factors += `(${i}`;
        if (count > 1) factors += `**${count}`;
        factors += `)`;
      }
    }
    return factors;
  }
  // another way 
  function primeFactors(n) {
    var str = ""
    var k = 2;
    var count = 0;
  
    while (k <= n) {
      while (n % k == 0) {
        n /= k;
        count++;
      }
      if (count == 0) {
        k++;
        continue;
      }
  
      if (count == 1) { str += `(${k})` }
      else str += `(${k}**${count})`
      count = 0;
      k++;
  }
    return str;
  }

  // one more way but time complexity is more ;
  // This solution is by using hashmap;
  
  function primeFactors(n){
  const factors = []; 
  let hash = {}
  let str = ''
  for (let i = 2, x = Math.abs(n); i <= x; i++)
    while (n % i === 0) {
      factors.push(i);
      if(i in hash) hash[i] += 1;
      else hash[i] =1
      n /= i;
    }
 for (const [key, value] of Object.entries(hash)) {
    if(value === 1) str += '('+key+')'
    else str += '('+key+"**"+value+')';
  }
    return str
}