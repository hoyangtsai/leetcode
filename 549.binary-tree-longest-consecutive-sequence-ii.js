/*
 * @lc app=leetcode id=549 lang=javascript
 *
 * [549] Binary Tree Longest Consecutive Sequence II
 */

/**
 * tags: #binary-tree, #longest-sequence-tree, #tree-number-increasing-sequence
 * {@link 673.number-of-longest-increasing-subsequence.js}
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
var longestConsecutive = function(root) {
  let maxVal = 0;

  function longestPath(node) {
    if (node == null) {
      return [0, 0];
    }

    // inr represents the length of the longest increment branch below the current node including itself
    // dcr represents the length of the longest decrement branch below the current node including itself
    let inr = 1, dcr = 1;

    // DFS post-order
    if (node.left) {
      let left = longestPath(node.left);
      if (node.val == node.left.val + 1) { // left value 1 less than node value
        dcr = left[1] + 1;
      } else if (node.val == node.left.val - 1) { // left value 1 greater than node value
        inr = left[0] + 1;
      }
    }

    if (node.right) {
      let right = longestPath(node.right);
      if (node.val == node.right.val + 1) {  // right value 1 less than node value
        dcr = Math.max(dcr, right[1] + 1);
      } else if (node.val == node.right.val - 1) { // right value 1 greater than node value
        inr = Math.max(inr, right[0] + 1);
      }
    }

    maxVal = Math.max(maxVal, dcr + inr - 1);
    return [inr, dcr];
  }

  longestPath(root);
  return maxVal;
};
// @lc code=end


/**
 * Time complexity: O(n). The whole tree is traversed only once.
 * Space complexity: O(n). The recursion goes up a depth of n in the worst case.
 */