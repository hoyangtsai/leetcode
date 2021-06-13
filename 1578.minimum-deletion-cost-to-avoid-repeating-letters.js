/*
 * @lc app=leetcode id=1578 lang=javascript
 *
 * [1578] Minimum Deletion Cost to Avoid Repeating Letters
 */

// #greedy
// @microsoft, @tesla, @foodpanda

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
  let res = 0;
  for (let i = 0, max = 0; i < s.length; i++) {
    res += cost[i];
    max = Math.max(max, cost[i]);
    if (s[i] !== s[i + 1]) {
      res -= max;
      max = 0;
    }
  }
  return res;
};
// @lc code=end

