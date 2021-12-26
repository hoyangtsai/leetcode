/*
 * @lc app=leetcode id=25 lang=javascript
 *
 * [25] Reverse Nodes in k-Group
 */

/**
 * tags: #linked-list
 * {@link reverseList|./206.reverse-linked-list.js}
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
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  function reverseLinkedList(head, k) {
    // Reverse k nodes of the given linked list.
    // This function assumes that the list contains 
    // at least k nodes.
    let prev = null;
    let ptr = head;

    // do a reverse-linked-list
    while (k > 0) {
      let tmp = ptr;
      ptr = ptr.next;
      tmp.next = prev;
      prev = tmp;

      // Decrement the count of nodes to be reversed by 1
      k--;
    }

    // Return the head of the reversed list
    return prev;
  }

  let ptr = head;
  let ktail = null;

  // Head of the final, modified linked list
  let new_head = null;

  // Keep going until there are nodes in the list
  while (ptr != null) {

    let count = 0;

    // Start counting nodes from the head
    ptr = head;

    // Find the head of the next k nodes
    while (count < k && ptr != null) {
      ptr = ptr.next;
      count += 1;
    }

    // If we counted k nodes, reverse them        
    if (count == k) {

      // Reverse k nodes and get the new head
      let revHead = reverseLinkedList(head, k);

      // new_head is the head of the final linked list
      if (new_head == null)
        new_head = revHead;

      // ktail is the tail of the previous block of 
      // reversed k nodes
      if (ktail != null)
        ktail.next = revHead;

      ktail = head;
      head = ptr;
    }
  }


  // attach the final, possibly un-reversed portion
  if (ktail != null)
    ktail.next = head;

  return new_head == null ? head : new_head;
};
// @lc code=end

