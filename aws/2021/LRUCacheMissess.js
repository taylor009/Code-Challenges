// url https://leetcode.com/discuss/interview-question/992179/Amazon-or-OA-2021-or-LRU-Cache-Misses

const cacheMisses = (num, pages, maxCacheSize) => {
	if(num === 0) return 0;
	let hash = {}, used = [], misses = 0;
	for (let i of pages) {
		if (!hash[i]) {
			if (Object.keys(hash).length === maxCacheSize) {
				delete hash[used[0]]; // the first value in used is the least recently used page, remove it from hash
			}
			hash[i] = true;
			misses++;
		}
		/* remove oldest page, add in newest page hit.
		 Setting size to max cache size ensures we only deal with what is inside hash */
		if (used.length === maxCacheSize) used.shift();
		used.push(i);
	}
	return misses;
};
