/*
 * @lc app=leetcode id=808 lang=javascript
 *
 * [808] Soup Servings
 */

/**
 * tags: #dynamic-programming
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var soupServings = function(n) {
  const m = Math.ceil(n / 25);
  let dp = new Map();
  dp.set(0, new Map());
  dp.get(0).set(0, 0.5);

  function calculateDP(i, j, dp) {
    return (
      dp.get(Math.max(0, i - 4)).get(j)
      + dp.get(Math.max(0, i - 3)).get(j - 1)
      + dp.get(Math.max(0, i - 2)).get(Math.max(0, j - 2))
      + dp.get(i - 1).get(Math.max(0, j - 3))
    ) / 4; 
  }

  for (let k = 1; k <= m; k++) {
    dp.set(k, new Map());
    dp.get(0).set(k, 1);
    dp.get(k).set(0, 0);
   
    for (let j = 1; j <= k; j++) {
      dp.get(j).set(k, calculateDP(j, k, dp));
      dp.get(k).set(j, calculateDP(k, j, dp));
    }
   
    if (dp.get(k).get(k) > 1 - 1e-5) {
      return 1;
    }
  }

  return dp.get(m).get(m);
};
// @lc code=end


/**
 * - Time complexity: O(1)
 * - Space complexity: O(\m_{0}^{2}) = O(1)
 */