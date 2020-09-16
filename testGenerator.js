/*
 * Diner's Club needs to be edited by hand in the output doc,
 * to deal with the comma in its name. As long as Diner's Club is
 * the only one like that, I'm fine with it.
 */

var data = [ // MAINTAN THIS up-to-date with detectNetwork.js
  { name: 'American Express', prefixes: ['34', '37'], lengths: [15]},
  { name: `Diner's Club`, prefixes: ['38', '39'], lengths: [14]},
  { name: 'Visa', prefixes: ['4'], lengths: [13, 16, 19]},
  { name: 'MasterCard', prefixes: ['51', '52', '53', '54', '55'], lengths: [16]},
  { name: 'Maestro',
    prefixes: ['5018', '5020', '5038', '6304'],
    lengths: [12, 13, 14, 15, 16, 17, 18, 19]
  }
];

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

/**
 * @param {string} name
 * @param {string} prefix
 * @param {number} length
 * @returns {string} itTest, a flat list of js code
 */
function generateItTest(name, prefix, length) {
  var cardNumber = generateCardNumber(prefix, length);
  return `it('has a prefix of ${prefix} and a length of ${length}', function() {\n  assert(detectNetwork('${cardNumber}') === '${name}');\n});`
}

/**
 * @param {string} name
 * @param {string} prefix
 * @param {number} length
 * @returns {array} itTest, an array of js code strings
 */
function generateItTest(name, prefix, length) {
  var cardNumber = generateCardNumber(prefix, length);
  return [`it('has a prefix of ${prefix} and a length of ${length}', function() {`,
          `assert(detectNetwork('${cardNumber}') === '${name}');`,
          `});`];
}

/**
 * @param {Object} network
 * @returns {string} describeTest, a flat list of js code
 */
function generateDescribeTest(network) {
  var name = network.name;
  var describeTest = '';
  describeTest += `describe('${name}', function() {` + `\n`;
  describeTest += `\n`;
  describeTest += `\t` + `var assert = chai.assert;` + `\n`;
  describeTest += `\n`;
  for (var i = 0; i < network.lengths.length; i++) {
    var length = network.lengths[i];
    for (var j = 0; j < network.prefixes.length; j++) {
      var prefix = network.prefixes[j];
      var itTest = generateItTest(name, prefix, length);
      describeTest += `\t` + itTest[0] + `\n`;
      describeTest += `\t` + `\t` + itTest[1] + `\n`;
      describeTest += `\t` + itTest[2] + `\n`;
      describeTest += `\n`;
    }
  }
  describeTest += `});` + `\n`;
  return describeTest;
}

function generateDocument() {
  var document = '';
  /**
   * for each network in the data,
   *   Generate a describe test to cover that network.
   *   Add that describe test to res.
   */
  document += `// mochajs.org` + `\n`;
  document += `// http://chaijs.com/` + `\n`;
  document += `\n`;
  for (var i = 0; i < data.length; i++) {
    var network = data[i];
    var describeTest = generateDescribeTest(network);
    document += describeTest;
    document += `\n`;
  }
  return document;
}

console.log(generateDocument());