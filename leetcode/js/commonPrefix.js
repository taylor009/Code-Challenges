/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = strs => {
    if(!strs.length){
        return ''
    }
    let firstStr=strs.shift();
    if(!strs.length){
        return firstStr
    }

    let isFound=false;
    let str=firstStr;

    for(var j=firstStr.length;j>0;j--){
        str=firstStr.slice(0,j);
        isFound=strs.every((item)=>{
            return item.indexOf(str)==0
        });
        if(isFound){
            return str
        }
    }
    return isFound?str:''
};