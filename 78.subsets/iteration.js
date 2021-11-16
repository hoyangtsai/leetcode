/*
 * @lc app=leetcode id=78 lang=javascript
 *
 * [78] Subsets
 */

/**
 * com: #facebook, #amazon
 * tags: #backtracking, #powerset
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [[]], append = [];

  for (const num of nums) {
    append = [];

    for (const entry of res) {
      append.push([...entry, num])
    }

    res.push(...append);
  }

  return res;
};
// @lc code=end


/**
 * 0 (Empty)             :         []
 * 1 (Adding 1 to it)    :         [] [1]
 * 2 (Adding 2 to it)    :         [] [1] [2] [1,2]
 * 3 (Adding 3 to it)    :         [] [1] [2] [1,2] [3] [1,3] [2,3] [1,2,3]
 */