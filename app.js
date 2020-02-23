'use strict';

var CookieStore = function(location, min, max, avgSale) {
  this.location = location;
  this.min = min;
  this.max = max;
  this.avgSale = avgSale;
  this.cookieSimArray = [];
  this.custHourlySim = function() {
      return Math.floor(((Math.random() * (this.max - this.min)) + this.min) * this.avgSale);
  }
}

var stores = new Array();
stores.push(new CookieStore('Seattle', 23, 65, 6.3));
stores.push(new CookieStore('Tokyo', 3, 24, 1.2));
stores.push(new CookieStore('Dubai', 11, 38, 3.7));
stores.push(new CookieStore('Lima', 2, 16, 2.3));
stores.push(new CookieStore('Paris', 20, 38, 2.3));

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


function createTable(element, text, parent, index) {
  var elementName = document.createElement(element);
  var textNode = document.createTextNode(text);
  elementName.appendChild(textNode);
  var elementPosition = document.getElementsByTagName(parent)[index];
  elementPosition.appendChild(elementName);
}


function tableHeader() {
  for (var tableIndex = 0; tableIndex < storeHours.length; tableIndex++) {
      createTable('th', storeHours[tableIndex], 'tr', 0);
  };
  createTable('th', 'Total', 'tr', 0);
}
tableHeader()


for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  cookiesHourly(stores[storeIndex]); 

  function cookiesHourly(store) {
      console.log(stores.length);
      var cookiesTotal = 0; 
      createTable('tr', '', 'tbody', 0);
      createTable('th', store.location, 'tr', storeIndex + 1);

      for (var tableIndex = 0; tableIndex < storeHours.length; tableIndex++) {
          var cookiePurchase = store.custHourlySim(); 
          cookiesTotal += cookiePurchase; 
          createTable('td', cookiePurchase, 'tr', storeIndex + 1); 
          store.cookieSimArray.push(cookiePurchase); 
      }

     
      createTable('th', cookiesTotal, 'tr', storeIndex + 1);
  }
}


function storeList(element, text, className, index) {
  var elementName = document.createElement(element);
  elementName.innerHTML = text
  var elementPosition = document.getElementsByClassName(className)[index];
  elementPosition.appendChild(elementName);
}

for (var storeIndex = 0; storeIndex < stores.length; storeIndex++) {
  var storeLink = "<a href ='#'>" + stores[storeIndex].location + '</a>';
  storeList('li', storeLink, 'submenu', 0); 
}

function evaluateForm(newStoreData) {
  var formIsValid = true;
  if (newStoreData.location.value == '') {
      newStoreData.location.setAttribute('class', 'required');
      formIsValid = false;
  }
  if (newStoreData.min.value == '') {
      newStoreData.min.setAttribute('class', 'required');
      formIsValid = false;
  }
  if (newStoreData.max.value == '') {
      newStoreData.max.setAttribute('class', 'required');
      formIsValid = false;
  }
  if (newStoreData.avgSale.value == '') {
      newStoreData.avgSale.setAttribute('class', 'required');
      formIsValid = false;
  }
  console.log(formIsValid);
  if (formIsValid) {
      stores.push(new CookieStore(newStoreData.location.value, newStoreData.min.value, newStoreData.max.value, newStoreData.avgSale.value));
      cookiesHourly(stores[stores.length - 1]);
      var storeLink = "<a href ='#'>" + stores[stores.length - 1].location + '</a>';
      storeList('li', storeLink, 'submenu', 0);
      document.getElementById('myForm').reset();
      storeIndex = stores.length
      window.scrollTo(0, 0);
      var resetClass = document.querySelectorAll('input.required');
      console.log(resetClass);
      if (resetClass.length > 0) {
          for (var i = 0; i < resetClass.length; i++) {
              console.log(i, resetClass[i]);
              resetClass[i].classList.remove('required');
          }
      }
  }
}