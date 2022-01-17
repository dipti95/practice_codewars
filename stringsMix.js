function mix(s1, s2) {
  // your code
  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s1.length; i++) {
    if (
      s1[i] === s1[i].toUpperCase() ||
      s1.charCodeAt(i) === 32 ||
      s1[i] === ","
    )
      continue;
    else {
      if (s1[i] in obj1) obj1[s1[i]] += 1;
      else obj1[s1[i]] = 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    if (
      s2[i] === s2[i].toUpperCase() ||
      s2.charCodeAt(i) === 32 ||
      s2[i] === ","
    )
      continue;
    else {
      if (s2[i] in obj2) obj2[s2[i]] += 1;
      else obj2[s2[i]] = 1;
    }
  }
  console.log(obj1);
  console.log(obj2);

  let str = "";

  let keys = Object.keys(obj1);

  for (let key of keys) {
    if (key in obj2) {
      if (obj1[key] > obj2[key]) {
        delete obj2[key];
        str += "/1:";
        for (let i = 1; i <= obj1[key]; i++) {
          str += key;
        }
      } else if (obj2[key] > obj1[key]) {
        str += "/2:";
        for (let i = 1; i <= obj2[key]; i++) {
          str += key;
        }
        delete obj2[key];
      } else {
        delete obj2[key];
        if (obj1[key] !== 1) {
          str += "/=:";
          for (let i = 1; i <= obj1[key]; i++) {
            str += key;
          }
        }
      }
    } else {
      if (obj1[key] !== 1) {
        str += "/1:";
        for (let i = 1; i <= obj1[key]; i++) {
          str += key;
        }
      }
    }
  }

  console.log(obj2);
  let keys2 = Object.keys(obj2);
  for (let key of keys2) {
    if (obj2[key] !== 1) {
      str += "/2:";
      for (let i = 1; i <= obj2[key]; i++) {
        str += key;
      }
    }
  }

  return str
    .slice(1)
    .split("/")
    .sort((a, b) => {
      if (a.length !== b.length) return b.length - a.length;
      if (a.charCodeAt(0) !== b.charCodeAt(0))
        return a.charCodeAt(0) - b.charCodeAt(0);
      return a[2].localeCompare(b[2]);
    })
    .join("/");
}
