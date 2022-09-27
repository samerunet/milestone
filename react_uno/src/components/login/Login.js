import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
export default function Login({
	user,
	users,
	API,
	setPermission,
	setUsers,
	setUser,
}) {
	const navigate = useNavigate();
	const getUsers = () => {
		axios.get(`${API}`).then((response) => setUsers(response.data));
	};
	const [username, setUsername] = useState("");
	//let [password, setPassword] = useState("");

	const handleUsername = (event) => {
		setUsername(event.target.value);
	};

	const getUser = () => {
		users.map((individual) => {
			if (username === individual.username) {
				setUser(individual);
				setPermission(true);
				navigate("/");
			} else {
				navigate("/signup");
			}
			return individual;
		});
	};

	useEffect(() => {
		getUsers();
	}, []);

	return (
		<div className='background'>
			<div class='flex items-center min-h-screen '>
				<div class='container mx-auto '>
					<div class='max-w-md bg-white mx-auto my-10'>
						<div class='text-center m-20'>
							<h1 class='my-3 text-3xl font-semibold text-gray-700 dark:text-gray-200'>
								Sign in
							</h1>
							<p class='text-gray-500 dark:text-gray-400'>
								Sign in to access your account
							</p>
						</div>
						<div class='m-7'>
							<form
								onSubmit={(event) => {
									event.preventDefault();
									getUser(username);
								}}
							>
								<div class='mb-6'>
									<label
										for='text'
										class='block mb-2 text-sm text-gray-600 dark:text-gray-400'
									>
										Username
									</label>
									<input
										type='text'
										name='text'
										id='username'
										placeholder='username'
										onChange={handleUsername}
										class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
									/>
								</div>
								<div class='mb-6'>
									<div class='flex justify-between mb-2'>
										<label
											for='password'
											class='text-sm text-gray-600 dark:text-gray-400'
										>
											Password
										</label>
										<a
											href='#!'
											class='text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300'
										>
											Forgot password?
										</a>
									</div>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='Your Password'
										class='w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500'
									/>
								</div>
								<div class='mb-6'>
									<button
										type='submit'
										class='w-full px-3 py-4 text-white bg-indigo-500 rounded-md focus:bg-indigo-600 focus:outline-none'
									>
										Sign in
									</button>
								</div>
								<p class='text-sm text-center text-gray-400'>
									Don&#x27;t have an account yet?{" "}
									<Link
										href='#!'
										class='text-indigo-400 focus:outline-none focus:underline focus:text-indigo-500 dark:focus:border-indigo-800'
										to={"/signup"}
									>
										Sign up
									</Link>
									.
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
