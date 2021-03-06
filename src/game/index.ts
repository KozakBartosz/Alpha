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

export type Id = string;

type ActionType = 'shoot' | 'shield' | 'heal';

interface Action {
	type: ActionType;
	item: Id;
	target: Id;
}
interface Component {
	id: Id;
	name: string;
	hp: number;
	force: number;
	possibility: ActionType;
}

interface Ship {
	name: string;
	hp: number;
	actions: Action[];
	components: Component[];
}

interface Game {
	round: number;
}

const getGun = (): Component => ({
	id: 'gun-' + Math.random(),
	name: 'Minigun',
	hp: 100,
	force: 25 + Math.floor(Math.random() * 10),
	possibility: 'shoot',
});

export const useGame = () => {
	const [game, setGame] = useState<Game>({
		round: 0,
	});
	const [player, setPlayer] = useState<Ship>({
		name: 'Eagle Owl',
		hp: 100,
		actions: [],
		components: [getGun(), getGun()],
	});
	const [enemy, setEnemy] = useState<Ship>({
		name: 'Vader',
		hp: 100,
		actions: [],
		components: [getGun(), getGun(), getGun()],
	});

	const addAction = (action: Action) => {
		setPlayer({ ...player, actions: [...player.actions, action] });
	};

	const nextRound = () => {
		let newEnemyHp = enemy.hp;
		let newEnemyComponents = enemy.components;
		player.actions.forEach(action => {
			console.log(action);
			if (action.type === 'shoot') {
				const myComp = player.components.find(comp => comp.id === action.item)!;
				newEnemyComponents = newEnemyComponents.map(comp => {
					if (comp.id !== action.target) {
						return comp;
					}
					newEnemyHp -= myComp.force * 0.1;
					return {
						...comp,
						hp: comp.hp - myComp.force,
					};
				});
			}
		});

		setEnemy({
			...enemy,
			hp: newEnemyHp,
			components: newEnemyComponents,
		});
		setGame({ ...game, round: game.round + 1 });
		setPlayer({ ...player, actions: [] });
	};

	return { game, player, enemy, addAction, nextRound };
};
