// exercise - extend the functionality of a built in object

// #1
// Date object => to have new method .lastYear() which shows you last year in 'YYYY' format.

// what would this method look like?
// extract year and then subtract 1 and return? 

//currentYear = new Date()
//lastYear = currentYear.getFullYear() - 1 //returns the correct result!

// so how do we add a method to an existing object? let's try this:
// All I needed to do was add the prototype keyword!
Date.prototype.lastYear = function () {
  currentYear = new Date();
  return currentYear.getFullYear() - 1;
}
// Now I understand! My method only uses the current date it doesn't accept other dates. Using the 'this' keyword fixes that issue as used below:

// Andrei's solution:
Date.prototype.lastYear2 = function() {
  return this.getFullYear() -1;
}

// much more readable solution. Are there perfomance differences here?

// new Date('1900-10-10').lastYear2()

// should return '1899'


// #Bonus
// Modify .map() to print '🗺️' at the end of each item.

// how do we accomplish this? we're adding an automatic item to each item in an array..... This time we only want to have to call map() so we are not adding a method. so we're altering the basic functionality of the map method....

// Andrei's solution:
Array.prototype.map = function() {
  let arr = [];
  for(let i = 0; i < this.length; i++) {
    arr.push((this[i] + '🗺️'))
  }
  return arr
}
// for some reason this isn't working.... nevermind, works in console but not is repl.it. 


console.log([1, 2, 3].map())
// should return 1🗺️, 2🗺️, 3🗺️