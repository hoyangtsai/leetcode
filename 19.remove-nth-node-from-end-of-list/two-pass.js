/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 */

/**
 * tags: #linked-list, #two-pointers
 * #google-interview
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
 * - Time complexity: O(L).
 *   The algorithm make two traverse of the list, first to calculate the list length L and second to find (L - n)th node.
 *   There are 2L - n operations and time complexity is O(L).
 * - Space complexity: O(1).
 *   We only use constant extra space.
 */