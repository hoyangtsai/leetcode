/*
 * @lc app=leetcode id=252 lang=javascript
 *
 * [252] Meeting Rooms
 */

/**
 * tags: #sorting
 * {@link 435.non-overlapping-intervals.js}
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  // sort all meetings from earlier to latest of the start time
  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    // if next meeting's start time less than previous meeting's end time which means cannot attend next meeting
    if (intervals[i - 1][1] > intervals[i][0]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

