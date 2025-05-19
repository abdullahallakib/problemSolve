const nums = "bbbbb";

let set = new Set();
let preblen = 0;
let con = 0;

for (let index = con; index < s.length; index++) {
  set.add(s[index]);

  preblen = Math.max(preblen, set.size); // ✅ max check

  if (set.has(s[index + 1])) {
    set = new Set();
    if (con < s.length) {
      con++;
      index = con - 1; // ✅ ek step back, karon loop increment korbe abar
    }
  }
}

console.log(preblen); // Output: 1

console.log(preblen);
