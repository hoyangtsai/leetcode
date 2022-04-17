/*
 * @lc app=leetcode id=907 lang=javascript
 *
 * [907] Sum of Subarray Minimums
 */

/**
 * tags: #monotonic-stack
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
  // left is for the distance to previous less element
  // right is for the distance to next less element
  let left = arr.map((v, i) => i + 1);
  let right = arr.map((v, i) => arr.length - i);

  let prevStack = [], nextStack = [];
  for (let i = 0; i < arr.length; i++) {
    // looking for previous less
    while (prevStack.length > 0 && arr[prevStack[prevStack.length - 1]] > arr[i]) prevStack.pop();
    left[i] = prevStack.length == 0 ? 
      i + 1 : 
      i - prevStack[prevStack.length - 1];
    prevStack.push(i);

    // looking for next less
    while (nextStack.length > 0 && arr[nextStack[nextStack.length - 1]] > arr[i]) {
      right[nextStack[nextStack.length - 1]] = i - nextStack[nextStack.length - 1];
      nextStack.pop();
    }
    nextStack.push(i);
  }

  let ans = 0, mod = 1e9 + 7;
  for (let i = 0; i < arr.length; i++) {
    ans += (arr[i] * left[i] * right[i]);
  }
  return ans % mod;
};
// @lc code=end

