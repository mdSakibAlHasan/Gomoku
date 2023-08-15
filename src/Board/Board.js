
const Board = () =>{
    const rows = 10;
    const cols = 10;
    const board = new Array(rows);

    for (let i = 0; i < rows; i++) {
        board[i] = new Array(cols);
    }

    for(let i=0;i<rows; i++){
        for(let j=0; j<cols; j++){
            board[i][j] = '-';
        }
    }

    for(let i=0;i<rows; i++){
        for(let j=0; j<cols; j++){
            console.log(board[i][j]);
            console.log();
        }
    }
}