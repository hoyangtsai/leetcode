/*
 * @lc app=leetcode id=535 lang=javascript
 *
 * [535] Encode and Decode TinyURL
 */

/**
 * tags: #design, #url-shorten
 */

// @lc code=start
const alphabet = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const codeMap = new Map();
const urlMap = new Map();

function getCode() {
  let sb = '';
  for (let i = 0; i < 6; i++) {
    sb += alphabet.charAt(Math.floor(Math.random() * (10 + 26 * 2)));
  }
  return sb;
}

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var encode = function(longUrl) {
  if (urlMap.has(longUrl)) return urlMap.get(longUrl);

  let code = getCode();
  while (codeMap.has(code)) {
    code = getCode();
  }

  codeMap.set(code, longUrl);
  urlMap.set(longUrl, code);

  return "http://tinyurl.com/" + code;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
  return codeMap.get(shortUrl.replace("http://tinyurl.com/", ""));
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
// @lc code=end


/**
 * - The number of URLs that can be encoded is nearly of the order (10 + 26 * 2)^6.
 */