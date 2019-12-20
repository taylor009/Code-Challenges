'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
    const maxArr = [...arr].sort((a, b) => a - b);
    const minArr = [...arr].sort((a, b) => b - a);
    const max = maxArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
    const min = minArr.slice(arr.length - 4).reduce((acc, no) => acc += no, 0);
    console.log(min + " " + max);
}

function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
