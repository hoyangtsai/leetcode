/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
 */

/**
 * tags: #binary-tree, #breadth-first-search
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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
  // add values which are greater or equal to low and 
  // lower or equal to high
  let queue = [root];
  let ans = 0;
  while (queue.length > 0) {
    let node = queue.pop();
    if (node != null) {
      if (low <= node.val && node.val <= high) {
        ans += node.val;
      }
      
      // a valid binary search tree 
      // node.left < node.val, node.right > node.val
      if (low < node.val) {
        queue.push(node.left);
      }
      if (node.val < high) {
        queue.push(node.right);
      }
    }
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */