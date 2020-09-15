// pommander installed
/* eslint-disable comma-dangle */
/* eslint-disable no-var */
// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

  // For type safety, this is convient. Some of my tests do pass numbers.
  cardNumber = cardNumber.toString();

  var data = {
    'American Express': {
      prefixes: ['34', '37'],
      lengths: [15]
    },
    'Diner\'s Club': {
      prefixes: ['38', '39'],
      lengths: [14]
    },
    'Visa': {
      prefixes: ['4'],
      lengths: [13, 16, 19]
    },
    'MasterCard': {
      prefixes: ['51', '52', '53', '54', '55'],
      lengths: [16]
    },
    'Discover': {
      prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
      lengths: [16, 19]
    },
    'Maestro': {
      prefixes: ['5018', '5020', '5038', '6304'],
      lengths: [12, 13, 14, 15, 16, 17, 18, 19]
    },
    'China UnionPay': {
      prefixes: getPrefixesFromRanges([ [622126, 622925], [624, 626], [6282, 6288] ]),
      lengths: [16, 17, 18, 19]
    },
    'Switch': {
      prefixes: ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
      lengths: [16, 18, 19]
    }
  }

  // find which networks are possible matches (candidates)
  // the candidates array datastructure:
  //  [ [network] , prefixes[i] ]
  //  [ [string], [string] ]
  var candidates = [];
  for (var network in data) {
    if (data[network].lengths.includes(cardNumber.length)) {
      var prefixes = data[network].prefixes;
      for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] === cardNumber.slice(0, prefixes[i].length)) {
          candidates.push( [ network, prefixes[i].length ] );
        }
      }
    }
  }

  // when there are multiple candidates, return the one with a longer prefix
  if (candidates.length === 0) {
    return undefined;
  } else if (candidates.length === 1) {
    return candidates[0][0];
  } else {
      var longestMatch = candidates[0];
      for (var i = 1; i < candidates.length; i++) {
        if (longestMatch[1] < candidates[i][1]) {
          longestMatch = candidates[i];
        }
      }
      return longestMatch[0];
  }

/*
  } else {
    var longestMatch = candidates[0][1];
    for (var i=0; i < candidates[0].prefixes.length; i++) {
      if (longestMatch[1] < candidates[i][1]) {
        longestMatch = candidates[i];
      }
    }
    return longestMatch[0];
  }
*/
};

/**
 * @param [array] ranges, any number of pairs of numbers or single numbers,
 *  as arrays of length 2 or 1 each.
 * @returns [array] prefixes
 */
function getPrefixesFromRanges(ranges) {
  // for every range in ranges, create an array
  // with all the numbers in that range.
  return ranges.map(function(range) {
    var res = [];
    for (var i = range[0]; i < range[1] + 1; i++) {
      res.push(i.toString());
    }
    return res;
  }).flat();
}

/**
console.log(detectNetwork('38345678901234')); 	// (Diner's Club)
console.log(detectNetwork('39345678901234')); 	//  (Diner's Club)
console.log(detectNetwork('343456789012345')); 	//  (American Express)
console.log(detectNetwork('373456789012345')); 	//  (American Express)
console.log(detectNetwork('4123456789012')); 	//  (Visa)
console.log(detectNetwork('4123456789012345')); //  (Visa)
console.log(detectNetwork('4123456789012345678')); //  (Visa)
console.log(detectNetwork('5112345678901234')); //  (MasterCard)
console.log(detectNetwork('5212345678901234')); //  (MasterCard)
console.log(detectNetwork('5312345678901234')); //  (MasterCard)
console.log(detectNetwork('5412345678901234')); //  (MasterCard)
console.log(detectNetwork('5512345678901234')); //  (MasterCard)
 */