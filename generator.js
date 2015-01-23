//prototype: Array.random()
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)]
}

var Music = {

	playRandom: function(instrument, octave, speed) {
		var note = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].random();
		Synth.play(instrument, note, octave, speed);
	},

	loopRandom: function(instrument, octave, speed) {
	//speed is in seconds
		setInterval(function() {
			Music.playRandom(instrument, octave, speed);
		}, speed * 1000);
	}

};

Music.loopRandom('piano', 4, 1/2);
Music.loopRandom('piano', 3, 1/3);
