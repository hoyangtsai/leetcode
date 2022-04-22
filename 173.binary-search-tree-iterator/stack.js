/*
 * @lc app=leetcode id=173 lang=javascript
 *
 * [173] Binary Search Tree Iterator
 */

/**
 * tags: #binary-tree, #binary-search-tree, #stack
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
 */
var BSTIterator = function(root) {
  this.stack = [];

  // Remember that the algorithm starts with a call to the helper function
  // with the root node as the input
  this._leftmostInorder(root);
};

BSTIterator.prototype._leftmostInorder = function(root) {
  // For a given node, add all the elements in the leftmost branch of the tree
  // under it to the stack.
  while (root != null) {
    this.stack.push(root);
    root = root.left;
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
  // Node at the top of the stack is the next smallest element
  const topmostNode = this.stack.pop();

  // Need to maintain the invariant. If the node has a right child, call the
  // helper function for the right child
  if (topmostNode.right != null) {
    this._leftmostInorder(topmostNode.right);
  }

  return topmostNode.val;
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
  return this.stack.length > 0;
};

/** 
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
// @lc code=end


/**
 * - Time complexity: 
 *   - `hasNext()` is the easier of the lot since all we do in this is to return true if there are any elements left in the stack. Otherwise, we return false. So clearly, this is an O(1) operation every time.
 *   - `next()` involves two major operations. One is where we pop an element from the stack which becomes the next smallest element to return. This is a O(1) operation.
 * 
 * - Space complexity: The space complexity is O(N), where N is the number of nodes in the tree.
 */