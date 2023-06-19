/*
 * @lc app=leetcode id=1161 lang=javascript
 *
 * [1161] Maximum Level Sum of a Binary Tree
 */

/**
 * tags: #dfs-binary-tree
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
 * @return {number}
 */
var maxLevelSum = function(root) {
  let ans = 0;
  let maxSum = -Infinity;

  function dfs(node, level, sumOfNodesAtLevel) {
    if (node == null) return;

    if (sumOfNodesAtLevel.length == level) {
      sumOfNodesAtLevel[level] = node.val;
    } else {
      sumOfNodesAtLevel[level] += node.val;
    }

    dfs(node.left, level + 1, sumOfNodesAtLevel);
    dfs(node.right, level + 1, sumOfNodesAtLevel);
  }

  let sumOfNodesAtLevel = [];
  dfs(root, 0, sumOfNodesAtLevel);

  for (let i = 0; i < sumOfNodesAtLevel.length; i++) {
    if (sumOfNodesAtLevel[i] > maxSum) {
      maxSum = sumOfNodesAtLevel[i];
      ans = i + 1;
    }
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */
