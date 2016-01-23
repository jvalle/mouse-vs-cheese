/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class GameState extends Phaser.State {
    game: Phaser.Game;
    
    // map stuffs
    map: Phaser.Tilemap;
    backgroundLayer: Phaser.TilemapLayer;
    blockedLayer: Phaser.TilemapLayer;

	create () {
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles', 'gameTiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer, Phaser.Physics.Arcade);
	}

	update () {

	}
}