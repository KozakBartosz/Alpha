import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGame } from './game';

const App: React.FC = () => {
	const { player, enemy, game, nextRound } = useGame();

	return (
		<>
			<div className="App">
				<h2>{player.name}</h2>
				<button>Action</button>
				<h2>{enemy.name}</h2>
				<button>Action</button>
			</div>
			<header>
				<h1>Round: {game.round}</h1>
				<button onClick={nextRound}>Action</button>
			</header>
		</>
	);
};

export default App;
