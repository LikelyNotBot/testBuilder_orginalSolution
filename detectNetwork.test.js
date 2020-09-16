// mochajs.org
// http://chaijs.com/

describe('American Express', function() {

	var assert = chai.assert;

	it('has a prefix of 34 and a length of 15', function() {
		assert(detectNetwork('348408610663527') === 'American Express');
	});

	it('has a prefix of 37 and a length of 15', function() {
		assert(detectNetwork('376895500674564') === 'American Express');
	});

});

describe('Diner\'s Club', function() {

	var assert = chai.assert;

	it('has a prefix of 38 and a length of 14', function() {
		assert(detectNetwork('38192302798361') === 'Diner\'s Club');
	});

	it('has a prefix of 39 and a length of 14', function() {
		assert(detectNetwork('39153680683031') === 'Diner\'s Club');
	});

});

describe('Visa', function() {

	var assert = chai.assert;

	it('has a prefix of 4 and a length of 13', function() {
		assert(detectNetwork('4541726435062') === 'Visa');
	});

	it('has a prefix of 4 and a length of 16', function() {
		assert(detectNetwork('4969757170216585') === 'Visa');
	});

	it('has a prefix of 4 and a length of 19', function() {
		assert(detectNetwork('4074777867329421778') === 'Visa');
	});

});

describe('MasterCard', function() {

	var assert = chai.assert;

	it('has a prefix of 51 and a length of 16', function() {
		assert(detectNetwork('5182555665491047') === 'MasterCard');
	});

	it('has a prefix of 52 and a length of 16', function() {
		assert(detectNetwork('5202025974654761') === 'MasterCard');
	});

	it('has a prefix of 53 and a length of 16', function() {
		assert(detectNetwork('5305965257504133') === 'MasterCard');
	});

	it('has a prefix of 54 and a length of 16', function() {
		assert(detectNetwork('5461629241058192') === 'MasterCard');
	});

	it('has a prefix of 55 and a length of 16', function() {
		assert(detectNetwork('5568714461761388') === 'MasterCard');
	});

});

describe('Maestro', function() {

	var assert = chai.assert;

	it('has a prefix of 5018 and a length of 12', function() {
		assert(detectNetwork('501857388204') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 12', function() {
		assert(detectNetwork('502082600600') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 12', function() {
		assert(detectNetwork('503853591313') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 12', function() {
		assert(detectNetwork('630497217855') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 13', function() {
		assert(detectNetwork('5018917385392') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 13', function() {
		assert(detectNetwork('5020502792102') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 13', function() {
		assert(detectNetwork('5038723502324') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 13', function() {
		assert(detectNetwork('6304186259278') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 14', function() {
		assert(detectNetwork('50183100303032') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 14', function() {
		assert(detectNetwork('50206767750987') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 14', function() {
		assert(detectNetwork('50388376438726') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 14', function() {
		assert(detectNetwork('63047954665642') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 15', function() {
		assert(detectNetwork('501841185146528') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 15', function() {
		assert(detectNetwork('502066604512187') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 15', function() {
		assert(detectNetwork('503836501093658') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 15', function() {
		assert(detectNetwork('630420508289918') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 16', function() {
		assert(detectNetwork('5018837346828041') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 16', function() {
		assert(detectNetwork('5020417172483729') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 16', function() {
		assert(detectNetwork('5038896424594687') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 16', function() {
		assert(detectNetwork('6304686923312402') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 17', function() {
		assert(detectNetwork('50186977563547172') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 17', function() {
		assert(detectNetwork('50204004816506597') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 17', function() {
		assert(detectNetwork('50381387094677239') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 17', function() {
		assert(detectNetwork('63040371939660515') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 18', function() {
		assert(detectNetwork('501819267597099523') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 18', function() {
		assert(detectNetwork('502056355452908008') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 18', function() {
		assert(detectNetwork('503857946297934685') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 18', function() {
		assert(detectNetwork('630453330660846654') === 'Maestro');
	});

	it('has a prefix of 5018 and a length of 19', function() {
		assert(detectNetwork('5018915174858366439') === 'Maestro');
	});

	it('has a prefix of 5020 and a length of 19', function() {
		assert(detectNetwork('5020528247700644294') === 'Maestro');
	});

	it('has a prefix of 5038 and a length of 19', function() {
		assert(detectNetwork('5038067573372870902') === 'Maestro');
	});

	it('has a prefix of 6304 and a length of 19', function() {
		assert(detectNetwork('6304634135134495189') === 'Maestro');
	});

});

describe('Discover', function() {

	var assert = chai.assert;

	it('has a prefix of 6011 and a length of 16', function() {
		assert(detectNetwork('6011405706881958') === 'Discover');
	});

	it('has a prefix of 644 and a length of 16', function() {
		assert(detectNetwork('6442483266004506') === 'Discover');
	});

	it('has a prefix of 645 and a length of 16', function() {
		assert(detectNetwork('6454916091733167') === 'Discover');
	});

	it('has a prefix of 646 and a length of 16', function() {
		assert(detectNetwork('6465578059295998') === 'Discover');
	});

	it('has a prefix of 647 and a length of 16', function() {
		assert(detectNetwork('6471761715914598') === 'Discover');
	});

	it('has a prefix of 648 and a length of 16', function() {
		assert(detectNetwork('6483652124507491') === 'Discover');
	});

	it('has a prefix of 649 and a length of 16', function() {
		assert(detectNetwork('6491948537317851') === 'Discover');
	});

	it('has a prefix of 65 and a length of 16', function() {
		assert(detectNetwork('6511914560626749') === 'Discover');
	});

	it('has a prefix of 6011 and a length of 19', function() {
		assert(detectNetwork('6011862030801082266') === 'Discover');
	});

	it('has a prefix of 644 and a length of 19', function() {
		assert(detectNetwork('6447422234443994025') === 'Discover');
	});

	it('has a prefix of 645 and a length of 19', function() {
		assert(detectNetwork('6454604488809012460') === 'Discover');
	});

	it('has a prefix of 646 and a length of 19', function() {
		assert(detectNetwork('6460210415198926775') === 'Discover');
	});

	it('has a prefix of 647 and a length of 19', function() {
		assert(detectNetwork('6473645167753494732') === 'Discover');
	});

	it('has a prefix of 648 and a length of 19', function() {
		assert(detectNetwork('6485562848977134054') === 'Discover');
	});

	it('has a prefix of 649 and a length of 19', function() {
		assert(detectNetwork('6499875571717520596') === 'Discover');
	});

	it('has a prefix of 65 and a length of 19', function() {
		assert(detectNetwork('6539067324143179589') === 'Discover');
	});

});


