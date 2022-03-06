/*
 * @lc app=leetcode id=1539 lang=javascript
 *
 * [1539] Kth Missing Positive Number
 */

/**
 * tags: #binary-search
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    // index + 1 = number 
    let mid = parseInt(left + (right - left) / 2);
    if (arr[mid] - mid <= k) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left + k;
};
// @lc code=end



const ans = findKthPositive([2, 3, 4, 7, 11], 5);
console.log('ans :>> ', ans);