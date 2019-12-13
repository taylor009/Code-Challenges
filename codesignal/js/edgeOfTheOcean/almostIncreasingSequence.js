let sequence = [1, 3, 2, 1];

function almostIncreasingSequence(sequence) {
    if (isIncreasingSequence(sequence)) {
        return true;
    }



    for (let i = 0; i < sequence.length > 0; i++) {
        let tmpSequence = sequence.slice(0); // copy original array

        tmpSequence.splice(i, 1);
        if (isIncreasingSequence(tmpSequence)) {
            return true;
        }
    }

    return false;
}

function isIncreasingSequence(sequence) {
    for (let i = 0; i < sequence.length - 1; i++) {
        if (sequence[i] >= sequence[i + 1]) {
            return false;
        }
    }

    return true;
}