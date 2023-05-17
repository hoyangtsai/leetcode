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
  let dummy = new ListNode();
  dummy.next = head;

  let prevNode = dummy;

  while (head != null && head.next != null) {
    // Nodes to be swapped
    let firstNode = head;
    let secondNode = head.next;

    // Swapping
    prevNode.next = secondNode;
    firstNode.next = secondNode.next;
    secondNode.next = firstNode;

    // Reinitializing the head and prevNode for next swap
    prevNode = firstNode;
    head = firstNode.next; // jump
  }

  // Return the new head node.
  return dummy.next;
};
// @lc code=end


/**
 * - Time complexity: O(N).
 * - Space complexity: O(1).
 */