/*
 * @lc app=leetcode id=2130 lang=javascript
 *
 * [2130] Maximum Twin Sum of a Linked List
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
 * @return {number}
 */
var pairSum = function(head) {
  let current = head;
  let values = [];

  while (current) {
    values.push(current.val);
    current = current.next;
  }

  let i = 0, j = values.length - 1;
  let maxSum = 0;
  while (i < j) {
    maxSum = Math.max(maxSum, values[i] + values[j]);
    i++;
    j--;
  }

  return maxSum;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */