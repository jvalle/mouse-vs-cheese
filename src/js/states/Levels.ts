import LevelState from './LevelState.ts';

export class Level1 extends LevelState {
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;

	setupLevel () {
		this.mapName = 'level1';
		this.mouseCount = 10;
		this.mouseSpeed = 100;
		this.frequency = 1000;
		this.nextState = 'int1';
	}
}

export class Level2 extends LevelState {
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;

	setupLevel() {
		this.mapName = 'level2';
		this.mouseCount = 30;
		this.mouseSpeed = 100;
		this.frequency = 1000;
		this.nextState = 'int2';
	}
}

export class Level3 extends LevelState {
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;

	setupLevel() {
		this.mapName = 'level3';
		this.mouseCount = 30;
		this.mouseSpeed = 100;
		this.frequency = 500;
		this.nextState = 'int3';
	}
}

export class Level4 extends LevelState {
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;

	setupLevel() {
		this.mapName = 'level4';
		this.mouseCount = 30;
		this.mouseSpeed = 100;
		this.frequency = 600;
		this.nextState = 'int4';
	}
}

export class Level5 extends LevelState {
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;

	setupLevel() {
		this.mapName = 'level5';
		this.mouseCount = 30;
		this.mouseSpeed = 100;
		this.frequency = 600;
		this.nextState = 'int5';
	}
}

export class Level6 extends LevelState {
	mapName: string;
	mouseCount: number;
	mouseSpeed: number;
	frequency: number;
	nextState: string;

	setupLevel() {
		this.mapName = 'level6';
		this.mouseCount = 50;
		this.mouseSpeed = 100;
		this.frequency = 400;
		this.nextState = 'int6';
	}
}