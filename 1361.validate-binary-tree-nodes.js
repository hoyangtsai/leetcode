/*
 * @lc app=leetcode id=1361 lang=javascript
 *
 * [1361] Validate Binary Tree Nodes
 */

/**
 * tags: #binary-tree
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
  let root = findRoot(n, leftChild, rightChild);
  if (root == -1) {
    return false;
  }

  function findRoot(n, left, right) {
    let children = new Set();
    for (const node of left) {
      children.add(node);
    }

    for (const node of right) {
      children.add(node);
    }

    for (let i = 0; i < n; i++) {
      if (!children.has(i)) {
        return i;
      }
    }

    return -1;
  }

  let seen = new Set();
  let stack = [];
  seen.add(root);
  stack.push(root);

  while (stack.length > 0) {
    let node = stack.pop();
    let children = [leftChild[node], rightChild[node]];

    for (const child of children) {
      if (child != -1) {
        if (seen.has(child)) {
          return false;
        }
        
        stack.push(child);
        seen.add(child);
      }
    }
  }

  return seen.size == n;
};
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(n)
 */