/**
 * @param {number} N
 * @return {number}
 */
const bitwiseComplement = function (N) {
    let mask = (1 << Math.floor(Math.log(N)/Math.log(2)) + 1) -1;
    return N === 0 ? 1 : N ^ mask;
};