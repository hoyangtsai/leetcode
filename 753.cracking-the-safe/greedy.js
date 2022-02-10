/*
 * @lc app=leetcode id=753 lang=javascript
 *
 * [753] Cracking the Safe
 */

// https://leetcode-cn.com/problems/cracking-the-safe/solution/yi-bu-yi-bu-tui-dao-chu-0ms-jie-fa-tan-xin-gou-zao/

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function(n, k) {
  let kn = k**n;
  let kn_1 = k**(n - 1);
  let nums = new Array(kn_1).fill(k - 1);
  // let s = new Array(kn + (n - 1)).fill('0');
  let s = '0'.repeat(kn + (n - 1));
  for (let i = n - 1, node = 0; i < s.length; i++) {
    const rp = nums[node]-- + '0';
    // s[i] = nums[node]-- + '0';
    s = s.replace(i, rp);
    let pos = i - (n - 1);
    // let factor = (s[pos] - '0');
    let factor = parseInt(s[pos]);
    node = node * k - factor * kn_1 + nums[node] + 1;
  }
  return s;
};
// @lc code=end


const res = crackSafe(3, 2);
// console.log('res =>', res);