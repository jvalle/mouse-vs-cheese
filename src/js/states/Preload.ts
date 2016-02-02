/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Preload extends Phaser.State {
	preload () {
		this.load.tilemap('level1', 'assets/level1.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level2', 'assets/level2.json', null, Phaser.Tilemap.TILED_JSON);
		this.load.tilemap('level3', 'assets/level3.json', null, Phaser.Tilemap.TILED_JSON);

		this.load.image('gameTiles', 'assets/tiles.png');

		this.load.spritesheet('mouse', 'assets/mouse.png', 32, 32, 15);
		this.load.spritesheet('cheese', 'assets/cheese.png', 32, 32, 3);
		this.load.image('trap', 'assets/trap.png');
	}

	create () {
		this.game.state.start('Menu');
	}
}
