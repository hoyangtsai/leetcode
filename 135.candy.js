/*
 * @lc app=leetcode id=135 lang=javascript
 *
 * [135] Candy
 */

/**
 * tags: #greedy
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  const n = ratings.length;

  let forward = Array(n);
  let backward = Array(n);

  forward[0] = 1;
  backward[n - 1] = 1;

  for (let i = 1; i < n; i++) {
    // greater than left one  
    if (ratings[i] > ratings[i - 1]) {
      forward[i] = forward[i - 1] + 1;
    } else {
      forward[i] = 1;
    }
  }

  for (let i = n - 2; i >= 0; i--) {
    // greater than right one
    if (ratings[i] > ratings[i + 1]) {
      backward[i] = backward[i + 1] + 1;
    } else {
      backward[i] = 1;
    }
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.max(forward[i], backward[i]);
  }
  return sum;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n). Two arrays forward and backward of size n are used.
 */