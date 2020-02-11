


var seattleStore = {
  name: 'Seattle Store',
  minCust: 23,
  maxCust: 65,
  avgCookie: 6.3,

}

var tokyoStore = {
  name: 'Tokyo Store',
  minCust: 3,
  maxCust: 24,
  avgCookie: 1.2,

}

var dubaiStore = {
  name: 'Dubai Store',
  minCust: 11,
  maxCust: 38,
  avgCookie: 3.7,

}

var parisStore = {
  name: 'Paris Store',
  minCust: 20,
  maxCust: 38,
  avgCookie: 2.3,
}



var limaStore = {
  name: 'Lima Store',
  minCust: 2,
  maxCust: 16,
  avgCookie: 4.6,
}

 
var stores = [seattleStore, tokyoStore, dubaiStore, parisStore, limaStore];

var hours = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function calculateCookies (stores){
  var cookiesPerHour = [];
  for (var i = 0; i < hours.length; i++){
    var testNumber = getRandomCut(stores.minCust, stores.maxCust);
    var answ = Math.floor(testNumber * stores.avgCookie);
    console.log(hours[i], "o'clock: ", answ, "cookies sold");

    cookiesPerHour.push(answ);
    console.log(cookiesPerHour);
  }
  stores.cookiesPerHour = cookiesPerHour;
}

seattleStore.cookiesPerHour = calculateCookies(seattleStore);
