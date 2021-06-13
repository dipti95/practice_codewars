function getMiddle(s){
  //Code goes here!
  let len = s.length / 2
  if(s.length % 2 === 0 ) return s.slice(len - 1, len + 1 );
  else return s[Math.floor(len)]
}
//----------------------------------------------------------
//----------------------------------------------------------

function getMiddle(s){
  return s.slice(s.length/2 - !(s.length % 2), s.length/2 +1 )
}
//this always ends the slice at str.length / 2 + 1, 
//but the slice will start at str.length / 2 - true (which is the same as str.length / 2 - 1 after bool->number conversion) 
//if str is even-lengthed meaning it will get 2 chars, 
//otherwise if str is odd-lengthed then it will start the slice at str.length / 2 - false 
//which is the same as str.length / 2 - 0, so in that case the slice will only get one character. this covers both cases!