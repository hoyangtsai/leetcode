/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130] Maximum Twin Sum of a Linked List
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
 * @return {number}
 */
var pairSum = function(head) {
  let slow = head;
  let fast = head;

  // Get middle of the linked list
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse the second half list
  let prev = null;
  while (slow) {
    let temp = slow;
    slow = slow.next;
    temp.next = prev;
    prev = temp;
  }

  let start = head;
  let maxSum = 0;
  while (prev) {
    maxSum = Math.max(maxSum, start.val + prev.val);
    prev = prev.next;
    start = start.next;
  }

  return maxSum
};
// @lc code=end

