/*
 * @lc app=leetcode id=975 lang=javascript
 *
 * [975] Odd Even Jump
 */

/**
 * tags: #dynamic-programming, #stack
 * #google-interview
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number}
 */
var oddEvenJumps = function(A) {
  function make(arr) {
    let stack = [];
    let res = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
      while (stack.length != 0 && stack[stack.length - 1] < arr[i]) {
        res[stack.pop()] = arr[i];
      }
      stack.push(arr[i]);
    }
    return res;
  }

  let res = 1;
  let order = new Array(A.length), pre, next;
  let dp = Array.from(new Array(A.length), () => new Array(2).fill(false));
  dp[A.length - 1][0] = dp[A.length - 1][1] = true;
  
  for (let i = 0; i < order.length; i++) order[i] = i;
  
  order.sort((a, b) => A[a] - A[b] == 0 ? a - b : A[a] - A[b]);
  next = make(order);
  order.sort((a, b) => A[b] - A[a] == 0 ? a - b : A[b] - A[a]);
  pre = make(order);

  for (let i = A.length - 2; i >= 0; i--) {
    dp[i][0] = next[i] == -1 ? false : dp[next[i]][1];
    dp[i][1] = pre[i] == -1 ? false : dp[pre[i]][0];
    res += dp[i][0];
  }
  return res;
};
// @lc code=end

