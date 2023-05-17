/*
 * @lc app=leetcode id=1721 lang=javascript
 *
 * [1721] Swapping Nodes in a Linked List
 */

/**
 * tags: #linked-list
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  let currentNode = head;
  let listLength = 0;
  let frontNode = null;
  while (currentNode != null) {
    listLength++;
    if (listLength == k) {
      frontNode = currentNode;
    }
    currentNode = currentNode.next;
  }
  let endNode = head;
  for (let i = 1; i <= listLength - k; i++) {
    endNode = endNode.next;
  }
  // swap the values of front node and end node
  [frontNode.val, endNode.val] = [endNode.val, frontNode.val];
  return head;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(1).
 */