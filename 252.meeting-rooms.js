/*
 * @lc app=leetcode id=252 lang=javascript
 *
 * [252] Meeting Rooms
 */

// #array, #sort
// @amazon, @microsoft, @facebook

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function(intervals) {
  // sort all meetings from earlier to latest of the start time
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < intervals.length; i++) {
    // if next meeting's start time less than previous meeting's end time which means cannot attend next meeting
    if (intervals[i][0] < intervals[i - 1][1]) {
      return false;
    }
  }

  return true;
};
// @lc code=end

