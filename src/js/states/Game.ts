/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

import Mouse from '../entities/Mouse.ts';

export default class GameState extends Phaser.State {
    game: Phaser.Game;
    
    // map stuffs
    map: Phaser.Tilemap;
    backgroundLayer: Phaser.TilemapLayer;
    blockedLayer: Phaser.TilemapLayer;
	
	mouseSpeed: number = 100;
	player: Phaser.Sprite;
	cursors: Phaser.CursorKeys;

	create () {
        // setup the map
        this.map = this.game.add.tilemap('level1');
        this.map.addTilesetImage('tiles', 'gameTiles');
        this.backgroundLayer = this.map.createLayer('backgroundLayer');
		this.blockedLayer = this.map.createLayer('blockedLayer');
		this.game.physics.enable(this.blockedLayer);
		
		this.player = new Mouse(this.game, 100, 100);
		this.game.physics.arcade.enable(this.player);
		this.world.addChild(this.player);
		
		this.cursors = this.game.input.keyboard.createCursorKeys();
	}

	update () {
		if (this.cursors.up.isDown) {
			this.player.body.velocity.y = -this.mouseSpeed;
			this.player.body.velocity.x = 0;
			this.player.animations.play('up');
		} else if (this.cursors.down.isDown) {
			this.player.body.velocity.y = this.mouseSpeed;
			this.player.body.velocity.x = 0;
			this.player.animations.play('down');
		} else if (this.cursors.left.isDown) {
			this.player.body.velocity.x = -this.mouseSpeed;
			this.player.body.velocity.y = 0;
			this.player.animations.play('left');
		} else if (this.cursors.right.isDown) {
			this.player.body.velocity.x = this.mouseSpeed;
			this.player.body.velocity.y = 0;
			this.player.animations.play('right');
		} else {
			this.player.body.velocity.x = 0;
			this.player.body.velocity.y = 0;
			this.player.animations.stop();
		}
	}
}
