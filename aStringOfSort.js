function sortString(string, ordering) {
  ordering = ordering.split("");

  let array1 = string
    .split("")
    .filter((ele) => ordering.includes(ele))
    .sort((a, b) => ordering.indexOf(a) - ordering.indexOf(b));
  let array2 = string.split("").filter((ele) => !ordering.includes(ele));

  return array1.join("") + array2.join("");
}
