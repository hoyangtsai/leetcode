/*
 * @lc app=leetcode id=1431 lang=javascript
 *
 * [1431] Kids With the Greatest Number of Candies
 */

/**
 * {@link ./135.candy.js}
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  const maxCandies = Math.max(...candies);

  let result = [];
  for (const candy of candies) {
    result.push(candy + extraCandies >= maxCandies);
  }
  return result;
};
// @lc code=end

