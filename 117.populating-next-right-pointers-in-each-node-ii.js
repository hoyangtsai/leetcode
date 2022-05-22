/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
 */

/**
 * tags: #binary-tree, #iteration
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  let prev = new Node();
  let leftmost = root;

  function processChild(childNode) {
    if (childNode != null) {

      if (prev != null) {
        prev.next = childNode;
      } else {
        leftmost = childNode;
      }

      prev = childNode;
    }
  }

  let curr = leftmost;

  while (leftmost != null) {
    prev = null;
    curr = leftmost;

    leftmost = null;

    while (curr != null) {
      processChild(curr.left);
      processChild(curr.right);

      curr = curr.next;
    }
  }

  return root;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */