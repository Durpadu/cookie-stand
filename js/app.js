'use strict';

// I'll have an array of miles hiked each month
// Also, an array of the months
// Goal: list item of each month, and how many miles I hiked in that month
// Do it all from JS, not hard-coded in HTML

// working with the DOM - document object model

// var months = ['May', 'June', 'July', 'August', 'September'];

// var twoThousandEighteen = {
//   miles: [54, 12, 9000, 8, 52],

//   render: function() {
//     var ulElement = document.getElementById('list2018');

//     // Goal: create list items and add them to the DOM

//     for(var i = 0; i < this.miles.length; i++) {
//       // 1. Access / create the element
//       var liElement = document.createElement('li');

//       // 2. Give the element content
//       liElement.textContent = `In ${months[i]}, I hiked ${this.miles[i]} miles.`;

//       // 3. Append the element to the DOM (usually to its parent)
//       // parentElement.appendChild(childElement);

//       ulElement.appendChild(liElement);
//     }
//   }
// };

// var months = ['May', 'June', 'July', 'August', 'September'];

// var twoThousandSeventeen = {
//   miles: [5, 32, 9, 80, 5],

//   render: function() {
//     var ulElement = document.getElementById('list2017');

//     for(var i = 0; i < this.miles.length; i++) {

//       var liElement = document.createElement('li');

//       liElement.textContent = `In ${months[i]}, I hiked ${this.miles[i]} miles.`;

//       ulElement.appendChild(liElement);
//     }
//   }
// };
// twoThousandEighteen.render();
// twoThousandSeventeen.render();



var storetimes = [ '6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm' ];

var cookieTotal = 0;

var pikePlace = {
  minCust: 23,
  maxCust: 65,
  aveCookieCust: 6.3,

  randomCustomer: function() {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    return Math.floor( Math.random() * (max-min) ) + min;
  },

  hourCust: function() {
    return Math.round( this.randomCustomer() * this.aveCookieCust) ;
  }

  cookieList: function() {
    var ulElement = document.getElementById('pike-place-cookies');
    var cookieTotal = 0;
    for(var i = 0; i < storetimes.length; i++) {
      var liElement = document.createElement('li'),
      var randomNum = this.hourCust();

      cookieTotal += randomNum;

      liElement.textContent = `At ${storeTimes[i]}, ${randomNum} cookies were sold.`;
      ulElement.appendChild(liElement);
    }

    var totalEl = document.createElement('li');
    totalEl.textContent =` Daily total: ${cookieTotal}`;
    ulElement.appendChile(totalEl);

  }

  // cookieCount = randomCustomer * 6.3,

  

  // for(var i = 0; i < storetimes.length; i++) {
  //   var liElement = document.createElement('li'),
  //   liElement.textContent = `At ${storeTimes[i]}, ${cookieCount} cookies were sold.`;
  //   ulElement.appendChild(liElement);
  // },
   
  // cookieTotal++
};

var seaTac = {
  minCust: 3,
  maxCust: 24,

  randomCustomer: function() {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);

    return Math.floor(Math.random() * (max-min)) + min;    
  }

};

var seaCenter = {
  minCust: 11,
  maxCust: 38,

  randomCustomer: function() {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max-min)) + min;    
  }

};


var capHill = {
  minCust: 20,
  maxCust: 38,

  randomCustomer: function() {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max-min)) + min;    
  }

};


var alkiStore = {
  minCust: 2,
  maxCust: 16,

  randomCustomer: function() {
    var min= Math.ceil(this.minCust);
    var max= Math.floor(this.maxCust);
    return Math.floor(Math.random() * (max-min)) + min;    
  }

};

// HTML as an object literam aka the DOM:
// html {
//   head: {
//     title: 'DOM demo',
//     link: filepath to CSS file
//   },
//   body: {
//     h1: 'Allie\'s Miles Hiked',
//     ul: {
//       li: 'some content'
//       li: 'some content'
//       li: 'some content'
//       li: 'some content'
//       li: 'some content'
//     },
//     script: link to JS file
//   }
// }
