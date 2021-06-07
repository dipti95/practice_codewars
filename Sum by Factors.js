function sumOfDivided(lst) {
    //your code
    let answer = []
    let primeArr =[]
    
    for(let i =0; i < lst.length; i++){
      let ele = lst[i]
      primeArr.push(primeFactors(ele))
      //console.log(primeArr)
   
    }
     let x = flattenArray(primeArr)
     console.log(x)
     let sum = 0
     for(let i = 0; i < x.length ; i ++){
      
       for(let j = 0; j < lst.length; j++){
         if(lst[j] % parseInt(x[i]) === 0) sum += lst[j]
       }
       answer.push([parseInt(x[i]),sum])
       sum = 0
     }
    return answer ;
  }
  function flattenArray(primeArr){
    let arr = []
    for(let i = 0; i < primeArr.length; i++){
      if(Array.isArray(primeArr[i])) {
         arr = arr.concat(flattenArray(primeArr[i]))
      }else arr.push(primeArr[i])
    }
  
    return individual(arr)
  } 
  function individual(arr){
    let hash= {}
    for(let i = 0; i < arr.length; i++){
      if(arr[i] in hash) hash[arr[i]] += 1
      else hash[arr[i]] = 1
    }
    return Object.keys(hash)
  }
  function primeFactors(num) {
    function is_prime(num) {
      for (let i = 2; i <= Math.sqrt(Math.abs(num)); i++)
      {
        if (Math.abs(num) % i === 0) return false;
      }
      return true;
    }
    const result = [];
    for (let i = 2; i <= Math.abs(num); i++)
    {
      while (is_prime(i) && Math.abs(num) % i === 0) 
      {
        if (!result.includes(i)) result.push(i);
        num /= i;
      }
    }
    return result;
  }