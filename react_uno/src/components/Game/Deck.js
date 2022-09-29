import React from "react";
import { motion, transform } from "framer-motion";

export default function Deck({
	cards,
	deg,
	rotateDeg,
	player1Turn,
	player2Turn,
	player1,
	player2,
	setPlayer1,
	setPlayer2,
	setCards,
}) {
	const takeCard = () => {
		let deck = [...cards];
		let takeOneDeck = deck.at(-1);
		console.log(takeOneDeck);

		if (player1Turn === true) {
			let player1Copy = [...player1];
			player1Copy.push(takeOneDeck);
			deck.pop();
			setPlayer1(player1Copy);
			setCards(deck);
			console.log(cards);
		} else if (player2Turn === true) {
			let player2Copy = [...player2];
			player2Copy.push(takeOneDeck);
			deck.pop();
			setPlayer2(player2Copy);
			setCards(deck);
			console.log(cards);
		}
	};
	return (
		<div
			className='cursor-pointer'
			onClick={() => {
				takeCard();
			}}
		>
			{cards.map((card) => {
				deg();
				return (
					<motion.img
						initial={{ rotate: rotateDeg[0] }}
						className={` ring-offset-black skew-x-12 skew-y-12 absolute scale-75 inset-0  z-10 `}
						key={card.id}
						src={card.src}
						alt={card.value}
					/>
				);
			})}
		</div>
	);
}

//"assets/card-back.png"
