/*
 * @lc app=leetcode id=954 lang=javascript
 *
 * [954] Array of Doubled Pairs
 */

// #array, #hash-table, #bit-manipulation, #bitwise
// @google

// arr such that arr[2 * i + 1] = 2 * arr[2 * i]
// means current number equal to double of previous number
// ex. i = 2, arr[2 * 2 + 1 = 5] =  arr[2 * 2 = 4] * 2 

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canReorderDoubled = function(arr) {
  if (arr.length % 2 !== 0) return false;

  let hashMap = new Map();
  for (const num of arr) {
    if (hashMap.has(num)) {
      hashMap.set(num, hashMap.get(num) + 1);
    } else {
      hashMap.set(num, 1);
    }
  }
  
  // sorted by absolute value
  arr = arr.sort((a, b) => Math.abs(a) - Math.abs(b));

  for (const num of arr) {
    if (hashMap.get(num) === 0) continue;

    if (hashMap.get(num * 2) <= 0 || isNaN(hashMap.get(num * 2))) return false;

    hashMap.set(num, hashMap.get(num) - 1);
    hashMap.set(num * 2, hashMap.get(num * 2) - 1);
  }

  return true;
};
// @lc code=end


// let hashMap = arr.reduce((ac, n) => { 
//   // -~undefined = 1, -~1 = 2 ...
//   ac[n] = -~ac[n];
//   return ac;
// }, {});

// console.log(canReorderDoubled([-33, 0]));
// console.log(canReorderDoubled([0, 0]));
console.log(canReorderDoubled([1, 2, 1, -8, 8, -4, 4, -4, 2, -2]));
// console.log(canReorderDoubled([4, -2, 2, -4]));
// console.log(canReorderDoubled([2, 1, 2, 6]));
