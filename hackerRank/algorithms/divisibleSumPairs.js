// Complete the divisibleSumPairs function below.
function divisibleSumPairs(n, k, ar) {
    let pairCount = 0;
    for(let i = 0; i < ar.length; i++){
        const firstNum = ar[i];
        for(let j = i + 1; j < ar.length; j++){
            const secondNum = ar[j];
            if(((firstNum + secondNum) % k) === 0){
                pairCount++;
            }else{
                continue;
            }
        }
    }
    return pairCount;
}

const n = 6;
const k = 3;
const ar = [1, 3, 2, 6, 1, 2];


divisibleSumPairs(n, k, ar)