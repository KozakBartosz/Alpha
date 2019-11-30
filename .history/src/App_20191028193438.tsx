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
	const { player, enemy } = useGame();

	return (
		<div className="App">
			<h2>{player.name}</h2>
			<button>Action</button>
			<h2>{enemy.name}</h2>
			<button>Action</button>
		</div>
	);
};

export default App;
