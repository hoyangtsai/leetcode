/*
 * @lc app=leetcode id=881 lang=javascript
 *
 * [881] Boats to Save People
 */

/**
 * tags: #greedy, #two-pointers
 */

// @lc code=start
/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
  // ascending
  people.sort((a, b) => a - b);

  let boat = 0;
  let i = 0, j = people.length - 1;
  while(i <= j) {
    boat++;
    if (people[i] + people[j] <= limit) i++;      
    j--;
  }
  return boat;
};
// @lc code=end


/**
 * - Time complexity: O(N log N), where N is the length of people.
 * - Space complexity: O(N)
 */