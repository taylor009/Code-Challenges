'use strict';

const fs = require('fs');

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

// Complete the workbook function below.
function workbook(n, k, arr) {
    let specials = 0;
    let page = 1;
    arr.forEach(a =>{
        let entry = 0;
        let startQue = 0;
        while( a > 0 ){

            startQue = entry;
            if(a >= k){
                entry += k;
            }else{
                entry += (a % k);
            }
            a -= k;

            if(page > startQue && page <= entry){
                specials++
            }
            page++

        }
    });
    return specials
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nk = readLine().split(' ');

    const n = parseInt(nk[0], 10);

    const k = parseInt(nk[1], 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    let result = workbook(n, k, arr);

    ws.write(result + "\n");

    ws.end();
}
