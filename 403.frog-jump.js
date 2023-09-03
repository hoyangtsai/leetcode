/*
 * @lc app=leetcode id=403 lang=javascript
 *
 * [403] Frog Jump
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function(stones) {
  // base on constraint 
  let dp = Array.from(Array(2001).fill(false), () => Array(2001).fill(false));

  let mark = new Map();

  const n = stones.length;
  // Mark stones in the map to identify if such stone exists or not.
  for (let i = 0 ; i < n; i++) {
    mark.set(stones[i], i);
  }

  dp[0][0] = true;
  for (let index = 0; index < n; index++) {
    for (let prevJump = 0; prevJump <= n; prevJump++) {
      // If stone exists, mark the value with position and jump as 1.
      if (dp[index][prevJump]) {
        if (mark.has(stones[index] + prevJump)) {
          dp[mark.get(stones[index] + prevJump)][prevJump] = true;
        }
        if (mark.has(stones[index] + prevJump + 1)) {
          dp[mark.get(stones[index] + prevJump + 1)][prevJump + 1] = true;
        }
        if (mark.has(stones[index] + prevJump - 1)) {
          dp[mark.get(stones[index] + prevJump - 1)][prevJump - 1] = true;
        }
      }
    }
  }

  // If any value with index as n - 1 is true, return true.
  for (let index = 0; index <= n; index++) {
    if (dp[n - 1][index]) {
      return true;
    }
  }
  return false;
};
// @lc code=end


/**
 * - Time complexity: O(N^2)
 * - Space complexity: O(N^2)
 */