/*
 * @lc app=leetcode id=1236 lang=javascript
 *
 * [1236] Web Crawler
 */

/**
 * tags: #breadth-first-search
 */

// @lc code=start
/**
 * // This is the HtmlParser's API interface.
 * // You should not implement it, or speculate about its implementation
 * function HtmlParser() {
 *
 *		@param {string} url
 *     	@return {string[]}
 *     	this.getUrls = function(url) {
 *      	...
 *     	};
 * };
 */

/**
 * @param {string} startUrl
 * @param {HtmlParser} htmlParser
 * @return {string[]}
*/
var crawl = function(startUrl, htmlParser) {
  const getHostname = url => url.split("/")[2];
  const hostName = getHostname(startUrl);
  const queue = [startUrl];
  const seen = new Set([startUrl]);

  while (queue.length) {
    const curr = queue.shift();

    for(const url of htmlParser.getUrls(curr)) {
      if (!seen.has(url) && getHostname(url).includes(hostName)) {
        queue.push(url);
        seen.add(url);
      }
    }
  }

  return [...seen.values()];
};
// @lc code=end

