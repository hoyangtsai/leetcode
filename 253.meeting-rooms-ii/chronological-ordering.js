/*
 * @lc app=leetcode id=253 lang=javascript
 *
 * [253] Meeting Rooms II
 */

// @amazon, @bloomberg, @microsoft, @facebook, @google
// #array, #two-pointeers, #greedy, #sort, #heap(priority queue),
// #google-interview 

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
  const starts = intervals
    .concat()  // make a copy, otherwise when sort 'ends', 'starts' will change too
    .map(a => a[0]) // return all start time as an array
    .sort((a, b) => a - b); // sort from min to max

  const ends = intervals
    .map(a => a[1])
    .sort((a, b) => a - b);

  let rooms = 0;
  let endIdx = 0;
  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[endIdx]) {
      rooms ++;
    } else {
      endIdx ++;
    }
  }
  return rooms;
};
// @lc code=end

/**
 * Chronological Ordering
 * Time complexity: 𝑂(𝑛 log 𝑛).
 * Space complexity: 𝑂(𝑛), because we need two separate array size of 𝑁, one for recording the start times and one for the end times.
 */