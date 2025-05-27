var intersection = function (nums1, nums2) {
  const set = new Set(nums1);
  const newset = new Set();

  for (let i = 0; i < nums2.length; i++) {
    newset.add(nums2[i]);
  }
  return [...newset];
};

console.log(intersection((nums1 = [4, 9, 5]), (nums2 = [9, 4, 9, 8, 3])));
