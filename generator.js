//prototype: Array.random()
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)]
}

var Music = {

	cancelLoops: function() {
		while (Music.loops.length > 0) {
			clearInterval(Music.loops.pop());
		}
	},

	//speed is in seconds
	loopRandom: function(instrument, octave, speed) {
		Music.loops.push(setInterval(function() {
			Music.playRandom(instrument, octave, speed);
		}, speed * 1000));
	},

	loops: [],

	playRandom: function(instrument, octave, speed) {
		var note = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].random();
		Synth.play(instrument, note, octave, speed);
	}

};
