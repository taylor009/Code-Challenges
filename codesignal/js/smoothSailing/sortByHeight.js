function sortByHeight(a) {
    let arr = [];
    let newArr = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] === -1){
            arr.push(i);
        } else {
            newArr.push(a[i]);
        }
    }
    let sorted = newArr.sort((prev, current) => prev - current);
    for(let j = 0; j < arr.length; j++) {
        sorted.splice(arr[j], 0, -1);
    }
    return sorted;
}
