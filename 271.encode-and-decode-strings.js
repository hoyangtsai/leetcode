/*
 * @lc app=leetcode id=271 lang=javascript
 *
 * [271] Encode and Decode Strings
 */

/**
 * tags: #design
 */

// @lc code=start
/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function(strs) {
  let encodedString = '';

  for (const s of strs) {
    // Replace each occurrence of '/' with '//'
    // This is our way of "escaping" the slash character
    // Then add our delimiter '/:' to the end
    encodedString += s.replace('/', '//') + '/:';
  }

  return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function(s) {
  let decodedStrings = [];

  let currentString = '';
  let i = 0;

  while (i < s.length) {
    // If we encounter the delimiter '/:'
    if (i + 1 < s.length && s.charAt(i) == '/' && s.charAt(i + 1) == ':') {
      // Add the currentString to the list of decodedStrings
      decodedStrings.push(currentString);

      // Clear currentString for the next string
      currentString = '';

      // Move the index 2 steps forward to skip the delimiter
      i += 2;
    }
    // If we encounter an escaped slash '//'
    else if (i + 1 < s.length && s.charAt(i) == '/' && s.charAt(i + 1) == '/') {
      // Add a single slash to the currentString
      currentString += '/';

      // Move the index 2 steps forward to skip the escaped slash
      i += 2;
    }
    // Otherwise, just add the character to currentString and move the index 1 step forward.
    else {
      currentString += s.charAt(i);
      i++;
    }
  }

  return decodedStrings;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
// @lc code=end


/**
 * - Time complexity: O(n)
 * - Space complexity: O(k)
 */