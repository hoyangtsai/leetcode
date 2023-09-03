/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] Meeting Rooms II
 */

/**
 * tags: #two-pointers, #chronological-ordering
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const starts = intervals
    .slice()  // make a copy, otherwise when sort 'ends', 'starts' will change too
    .map(a => a[0]) // return all start time as an array
    .sort((a, b) => a - b); // sort from min to max

  const ends = intervals
    .map(a => a[1])
    .sort((a, b) => a - b);

  // The two pointers in the algorithm: e_ptr and s_ptr.
  let startPointer = 0, endPointer = 0;

  // Variables to keep track of maximum number of rooms used.
  let usedRooms = 0;

  while (startPointer < intervals.length) {
    // If there is a meeting that has ended by the time the meeting at `start_pointer` starts
    if (starts[startPointer] >= ends[endPointer]) {
      usedRooms -= 1;
      endPointer += 1;
    }

    // We do this irrespective of whether a room frees up or not.
    // If a room got free, then this used_rooms += 1 wouldn't have any effect. used_rooms would
    // remain the same in that case. If no room was free, then this would increase used_rooms
    usedRooms += 1;
    startPointer += 1;
  }

  return usedRooms;
};
// @lc code=end


/**
 * - Time complexity: O(n * log n)
 * - Space complexity: O(n), because we need two separate array size of 𝑁, one for recording the start times and one for the end times.
 */