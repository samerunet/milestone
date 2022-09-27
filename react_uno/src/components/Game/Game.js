import React from "react";
import CardDeck from "../../CardDeck.js";
import "./Game.css";
import { motion, transform } from "framer-motion";
import BgYellow from "../../../src/backgrounds/bgY.png";
export default function Game({ user, players }) {
	const cards = CardDeck.sort(function () {
		return 0.5 - Math.random();
	});

	const PlayersDiv = () => {
		if (players === 2 || players === "pc") {
			return (
				<>
					<div className='card-players'></div>
					<div className='card-players'></div>
				</>
			);
		} else if (players === 4) {
			return (
				<>
					<div className='card-players'></div>
					<div className='card-players'></div>
					<div className='card-players'></div>
					<div className='card-players'></div>
				</>
			);
		}
	};
	console.log(cards);
	return (
		<>
			<div class='flex h-screen bg-green-300'>
				<div class='flex-1 flex flex-col overflow-hidden'>
					<header class='flex justify-between items-center bg-blue-300 p-4'>
						<div class='flex'>Username: {user.username}</div>
						<div class='flex'>Score {user.score}</div>
					</header>
					<div class='flex h-full'>
						<nav class='flex w-1/4 h-full bg-pink-500'>
							<div class='w-full flex mx-auto px-6 py-8'>user number 3</div>
						</nav>
						<main class='flex flex-col w-full h-full bg-white overflow-x-hidden overflow-y-auto mb-14'>
							<div class='flex w-full h-full mx-auto px-6 py-8'>
								<div class='flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed'>
									<div class='flex w-5/6 max-w-5/6 h-1/4 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
										another user
									</div>
									<div class='flex w-full max-w-full h-1/2 items-center justify-center mx-auto bg-blue-400 border-b border-gray-600'>
										<div class='flex w-full max-w-xl h-1/2 items-center justify-center mx-auto bg-yellow-400 border-b border-gray-600'>
											deck
										</div>
										<div class='flex w-full max-w-xl h-1/2 items-center justify-center mx-auto bg-yellow-400 border-b border-gray-600'>
											field
										</div>
									</div>

									<div class='flex w-5/6 max-w-5/6 h-1/4 items-center justify-center mx-auto bg-green-400 border-b border-gray-600'>
										user playing
									</div>
								</div>
							</div>
						</main>
						<nav class='flex w-1/4 h-full bg-yellow-400'>
							<div class='w-full flex mx-auto px-6 py-8'>user number 4</div>
						</nav>
					</div>
				</div>
			</div>
		</>
	);
}
