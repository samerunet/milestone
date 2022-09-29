import React from "react";

export default function Player1({ player1, nextMove, player1Turn }) {
	return (
		<>
			{player1.map((playerCard, indexCurrent) => {
				// player 2 card deck
				return (
					<img
						onClick={() => {
							player1Turn
								? nextMove(playerCard, indexCurrent)
								: console.log("not your move");
						}}
						className={`scale-50 ml-0  skew-y-25`}
						key={playerCard.id}
						src={playerCard.src}
						alt={playerCard.id}
					/>
				);
			})}
		</>
	);
}
