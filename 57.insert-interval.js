/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// #array
// @amazon, @apple, @uber, @google, @twitter, @facebook, @rakuten

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  let result = [];
  const STR = 0;
  const END = 1;
  for (const int of intervals) {
    if (!newInterval || int[END] < newInterval[STR]) {
      result.push(int);
    } else if (int[STR] > newInterval[END]) {
      result.push(newInterval);
      newInterval = null;
      result.push(int);
    } else {
      newInterval[STR] = Math.min(int[STR], newInterval[STR]);
      newInterval[END] = Math.max(int[END], newInterval[END]);
    }
  }
  if (newInterval) {
    result.push(newInterval);
  }
  return result;
};
// @lc code=end

/**
 * Greedy
 * Time complexity: O(N).
 * Space complexity: O(N).
 */
