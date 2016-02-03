/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Int1 extends Phaser.State {
	create () {
		var header = this.game.add.text(0, 100, 'Level 1 Complete!', {
				font: 'Arial',
				fontSize: '36px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(0, header.height * 2 + 110, 'ya beat the first there level, nice job.\nyou may have noticed that you only\nget a certain number of traps,\nthis will be roughly equal to the number\nof mice for that level, so be wise naw.\n\nclick anywhere to git on to the next level.', {
				font: 'Arial',
				fontSize: '18px',
				fill: '#ffffff'
		});

		this.game.input.onDown.add(this.onClick, this);
	}

	onClick () {
		this.game.state.start('level2');
	}
}
