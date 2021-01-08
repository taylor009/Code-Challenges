// url https://leetcode.com/discuss/interview-question/370112/

function uniqueSubstrings(s, k) {
    const set = new Set();
    const map = {};
    let l = 0;
    let r = 0;

    for (let r = 0; r < s.length; r++) {
        if (map[s[r]] == null) map[s[r]] = 0;
        map[s[r]]++;
        while (map[s[r]] > 1) {
            map[s[l]]--;
            l++;
        }
        if (r - l + 1 === k) {
            set.add(s.slice(l, r + 1));
            map[s[l]]--;
            l++;
        }
    }

    return Array.from(set);
}