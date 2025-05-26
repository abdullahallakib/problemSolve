/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let fun = function (str, c) {
    if (c <= 1) return str;

    let start = str[0];
    let arr = [];
    let count = 1;
    for (let i = 1; i < str.length; i++) {
      if (str[i] == start) {
        count++;
      } else {
        arr.push(count);
        arr.push(start);
        start = str[i];
        count = 1;
      }
    }

    arr.push(count);
    arr.push(start);
    return fun(arr, c - 1);
  };

  return fun([1], n).join("");
};
