/**
 * @param {string} s
 * @return {number}
 */
const conversion = {"M": 1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1};

const romanToInt = function(s) {
    const array = s.split('');

    let total = 0;
    let current;
    let currentValue;
    let next;
    let nextValue;

    for (let i = 0; i < array.length; i++) {
        current = array[i];
        currentValue = conversion[current];

        next = array[i+1];
        nextValue = conversion[next];

        if ( currentValue < nextValue) {
            total -= (currentValue);
        } else {
            total += (currentValue);
        }
    }
    return total;
};