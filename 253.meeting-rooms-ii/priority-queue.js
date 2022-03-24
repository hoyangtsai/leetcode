/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] Meeting Rooms II
 */

/**
 * tags: #heap, #priority-queue
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  // min heap
  const allocator = [];

  // sorting starting time
  intervals.sort((a, b) => a[0] - b[0]);

  // Add the first meeting end time
  allocator.push(intervals[0][1]);

  // iterate over the remaining meetings
  for (let i = 1; i < intervals.length; i++) {
    // existed meeting ended
    if (allocator.length > 0 && allocator[0] <= intervals[i][0]) {
      allocator.shift();
    }
    allocator.push(intervals[i][1]);
    // sort the latest end time to the end
    allocator.sort((a, b) => a - b);
  }

  return allocator.length;
};
// @lc code=end

/**
 * - Time complexity: O(N logN).
 *    - There are two major portions that take up time. One is sorting of the intervals that takes O(N log N) considering that the array consists of N elements.
 *    - Then we have the min-heap. In the worst case, all N meetings will collide with each other. 
 *      In any case we have N add operations on the heap. In the worst case we will have N min-extract(shift) operations as well.
 * 
 * - Space complexity: O(N), because we construct the min-heap and can contain N elements.
 */