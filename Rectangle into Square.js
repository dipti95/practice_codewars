function sqInRect(lng, wdth, initial = true){
    //your code here
    // This question solved by using recursion !!!
      if(lng === wdth){return initial? null:[lng]}
        let max = Math.max(lng,wdth);
        let min = Math.min(lng,wdth);
       return [min, ...sqInRect((max - min),min, false)]
     
  }