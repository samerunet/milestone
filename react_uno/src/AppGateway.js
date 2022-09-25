import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login.js";
import Signup from "./components/signup/SignUp.js";
import { useState } from "react";

const ProtectedRoute = ({ permission, children }) => {
	if (!permission) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default function AppGateway() {
	const [permission, setPermission] = useState(false);

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={<Login setPermission={setPermission} />}
				/>
				<Route
					path='/signup'
					element={<Signup setPermission={setPermission} />}
				/>

				<Route
					path='/'
					element={<ProtectedRoute permission={permission}></ProtectedRoute>}
				/>

				<Route
					path='/friends'
					element={
						<div>
							This part of application should be able to interact between users
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
