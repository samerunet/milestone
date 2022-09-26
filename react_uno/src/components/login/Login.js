import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
export default function login({
	user,
	users,
	API,
	setPermission,
	setUsers,
	setUser,
}) {
	// const navigate = useNavigate();
	// const handleLogin = (username,) => {
	// 	// axios put request to send login credentials to the backend for verification
	// 	axios
	// 		.put(`${API}/users/login`, {
	// 			username: username,
	// 			password: password,
	// 			//  value in backend : value from react app
	// 		})
	// 		// catch error if the password is invalid
	// 		.catch((error) => {
	// 			if (error) {
	// 				alert("Email or password does not match records");
	// 			}
	// 		})
	// 		.then((response) => {
	// 			setUser(response.data); // if password is valid setUser state to the value send from the backend
	// 			console.log(response.data);
	// 			if (Object.keys(response.data).length === 0) {
	// 				// by default the backend will send an empty object to indicate that the password is invalid or username is invalid
	// 				// by comparing the return key value with the backend logic
	// 				// the backend sends empty object with key value 0 or 2
	// 				alert("Your password is not valid");
	// 			} else {
	// 				setPermission(true);
	// 				// we have declared setPermission in the AppGateway to allow gateway to show the main content after the user auth was completed and change the state to true

	// 				// navigate is a router function that will navigate to the route
	// 				// declared as an argument
	// 			}
	// 		});
	// };

	const getUsers = () => {
		axios.get(`${API}`).then((response) => setUsers(response.data));
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
							<form action=''>
								<div class='mb-6'>
									<label
										for='email'
										class='block mb-2 text-sm text-gray-600 dark:text-gray-400'
									>
										Email Address
									</label>
									<input
										type='email'
										name='email'
										id='email'
										placeholder='you@company.com'
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
										type='button'
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
