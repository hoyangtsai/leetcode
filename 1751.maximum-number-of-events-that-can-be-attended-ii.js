/*
 * @lc app=leetcode id=1751 lang=javascript
 *
 * [1751] Maximum Number of Events That Can Be Attended II
 */

/**
 * tags: #dynamic-programming, #bisect-right
 * {@link 1187.make-array-strictly-increasing.js}
 */

// @lc code=start
/**
 * @param {number[][]} events
 * @param {number} k
 * @return {number}
 */
var maxValue = function(events, k) {
  events.sort((a, b) => a[0] - b[0]);
  const n = events.length;
  let dp = Array.from(Array(k + 1).fill(-1), () => Array(n).fill(-1));

  function bisectRight(events, target) {
    let left = 0, right = events.length;
    while (left < right) {
      let mid = parseInt((left + right) / 2);
      if (events[mid][0] <= target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    return left;
  }

  function dfs(curIndex, count, events) {
    if (count == 0 || curIndex == events.length) {
      return 0;
    }
    if (dp[count][curIndex] != -1) {
      return dp[count][curIndex];
    }
    let nextIndex = bisectRight(events, events[curIndex][1]);
    dp[count][curIndex] = Math.max(
      dfs(curIndex + 1, count, events),
      events[curIndex][2] + dfs(nextIndex, count - 1, events)
    );
    return dp[count][curIndex];
  }

  return dfs(0, k, events);
};
// @lc code=end

