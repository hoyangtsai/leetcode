/*
 * @lc app=leetcode id=646 lang=javascript
 *
 * [646] Maximum Length of Pair Chain
 */

// #amazon
// tags: #dynamic-programming, #greedy

// @lc code=start
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs = pairs.sort((a, b) => a[1] - b[1]);

  let cur = -Infinity;
  let ans = 0;
  for (const pair of pairs) {
    if (cur < pair[0]) {
      cur = pair[1];
      ans++;
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N logN) where N is the length of pairs. The complexity comes from the sorting step, but the reset of the solution does linear work.
 * - Space complexity: O(N). The additional space complexity of storing cur and ans, but sorting uses O(N) space.
 */
