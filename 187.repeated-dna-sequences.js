/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    var seen={};
    var set=new Set();
    for(var i=0; i<s.length-9; i++){
        var curTen=s.slice(i, i+10);
        if(seen[curTen] == undefined){
            seen[curTen]=1;
        }else{
            set.add(curTen);
        }
    }
    return Array.from(set);
};

