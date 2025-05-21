function majorityElement(nums) {
  let count = 0;
  let candidate = null;

  for (let num of nums) {
    if (count === 0) {
      candidate = num; // count 0 hole ei index-er element ke candidate dhori
    }
    if (num === candidate) {
      count++; // jodi same candidate, count barai
    } else {
      count--; // jodi onno kichu hoy, count komai
    }
  }

  return candidate; // shesh e je candidate thake seta-i majority
}

console.log(majorityElement((nums = [3,3,9,2, 0,4,3,4,1,1,2,2])));
