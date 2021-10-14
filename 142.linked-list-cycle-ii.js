/*
 * @lc app=leetcode id=142 lang=javascript
 *
 * [142] Linked List Cycle II
 */

// @microsoft, @amazon
// #two-pointer, #linked-list, #floyds-tortoise-and-hare
// &287

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
 * @return {ListNode}
 */
var detectCycle = function(head) {
  function getIntersect(head) {
    let tortoise = head;
    let hare = head;

    while (hare && hare.next) {
      tortoise = tortoise.next;
      hare = hare.next.next;
      if (tortoise == hare) {
        return tortoise;
      }
    }
    
    return null;
  }

  if (head == null) return null;

  // If there is a cycle, the fast/slow pointers will intersect at some node.
  // Otherwise, there is no cycle, so we cannot find an entrance to a cycle.
  let intersect = getIntersect(head);
  if (intersect == null) {
    return null;
  }

  // To find the entrance to the cycle, we have two pointers traverse at the same speed.
  // -- one from the front of the list, and the other from the point of intersection.
  let ptr1 = head;
  let ptr2 = intersect;
  while (ptr1 != ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
};
// @lc code=end

/**
 * Floyd's Tortoise and Hare
 * 
 * - Time complexity: O(n).
 * - Sapce complexity: O(1).
 */
