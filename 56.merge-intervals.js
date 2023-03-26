/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 */

/**
 * tags: #number-interval
 * #google-interview
 * {@link 57.insert-interval.js}
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  let merged = [];
  for (const intval of intervals) {
    if (merged.length == 0 || merged[merged.length - 1][1] < intval[0]) {
      merged.push(intval);
    } else {
      merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], intval[1]);
    }
  }

  return merged;
};
// @lc code=end

/**
 * Sorting
 * 
 * - Time complexity: O(n log n).
 *   Other than the sort invocation (method), we do a simple linear scan of the list, so the runtime is dominated by the O(n log n) complexity of sorting.
 * 
 * - Space complexity: O(log N) or O(n). 
 *   If we can sort intervals in place. we don't need more than constant addition space, although the sorting itself takes O(log n) space.
 *   Otherwise, we must allocate linear space to store a copy of intervals and sort that.
 */