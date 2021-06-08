//console.log(Math.ceil((2 ** 0.5)))
// we can also use Math.floor and For square root Math.sqrt
function isPrime(ele){
    for(let i =2; i <= Math.ceil(ele ** 0.5); i++){
      if(ele % i === 0 && i !== ele)return false;
    }
    return true;
  }
  console.log(isPrime(2))


  /// to flaten the array
  let factors =[ [ 2 ],
  [ 3 ],
  [ 2, 2 ],
  [ 5 ],
  [ 2, 3 ],
  [ 7 ],
  [ 2, 2, 2 ],
  [ 3, 3 ],
  [ 2, 5 ],
  [ 11 ],
  [ 2, 2, 3 ],
  [ 13 ],
  [ 2, 7 ],
  [ 3, 5 ],
  [ 2, 2, 2, 2 ],
  [ 17 ] ]
  console.log(factors.flat())

  