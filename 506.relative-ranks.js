/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */

/**
 * tags: #linear-search
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
  // list = [[score, index]]
  let list = [];
  for (let i = 0; i < score.length; i++) {
    list.push([score[i], i])
  }

  // sort descending
  list.sort((a, b) => b[0] - a[0]);

  for (let i = 0; i < list.length; i++) {
    const pid = list[i][1];
    if (i == 0) {
      score[pid] = "Gold Medal";
    } else if (i == 1) {
      score[pid] = "Silver Medal";
    } else if (i == 2) {
      score[pid] = "Bronze Medal";
    } else {
      score[pid] = (i + 1).toString(); 
    }
  }

  return score;
};
// @lc code=end


/**
 * - Time complexity: O(n log n).
 * - Space complexity: O(n).
 */