/*
 * @lc app=leetcode id=1125 lang=javascript
 *
 * [1125] Smallest Sufficient Team
 */

/**
 * tags: #bitmask, #bit-manipulation
 */

// @lc code=start
/**
 * @param {string[]} req_skills
 * @param {string[][]} people
 * @return {number[]}
 */
var smallestSufficientTeam = function(req_skills, people) {
  const n = people.length;
  const m = req_skills.length;

  let skillId = new Map();
  for (let i = 0; i < m; i++) {
    skillId.set(req_skills[i], i);
  }

  let skillTeam = new Map([[0, []]]);
  
  for (let index = 0; index < n; index++) {
    const skills = people[index];
    
    let hisSkills = 0;        
    for (const skill of skills) {
      // bit shifting calculate first then OR operator
      // each calculation retains bit 1's
      // ex. binary(2) | binary(4) = 6
      hisSkills |= 1 << skillId.get(skill);
    }
            
    for (const [currSkill, team] of skillTeam) {
      const totalSkills = currSkill | hisSkills;
      
      if (totalSkills === currSkill) {
        continue;
      }
      
      if (    
        !skillTeam.has(totalSkills) || 
        team.length + 1 < skillTeam.get(totalSkills).length
      ) {                
        skillTeam.set(totalSkills, [...team, index])
      }             
    }
  }

  return skillTeam.get((1 << req_skills.length) - 1);
};
// @lc code=end


/**
 * - Time complexity: O(2^m * n)
 * - Space complexity: O(2^m)
 */

smallestSufficientTeam(["java","nodejs","reactjs"], [["java"],["nodejs"],["nodejs","reactjs"]])