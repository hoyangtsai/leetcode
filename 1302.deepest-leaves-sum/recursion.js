/*
 * @lc app=leetcode id=1302 lang=javascript
 *
 * [1302] Deepest Leaves Sum
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
var deepestLeavesSum = function(root) {
  function deepestSum(node, depth, sum) {
    if (node == null) return;
    sum[depth] = (sum[depth] || 0) + node.val;
    deepestSum(node.left, depth + 1, sum);
    deepestSum(node.right, depth + 1, sum);
    return sum[sum.length - 1];
  }

  return deepestSum(root, 0, []);
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */