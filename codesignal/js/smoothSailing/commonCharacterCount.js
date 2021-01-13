function commonCharacterCount(s1, s2) {
    let count = 0;
    const obj = s2.split("");
    for(str of s1){
        let idx = obj.findIndex(s => s === str);
        if(idx >= 0) {
            count++;
            obj.splice(idx, 1);
        }
    }
    return count;
}
