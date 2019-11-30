import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGame } from './game';

// 5 rounds:
// - 1-2-3 fight
// - 4-5 go back

// env:
// - current round

// player
// - hp
// - actions (shoot, sheeld, heal)

// enemy
// - hp
// - actions (shoot, sheeld, heal)

// actions
// - shoot: weapon → target
// - sheeld: ship part
// - heal: ship part

const App: React.FC = () => {
	const game = useGame;

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer">
					Learn React
				</a>
			</header>
		</div>
	);
};

export default App;
