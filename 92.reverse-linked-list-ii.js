/*
 * @lc app=leetcode id=92 lang=javascript
 *
 * [92] Reverse Linked List II
 */

/**
 * tags: #linked-list
 * {@link 206.reverse-linked-list.js}
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
  // Empty list
  if (head == null) {
    return null;
  }

  // Move the two pointers until they reach the proper starting point
  // in the list.
  let cur = head, prev = null;
  while (left > 1) {
    prev = cur;
    cur = cur.next;
    left--;
    right--;
  }

  // The two pointers that will fix the final connections.
  let con = prev, tail = cur;

  // Iteratively reverse the nodes until right becomes 0.
  let third = null;
  while (right > 0) {
    third = cur.next;
    cur.next = prev;
    prev = cur;
    cur = third;
    right--;
  }

  // Adjust the final connections as explained in the algorithm
  if (con != null) {
    con.next = prev;
  } else {
    head = prev;
  }

  tail.next = cur;
  return head;
};
// @lc code=end


/**
 * - Time complexity: O(N)
 * - Space complexity: O(1)
 */