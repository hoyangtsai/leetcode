/*
 * @lc app=leetcode id=904 lang=javascript
 *
 * [904] Fruit Into Baskets
 */

// @apple
// #array, #hash-table, #depth-first-search, #sliding-window
// #google-interview

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
    bucket.set(tree[right], (bucket.get(tree[right]) || 0) + 1);

    while (bucket.size >= 3) {
      bucket.set(tree[left], (bucket.get(tree[left]) || 1) - 1);
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
