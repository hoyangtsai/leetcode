/*
 * @lc app=leetcode id=725 lang=javascript
 *
 * [725] Split Linked List in Parts
 */

/**
 * tags: #linked-list
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
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
  let cur = head;
  let count = 0;
  while (cur != null) {
    cur = cur.next;
    count++;
  }

  let width = parseInt(count / k), rem = count % k;
  let ans = Array(k).fill(new ListNode());
  cur = head;
  for (let i = 0; i < k; i++) {
    let temp = cur;

    for (let j = 0; j < width + (i < rem ? 1 : 0) - 1; j++) {
      if (cur != null) cur = cur.next;
    }

    if (cur != null) {
      let prev = cur;
      cur = cur.next;
      prev.next = null;
    }

    ans[i] = temp;
  }

  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(N + k)
 * - Space complexity: O(k)
 */