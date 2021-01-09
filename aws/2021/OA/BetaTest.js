/*
 * Complete the 'findMinComplexity' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY complexity
 *  2. INTEGER days
 */

function findMinComplexity(complexity, days) {
    // if we don't have enough days
    if(complexity.length < days){
        return -1;
    }

    // initialize cache for memorization point
    const cache = {}

    const dfs = (start, numberOfDays) => {
        //
        if(numberOfDays === days) {
            return start === complexity.length ? 0 : Infinity
        }

        const key = `${start}-${numberOfDays}`;

        if(cache[key] !== undefined) {
            return cache[key];
        }
        const end = complexity.length - days + numberOfDays;

        let result = Infinity;
        let max = -Infinity;

        for(let i = start; i <= end; i++){
            max = Math.max(max, complexity[i]);
            result = Math.min(result, max + dfs(i + 1, numberOfDays + 1));
        }
        // save the result in the cache and returns it.
        return cache[key] = result;
    }
    return dfs(0, 0);
}

