/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let counts = {};
    let remainingToSee = 0;
    for(let char of t){
        if(!counts[char]){
            remainingToSee++;
            counts[char] = 0;
        }
        counts[char]++;
    }
    let min = Infinity, outL, outR;
    for(let l =0, r =0; r < s.length; r++){
        if(counts[s[r]] !== undefined){
            counts[s[r]]--;
        }
        if(counts[s[r]] === 0){
            remainingToSee--;
        }
        while(remainingToSee === 0){
            if(r - l + 1 < min){
                min = r - l + 1, outL = l, outR = r;
            }
            if(counts[s[l]] !== undefined){
                counts[s[l]]++;
            }
            if(counts[s[l]] > 0){
                remainingToSee++;
            }
            l++;
        }
    }
    return s.slice(outL, outR + 1);
};