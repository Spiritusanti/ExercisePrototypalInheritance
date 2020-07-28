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
  return currentYear.getFullYear() - 1
}
new Date('1900-10-10').lastYear()

// should return '1899'


// #Bonus
// Modify .map() to print '🗺️' at the end of each item.


// console.log([1, 2, 3].map())
// should return 1🗺️, 2🗺️, 3🗺️