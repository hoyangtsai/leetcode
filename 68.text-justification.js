/*
 * @lc app=leetcode id=68 lang=javascript
 *
 * [68] Text Justification
 */

/**
 * tags: #simulation
 * @Nvidia
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  function getWords(i, words, maxWidth) {
    let currentLine = [];
    let currLength = 0;
    while (i < words.length && currLength + words[i].length <= maxWidth) {
      currentLine.push(words[i]);
      currLength += words[i].length + 1;
      i++;
    }
    return currentLine;
  }

  function createLine(line, i, words, maxWidth) {
    let baseLength = -1;
    for (const word of line) {
      baseLength += word.length + 1;
    }

    let extraSpaces = maxWidth - baseLength;

    if (line.length == 1 || i == words.length) {
      return line.join(" ") + " ".repeat(extraSpaces);
    }

    let wordCount = line.length - 1;
    let spacesPerWord = parseInt(extraSpaces / wordCount);
    let needsExtraSpace = parseInt(extraSpaces % wordCount);

    for (let j = 0; j < needsExtraSpace; j++) {
      line[j] = line[j] + " ";
    }

    for (let j = 0; j < wordCount; j++) {
      line[j] = line[j] + " ".repeat(spacesPerWord);
    }

    return line.join(" ");
  }

  let ans = [];
  let i = 0;
  while (i < words.length) {
    let currentLine = getWords(i, words, maxWidth);
    i += currentLine.length;
    ans.push(createLine(currentLine, i, words, maxWidth));
  }
  return ans;
};
// @lc code=end


/**
 * - Time complexity: O(n * k)
 * - Space complexity: O(m)
 */