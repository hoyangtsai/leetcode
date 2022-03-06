/*
 * @lc app=leetcode id=23 lang=javascript
 *
 * [23] Merge k Sorted Lists
 */

/**
 * tags: #linked-list, #divide-and-conquer, #heap(priority-queue), #merge-sort
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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  function merge(left, right) {
    if (!left) {
      return right;
    } else if (!right) {
      return left;
    } else if (left.val < right.val) {
      left.next = merge(left.next, right);
      return left;
    } else {
      right.next = merge(left, right.next);
      return right;
    }
  }

  function helper(lists, start, end) {
    if (start === end) {
      return lists[start];
    } else if (start < end) {
      const mid = parseInt((start + end) / 2);
      const left = helper(lists, start, mid);
      const right = helper(lists, mid + 1, end);
      return merge(left, right);
    } else {
      return null;
    }
  }

  return helper(lists, 0, lists.length - 1);
};
// @lc code=end

/**
 * Merge with Divide and Conquer
 * 
 * Time complexity: O(N log K), where K is the number of linked lists.next
 *    - Merge two sorted linked list in O(𝑛) time where n is the total number of nodes in two lists.
 * Space complexity: O(1).
 *    - Merge two sorted linked list in O(1) space. 
 */