export function lineRead(squares) {
  const row = 10;
  const col = 10;
  const SIZE =10;
  let rowLines = new Array(10);
  let colLines = new Array(10);
  let rdgs = new Array(19);
  let ldgs = new Array(19);
  let board = [...squares];

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[i][j] == "") board[i][j] = "-";
    }
  }

  rowLines[i] = "";
  colLines[i] = "";
  for (let i = 0; i < 10; i++) {
    rowLines[i] = "";
    colLines[i] = "";
    for (let j = 0; j < 10; j++) {
        rowLines[i]+=board[i][j];
        colLines[i]+=board[j][i];
    }
  }

  for (let i = 0; i <= SIZE - 5; i++) {
    for (let j = 0,k=0; j <= SIZE - 5; j++) {
      if (board[i][j] != EMPTY) {
        const diagonal = Array.from(
          { length: 5 },
          (_, k) => board[i + k][j + k]
        );
        rdgs[k]=rdgs[k]+diagonal; k++;
      }
    }
  }

  for (let i = 0; i <= SIZE - 5; i++) {
    for (let j = 0; j <= SIZE - 5; j++) {
      if (board[i][j] != EMPTY) {
        const diagonal = Array.from(
          { length: 5 },
          (_, k) => board[i + k][j + 4 - k]
        );
        totalScore += evaluateLine(diagonal, player);
      }
    }
  }


}
