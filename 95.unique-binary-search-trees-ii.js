/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 */

/**
 * tags: #binary-tree, #dynamic-programming
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  let dp = Array.from(Array(n + 1), () => []);
  dp[0].push(null);

  function clone(node, offset) {
    if (node == null) return null;

    let clonedNode = new TreeNode(node.val + offset);
    clonedNode.left = clone(node.left, offset);
    clonedNode.right = clone(node.right, offset);
    return clonedNode;
  }

  for (let numberOfNodes = 1; numberOfNodes <= n; numberOfNodes++) {
    for (let i = 1; i <= numberOfNodes; i++) {
      let j = numberOfNodes - i;
      for (const left of dp[i - 1]) {
        for (const right of dp[j]) {
          let root = new TreeNode(i, left, clone(right, i));
          dp[numberOfNodes].push(root);
        }
      }
    }
  }

  return dp[n];
};
// @lc code=end


/**
 * - Time complexity: O(4^n / sqrt(n))
 * - Space complexity:  O(\sum_{k=1}^{N} * 4^k / sqrt(k))
 */