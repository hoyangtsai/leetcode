/*
 * @lc app=leetcode id=1236 lang=javascript
 *
 * [1236] Web Crawler
 */

/**
 * tags: #depth-first-search, #url-string
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

  const dfs = (urlList, seen) => {
    for(const url of urlList) {
      if(!seen.has(url) && url.includes(hostName)) {
        seen.add(url);
        dfs(htmlParser.getUrls(url), seen);
      }
    }
    return [...seen.values()];
  }

  return dfs(htmlParser.getUrls(startUrl), new Set([startUrl]));
};
// @lc code=end

