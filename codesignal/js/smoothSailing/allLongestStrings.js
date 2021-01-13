function allLongestStrings(inputArray) {
    //Keeps track of the string with the longest length
    let longest =0;

    //Loops through array finding the longest string length
    for(let i = 0; i < inputArray.length; i++) {
        //Checks if current index has a longer length than our variable.
        if(inputArray[i].length > longest) {
            longest = inputArray[i].length;
        }
    }
    // After finding the longest string length we that the original array and apply a filter on the longest string length.
    return inputArray.filter(el => el.length === longest);
}