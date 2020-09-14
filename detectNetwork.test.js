/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/**
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail.
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out.
  // You will not be able to proceed with a failing test.

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

describe('Diner\'s Club', function() {
  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901423') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true.
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }

  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('371234566781234') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it.
  //   http://chaijs.com/
  var assert = chai.assert;

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others.
  // If you want to know more, check out the documentation.
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;

  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 54 and a length of 16', function() {
   // detectNetwork('5412345678901234').should.equal('MasterCard');
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });

  it('has a prefix of 55 and a length of 16', function() {
    //detectNetwork('5512345678901234').should.equal('MasterCard');
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run

  var expect = chai.expect;

  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011775761208311')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011639161084041294')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    expect(detectNetwork('6443652483190253')).to.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() {
    expect(detectNetwork('6440050943488196776')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    expect(detectNetwork('6458709994606549')).to.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() {
    expect(detectNetwork('6458075888643679596')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 16', function() {
    expect(detectNetwork('6463955434285611')).to.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() {
    expect(detectNetwork('6462435066015834645')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    expect(detectNetwork('6476179453079092')).to.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() {
    expect(detectNetwork('6472821843534688174')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    expect(detectNetwork('6488116554110899')).to.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() {
    expect(detectNetwork('6481645264411766933')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 16', function() {
    expect(detectNetwork('6492512051491720')).to.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() {
    expect(detectNetwork('6497932637545627368')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6506190430142625')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6584240658336402475')).to.equal('Discover');
  });
});

describe('Maestro', function() {

  var expect = chai.expect;

  it('has a prefix of 5018 and a length of 12', function() {
    expect(detectNetwork(501804747021)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 13', function() {
    expect(detectNetwork(5018784020503)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 14', function() {
    expect(detectNetwork(50181357149196)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 15', function() {
    expect(detectNetwork(501862231221806)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 16', function() {
    expect(detectNetwork(5018062455860247)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 17', function() {
    expect(detectNetwork(50189854321991557)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 18', function() {
    expect(detectNetwork(501866600102573379)).to.equal('Maestro');
   });

   it('has a prefix of 5018 and a length of 19', function() {
    expect(detectNetwork(5018968389579846325)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 12', function() {
    expect(detectNetwork(502019823608)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 13', function() {
    expect(detectNetwork(5020036654640)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 14', function() {
    expect(detectNetwork(50205935187131)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 15', function() {
    expect(detectNetwork(502094322934216)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 16', function() {
    expect(detectNetwork(5020281129284823)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 17', function() {
    expect(detectNetwork(50209520846401884)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 18', function() {
    expect(detectNetwork(502006775566132334)).to.equal('Maestro');
   });

   it('has a prefix of 5020 and a length of 19', function() {
    expect(detectNetwork(5020187296384922506)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 12', function() {
    expect(detectNetwork(503822886662)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 13', function() {
    expect(detectNetwork(5038102594830)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 14', function() {
    expect(detectNetwork(50384404151731)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 15', function() {
    expect(detectNetwork(503835037912443)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 16', function() {
    expect(detectNetwork(5038905682779659)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 17', function() {
    expect(detectNetwork(50382475186710967)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 18', function() {
    expect(detectNetwork(503850240429493964)).to.equal('Maestro');
   });

   it('has a prefix of 5038 and a length of 19', function() {
    expect(detectNetwork(5038926782923517080)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 12', function() {
    expect(detectNetwork(630440891415)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 13', function() {
    expect(detectNetwork(6304994063349)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 14', function() {
    expect(detectNetwork(63044246378715)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 15', function() {
    expect(detectNetwork(630441477861513)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 16', function() {
    expect(detectNetwork(6304038030606233)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 17', function() {
    expect(detectNetwork(63043447306953972)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 18', function() {
    expect(detectNetwork(630477834053214252)).to.equal('Maestro');
   });

   it('has a prefix of 6304 and a length of 19', function() {
    expect(detectNetwork(6304304939492264572)).to.equal('Maestro');
   });
});