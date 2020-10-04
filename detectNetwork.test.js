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


