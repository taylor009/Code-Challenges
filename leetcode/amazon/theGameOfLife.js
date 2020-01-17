/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    var i, j;
    for(i = 0; i < board.length; i++){
        for(j = 0; j < board[i].length; j++){
            var curr = board[i][j];
            var neighbors = countNeighbors(i, j);
            if(neighbors < 2 || neighbors > 3){
                if(curr === 1){
                    board[i][j] = 3;
                }
            }else if(neighbors === 3){
                if(curr === 0){
                    board[i][j] = 2;
                }
            }
        }
    }
    for(i = 0; i < board.length; i++){
        for(j = 0; j < board[i].length; j++){
            if(board[i][j] === 2){
                board[i][j] = 1;
            }else if(board[i][j] === 3){
                board[i][j] = 0;
            }
        }
    }


    function countNeighbors(i, j){
        var count = 0;
        count += isAlive(i, j - 1); count += isAlive(i, j + 1);
        count += isAlive(i - 1, j - 1); count += isAlive(i - 1, j); count += isAlive(i - 1, j + 1);
        count += isAlive(i + 1, j - 1); count += isAlive(i + 1, j); count += isAlive(i + 1, j + 1);
        return count;
    }
    function isAlive(i, j){
        if(!board[i] || !board[i][j]){
            return 0;
        }
        var cell = board[i][j];
        if(cell === 1 || cell === 3){
            return 1;
        }
        return 0;
    }
};