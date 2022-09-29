import React from "react";

export default function Player2({ player2, nextMove, player2Turn }) {
	return (
		<>
			{player2.map((playerCard, indexCurrent) => {
				// player 2 card deck
				return (
					<img
						onClick={() => {
							player2Turn
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
