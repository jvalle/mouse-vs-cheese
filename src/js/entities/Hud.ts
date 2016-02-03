/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Hud {
	cheeseHealthLabel: Phaser.Text;
	cheeseHealth: Phaser.Text;
	mouseTrapLabel: Phaser.Text;
	mouseTraps: Phaser.Text;

	init (game : Phaser.Game, traps : string) {
		let style = {
			font: 'Arial',
			fontSize: '16px',
			fill: '#000000'
		};

		this.mouseTrapLabel = game.add.text(8, 8, 'Mouse Traps Left:', style);
		this.mouseTraps = game.add.text(this.mouseTrapLabel.width + 16, 8, traps, style);
		this.cheeseHealthLabel = game.add.text(325, 8, 'Cheese Health:', style);
		this.cheeseHealth = game.add.text(this.cheeseHealthLabel.x + this.cheeseHealthLabel.width + 8, 8, '100', style);
	}
	
	update (property : string, value : string) {
		this[property].text = value;
	}

}
