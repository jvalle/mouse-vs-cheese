/// <reference path="../../../typings/require.d.ts"/>
/// <reference path="../../../typings/phaser/pixi.comments.d.ts"/>
/// <reference path="../../../typings/phaser/phaser.comments.d.ts"/>

export default class Int1 extends Phaser.State {
	create () {
		var header = this.game.add.text(0, 100, 'Level 2 Complete!', {
				font: 'Arial',
				fontSize: '36px',
				fill: '#ffffff'
		});
		var text = this.game.add.text(0, header.height * 2 + 110, 'well done there. boy thems a lots a mice a\'comin fer that cheese\nhungrier \'em mice get the faster thems a\'comin\nso git yer trigger finger ready for this next go\'roun', {
				font: 'Arial',
				fontSize: '18px',
				fill: '#ffffff'
		});

		this.game.input.onDown.add(this.onClick, this);
	}

	onClick () {
		this.game.state.start('level3');
	}
}
