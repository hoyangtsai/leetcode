/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  let mailList = new Set();

  emails.forEach(e => {
    let [local, domain] = e.split('@');
    local = local.split('+')[0].split(/\./g).join('');
    mailList.add(`${local}@${domain}`)
  });

  return mailList.size;
};
// @lc code=end
