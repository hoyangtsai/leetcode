/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 */

/**
 * @Nvidia
 * tags: #linked-list
 * {@link 92.reverse-linked-list-ii.js}
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
var reverseList = function(head) {
  let prev = null;
  while (head) {
    let tmp = head;
    // move next
    head = head.next;
    // record last one
    tmp.next = prev;
    prev = tmp;
  }
  return prev;
};
// @lc code=end


/**
 * - Time complexity: O(n).
 * - Space complexity: O(n).
 */