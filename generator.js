//prototype: Array.random()
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)]
}

var Music = {

	instrument: 'piano',

	playRandom: function(octave, speed) {
		var note = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].random();
		Synth.play(Music.instrument, note, octave, speed);
	},

	loopRandom: function(octave, speed) {
	//speed is in seconds
		setInterval(function() {
			Music.playRandom(octave, speed);
		}, speed * 1000);
	}

};

Music.loopRandom(4, 0.5);
