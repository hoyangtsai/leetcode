/*
 * @lc app=leetcode id=445 lang=javascript
 *
 * [445] Add Two Numbers II
 */

/**
 * tags: #linked-list, #linked-list-addition
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let l1Stack = [];
  let l2Stack = [];

  while (l1 != null) {
    l1Stack.push(l1.val);
    l1 = l1.next;
  }
  
  while (l2 != null) {
    l2Stack.push(l2.val);
    l2 = l2.next;
  }

  let totalSum = 0, carry = 0;
  let ans = new ListNode()
  while (l1Stack.length > 0 || l2Stack.length > 0) {
    if (l1Stack.length != 0) {
      totalSum += l1Stack.pop();
    }
    if (l2Stack.length != 0) {
      totalSum += l2Stack.pop();
    }

    ans.val = parseInt(totalSum % 10);
    carry = parseInt(totalSum / 10);

    let head = new ListNode(carry);
    head.next = ans;
    ans = head;
    totalSum = carry;
  }

  return carry == 0 ? ans.next: ans;
};
// @lc code=end


/**
 * - Time complexity: O(m + n)
 * - Space complexity: O(m + n)
 */