import React from 'react';
import './App.css';
import { HomeScreen } from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';
import { selectUser } from './features/userSlice';

function App() {
	const user = useSelector(selectUser)
	const dispatch = useDispatch()

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(userAuth => {
			if (userAuth) {
				// logged in
				console.log(userAuth)
				dispatch(login({
					uid: userAuth.uid,
                    email: userAuth.email,
                    // displayName: userAuth.displayName,
				}))
			} else {
				// logged out
				dispatch(logout)
			}
		})

		return unsubscribe;
	}, [])
	return (
		<div className="app">
			<Router>
				{!user ? (
					<LoginScreen />
				) : (
					<Switch>
						<Route path="/profile">
						<h1>hello there</h1>
					</Route>
						<Route exact path="/">
							<HomeScreen />
						</Route>
					</Switch>
				)}
				{/* A <Switch> looks through its children <Route>s and
						renders the first one that matches the current URL. */}

			</Router>
		</div>
	);
}

export default App; 