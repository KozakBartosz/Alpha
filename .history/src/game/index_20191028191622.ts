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
