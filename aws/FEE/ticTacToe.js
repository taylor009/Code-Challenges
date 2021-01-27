import React from 'react';

const squareStyle = {
    background: 'lightblue',
    border: '2px solid darkblue',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
};

const boardStyle = {
    border: '4px solid darkblue',
    borderRadius: '10px',
    width: '250px',
    height: '250px',
    margin: '0 auto',
    display: 'grid',
    gridTemplate: 'repeat(3, 1fr) / repeat(3, 1fr)'
};

const gameStyle = {
    width: '200px',
    margin: '20px auto',
};

const Square = ({ value, onClick }) => (
    <button style={squareStyle} onClick={onClick}>
        {value}
    </button>
);

const Board = ({ squares, onClick }) => (
    <div style={boardStyle}>
        {squares.map((square, i) => {
            <Square key={i} value={square} onClick={() => onClick(i)} />
        })}
    </div>
);

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let i =0; i < lines.length; i++){
        const [a,b,c] = lines[i];
        if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
            return squares[a];
        }
    }
    return null;
}

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const winner = calculateWinner(board);

    const handleClick = i => {
        const boardCopy = [...board];

        // If user clicks on occupied square of if game is won, return.
        if(winner || boardCopy[i]) return;

        // Put an X or an 0 in the clicked square.
        boardCopy[i] = xIsNext ? 'x' : 'o';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const jumpTo = step => {
        setStepNumber(step);
        setXisNext(step % 2 === 0)
    }

    const renderMoves = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>
            Start Game
        </button>
    )


    return (
        <>
            <Board squares={board} onClick={handleClick}/>
            <div style={gameStyle}>
                <p>{winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'x' : 'o')}</p>
                {renderMoves()}
            </div>
        </>
    )
}