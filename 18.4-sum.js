/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let res = [];
	let len = nums.length;

	if (!nums || len < 4) 
        return res;

    nums.sort((a, b) => a - b);

    for(let i = 0; i < nums.length - 3; i++){
        if(i > 0 && nums[i] == nums[i-1]) continue;
        for(let j = i + 1; j < nums.length - 2; j++){
            if(j > i + 1 && nums[j] == nums[j-1]) continue;
            let twoSumTarget = target - nums[i] - nums[j];
            //The following 3 lines of code to calculate the min and max of twoSum
            let minTwoSum = nums[j+1] + nums[j+2];
            let maxTwoSum = nums[nums.length - 1] + nums[nums.length - 2];
            if(twoSumTarget < minTwoSum || twoSumTarget > maxTwoSum) continue;
            for(let m = j+1, n= nums.length-1; m < n;){
                let twoSum = nums[m] + nums[n];
                if(twoSum < twoSumTarget){
                    while(m < n && nums[m] == nums[m+1]) m++;
                    m++;
                }else if(twoSum > twoSumTarget){
                    while(m < n && nums[n] == nums[n-1]) n--;
                    n--;
                }else{
                    let tempList = [nums[i],nums[j],nums[m],nums[n]];
                    res.push(tempList);
                    while(m < n && nums[m] == nums[m+1]) m++;
                    m++;
                    while(m < n && nums[n] == nums[n-1]) n--;
                    n--;
                }
            }
        }
    }
    return res;
};

