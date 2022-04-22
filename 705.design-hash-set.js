/*
 * @lc app=leetcode id=705 lang=javascript
 *
 * [705] Design HashSet
 */

/**
 * tags: #binary-search-tree, #design
 */

// @lc code=start

var MyHashSet = function() {
  this.keyRange = 769;
  this.bucketArray = new Array(this.keyRange).fill(new Bucket());
};

MyHashSet.prototype._hash = function(key) {
  return key % this.keyRange;
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
  const bucketIndex = this._hash(key);
  this.bucketArray[bucketIndex].insert(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
  const bucketIndex = this._hash(key);
  this.bucketArray[bucketIndex].delete(key);
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
  const bucketIndex = this._hash(key);
  return this.bucketArray[bucketIndex].exists(key);  
};


class Bucket {
  constructor() {
    this.tree = new BSTree();
  }

  insert(key) {
    this.tree.root = this.tree.insertIntoBST(this.tree.root, key);
  }

  delete(key) {
    this.tree.root = this.tree.deleteNode(this.tree.root, key);
  }

  exists(key) {
    const node = this.tree.searchBST(this.tree.root, key);
    return (node != null);
  }
}

class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

class BSTree {
  searchBST(root, val) {
    if (root == null || val == root.val)
      return root;

    return val < root.val ? this.searchBST(root.left, val) : this.searchBST(root.right, val);
  }

  insertIntoBST(root, val) {
    if (root == null)
      return new TreeNode(val);

    if (val > root.val)
      // insert into the right subtree
      root.right = this.insertIntoBST(root.right, val);
    else if (val == root.val)
      // skip the insertion
      return root;
    else
      // insert into the left subtree
      root.left = this.insertIntoBST(root.left, val);
    return root;
  }

  /*
   * One step right and then always left
   */
  successor(root) {
    root = root.right;
    while (root.left != null)
      root = root.left;
    return root.val;
  }

  /*
   * One step left and then always right
   */
  predecessor(root) {
    root = root.left;
    while (root.right != null)
      root = root.right;
    return root.val;
  }

  deleteNode(root, key) {
    if (root == null)
      return null;

    // delete from the right subtree
    if (key > root.val)
      root.right = this.deleteNode(root.right, key);
    // delete from the left subtree
    else if (key < root.val)
      root.left = this.deleteNode(root.left, key);
    // delete the current node
    else {
      // the node is a leaf
      if (root.left == null && root.right == null)
        root = null;
      // the node is not a leaf and has a right child
      else if (root.right != null) {
        root.val = this.successor(root);
        root.right = this.deleteNode(root.right, root.val);
      }
      // the node is not a leaf, has no right child, and has a left child
      else {
        root.val = this.predecessor(root);
        root.left = this.deleteNode(root.left, root.val);
      }
    }
    return root;
  }
}
/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
// @lc code=end


/**
 * - Time complexity: O(log N/K), where 
 * 
 * - Space complexity: O(N + K) where K
 */