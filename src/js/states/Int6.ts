/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Int6 extends Phaser.State {
	create () {
		var header = this.game.add.text(0, 100, 'Level 6 Complete!', {
				font: 'Arial',
				fontSize: '36px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(0, header.height * 2 + 110, 'phew, nice work. thats all the levels ive made so fer.\n\nclick to play again!', {
				font: 'Arial',
				fontSize: '18px',
				fill: '#ffffff'
		});

		this.game.input.onDown.add(this.onClick, this);
	}

	onClick () {
		this.game.state.start('Preload');
	}
}
