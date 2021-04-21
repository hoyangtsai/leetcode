/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

 // #tree, #dfs, #sliding-window, #two-pointers
 // difficulty: Medium

// @lc code=start
/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  const bucket = new Map();

  let left = 0;
  let maxLen = 0;
  
  for (let right = 0; right < tree.length; right++) {
    // appear times
    bucket.set(tree[right], isNaN(bucket.get(tree[right])) ? 1 : bucket.get(tree[right]) + 1);

    while (bucket.size >= 3) {
      bucket.set(tree[left], isNaN(bucket.get(tree[left])) ? 1 : bucket.get(tree[left]) - 1);
      if (bucket.get(tree[left]) == 0) {
        bucket.delete(tree[left]);
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
  }

  return maxLen;
};
// @lc code=end
