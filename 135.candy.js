/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

/**
 * com: #amazon
 * tags: #greedy, #google-interview, #array-bidirectional
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const len = ratings.length;

  let forward = new Array(len);
  let backward = new Array(len);

  forward[0] = 1;
  backward[len - 1] = 1;

  for (let i = 1; i < len; i++) {
    // greater than left one
    if (ratings[i] > ratings[i - 1]) {
      forward[i] = forward[i - 1] + 1;
    } else {
      forward[i] = 1;
    }
  }

  for (let i = len - 2; i >= 0; i--) {
    // greater than right one
    if (ratings[i] > ratings[i + 1]) {
      backward[i] = backward[i + 1] + 1;
    } else {
      backward[i] = 1;
    }
  }

  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum += Math.max(forward[i], backward[i]);
  }
  return sum;
};
// @lc code=end


/**
 * Using two arrays
 * 
 * - Time complexity: O(n).
 * - Space complexity: O(n). Two arrays forward and backward of size n are used.
 */