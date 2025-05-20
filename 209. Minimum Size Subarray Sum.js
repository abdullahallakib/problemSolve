/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let start = 0;
 let sum = 0;
 let minLen = Infinity;
 
 for (let end = 0; end < nums.length; end++) {
   sum += nums[end];
 
   // Shrink window joto khon possible
   while (sum >= target) {
     let currentLen = end - start + 1;
     if (currentLen < minLen) {
       minLen = currentLen;
     }
     sum -= nums[start];
     start++;
   }
 }
 return minLen === Infinity ? 0 : minLen; 
 };