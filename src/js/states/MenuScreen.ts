/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class MenuScreen extends Phaser.State {
	create () {
		var header = this.game.add.text(100, 100, 'Mouse vs Cheese', {
				font: 'Arial',
				fontSize: '56px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(100, header.height + 110, 'these darn mice \'ve been tryin\' an tryin\' to get yer cheese.\ntime to click around and place some traps\nso that they can\'t get there in time!\n\nclick anywhere to start na!', {
				font: 'Arial',
				fontSize: '18px',
				fill: '#ffffff'
		});

		this.game.input.onDown.add(this.onClick, this);
	}

	onClick () {
		this.game.state.start('level1');
	}
}
