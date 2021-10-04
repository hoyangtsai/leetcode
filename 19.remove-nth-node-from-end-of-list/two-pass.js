/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

// @facebook, @amazon, @microsoft
// #linked-list, #two-pointers
// #google-interview

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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let length = 0;
  let first = head;
  // count linked-list length first
  while (first != null) {
    length ++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  // consume the linked-list
  while (length > 0) {
    length --;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
// @lc code=end

/**
 * Two pass algorithm
 * 
 * - Time complexity: 𝑂(𝐿).
 *   The algorithm make two traverse of the list, first to calculate the list length 𝐿 and second to find (𝐿 - 𝑛)th node.
 *   There are 2𝐿 - 𝑛 operations and time complexity is 𝑂(𝐿).
 * - Space complexity: O(1).
 *   We only use constant extra space.
 */