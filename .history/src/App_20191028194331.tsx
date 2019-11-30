import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useGame } from './game';

const App: React.FC = () => {
	const { player, enemy, game, nextRound } = useGame();

	return (
		<>
			<main className="App">
				<h2>
					{player.name} <mark>{player.hp}</mark>
				</h2>
				<input/>
        <button>Action</button>
				<h2>
					{enemy.name} <mark>{enemy.hp}</mark>
				</h2>
				<input/>
        <button>Action</button>
			</main>
			<header>
				<h1>Round: {game.round}</h1>
				<button onClick={nextRound}>Action</button>
			</header>
		</input>
	);
};

export default App;
