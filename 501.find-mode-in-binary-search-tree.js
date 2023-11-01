/*
 * @lc app=leetcode id=501 lang=javascript
 *
 * [501] Find Mode in Binary Search Tree
 */

/**
 * tags: #binary-tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
  function dfs(node, counter) {
    if (!node) return;

    counter.set(node.val, (counter.get(node.val) || 0) + 1);
    dfs(node.left, counter);
    dfs(node.right, counter);
  }

  let counter = new Map();
  dfs(root, counter);
  
  let maxFreq = 0;
  for (const [val, count] of counter) {
    maxFreq = Math.max(maxFreq, count);
  }

  let ans = [];
  for (const [val, count] of counter) {
    if (count == maxFreq) {
      ans.push(val);
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */