/*
 * @lc app=leetcode id=267 lang=javascript
 *
 * [267] Palindrome Permutation II
 */

/**
 * tags: #palindrome, #backtracking, #permutation, #string-group
 * {@link 266.palindrome-permutation.js}
 * {@link 46.permutations.js}
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var generatePalindromes = function(s) {
  let map = {};

  // check the s can be palindrome permutation
  if (!canPermutePalindrome(s, map)) return [];

  // problem 266
  function canPermutePalindrome(s, map) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      map[s.charAt(i)] = (map[s.charAt(i)] || 0) + 1;
      if (map[s.charAt(i)] % 2 === 0)
        count--;
      else
        count++;
    }
    return count <= 1;
  }

  // relative problem 46, 47
  function permute(s, l, ch) {
    if (l == s.length) {
      set.add(s + ch + s.split('').reverse().join(''));
    } else {
      let strArr = s.split('');
      for (let i = l; i < s.length; i++) {
        if (s[l] != s[i] || l == i) {
          [strArr[l], strArr[i]] = [strArr[i], strArr[l]];
          permute(strArr.join(''), l + 1, ch);
          // reset
          [strArr[l], strArr[i]] = [strArr[i], strArr[l]];
        }
      }
    }
  }

  let set = new Set();
  let st = '';
  let ch = '';
  Object.keys(map).forEach((c) => {
    // check which one is single char
    if (map[c] % 2 == 1) ch = c;

    for (let j = 0; j < parseInt(map[c] / 2); j++) {
      st += c;
    }
  });

  permute(st, 0, ch);

  return Array.from(set);
};
// @lc code=end


/**
 * - Time complexity: O((n/2 + 1)!). Almost n/2!(derivation) permutation need to be generated in the worst case.
 *   Further, for each permutation generated, string reverse function take n/4 time.
 * 
 * - Space complexity: O(n). The depth of recursion tree can go upto n/2 in the worst case.
 */