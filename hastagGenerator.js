function generateHashtag(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) !== 32) {
      if (result.length === 0) {
        result += "#";
        result += str[i].toUpperCase();
      } else if (str.charCodeAt(i - 1) === 32) {
        result += str[i].toUpperCase();
      } else result += str[i];
    }
  }

  if (!result.length) return false;
  return result.length > 140 ? false : result;
}

// Better way
function generateHashtag(str) {
  str = str
    .split(" ")
    .map((words) => {
      return words.charAt(0).toUpperCase() + words.slice(1);
    })
    .join("");

  if (str.length === 0) return false;

  str = "#" + str;

  return str.length > 140 ? false : str;
}
