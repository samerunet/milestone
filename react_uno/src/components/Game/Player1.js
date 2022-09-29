import React from "react";
import { motion } from "framer-motion";
import "./Player1.css";
export default function Player1({
	player1,
	nextMove,
	player1Turn,
	deg,
	rotateDeg,
}) {
	let rem = 0;
	return (
		<div className='relative  scale-50 flex w-full max-w-xl h-1/4 items-center justify-center mx-auto '>
			{player1.map((playerCard, indexCurrent) => {
				// player 2 card deck

				return (
					<motion.img
						onClick={() => {
							player1Turn
								? nextMove(playerCard, indexCurrent)
								: console.log("not your move");
						}}
						className={` ml-10 cursor-pointer ring-offset-black    inset-0  z-10 customPlayer1 `}
						key={playerCard.id}
						src={playerCard.src}
						alt={playerCard.id}
					/>
				);
			})}
		</div>
	);
}
