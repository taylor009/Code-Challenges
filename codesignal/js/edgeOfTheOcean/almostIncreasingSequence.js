let sequence = [1, 3, 2, 1];

function almostIncreasingSequence(sequence) {
    let found = false;
    for (let i=0; i<sequence.length; i++) {
        if(sequence[i] <= sequence[i-1]) {
            if(found) {
                return false;
            }
            found = true;

            if(i === 1 || i + 1 === sequence.length) {
                continue;
            }
            else if (sequence[i] > sequence[i-2]) {
                sequence[i-1] = sequence[i-2];
            }
            else if(sequence[i-1] >= sequence[i+1]) {
                return false;
            }
        }
    }
    return true;
}