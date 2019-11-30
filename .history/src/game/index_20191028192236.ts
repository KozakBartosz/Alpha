import { useState } from 'react';

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

type Id = string;

interface Action {
	type: 'shoot' | 'shield' | 'heal';
	item: Id;
	target: Id;
}

interface Ship {
	name: string;
	hp: number;
	actions: Action[];
}

interface Game {
	round: number;
}

const useGame = () => {
	const [game, setGame] = useState<Game>({
		round: 0,
	});
	const [player, setPlayer] = useState<Ship>({
		name: 'Eagle Owl',
		hp: 100,
	});
	const [enemy, setEnemy] = useState<Ship>({
		name: 'Vader',
		hp: 100,
	});
};
