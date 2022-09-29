import React, { useEffect, useState } from "react";
import CardDeck from "../../CardDeck.js";
import "./Game.css";
import { motion } from "framer-motion";
import Field from "./Field.js";
import Player2 from "./Player2.js";
import Player1 from "./Player1.js";
import Deck from "./Deck.js";
export default function Game({ user, players }) {
	const flag = React.useRef(true);
	const carddeck = CardDeck.sort((a, b) => 0.5 - Math.random());
	const [cards, setCards] = useState(carddeck);

	const [player1Turn, setPlayer1Turn] = useState(true);

	const [player2Turn, setPlayer2Turn] = useState(false);

	// this is for random field and deck rotation
	let rotateDeg = [20, 60, 90, 45, 30, 25, 33, 100, 2, 4, 40];
	const deg = () => {
		rotateDeg = rotateDeg.sort(function () {
			return 0.5 - Math.random();
		});
	};

	const [player1, setPlayer1] = useState([]);
	const [player2, setPlayer2] = useState([]);
	const [field, setField] = useState([]);
	// next move

	const nextMove = (playerCard, index) => {
		let move = [...field];
		// making object of the last move to compare to
		let moveItem = field.at(-1);
		// copy of the field
		if (player1Turn === true) {
			let player1copy = [...player1];
			if (
				moveItem.value === playerCard.value ||
				moveItem.color === playerCard.color
			) {
				move.push(playerCard);
				player1copy.splice(index, 1);

				setPlayer1(player1copy);
				setField(move);
				setPlayer2Turn(true);
				setPlayer1Turn(false);
			} else {
				alert("Invalid card");
			}
		} else if (player2Turn === true) {
			let player2copy = [...player2];
			if (
				moveItem.value === playerCard.value ||
				moveItem.color === playerCard.color
			) {
				move.push(playerCard);
				player2copy.splice(index, 1);

				setPlayer2(player2copy);
				setField(move);
				setPlayer1Turn(true);
				setPlayer2Turn(false);
			} else {
				alert("Invalid card");
			}
		}
	};

	useEffect(() => {
		const player1deck = () => {
			const player1copy = [];
			const player2copy = [];
			for (let i = 0; i < 7; i++) {
				player1copy.push(cards.at(-1));
				player2copy.push(cards.at(-2)); // 108 107 106 105 104 103 102  end result array(101)
				cards.pop();
				cards.pop(); // remove 108
			}
			setPlayer1(player1copy);
			setPlayer2(player2copy);
			field.push(cards.at(-1));
			cards.pop();
			setField(field);
		};
		if (flag.current) {
			player1deck();
			flag.current = false;
		}
	}, []);

	return (
		<>
			<div class='flex h-screen bg-gradient-to-r from-red-900 via-red-500 to-red-900'>
				<div class='flex-1 flex flex-col overflow-hidden'>
					<header class='flex justify-between items-center bg-black text-white p-4'>
						<div class='flex'>Username: {user.username}</div>
						<div class='flex'>Score {user.score}</div>
					</header>
					<div class='flex h-full'>
						<nav class='flex w-1/4 h-full border-4 border-gray-900 border-dashed'>
							<div class='w-full flex mx-auto px-6 py-8 border-dashed'>
								user number 3
							</div>
						</nav>
						<main class='flex flex-col w-full h-full  overflow-x-hidden overflow-y-auto mb-14'>
							<div class='flex w-full h-full mx-auto px-6 py-8'>
								<div class='flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed'>
									<div class='flex mt-10  w-5/6 max-w-5/6 h-1/4  mx-auto border-4 border-gray-900 border-dashed'>
										<Player2
											player2={player2}
											nextMove={nextMove}
											player2Turn={player2Turn}
										/>
									</div>
									<div class='flex w-5/6 max-w-5/6 h-1/2 scale-50 items-center justify-center mx-auto  '>
										<div class='relative  scale-50 flex w-full max-w-xl h-1/2 items-center justify-center mx-auto '>
											<Deck
												deg={deg}
												rotateDeg={rotateDeg}
												cards={cards}
												player1Turn={player1Turn}
												player2Turn={player2Turn}
												player1={player1}
												player2={player2}
												setPlayer1={setPlayer1}
												setPlayer2={setPlayer2}
												setCards={setCards}
											/>
										</div>
										<div class='flex  scale-50 scale-x-25 w-full max-w-xl h-1/4 items-center justify-center mx-auto relative z-0'>
											{/* the field deck  */}
											<Field deg={deg} rotateDeg={rotateDeg} field={field} />
										</div>
									</div>

									<div class='flex mt-10 w-5/6 max-w-5/6 h-1/4  mx-auto border-4 border-gray-900 border-dashed'>
										<Player1
											player1={player1}
											nextMove={nextMove}
											player1Turn={player1Turn}
										/>
									</div>
								</div>
							</div>
						</main>
						<nav class='flex w-1/4 h-full border-4 border-gray-900 border-dashed'>
							<div class='w-full flex mx-auto px-6 py-8'>user number 4</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
