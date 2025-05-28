var groupAnagrams = function (strs) {
  let myMap = new Map();
  for (const str of strs) {
    const sorted = strs.split("").sort("").join("");
    if (myMap.has(sorted)) {
      myMap.get(sorted).push(str);
    } else {
      myMap.set(sorted, [str]);
    }
  }
  return Array.from(myMap.values());
};
