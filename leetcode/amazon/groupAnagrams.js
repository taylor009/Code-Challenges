/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    if(strs.length === 0){
        return strs;
    }
    let memory = new Map();
    for(let str of strs){
        let sorted_str = [...str]
        sorted_str.sort();
        sorted_str = sorted_str.join('');
        if(memory.has(sorted_str)){
            memory.get(sorted_str).push(str);
        } else {
            memory.set(sorted_str, [str]);
        }
    }
    return [...memory.values()];
};