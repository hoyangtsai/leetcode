/*
 * @lc app=leetcode id=2251 lang=javascript
 *
 * [2251] Number of Flowers in Full Bloom
 */

/**
 * tags: #prefix-sum, #ordered-set
 */

// @lc code=start
/**
 * @param {number[][]} flowers
 * @param {number[]} people
 * @return {number[]}
 */
var fullBloomFlowers = function(flowers, people) {
  let flowerCount = new Map();

  for (let [start, end] of flowers) {
    flowerCount.set(start, (flowerCount.get(start) || 0) + 1);
    flowerCount.set(end + 1, (flowerCount.get(end + 1) || 0) - 1);
  }

  const days = Array.from(flowerCount.keys()).sort((a, b) => a - b);

  let totalFlowers = 0;
  for (const day of days) {
    totalFlowers += flowerCount.get(day) || 0;
    flowerCount.set(day, totalFlowers);
  }

  let ans = [];
  for (let j = 0; j < people.length; j++) {
    const index = days.findIndex(day => day > people[j]);

    if (index === -1) {
      ans.push(0);
    } else {
      ans.push(flowerCount.get(days[index - 1]) || 0);
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O((n + m) * log n)
 * - Space complexity: O(n)
 */