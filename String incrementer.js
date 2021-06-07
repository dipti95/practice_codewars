function incrementString (strng) {
    // return incrementedString
    console.log(strng)
    let number = "012345678"
    
    let lastIdx = strng[strng.length -1]
    if(number.indexOf(lastIdx) !== -1){
      return strng.slice(0,-1)+ (parseInt(lastIdx)+1);
    }else if( lastIdx === '9') return incrementString(strng.slice(0, -1)) + 0;
    return strng +'1';
  }