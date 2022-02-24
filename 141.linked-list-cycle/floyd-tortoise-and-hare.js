/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

/**
 * #linked-list, #floyd-tortoise-and-hare
 * {@link detectCycle|./142.linked-list-cycle-ii.js}
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};
// @lc code=end


/**
 * - Time complexity: O(n), the number of nodes.
 * - Space complexity: O(1).
 */
