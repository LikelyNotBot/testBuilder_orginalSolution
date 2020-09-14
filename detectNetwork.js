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
    }
  }

  for (var network in data) {
    if (data[network].lengths.includes(cardNumber.length)) {
      var prefixes = data[network].prefixes;
      for (var i = 0; i < prefixes.length; i++) {
        if (prefixes[i] === cardNumber.slice(0, prefixes[i].length)) {
          return network;
        }
      }
    }
  }

  return undefined;
};

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