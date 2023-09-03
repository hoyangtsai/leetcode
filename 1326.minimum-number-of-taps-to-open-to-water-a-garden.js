/*
 * @lc app=leetcode id=1326 lang=javascript
 *
 * [1326] Minimum Number of Taps to Open to Water a Garden
 */

/**
 * tags: #greedy
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} ranges
 * @return {number}
 */
var minTaps = function(n, ranges) {
  // Create an array to track the maximum reach for each position
  let maxReach = Array(n + 1).fill(0);

  // Calculate the maximum reach for each tap
  for (let i = 0; i < ranges.length; i++) {
    // Calculate the leftmost position the tap can reach
    let start = Math.max(0, i - ranges[i]);
    // Calculate the rightmost position the tap can reach
    let end = Math.min(n, i + ranges[i]);

    // Update the maximum reach for the leftmost position
    maxReach[start] = Math.max(maxReach[start], end);
  }


  // Number of taps used
  let taps = 0;
  // Current rightmost position reached
  let currEnd = 0;
  // Next rightmost position that can be reached
  let nextEnd = 0;

  // Iterate through the garden
  for (let i = 0; i <= n; i++) {
    // Current position cannot be reached
    if (i > nextEnd) {
      return -1;
    }

    // Increment taps when moving to a new tap
    if (i > currEnd) {
      taps++;
      // Move to the rightmost position that can be reached
      currEnd = nextEnd;
    }

    // Update the next rightmost position that can be reached
    nextEnd = Math.max(nextEnd, maxReach[i]);
  }

  // Return the minimum number of taps used
  return taps;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */