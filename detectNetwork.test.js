// mochajs.org
// http://chaijs.com/

describe('American Express', function() {

	var assert = chai.assert;

	it('has a prefix of 34 and a length of 15', function() {
		assert(detectNetwork('344032820732047') === 'American Express');
	});

	it('has a prefix of 37 and a length of 15', function() {
		assert(detectNetwork('374903203174207') === 'American Express');
	});

});

describe('Diner\'s Club', function() {

	var assert = chai.assert;

	it('has a prefix of 38 and a length of 14', function() {
		assert(detectNetwork('38047451958584') === 'Diner\'s Club');
	});

	it('has a prefix of 39 and a length of 14', function() {
		assert(detectNetwork('39387487254569') === 'Diner\'s Club');
	});

});

describe('Visa', function() {

	var assert = chai.assert;

	it('has a prefix of 4 and a length of 13', function() {
		assert(detectNetwork('4444763049710') === 'Visa');
	});

	it('has a prefix of 4 and a length of 16', function() {
		assert(detectNetwork('4565755065022506') === 'Visa');
	});

	it('has a prefix of 4 and a length of 19', function() {
		assert(detectNetwork('4240945449553866959') === 'Visa');
	});

});

describe('MasterCard', function() {

	var assert = chai.assert;

	it('has a prefix of 51 and a length of 16', function() {
		assert(detectNetwork('5113899340171708') === 'MasterCard');
	});

	it('has a prefix of 52 and a length of 16', function() {
		assert(detectNetwork('5263415076088045') === 'MasterCard');
	});

	it('has a prefix of 53 and a length of 16', function() {
		assert(detectNetwork('5323517323240643') === 'MasterCard');
	});

	it('has a prefix of 54 and a length of 16', function() {
		assert(detectNetwork('5450767795822131') === 'MasterCard');
	});

	it('has a prefix of 55 and a length of 16', function() {
		assert(detectNetwork('5551382950938227') === 'MasterCard');
	});

});

describe('Maestro', function() {

	var assert = chai.assert;

	it('has a prefix of 5018 and a length of 12', function() {
		assert(detectNetwork('501823358411') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 12', function() {
		assert(detectNetwork('502045980457') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 12', function() {
		assert(detectNetwork('503871882742') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 12', function() {
		assert(detectNetwork('630498805833') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 13', function() {
		assert(detectNetwork('5018670950715') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 13', function() {
		assert(detectNetwork('5020833036409') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 13', function() {
		assert(detectNetwork('5038829397648') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 13', function() {
		assert(detectNetwork('6304769083131') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 14', function() {
		assert(detectNetwork('50183230267764') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 14', function() {
		assert(detectNetwork('50202214213498') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 14', function() {
		assert(detectNetwork('50380255416341') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 14', function() {
		assert(detectNetwork('63048376460155') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 15', function() {
		assert(detectNetwork('501866931383433') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 15', function() {
		assert(detectNetwork('502059299898639') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 15', function() {
		assert(detectNetwork('503850852089565') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 15', function() {
		assert(detectNetwork('630406988537902') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 16', function() {
		assert(detectNetwork('5018813148284073') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 16', function() {
		assert(detectNetwork('5020926494724584') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 16', function() {
		assert(detectNetwork('5038530289684590') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 16', function() {
		assert(detectNetwork('6304400733624299') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 17', function() {
		assert(detectNetwork('50182485442285535') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 17', function() {
		assert(detectNetwork('50206790631709124') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 17', function() {
		assert(detectNetwork('50381048888607899') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 17', function() {
		assert(detectNetwork('63046853508314770') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 18', function() {
		assert(detectNetwork('501853803616140123') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 18', function() {
		assert(detectNetwork('502085756687867122') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 18', function() {
		assert(detectNetwork('503814660240663073') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 18', function() {
		assert(detectNetwork('630457053138702120') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 19', function() {
		assert(detectNetwork('5018041007765516758') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 19', function() {
		assert(detectNetwork('5020056215933003493') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 19', function() {
		assert(detectNetwork('5038893189493974465') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 19', function() {
		assert(detectNetwork('6304225656021511992') === 'Maestro');
	});

});