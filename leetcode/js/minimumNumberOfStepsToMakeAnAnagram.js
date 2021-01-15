// function getMinimumDifference(a, b) {
//     /*First, we remove any non-alphabet character using regex and convert
//    convert the strings to lowercase. */
//     a = a.replace(/[^\w]/g, "").toLowerCase()
//     b = b.replace(/[^\w]/g, "").toLowerCase()
//
//     //Get the character map of both strings
//     const charMapA = getCharMap(a)
//     const charMapB = getCharMap(b)
//
//     /* Next, we loop through each character in the charMapA,
//     and check if it exists in charMapB and has the same value as
//     in charMapA. If it does not, return false */
//     for (let char in charMapA) {
//         if (charMapA[char] !== charMapB[char]) {
//             return false
//         }
//     }
//
//     return true
// }
//
//
// function getCharMap(string) {
//     // We define an empty object that will hold the key - value pairs.
//     let charMap = {}
//
//     /*We loop through each character in the string. if the character
//     already exists in the map, increase the value, otherwise add it
//     to the map with a value of 1 */
//     for (let char of string) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }

function anagrams(stringA, stringB) {
    /*First, we remove any non-alphabet character using regex and convert
    convert the strings to lowercase. */
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase()
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase()

    //Get the character map of both strings
    const charMapA = getCharMap(stringA)
    const charMapB = getCharMap(stringB)

    /* Next, we loop through each character in the charMapA,
    and check if it exists in charMapB and has the same value as
    in charMapA. If it does not, return false */
    for (let char in charMapA) {
        if (charMapA[char] !== charMapB[char]) {
            return false
        }
    }
    console.log(charMapA)

    return true
}

function getCharMap(string) {
    // We define an empty object that will hold the key - value pairs.
    let charMap = {}

    /*We loop through each character in the string. if the character
    already exists in the map, increase the value, otherwise add it
    to the map with a value of 1 */
    for (let char of string) {
        charMap[char] = charMap[char] + 1 || 1
    }
    return charMap
}

let a = ['a', 'jk', 'abb', 'mn', 'abc'];

let b = ['bb', 'kj', 'bbc', 'op', 'def'];


// getMinimumDifference(a, b);

anagrams(a, b);