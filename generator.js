//prototype: Array.random()
Array.prototype.random = function () {
	return this[Math.floor(Math.random() * this.length)];
}

var Music = {

	stopLoops: function() {
		while (Music.loops.length > 0) {
			clearInterval(Music.loops.pop());
		}
	},

	loopPentatonic: function(instrument, octave, speed) {
		//overlap notes by 1.5
		Music.loops.push(setInterval(function() {
			Music.playPentatonic(instrument, octave, speed * 1.5);
		}, speed * 1000));
	},

	loopDiatonic: function(instrument, octave, speed) {
		Music.loops.push(setInterval(function() {
			Music.playDiatonic(instrument, octave, speed);
		}, speed * 1000));
	},

	loops: [],

	playPentatonic: function(instrument, octave, speed) {
		var note = ['A#', 'C#', 'D#', 'F#', 'G#'].random();
		//speed is measured in seconds
		Synth.play(instrument, note, octave, speed);
	},

	playDiatonic: function(instrument, octave, speed) {
		var note = ['A', 'B', 'C', 'D', 'E', 'F', 'G'].random();
		//speed is measured in seconds
		Synth.play(instrument, note, octave, speed);
	}

};
