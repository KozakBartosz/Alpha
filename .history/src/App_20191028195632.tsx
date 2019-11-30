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
				<div>
					{player.components.map(component => (
						<button>
							<strong>{component.name}</strong>
							<small>{component.hp}</small>- <small>{component.possibility}</small>
						</button>
					))}
				</div>
				<hr />

				<h2>
					{enemy.name} <mark>{enemy.hp}</mark>
				</h2>
			</main>
			<header>
				<h1>Round: {game.round}</h1>
				<button onClick={nextRound}>Action</button>
			</header>
		</>
	);
};

export default App;
