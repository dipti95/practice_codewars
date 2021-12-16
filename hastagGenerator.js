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
