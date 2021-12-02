/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
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
var sortList = function(head) {
  if (head === null || head.next === null) return head;
    
  function split(node) {
    let slow = node;
    let fast = node;
    // use fast & slow pointer to find the middle node so that 
    // we can split the list into list[0 -> slow] & list[slow + 1 -> list.size]
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }

    const left = node;
    const right = slow.next;
    // break off the list so that `left` doesn't link to `right`
    slow.next = null;

    return [left, right];
  }

  /**
   * The goal is to use merge sort on the linked list. 
   * We need to split the list into two and merge them in the ascending order 
   * recursively.
   */
  const [left, right] = split(head);

  function merge(root, left, right) {
    let dummy = root;
    /**
     * merge the smaller node in the `left` and `right` list first.
     * return the second node in the list because the first is a 
     * temporary node.
     */
    while (left !== null || right !== null) {
      if (left === null) {
        dummy.next = right;
        right = right.next;
      } else if (right === null) {
        dummy.next = left;
        left = left.next;
      } else {
        if (left.val < right.val) {
          dummy.next = left;
          left = left.next;
        } else {
          dummy.next = right;
          right = right.next;
        }
      }
      dummy = dummy.next;
    }

    return root.next;
  }

  // use a temporary node to link all the sorted nodes
  const root = new ListNode(null);
  return merge(root, sortList(left), sortList(right))
};
// @lc code=end

