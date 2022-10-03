import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Login({ API, setPermission, setUsers, setUser }) {
	const navigate = useNavigate();

	const createUsers = (event) => {
		// for (let i = 50; i < 5000; i++) {
		// 	event.preventDefault();
		// 	axios
		// 		.delete(`${API}/${i}`, {
		// 			username: username,
		// 			name: name,
		// 			logo: "nothing",
		// 			score: 2000,
		// 			friends: "none",
		// 			inventory: null,
		// 		})
		// 		.catch((err) => console.log(err))
		// 		.then((response) => {
		// 			setUsers(response.data);
		// 		});
		// }
		alert("cannot create users at this time ");
	};
	const [username, setUsername] = useState("");
	const [name, setName] = useState("");
	let [password, setPassword] = useState("");

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const handleName = (event) => {
		setName(event.target.value);
	};
	// "name": "kartofan",
	//     "logo": "nothing",
	//     "score": 7770,
	//     "friends": "none",
	//     "inventory": " null"

	return (
		<div className='background'>
			<div className='flex items-center min-h-screen '>
				<div className='container mx-auto '>
					<div className='max-w-md bg-white mx-auto my-10'>
						<div className='text-center m-20'>
							<h1 className='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
								Sign up
							</h1>
							<p className='text-gray-500 dark:text-gray-400'>
								Sign up to create your account
							</p>
						</div>
						<div className='m-7'>
							<form
								onSubmit={(event) => {
									createUsers(event);
								}}
							>
								<div className='mb-6'>
									<label
										htmlFor='text'
										className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
									>
										Username
									</label>
									<input
										type='text'
										name='text'
										id='username'
										placeholder='Username'
										className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
										onChange={handleUsername}
									/>
								</div>
								<div className='mb-6'>
									<label
										htmlFor='text'
										className='block mb-2 text-sm text-gray-600 dark:text-gray-400'
									>
										Name
									</label>
									<input
										type='text'
										name='text'
										id='name'
										placeholder='Name'
										className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
										onChange={handleName}
									/>
								</div>
								<div className='mb-6'>
									<div className='flex justify-between mb-2'>
										<label
											htmlFor='password'
											className='text-sm text-gray-600 dark:text-gray-400'
										>
											Password
										</label>
										<a
											href='#!'
											className='text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300'
										>
											Forgot password?
										</a>
									</div>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='Your Password'
										className='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
									/>
								</div>
								<div className='mb-6'>
									<button
										type='submit'
										className='w-full px-3 py-4 text-white bg-red-500 rounded-md focus:bg-indigo-600 focus:outline-none'
									>
										Sign up
									</button>
								</div>
								<p className='text-sm text-center text-gray-400'>
									Have an account already?{" "}
									<Link
										href='#!'
										className='text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800'
										to={"/login"}
									>
										Log In
									</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
