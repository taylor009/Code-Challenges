/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
const strStr = function (haystack, needle) {
   if(haystack.length < 1 && needle.length < 1) {
       return 0;
   }
   if(haystack.length < 1) {
       return -1;
   }
   if(needle.length < 1) {
       return 0;
   }
   let nIndex = 0;
   for(let i=0; i < haystack.length; i++) {
       if(haystack[i] === needle[nIndex]) {
           if(nIndex === (needle.length -1)) {
               return (i -nIndex);
           } else {
               nIndex++;
           }
       } else if(nIndex > 0) {
           i = i -nIndex;
           nIndex =0;
       }
   }
   return -1;
};