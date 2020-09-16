var data = [
  { name: 'American Express', prefixes: ['34', '37'], lengths: [15]},
  { name: 'Diner\'s Club', prefixes: ['38', '39'], lengths: [14]},
  { name: 'Visa', prefixes: ['4'], lengths: [13, 16, 19]},
  { name: 'MasterCard', prefixes: ['51', '52', '53', '54', '55'], lengths: [16]},
  { name: 'Maestro',
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  },
  { name: 'Discover',
    prefixes: ['6011', '644', '645', '646', '647', '648', '649', '65'],
    lengths: [16, 19]
  }
];

function detectNetwork(cardNumber) {
  // for every one of the networks in data[]:
  //   if the cardNumber is of a length which may be in that network:
  //     if the cardNumber begins with a prefix which is in that network:
  //       if the length of that prefix is longer than the length of any other
  //       prefix which has so far matched that cardNumber:
  //         result <--- network.name, maxLength <---
  var result = '';
  var maxLength = 0;
  for (var i = 0; i < data.length; i++) {
    var network = data[i];
    if (network.lengths.includes(cardNumber.length)) {
      for (var j = 0; j < network.prefixes.length; j++) {
        var prefix = network.prefixes[j];
        if (prefix === cardNumber.slice(0, prefix.length)) {
          if (maxLength < prefix.length) {
            result = network.name;
            maxLength = prefix.length;
          }
        }
      }
    }
  }
  return result;
}