let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
function rot13(str) {
  return str
    .split("")
    .map((ele) => {
      if (alpha.includes(ele)) {
        return (ele = alpha[((alpha.indexOf(ele) % 26) + 13) % 26]);
      }
      return ele;
    })
    .join("");
}

rot13("SERR PBQR PNZC");
