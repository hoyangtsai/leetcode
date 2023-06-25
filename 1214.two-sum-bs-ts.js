/*
 * @lc app=leetcode id=1214 lang=javascript
 *
 * [1214] Two Sum BSTs
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 */
var twoSumBSTs = function(root1, root2, target) {
  let map = {};

  function dfs(node, nodeSet) {
    if (!node) return;

    dfs(node.left, nodeSet);
    nodeSet.add(node.val);
    dfs(node.right, nodeSet);
  }

  let nodeSet1 = new Set();
  let nodeSet2 = new Set();
  dfs(root1, nodeSet1);
  dfs(root2, nodeSet2);

  for (const value1 of nodeSet1.values()) {
    if (nodeSet2.has(target - value1)) {
      return true;
    }
  }

  return false;
};
// @lc code=end


/**
 * - Time complexity: O(m + n)
 * - Space complexity: O(m + n)
 */