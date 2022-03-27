/*
 * @lc app=leetcode id=938 lang=javascript
 *
 * [938] Range Sum of BST
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
  let stack = [root];
  let ans = 0;
  while (stack.length > 0) {
    let node = stack.pop();
    if (node != null) {
      if (low <= node.val && node.val <= high)
        ans += node.val;
      if (low < node.val)
        stack.push(node.left);
      if (node.val < high)
        stack.push(node.right);
    }
  }
  return ans;
};
// @lc code=end

