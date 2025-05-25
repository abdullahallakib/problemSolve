var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};

console.log(isAnagram((s = "anagram"), (t = "nagaram")));
