/*
 * @lc app=leetcode id=24 lang=javascript
 *
 * [24] Swap Nodes in Pairs
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
 * @return {ListNode}
 */
var swapPairs = function(head) {
  // If the list has no node or has only one node left.
  if ((head == null) || (head.next == null)) {
    return head;
  }
  
  let firstNode = head;
  let secondNode = head.next;

  // Swapping
  firstNode.next  = swapPairs(secondNode.next);
  secondNode.next = firstNode;

  // Now the head is the second node
  return secondNode;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(N).
 */