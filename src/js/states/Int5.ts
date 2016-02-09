/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Int5 extends Phaser.State {
	create () {
		var header = this.game.add.text(0, 100, 'Level 5 Complete!', {
				font: 'Arial',
				fontSize: '36px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(0, header.height * 2 + 110, 'impressive. one might think that cheese is pretty safe...\n\nclick to start!', {
				font: 'Arial',
				fontSize: '18px',
				fill: '#ffffff'
		});

		this.game.input.onDown.add(this.onClick, this);
	}

	onClick () {
		this.game.state.start('level6');
	}
}
