/**
 * @param {number[]} time
 * @return {number}
 */
const numPairsDivisibleBy60 = songs => {
    let answer = 0;
    let freq = new Array(60).fill(0);
    for(let song of songs) {
        answer += freq[(60 - song % 60) % 60];
        freq[song % 60]++;
    }
    console.log(answer);
    return answer;
};

numPairsDivisibleBy60([4, 10, 50, 90, 30])

