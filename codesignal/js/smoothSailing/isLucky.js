function isLucky(n) {
    //Convert number into array of numbers
    const arr = Array.from(String(n), Number);

    const firstHalf = sum(arr.slice(0, arr.length / 2));
    const secondHalf = sum(arr.slice(arr.length / 2));

    return firstHalf === secondHalf;
}

function sum(arr) {
    return arr.reduce((prev, current) => {
        const _current = parseInt(current, 0);

        return prev += _current;
    }, 0)
}