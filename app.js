


var seattleStore = {
  name: 'Seattle Store',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,
 

randomCust: function() {
  Math.floor((Math.random() * 65) + 1)
  }
}

var tokyoStore = {
  name: 'Tokyo Store',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,


randomCust: function() {
  Math.floor((Math.random() * 24) + 1)
  } 
}

var dubaiStore = {
  name: 'Dubai Store',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,


randomCust: function() {
  Math.floor((Math.random() * 38) + 1)
  }
}

var parisStore = {
  name: 'Paris Store',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,


randomCust: function() {
  Math.floor((Math.random() * 38) + 1)
  }
}

var limaStore = {
  name: 'Lima Store',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
}

 
var stores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9];

