import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useGame, Id } from './game';

const App: React.FC = () => {
	const { player, enemy, addAction, game, nextRound } = useGame();

	const [actionItem, setActionItem] = useState<Id | null>(null);
	const [actionTarget, setActionTarget] = useState<Id | null>(null);

	return (
		<>
			<main className="App">
				<h2>
					{player.name} <mark>{player.hp}</mark>
				</h2>
				<div>
					{player.components.map(component => (
						<button onClick={setActionItem()}>
							<strong>{component.name}</strong>
							<small>{component.hp}</small> - <small>{component.possibility}</small>
						</button>
					))}
				</div>
				<hr />

				<h2>
					{enemy.name} <mark>{enemy.hp}</mark>
				</h2>
				<div>
					{enemy.components.map(component => (
						<button>
							<strong>{component.name}</strong>
							<small>{component.hp}</small> - <small>{component.possibility}</small>
						</button>
					))}
				</div>
			</main>
			<header>
				<h1>Round: {game.round}</h1>
				<button onClick={nextRound}>Action</button>
			</header>
		</>
	);
};

export default App;
