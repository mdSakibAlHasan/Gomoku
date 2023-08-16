// Constants
const BOARD_SIZE = 10;
const AI_PLAYER = "X";
const OPPONENT_PLAYER = "O";
const EMPTY = " ";

// Evaluate a line for its potential
function evaluateLine(line, player) {
    const aiCount = line.filter(cell => cell === player).length;
    const opponentCount = line.filter(cell => cell === OPPONENT_PLAYER).length;
    
    if (aiCount === 5) return 1000;
    if (opponentCount === 5) return -1000;
    if (aiCount === 4 && line.includes(EMPTY)) return 100;
    if (opponentCount === 4 && line.includes(EMPTY)) return -100;
    if (aiCount === 3 && line.includes(EMPTY)) return 10;
    if (opponentCount === 3 && line.includes(EMPTY)) return -10;
    if (aiCount === 2 && line.includes(EMPTY)) return 1;
    if (opponentCount === 2 && line.includes(EMPTY)) return -1;
    return 0;
}

// Evaluate the entire board
function evaluateBoard(board, player) {
    let totalScore = 0;
    
    for (const row of board) {
        for (let i = 0; i <= BOARD_SIZE - 5; i++) {
            totalScore += evaluateLine(row.slice(i, i + 5), player);
        }
    }
    
    for (let col = 0; col < BOARD_SIZE; col++) {
        for (let i = 0; i <= BOARD_SIZE - 5; i++) {
            const column = Array.from({ length: 5 }, (_, j) => board[i + j][col]);
            totalScore += evaluateLine(column, player);
        }
    }
    
    for (let i = 0; i <= BOARD_SIZE - 5; i++) {
        for (let j = 0; j <= BOARD_SIZE - 5; j++) {
            const diagonal = Array.from({ length: 5 }, (_, k) => board[i + k][j + k]);
            totalScore += evaluateLine(diagonal, player);
        }
    }
    
    for (let i = 0; i <= BOARD_SIZE - 5; i++) {
        for (let j = 0; j <= BOARD_SIZE - 5; j++) {
            const diagonal = Array.from({ length: 5 }, (_, k) => board[i + k][j + 4 - k]);
            totalScore += evaluateLine(diagonal, player);
        }
    }
    
    return totalScore;
}

// Find the best move using Minimax with alpha-beta pruning
function findBestMove(board, depth, maximizingPlayer) {
    if (depth === 0) {
        return [null, evaluateBoard(board, AI_PLAYER)];
    }
    
    if (maximizingPlayer) {
        let bestMove = null;
        let bestScore = Number.NEGATIVE_INFINITY;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === EMPTY) {
                    board[i][j] = AI_PLAYER;
                    const [_, score] = findBestMove(board, depth - 1, false);
                    board[i][j] = EMPTY;
                    if (score > bestScore) {
                        bestScore = score;
                        bestMove = [i, j];
                    }
                }
            }
        }
        return [bestMove, bestScore];
    } else {
        let bestMove = null;
        let bestScore = Number.POSITIVE_INFINITY;
        for (let i = 0; i < BOARD_SIZE; i++) {
            for (let j = 0; j < BOARD_SIZE; j++) {
                if (board[i][j] === EMPTY) {
                    board[i][j] = OPPONENT_PLAYER;
                    const [_, score] = findBestMove(board, depth - 1, true);
                    board[i][j] = EMPTY;
                    if (score < bestScore) {
                        bestScore = score;
                        bestMove = [i, j];
                    }
                }
            }
        }
        return [bestMove, bestScore];
    }
}

// Main game loop
function main() {
    const board = Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => EMPTY));
    
    while (true) {
        // AI's turn
        const [aiMove, _] = findBestMove(board, 3, true);
        if (aiMove) {
            const [row, col] = aiMove;
            board[row][col] = AI_PLAYER;
            console.log(`AI's move: ${row} ${col}`);
        } else {
            console.log("AI cannot move.");
            break;
        }
        
        // Print the board
        for (const row of board) {
            console.log(row.join(" "));
        }
        console.log();
        
        // Check if AI wins
        if (evaluateBoard(board, AI_PLAYER) >= 1000) {
            console.log("AI wins!");
            break;
        }
        
        // Opponent's turn (simulate user input)
        const opponentRow = Math.floor(Math.random() * BOARD_SIZE);
        const opponentCol = Math.floor(Math.random() * BOARD_SIZE);
        board[opponentRow][opponentCol] = OPPONENT_PLAYER;
        
        // Print the board
        for (const row of board) {
            console.log(row.join(" "));
        }
        console.log();
        
        // Check if opponent wins
        if (evaluateBoard(board, OPPONENT_PLAYER) <= -1000) {
            console.log("Opponent wins!");
            break;
        }
    }
}

main();
