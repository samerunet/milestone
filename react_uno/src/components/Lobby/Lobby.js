import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Lobby({ players, setPlayers }) {
	// const [player1, setPlayer1] = useState("");
	// const [player2, setPlayer2] = useState("");
	// const [player3, setPlayer3] = useState("");
	// const [player4, setPlayer4] = useState("");
	const navigate = useNavigate();

	const handlePlayers = (a) => {
		setPlayers(a);
		navigate("/game");
	};
	return (
		<div>
			<section className='h-24 bg-gradient-to-r from-red-800 via-black to-black relative flex flex-wrap lg:h-screen lg:items-center'>
				<div className='w-full px-4 py-12 lg:w-1/2 sm:px-6 lg:px-8 sm:py-16 lg:py-24'>
					<div className='max-w-xl mx-auto text-center'>
						<img className='object  ' src='assets/logo.png' />
						<p className='mt-4 text-white'>Choose how many players</p>
						<div class='flex items-center justify-center'>
							<div
								class='inline-flex shadow-md hover:shadow-lg focus:shadow-lg'
								role='group'
							>
								<button
									onClick={(event) => {
										handlePlayers("pc");
									}}
									type='button'
									class='rounded-l inline-block px-16 py-2.5 bg-red-500 text-white font-l text-l leading-tight uppercase hover:bg-white-700 hover:text-red focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-600 transition duration-150 ease-in-out'
								>
									WITH PC
								</button>
								<button
									onClick={(event) => {
										handlePlayers(2);
									}}
									type='button'
									class=' rounded-l inline-block px-16 py-2.5 bg-red-500 text-white font-l text-l leading-tight uppercase hover:bg-white-700 hover:text-red focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out'
								>
									2 PLAYER
								</button>
								<button
									onClick={(event) => {
										handlePlayers(4);
									}}
									type='button'
									class='rounded-l inline-block px-16 py-2.5 bg-red-500 text-white font-l text-l leading-tight uppercase hover:bg-white-700 hover:text-red focus:bg-red-700 focus:outline-none focus:ring-0 active:bg-red-800 transition duration-150 ease-in-out'
								>
									4 PLAYER
								</button>
							</div>
						</div>
					</div>
				</div>

				<div className='relative w-full h-64 sm:h-96 lg:w-1/2 lg:h-full'>
					<img
						className='absolute inset-0 object-cover w-full h-full'
						src='https://cdn1.epicgames.com/salesEvent/salesEvent/UNO_50ANNIVERSARY_EPIC_Edition_Capsule%20%20Hero%20Carrousel_1920x1080_1920x1080-384c3f2df1cd94a5aaefd7d693cdcf8b'
						alt=''
					/>
				</div>
			</section>
		</div>
	);
}
