/*
 * @lc app=leetcode id=437 lang=javascript
 *
 * [437] Path Sum III
 */

/**
 * tags: #binary-tree, #hash-table, #tree-path-sum
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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
  let count = 0;
  let h = new Map();

  function preorder(node, currSum) {
    if (node == null) return 0;

    currSum += node.val;

    if (currSum == targetSum) {
      count++;
    }

    count += (h.get(currSum - targetSum) || 0);

    h.set(currSum, (h.get(currSum) || 0) + 1);

    // process left subtree
    preorder(node.left, currSum);
    // process right subtree
    preorder(node.right, currSum);

    h.set(currSum, h.get(currSum) - 1);
  }

  preorder(root, 0);
  return count;
};
// @lc code=end


/**
 * Prefix Sum (hash map)
 * 
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */
