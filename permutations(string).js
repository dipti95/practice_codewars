function permutations(string) {
    if (string.length < 2) return [string]; // This is our base case of recursive function
  
    let perm = []; 
    for (let i = 0; i < string.length; i++) {
      var char = string[i];
  
      // Cause we don't want any duplicates:
      if (string.indexOf(char) != i) // if char was used already
        continue; // skip it this time
  
      let remainingString = string.slice(0, i) + string.slice(i + 1, string.length); 
      console.log(remainingString)
      for (let ele of permutations(remainingString))
        perm.push(char + ele)
    }
    return perm;
  }

  // THIS SOLUTION IS USEFUL FOR WHEN IT IS GIVEN ARRAY INSTEAD OF STRING
  // And time complexity is less!!!
function permutations(array) {
  let perm = []
  helper(0,array,perm)
  return perm
}

function helper(i,array,perm){
  if(array.length -1 === i) perm.push(array.slice());
  else {
    for(let j = i   ; j < array.length; j++){
      swap(i,j,array)
      helper(i+1,array,perm)
      swap(i,j,array)
    }
  }
}

function swap (i,j,array){
  let ele = array[i]
  array[i] = array[j]
  array[j] = ele
}