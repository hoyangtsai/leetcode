/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @google, @microsoft, @bloomberg, @uber, @amazon
// #string, #stack, #recursion
// #google-interview

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ']') {
      let decodedString = [];
      // get the encoded string
      while (stack[stack.length - 1] != '[') {
        decodedString.push(stack.pop());
      }
      // pop [ from the stack
      stack.pop();
      let base = 1;
      let k = 0;
      // get the number k
      while (stack.length > 0 && Number.isInteger(Number(stack[stack.length - 1]))) {
        k = k + stack.pop() * base;
        base *= 10;
      }
      // decode k[decodedString], by pushing decodedString k times into stack
      while (k != 0) {
        for (let j = decodedString.length - 1; j >= 0; j--) {
          stack.push(decodedString[j]);
        }
        k--;
      }
    } else {
      stack.push(s[i]);
    }
  }

  return stack.join('');
};
// @lc code=end

/**
 * Stack
 * 
 * - Time complexity: O(maxK^countK * n) where maxK is the maximum value of k, countK is the count of nested k values and n is the maximum length of encoded string.
 *   Example, for s = 20[a10[bc]], maxK is 20, countK is 2 as there are 2 nested k values (20 and 10). Also, there are 2 encoded strings a and bc with maximum length of encoded string, n as 2
 * 
 * - Space complexity: O(maxK^countK * n) where maxK is the maxiumu value of k, countK is the count of nested k values and n is the maximum length of encoded string.
 */

const str = decodeString("2[abc]3[cd]ef");
console.log('str =>', str);
