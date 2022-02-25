import { Box } from "@mui/material";
import { useState } from "react";
import BoardSpot from "./BoardSpot";

const Game = ({ width = "max(50vmin, 300px)" }) => {
	const [board, setBoard] = useState([
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	]);
	// player 1 & 2
	const [player, setPlayer] = useState(1);
	const switchPlayer = () =>
		setPlayer((oldPlayer) => (oldPlayer === 1 ? 2 : 1));

	const placeToken = (coord) => {
		const { row, col } = coord;
		setBoard((oldBoard) => {
			oldBoard[row][col] = player;
			return oldBoard;
		});
		switchPlayer();
	};

	return (
		<Box
			sx={{
				display: "flex",
				flex: 1,
				flexWrap: "wrap",
				width,
				height: width,
				border: 2,
			}}
			p={1}
		>
			{board.map((row, r) =>
				row.map((col, c) => (
					<BoardSpot
						key={`(${r}, ${c})`}
						coord={{ row: r, col: c }}
						val={col}
						placeToken={placeToken}
					/>
				))
			)}
		</Box>
	);
};

export default Game;
