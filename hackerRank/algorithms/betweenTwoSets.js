/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function getTotalX(a, b) {
    let lowLimit = a[a.length - 1];
    let highLimit = b[0];

    let consideredMultiples = [];

    // Get multiples of the highest member in the first array till the lowest value in the second array.
    for(let i = lowLimit; i <= highLimit; i += lowLimit){
        consideredMultiples.push(i);
    }

    // Filter the array based on weather members of first array can go in it.
    consideredMultiples = consideredMultiples.filter(multiple =>
        a.reduce((shouldFilter, val) => (multiple % val !== 0)? false : (shouldFilter)? true: null, true));

    // Filter the array based on whether its member can go in the second array.

    consideredMultiples = consideredMultiples.filter(multiple =>
    b.reduce((shouldFilter, val) => (val % multiple !== 0)? false : (shouldFilter)? true: null, true));

    return consideredMultiples.length;

}
