

function Location (name, mincust, maxcust, avgcookie) {
  this.name = name;
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgcookie = avgcookie;
}

var Seattle = new Location ('Seattle', 23, 65, 6.3);

var Tokyo = new Location ('Tokyo', 3, 24, 1.2);

var Dubai = new Location ('Dubai', 11, 38, 3.7);

var Paris = new Location ('Paris', 20, 38, 2.3);

var Lima = new Location ('Lima', 2, 16, 4.6);

function createTableRow (text){
  var th = document.createElement('th')
  th.textContent = text;
  return th;
}

function appendChildren (parent, children){
  children.array.forEach(function (child){
    parent.appendChild((child));
    });
  }

var getHours = document.getElementById('creatTableRow')

var hours = [
  createTableRow('6am'),
  createTableRow('7am'),
  createTableRow('8am'),
]
 appendChildren(getHours, hours);

 var getLocations = document.getElementById('creatTableRow')

var locations = [
  createTableRow('Seattle'),
  createTableRow('Tokyo'),
  createTableRow('Dubai'),
  createTableRow('Paris'),
  createTableRow('Lima'),
]
 appendChildren(getLocations, locations);

 var getcustomers = document.getElementById('creatTableRow')

var customers = [
  createTableRow('Max Customers'),
  createTableRow('Min Customers'),
  createTableRow('Avg Customers'),
]
 appendChildren(getcustomers, customers);