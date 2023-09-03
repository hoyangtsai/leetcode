/*
 * @lc app=leetcode id=2483 lang=javascript
 *
 * [2483] Minimum Penalty for a Shop
 */

/**
 * tags:
 */

// @lc code=start
/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
  // Start with closing at hour 0 and assume the current penalty is 0.
  let minPenalty = 0, curPenalty = 0;
  let earliestHour = 0;

  for (let i = 0; i < customers.length; i++) {
    const ch = customers.charAt(i);

    // If status in hour i is 'Y', moving it to open hours decrement
    // penalty by 1. Otherwise, moving 'N' to open hours increment
    // penalty by 1.
    if (ch == 'Y') {
      curPenalty--;
    } else {
      curPenalty++;
    }

    // Update earliestHour if a smaller penalty is encountered.
    if (curPenalty < minPenalty) {
      earliestHour = i + 1;
      minPenalty = curPenalty;
    }
  }

  return earliestHour;
};
// @lc code=end


/**
 *  - Time complexity: O(n)
 *  - Space complexity: O(1)
 */