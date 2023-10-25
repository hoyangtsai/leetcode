/*
 * @lc app=leetcode id=515 lang=javascript
 *
 * [515] Find Largest Value in Each Tree Row
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
 * @return {number[]}
 */
var largestValues = function(root) {
  if (!root) return [];

  let ans = [];
  let queue = [root];

  while (queue.length > 0) {
    let currLength = queue.length;
    let currMax = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < currLength; i++) {
      let node = queue.shift();
      currMax = Math.max(currMax, node.val);

      if (node.left != null) {
        queue.push(node.left);
      }

      if (node.right != null) {
        queue.push(node.right);
      }
    }

    ans.push(currMax);
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */