/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Int1 extends Phaser.State {
	create () {
		var header = this.game.add.text(100, 100, 'Mouse vs Cheese', {
				font: 'Arial',
				fontSize: '56px',
				fill: '#ffffff'
		});
		var header2 = this.game.add.text(100, header.height + 110, 'Level 1 Complete!', {
				font: 'Arial',
				fontSize: '36px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(100, header.height * 2 + 110, 'you beat the tutorial level, nice job.\nyou may have noticed that you only get a certain number of traps\nthis will be roughly equal to the number of mice for that level, so be careful.\n\nclick anywhere to go to the next level... mmmmm... cheese...', {
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
