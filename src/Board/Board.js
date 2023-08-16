const rows = 10;
const cols = 10;


const Board = () =>{
    //create board
    const board = new Array(rows);
    for (let i = 0; i < rows; i++) {
        board[i] = new Array(cols);
    }
    //initialize board
    for(let i=0;i<rows; i++){
        for(let j=0; j<cols; j++){
            board[i][j] = '-';
        }
    }

    play(board,5,5,1);
    play(board,6,6,0);
    play(board,6,5,1);
    play(board,7,7,0);
    play(board,7,5,1);
    play(board,8,8,0);
    play(board,8,5,1);
    play(board,9,9,0);
    play(board,9,5,1);
    play(board,5,5,0);
  
}

const play = (board, inputRow, inputCol, player) =>{
    board[inputRow][inputCol] = player;
    print_board(board);
        
    if(checkForMatches(board,0) === true){
        console.log("White win the game");
    }
    else if(checkForMatches(board,1) === true){
        console.log("Black win the game");
    }
}

const print_board = (board) =>{
    for(let i=0;i<rows; i++){
        console.log(board[i][0]+' '+board[i][1]+' '+board[i][2]+' '+board[i][3]+' '+board[i][4]+' '+board[i][5]+' '+board[i][6]+' '+board[i][7]+' '+board[i][8]+' '+board[i][9]);
    }
}

function checkMatch(board, row, col, rowDelta, colDelta, matchValue) {
    for (let i = 0; i < 5; i++) {
      const newRow = row + i * rowDelta;
      const newCol = col + i * colDelta;
  
      if (
        newRow < 0 || newRow >= 10 ||
        newCol < 0 || newCol >= 10 ||
        board[newRow][newCol] !== matchValue
      ) {
        return false; 
      }
    }
  
    return true; 
  }
  
  
  function checkForMatches(board, matchValue) {
    console.log('check here')
    for(let i=0; i<rows; i++){
        for(let j=0; j<cols; j++){
            // Check row
            if (checkMatch(board, i, j,  0, 1, matchValue)) return true;
        
            // Check column
            if (checkMatch(board, i, j, 1, 0, matchValue)) return true;
        
            // Check diagonally 
            if (checkMatch(board, i, j, 1, 1,  matchValue)) return true;
            if (checkMatch(board, i, j, -1, 1,  matchValue)) return true;
        }
    }
  
    return false; 
  }


Board();