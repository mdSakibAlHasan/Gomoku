export function lineRead(squares) {
  const row = 10;
  const col = 10;
  const SIZE =10;
  let rowLines = new Array(10);
  let colLines = new Array(10);
  let rdgs = new Array(19);
  let ldgs = new Array(19);
  let board = [...squares];

  board=board.flat();

  // console.log("this is" +board);

  for(let i = 0 ; i < 100 ; i++) if(board[i]==='') board[i] = '-'
    for (let i = 0; i < row_count; i++) {
        rowLines[i] = ""
        colLines[i] = ""
        for (let j = 0; j < col_count; j++) {
            rowLines[i] += board[i*col_count+j]
            colLines[i] += board[i+col_count*j]
        }
    }

    let dgsize = 0, start = 0;
    for(let i = 0 ; i < 19 ; i++){
        start = i;
        if(i>9) start = (i-9)*9+i;
        if(i<10) dgsize = i+1;
        else dgsize--;
        ldgs[i] = ""
        for(let j = 0 ; j < dgsize ; j++){
            ldgs[i] += board[start];
            start+=9
        }
    }
    dgsize = 0; start = 0;
    for(let i = 0 ; i < 19 ; i++){
        start = 9-i;
        if(i>9) start = (i-10)*10+10;
        if(i<10) dgsize = i+1;
        else dgsize--;
        rdgs[i] = "";
        for(let j = 0 ; j < dgsize ; j++){
            rdgs[i] += board[start];
            start+=11
        }
    }

    return {
        rowLines:rowLines,
        colLines:colLines,
        ldgs:ldgs,
        rdgs:rdgs
    }

}



export function findLines(board,pattern){

    board=board.flat();
    
    let count = 0;
    let boardstate = lineRead(board)

    for(let i = 0 ; i < 19 ; i++){
        if(i<10){
            if(boardstate.rows[i].includes(pattern)) count++;
            else if(boardstate.rows[i].includes(pattern.split("").reverse().join(""))) count++;
            if(boardstate.cols[i].includes(pattern)) count++;
            else if(boardstate.cols[i].includes(pattern.split("").reverse().join(""))) count++;
        }
        if(boardstate.ldgs[i].includes(pattern)) count++;
        else if(boardstate.ldgs[i].includes(pattern.split("").reverse().join(""))) count++;
        if(boardstate.rdgs[i].includes(pattern)) count++;
        else if(boardstate.rdgs[i].includes(pattern.split("").reverse().join(""))) count++;
    }

    return count;
}




