/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
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
var hasCycle = function (head) {
  let nodesSeen = new Set();
  while (head) {
    if (nodesSeen.has(head.next)) {
      return true;
    }
    nodesSeen.add(head);
    head = head.next;
  }
  return false;
};
// @lc code=end

// Time complexity: O(n), The number of nodes.
// Space complexity: O(n), A hash table needed.