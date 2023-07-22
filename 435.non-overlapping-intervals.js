/*
 * @lc app=leetcode id=435 lang=javascript
 *
 * [435] Non-overlapping Intervals
 */

/**
 * tags: #sorting
 * {@link 252.meeting-rooms.js}
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
  intervals.sort((a, b) => a[1] - b[1]);

  let prev = intervals[0], ans = 0;
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < prev[1]) {
      ans++;
    } else {
      prev = intervals[i];
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N logN)
 * - Space complexity: O(1)
 */

eraseOverlapIntervals([[1,2],[2,3],[3,4],[1,3]])
eraseOverlapIntervals([[1,100],[11,22],[1,11],[2,12]])