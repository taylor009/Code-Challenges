/**
 *
 * @param array
 * @param sequence
 * @returns {boolean}
 *
 * O(n) time | O(1) space - where n is the length of the array.
 */
function isValidSubsequence(array, sequence) {
    // Write your code here.
    let arrIdx = 0;
    let seqIdx = 0;
    while (arrIdx < array.length && seqIdx < sequence.length){
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}