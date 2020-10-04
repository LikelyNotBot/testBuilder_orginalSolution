// var FILL_ME_IN = 'Fill this value in';

// describe('Diner\'s Club', function() {

//   it('has a prefix of 38 and a length of 14', function() {

//     if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
//       throw new Error('Test failed');
//     }
//   });

//   it('has a prefix of 39 and a length of 14', function() {
//     if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
//       throw new Error('Test failed');
//     }

//   });
// });

// describe('American Express', function() {
//   var assert = function(isTrue) {
//     if(!isTrue) {
//       throw new Error('Test failed');
//     }
//   };

//   it('has a prefix of 34 and a length of 15', function() {
//     assert(detectNetwork('343456789012345') === 'American Express');
//   });

//   it('has a prefix of 37 and a length of 15', function() {
//     assert(detectNetwork('373456789012345') === 'American Express');
//   });
// });

// describe('Visa', function() {
//   // Chai is an entire library of helper functions for tests!
//   // Chai provides an assert that acts the same as our previous assert.
//   // Search the documentation to figure out how to access it.
//   //   http://chaijs.com/
//   var assert = chai.assert;

//   it('has a prefix of 4 and a length of 13', function() {
//     assert(detectNetwork('4123456789012') === 'Visa');
//   });

//   it('has a prefix of 4 and a length of 16', function() {
//     assert(detectNetwork('4123456789012345') === 'Visa');
//   });

//   it('has a prefix of 4 and a length of 19', function() {
//     assert(detectNetwork('4123456789012345678') === 'Visa');
//   });
// });

// describe('MasterCard', function() {
//   // Chai lets you write more human-readable tests that throw helpful errors.
//   // Expect syntax is one way to do this, but there are others.
//   // If you want to know more, check out the documentation.
//   //   http://chaijs.com/api/bdd/
//   var expect = chai.expect;

//   it('has a prefix of 51 and a length of 16', function() {
//     expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
//   });

//   it('has a prefix of 52 and a length of 16', function() {
//     expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
//   });

//   it('has a prefix of 53 and a length of 16', function() {
//     expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
//   });


//   // You can also use should instead of expect, which changes the style
//   // slightly. It really doesn't matter which one you use - check out
//   // http://chaijs.com/guide/styles/ for more info, but it's important
//   // to be consistent (unlike in this file, where we use BOTH expect
//   // and should, but that's just for learning), so once you've gotten
//   // these tests to pass using should syntax, refactor your tests to
//   // use either expect or should, but not both.
//   var should = chai.should();

//   it('has a prefix of 54 and a length of 16', function() {
//     detectNetwork('5412345678901234').should.equal('MasterCard');
//   });

//   it('has a prefix of 55 and a length of 16', function() {
//     detectNetwork('5512345678901234').should.equal('MasterCard');
//   })

// });

// describe('Discover', function() {
//   var should = chai.should();
//   it('has a prefix of 6011 and a length of 16', function() {
//     detectNetwork('6011567890123456').should.equal('Discover')
//   });
//   it('has a prefix of 6011 and a length of 19', function(){
//     detectNetwork('6011567890123456789').should.equal('Discover')
//   });
// });

/**
 * @param {number} max
 * @returns {number}, an integer n where: 0 <= n < max
 */
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

/**
 * @param {string} prefix
 * @param {number} length
 * @returns {string} cardNumber, begins with prefix and is length chars long
 */
function generateCardNumber(prefix, length) {
  var cardNumber = prefix;
  while (cardNumber.length < length) {
    cardNumber += getRandomInt(10);
  }
  return cardNumber;
}

function describeProvider(provider) {
  describe(provider, function() {
    var expect = chai.expect;
    networks[provider].prefixes.forEach(prefix => {
      networks[provider].lengths.forEach(length => {
        if (Array.isArray(prefix)) {
          for (var p = prefix[0]; p <= prefix[1]; p++) {
            let pStr = p.toString();
            it(`has a prefix of ${pStr} and a length of ${length}`, function() {
              expect(detectNetwork(generateCardNumber(pStr, length))).to.equal(provider);
            });
            }
        } else {
          it(`has a prefix of ${prefix} and a length of ${length}`, function() {
            expect(detectNetwork(generateCardNumber(prefix, length))).to.equal(provider);
          });
        }
      });
    });
  });
}

function testWholeNetwork() {
  for (const provider in networks) {
    describeProvider(provider);
  }
}

testWholeNetwork();


