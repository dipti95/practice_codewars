function middlePermutation(s) {
    var n=s.length
    s=s.split("").sort().join("")
    if(n%2==0){
      s=s.slice(0,n/2-1)+s.slice(n/2,n)+s[n/2-1]
      return s.split("").reverse().join("")
    }
    else{
    var ss=s[Math.floor(n/2)]
    s=s.slice(0,Math.floor(n/2))+s.slice(Math.ceil(n/2),n)
    return ss+middlePermutation(s)
    }
}
console.log(middlePermutation('abcdxg'))
