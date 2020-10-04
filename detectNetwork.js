let Network = class {

  constructor(name, prefixes, lengths) {
    this.name = name;
    this.prefixes = prefixes.sort((a, b) => a.length - b.length);
    this.lengths = lengths;
  };

  lengthInNetwork(length) {
    return this.lengths.includes(length);
  };

  getMatchLength(cardNumber) {
    return this.prefixes.reduce(function(matchLength, prefix) {
      if (prefix === cardNumber.slice(0, prefix.length)) {
        matchLength = prefix.length > matchLength ? prefix.length : matchLength;
      }
      return matchLength;
    }, 0);
  };

  getMatchPriority(cardNumber) {
    var matchLength = this.getMatchLength(cardNumber);
    if (matchLength && this.lengthInNetwork(cardNumber.length)) {
      return matchLength;
    } else {
      return 0;
    }
  };

}

let BigNetwork = class extends Network {

  constructor(name, prefixes, lengths) {
    super(name, prefixes, lengths);
    this.prefixes = prefixes.sort(function(a, b) {
      if (Array.isArray(a) && Array.isArray(b)) {
        return a[0] - b[0];
      }
      if (Array.isArray(a)) {
        return 1;
      }
      if (Array.isArray(b)) {
        return -1;
      }
      return a.length - b.length;
    });
  }

  getMatchPriority(cardNumber) {
    return this.prefixes.reduce(function(matchLength, prefix) {
      if (Array.isArray(prefix)) {
        var localMatch = 0;
        for (var p = prefix[0]; p <= prefix[1]; p++) {
          var pStr = p.toString();
          if (pStr === cardNumber.slice(0, pStr.length)) {
            localMatch = localMatch < pStr.length ? pStr.length : localMatch;
          }
        }
        return matchLength < localMatch ? localMatch : matchLength;
      } else {
        if (prefix === cardNumber.slice(0, prefix.length)) {
          matchLength = prefix.length > matchLength ? prefix.length : matchLength;
        }
          return matchLength;
        }
    }, 0);
  }

}

let Card = class {
  constructor(cardNumber) {
    this.number = cardNumber;
    this.matchData = this.getMatchData();
    this.network = this.getBestMatch();
  }

  getMatchData() {
    var matchData = {}
    // for each provider in networks,
    //  add an object to matchData, {provider: priority}
    for (var provider in networks) {
      matchData[provider] = networks[provider].getMatchPriority(this.number);
    }
    return matchData;
  }

  getBestMatch() {
    var network = '';
    var highPriority = 0;
    for (var provider in this.matchData) {
      if (highPriority < this.matchData[provider]) {
        highPriority = this.matchData[provider];
        network = provider;
      }
    }
    return network;
  }

}

var networks = {

  'American Express': new Network('American Express',
    ['34', '37'],
    [15]),

  'Diner\'s Club': new Network('Diner\s Club',
    ['38', '39'],
    [14]),

  'Visa': new Network('Visa',
    ['4'],
    [13, 16, 19]),

  'MasterCard': new Network('MasterCard',
    ['51', '52', '53', '54', '55'],
    [16]),

  'Maestro': new Network('Maestro',
    ['5018', '5020', '5038', '6304'],
    [12, 13, 14, 15, 16, 17, 18, 19]),

  'Discover': new Network('Discover',
    ['6011', '644', '645', '646', '647', '648', '649', '65'],
    [16, 19]),

  'China UnionPay': new BigNetwork('China UnionPay',
    [[624, 626], [6282, 6288], [622126, 622925]],
    [16, 17, 18, 19]),

  'Switch': new Network('Switch',
    ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'],
    [16, 18, 19]),

}

function detectNetwork(cardNumber) {
  var card = new Card(cardNumber);
  return card.network;
}