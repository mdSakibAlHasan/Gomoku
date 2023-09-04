import React, { useEffect, useState } from 'react';
import './board.css';
// import { main } from '../Board/Move.js';
import { AI_movement } from '../Board/Move.js';


const Board = () => {
	const row_count = 10;
	const col_count = 10;
	
	const [turn, setTurn] = useState('0');
	const [cells, setCells] = useState(Array(row_count*col_count).fill(''));
	const [winner, setWinner] = useState('');

	const handleClick = (num) => {
		console.log(cells)
		if (cells[num] !== '') {
			alert('already clicked');
			return;
		}

		let squares = [...cells];

		//if (turn === '0') {
			squares[num] = '0';
			setCells(squares)
			
			setTurn('1');
		// } else {
		// 	squares[num] = '1';
		// 	setTurn('0');
		// }
		console.log(squares," ------------ forntent")
		
		setCells(squares);
		const cell = AI_movement(squares);
		console.log(cell,"++++++++++++++++++ in the forntent after ai movement")
		setCells(cell);

		setTurn('1');

		
	};

	const handleRestart = () => {
		setWinner('');
		setCells(Array(row_count*col_count).fill(''));
		setTurn('0');
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}><div className={cells[num]} /></td>;
	};

	useEffect(() => {
		setTimeout(() => {
			if(turn === '1'){
				let squares = [...cells]
				
			}
		}, 0)
	})


    var t = 0;

	return (
		<div className='container mt-5'>
			{turn==='1' && (
				<b><p><span class="red">Red</span>'s Turn!</p></b>
			)}
			{turn==='0' && (
				<b><p>Your Turn!</p></b>
			)}
			<table className="box">
				<tbody>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
					<tr>
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
						<Cell num={t++} />
					</tr>
				</tbody>
			</table>
			</div>
	);
};

export default Board;