import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGame } from './game';

const App: React.FC = () => {
	const { player, enemy, game } = useGame();

	return (
		<div className="App">
			<link rel="stylesheet" href="https://test.kozakbartosz.pl/draft/def.css" />

			<h1>Round: {game.round}</h1>
			<button>Action</button>
			<hr />
			<h2>{player.name}</h2>
			<button>Action</button>
			<h2>{enemy.name}</h2>
			<button>Action</button>
		</div>
	);
};

export default App;
