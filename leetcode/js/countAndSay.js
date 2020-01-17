/**
 * @param {number} n
 * @return {string}
 */
const countAndSay = function (n) {
    if(n==1) return "1";
    let preS = countAndSay(n-1).split('');

    let result = "";
    let counter = 0;
    for(let i = 0; i<preS.length; i++){
        if(counter == 0 || preS[i] == preS[i-1]){
            counter++;
            if(i == preS.length -1 ){
                result = result + counter + preS[i];
            }
        }else{
            result = result + counter + preS[i-1];
            i--;
            counter=0;
        }
    }
    return result
};