import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/login/Login.js";
import Signup from "./components/signup/SignUp.js";
import Lobby from "./components/Lobby/Lobby.js";
import Game from "./components/Game/Game.js";
import { useState } from "react";

const ProtectedRoute = ({ permission, children }) => {
	if (!permission) {
		return <Navigate to='/login' replace />;
	}
	return children;
};

export default function AppGateway() {
	const [permission, setPermission] = useState(false);
	const [users, setUsers] = useState([]);
	const [user, setUser] = useState([]);
	const API = "https://safe-beach-04456.herokuapp.com/todos";
	const [players, setPlayers] = useState("");

	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/login'
					element={
						<Login
							setPermission={setPermission}
							API={API}
							setUsers={setUsers}
							user={user}
							setUser={setUser}
							users={users}
						/>
					}
				/>
				<Route
					path='/signup'
					element={<Signup setPermission={setPermission} />}
				/>

				<Route
					path='/'
					element={
						<ProtectedRoute permission={permission}>
							<Lobby user={user} players={players} setPlayers={setPlayers} />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/game'
					element={
						<ProtectedRoute permission={permission}>
							<Game user={user} players={players} />
						</ProtectedRoute>
					}
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
