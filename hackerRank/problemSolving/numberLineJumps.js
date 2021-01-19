// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {
    let kangaroosAreInTheSameSpot = function(jumpNumber) {
        // Calculates the position of the kangaroos after
        // a given number of jumps and tests for equality.
        return (x1 + v1 * jumpNumber == x2 + v2 * jumpNumber);
    }

    let result = 'NO';
    for (let i = 0; i < 10000 && result == 'NO'; i++) {
        if (kangaroosAreInTheSameSpot(i)) {
            result = 'YES';
        }
    }
    return result;
}