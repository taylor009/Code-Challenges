function makeArrayConsecutive2(statues) {
    let sortedArray = statues.sort(function (a, b) {
        return (a - b)
    });
    let some = 0;
    if(sortedArray.length-1 ===0){
        return 0;
    } else{
        for(i=0; i<= sortedArray.length-2; i++){
            some+=(sortedArray[i+1]-sortedArray[i]-1);
        }
        return some;
    }

}