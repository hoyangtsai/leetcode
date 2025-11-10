/*
 * @lc app=leetcode id=1952 lang=javascript
 *
 * [1952] Three Divisors
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isThree = function(n) {
  if (n < 4) return false; // The smallest number with exactly three divisors is 4 (1, 2, 4)

  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count++; // Count the divisor
      if (i * i !== n) {
        count++; // Count the complementary divisor
      }
    }
    if (count > 3) return false; // Early exit if more than 3 divisors
  }

  return count === 3;
};
// @lc code=end

