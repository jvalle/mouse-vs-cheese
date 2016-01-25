/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import RatPack from '../entities/RatPack.ts';

export default class GameState extends Phaser.State {
    game: Phaser.Game;
    
    // map stuffs
    map: Phaser.Tilemap;
    backgroundLayer: Phaser.TilemapLayer;
    blockedLayer: Phaser.TilemapLayer;
	
	mouseSpeed: number = 100;
	mice: RatPack;
	cursors: Phaser.CursorKeys;

	create () {
        // setup the map
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles', 'gameTiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer);
		
		this.mice = new RatPack(this.game, 10);
		// this.game.physics.arcade.enable(this.player);
		this.world.addChild(this.mice);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	update () {

	}
}
