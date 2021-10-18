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
  let curr = dummy;
  while (head) {
    head = head.next;

    if (n <= 0) {
      dummy = dummy.next;
    }
    n--;
  }

  dummy.next = dummy.next.next;
  return curr.next;
};
// @lc code=end

/**
 * One pass algorithm
 * 
 * - Time complexity: O(L).
 *   The algorithm make one traverse of the list of L nodes. Therefore time complexity is O(L).
 * - Space complexity: O(1).
 *   We only use constant extra space.
 */