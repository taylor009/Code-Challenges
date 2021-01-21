// Complete the migratoryBirds function below.
function migratoryBirds(arr) {
    let map = {}, maxCount = 0, output = [];
    for (let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]] += 1;
        }

        // getting max count
        if (map[arr[i]] > maxCount) {
            maxCount = map[arr[i]];
        }
    }


    for (let j = 0; j < arr.length; j++) {
        if (map[arr[j]] === maxCount) {
            output.push(arr[j]);
        }
    }

    return Math.min(...output);

}