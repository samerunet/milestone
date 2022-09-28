import React, { useEffect, useState } from "react";
import CardDeck from "../../CardDeck.js";
import "./Game.css";
import { motion, transform } from "framer-motion";

export default function Game({ user, players }) {
	const flag = React.useRef(true);
	const cards = CardDeck.sort(function () {
		return 0.5 - Math.random();
	});

	let rotateDeg = [3, 6, 12, 45];
	const deg = () => {
		rotateDeg = rotateDeg.sort(function () {
			return 0.5 - Math.random();
		});
	};

	const [player1, setPlayer1] = useState([]);
	const [player2, setPlayer2] = useState([]);
	const [field, setField] = useState([]);

	useEffect(() => {
        const player1deck = () => {
            
			const player1copy = [];
			const player2copy = [];
			for (let i = 0; i < 7; i++) {
				player1copy.push(cards.at(-1));
				player2copy.push(cards.at(-2)); // 108 107 106 105 104 103 102  end result array(101)
				cards.pop();
				cards.pop(); // remove 108
				console.log(cards);
			}
			setPlayer1(player1copy);
			setPlayer2(player2copy);
			field.push(cards.at(-1));
			cards.pop();
			setField(field);
			console.log(field);
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
										{player2.map((playerCard) => {
											return (
												<img
													className={`scale-50 ml-0 `}
													key={playerCard.id}
													src={"assets/card-back.png"}
													alt={playerCard.id}
												/>
											);
										})}
									</div>
									<div class='flex w-full max-w-full h-full items-center justify-center mx-auto  border-b border-gray-600  bg-gradient-to-r from-red-900 via-red-500 to-red-900'>
										<div class='relative  scale-50 flex w-full max-w-xl h-1/2 items-center justify-center mx-auto '>
											{cards.map((card) => {
												deg();
												return (
													<motion.img
														initial={{ rotate: rotateDeg[0] }}
														className={` ring-offset-black skew-x-12 skew-y-12 absolute scale-75 inset-0  z-10 `}
														key={card.id}
														src={"assets/card-back.png"}
														alt={card.value}
													/>
												);
											})}
										</div>
										<div class='flex  scale-50 w-full max-w-xl h-1/2 items-center justify-center mx-auto relative z-0'>
											{field.map((item) => {
												deg();
												return (
													<motion.img
														initial={{ rotate: rotateDeg[0] }}
														className={`absolute inset-0 scale-75 z-10 rotate-${rotateDeg[0]}`}
														key={item.id}
														src={item.src}
														alt={item.value}
													/>
												);
											})}
										</div>
									</div>

									<div class='flex mt-10 w-5/6 max-w-5/6 h-1/4  mx-auto border-4 border-gray-900 border-dashed'>
										{player1.map((playerCard) => {
											return (
												<img
													className={`scale-50 `}
													key={playerCard.id}
													src={playerCard.src}
													alt={playerCard.id}
												/>
											);
										})}
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
