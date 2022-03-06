/*
 * @lc app=leetcode id=1578 lang=javascript
 *
 * [1578] Minimum Deletion Cost to Avoid Repeating Letters
 */

/**
 * #microsoft, #tesla, #foodpanda
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number[]} cost
 * @return {number}
 */
var minCost = function(s, cost) {
  let res = 0;
  for (let i = 0; i < s.length;) {
    const ch = s.charAt(i);
    let max = 0, sum = 0;

    // keep checking the letters afterward until a next letter is not same
    while (i < s.length && ch == s.charAt(i)) {
      max = Math.max(max, cost[i]);
      sum += cost[i];
      i++;
    }

    // add total time of the same color without the largest time
    res += sum - max;
  }

  return res;
};
// @lc code=end

