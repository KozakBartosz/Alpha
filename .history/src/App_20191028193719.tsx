import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGame } from './game';

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